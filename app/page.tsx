"use client";

import { useGameState } from '@/hooks/useGameState';
import { AddPlayer } from '@/components/AddPlayer';
import { ScoreTable } from '@/components/ScoreTable';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { ResetGameDialog } from '@/components/ResetGameDialog';

export default function Home() {
  const { gameState, addPlayer, addRound, updateScore, resetGame, getPlayerTotal } = useGameState();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 px-4">
        <h1 className="sm:text-2xl text-2xl font-bold mb-8 max-w-[250px]">Contador de puntos para Continental 🃏</h1>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Jugadores</h2>
            <AddPlayer onAddPlayer={addPlayer} />
          </div>

          {gameState.players.length === 0 ? (
            <div className="text-center p-4 text-gray-500">
              Agrega jugadores para comenzar la partida
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Rondas</h2>
              </div>

              <ScoreTable 
                gameState={gameState}
                updateScore={updateScore}
                getPlayerTotal={getPlayerTotal}
                addRound={addRound}
                resetGame={resetGame}
              />

              <div className="flex justify-center mt-8">
                <ResetGameDialog onReset={resetGame} />
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}