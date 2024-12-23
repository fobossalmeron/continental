"use client";

import { useEffect, useState } from 'react';
import { GameState, Player, Round } from '@/types/game';

const STORAGE_KEY = 'continental-game-state';

const initialState: GameState = {
  players: [],
  rounds: [],
};

const generateId = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export function useGameState() {
  const [gameState, setGameState] = useState<GameState>(initialState);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        const parsedState = JSON.parse(stored);
        
        // Crear un mapa de IDs viejos a nuevos para los jugadores
        const playerIdMap: { [oldId: string]: string } = {};
        const migratedPlayers = parsedState.players.map((player: Player) => {
          const newId = generateId();
          playerIdMap[player.id] = newId;
          return { ...player, id: newId };
        });

        // Migrar las rondas manteniendo la relación con los scores
        const migratedRounds = parsedState.rounds.map((round: Round) => {
          const newScores: { [key: string]: number | null } = {};
          // Actualizar los IDs de los jugadores en los scores
          Object.entries(round.scores).forEach(([oldPlayerId, score]) => {
            const newPlayerId = playerIdMap[oldPlayerId];
            if (newPlayerId) {
              newScores[newPlayerId] = score;
            }
          });

          return {
            id: generateId(),
            scores: newScores,
          };
        });

        setGameState({
          players: migratedPlayers,
          rounds: migratedRounds,
        });
      } catch (error) {
        console.error('Error al cargar el estado:', error);
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(gameState));
  }, [gameState]);

  const addPlayer = (name: string) => {
    const newPlayer: Player = {
      id: generateId(),
      name,
    };
    setGameState(prev => ({
      ...prev,
      players: [...prev.players, newPlayer],
    }));
  };

  const addRound = () => {
    const newRound: Round = {
      id: generateId(),
      scores: {},
    };
    setGameState(prev => ({
      ...prev,
      rounds: [...prev.rounds, newRound],
    }));
  };

  const updateScore = (roundId: string, playerId: string, score: number | null) => {
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
      const score = round.scores[playerId];
      return total + (score ?? 0);
    }, 0);
  };

  const hasPlayers = (): boolean => {
    return gameState.players.length > 0;
  };

  return {
    gameState,
    addPlayer,
    addRound,
    updateScore,
    resetGame,
    getPlayerTotal,
    hasPlayers,
  };
}