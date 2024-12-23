"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { GameState } from '@/types/game';

interface ScoreTableProps {
  gameState: GameState;
  updateScore: (roundId: string, playerId: string, score: number | null) => void;
  getPlayerTotal: (playerId: string) => number;
}

export function ScoreTable({ gameState, updateScore, getPlayerTotal }: ScoreTableProps) {
  if (gameState.players.length === 0) {
    return (
      <div className="text-center p-4 text-gray-500">
        Agrega jugadores para comenzar la partida
      </div>
    );
  }

  return (
    <div className="rounded-md border">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center w-[80px]">Ronda</TableHead>
              {gameState.players.map((player) => (
                <TableHead key={player.id} className="text-center min-w-[100px] sm:min-w-[120px]">
                  {player.name}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {gameState.rounds.map((round, index) => (
              <TableRow key={round.id}>
                <TableCell className="text-center font-medium">
                  {index + 1}
                </TableCell>
                {gameState.players.map((player) => (
                  <TableCell key={player.id} className="p-0">
                    <div className="flex justify-center p-2">
                      <Input
                        type="number"
                        value={round.scores[player.id] ?? ''}
                        onChange={(e) => {
                          const value = e.target.value === '' ? null : parseInt(e.target.value);
                          updateScore(round.id, player.id, value);
                        }}
                        className="w-16 sm:w-24 text-center"
                      />
                    </div>
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow className="bg-muted/50">
              <TableCell className="text-center font-medium">Total</TableCell>
              {gameState.players.map((player) => (
                <TableCell key={player.id} className="text-center font-bold min-w-[100px] sm:min-w-[120px]">
                  {getPlayerTotal(player.id)}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}