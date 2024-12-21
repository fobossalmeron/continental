"use client";

import { useEffect, useState, useRef } from 'react';
import { GameState, Player, Round } from '@/types/game';

const STORAGE_KEY = 'continental-game-state';

const initialState: GameState = {
  players: [],
  rounds: [],
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(initialState);
  const nextId = useRef(1);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setGameState(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  const addPlayer = (name: string) => {
    const newPlayer: Player = {
      id: String(nextId.current++),
      name,
    };
    setGameState(prev => ({
      ...prev,
      players: [...prev.players, newPlayer],
    }));
  };

  const addRound = () => {
    const newRound: Round = {
      id: String(nextId.current++),
      scores: {},
    };
    setGameState(prev => ({
      ...prev,
      rounds: [...prev.rounds, newRound],
    }));
  };

  const updateScore = (roundId: string, playerId: string, score: number) => {
    setGameState(prev => ({
      ...prev,
      rounds: prev.rounds.map(round =>
        round.id === roundId
          ? {
              ...round,
              scores: {
                ...round.scores,
                [playerId]: score,
              },
            }
          : round
      ),
    }));
  };

  const resetGame = () => {
    setGameState(initialState);
    localStorage.removeItem(STORAGE_KEY);
  };

  const getPlayerTotal = (playerId: string): number => {
    return gameState.rounds.reduce((total, round) => {
      return total + (round.scores[playerId] || 0);
    }, 0);
  };

  return {
    gameState,
    addPlayer,
    addRound,
    updateScore,
    resetGame,
    getPlayerTotal,
  };
}