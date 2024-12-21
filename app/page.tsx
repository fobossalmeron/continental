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
        <h1 className="sm:text-4xl text-3xl font-bold mb-8">Continental</h1>
        
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Jugadores</h2>
            <AddPlayer onAddPlayer={addPlayer} />
          </div>

          {gameState.players.length > 0 && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold">Rondas</h2>
                <Button onClick={addRound} variant="default">
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Nueva ronda
                </Button>
              </div>

              <ScoreTable
                gameState={gameState}
                onUpdateScore={updateScore}
                getPlayerTotal={getPlayerTotal}
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