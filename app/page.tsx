"use client";

import { useGameState } from '@/hooks/useGameState';
import { AddPlayer } from '@/components/AddPlayer';
import { ScoreTable } from '@/components/ScoreTable';
import { ResetGameDialog } from '@/components/ResetGameDialog';
import { GameRules } from '@/components/GameRules';

export default function Home() {
  const { gameState, addPlayer, addRound, updateScore, resetGame, getPlayerTotal } = useGameState();

  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-8 px-4 min-h-[800px]">
        <header className="mb-8">
          <h1 className="sm:text-3xl text-2xl font-bold max-w-[350px]">
            Contador de puntos para Continental 🃏
          </h1>
          <p className="text-muted-foreground mt-2">
            Lleva el control de tus partidas sin papel
          </p>
        </header>

        <article className="space-y-8">
          {gameState.rounds.length < 3 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Jugadores</h2>
              <AddPlayer onAddPlayer={addPlayer} />
            </div>
          )}

          <section className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">Rondas</h2>
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
          </section>
        </article>

        <GameRules />
      </div>
    </main>
  );
}