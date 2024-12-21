"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { GameState } from '@/types/game';

interface ScoreTableProps {
  gameState: GameState;
  onUpdateScore: (roundId: string, playerId: string, score: number) => void;
  getPlayerTotal: (playerId: string) => number;
}

export function ScoreTable({ gameState, onUpdateScore, getPlayerTotal }: ScoreTableProps) {
  return (
    <div className="rounded-md border">
      <div className="overflow-auto">
        <div className="sticky top-0 bg-background z-50">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Ronda</TableHead>
                {gameState.players.map((player) => (
                  <TableHead key={player.id} className="min-w-[120px]">
                    {player.name}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
          </Table>
        </div>
        <Table>
          <TableBody>
            {gameState.rounds.map((round, index) => (
              <TableRow key={round.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                {gameState.players.map((player) => (
                  <TableCell key={player.id} className="min-w-[120px]">
                    <Input
                      type="number"
                      value={round.scores[player.id] || ''}
                      onChange={(e) =>
                        onUpdateScore(round.id, player.id, parseInt(e.target.value) || 0)
                      }
                      className="w-20 text-base"
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
            <TableRow className="bg-muted/50">
              <TableCell className="font-medium">Total</TableCell>
              {gameState.players.map((player) => (
                <TableCell key={player.id} className="font-bold min-w-[120px]">
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