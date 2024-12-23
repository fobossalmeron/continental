"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";
import { Player } from "@/types/game";

interface PlayerScore {
  player: Player;
  total: number;
}

interface GameResultsDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onNewGame: () => void;
  players: Player[];
  getPlayerTotal: (playerId: string) => number;
}

export function GameResultsDialog({
  isOpen,
  onClose,
  onNewGame,
  players,
  getPlayerTotal,
}: GameResultsDialogProps) {
  const playerScores: PlayerScore[] = players
    .map(player => ({
      player,
      total: getPlayerTotal(player.id),
    }))
    .sort((a, b) => a.total - b.total);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-xl">Resultados 🏆</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          {playerScores.map((playerScore, index) => (
            <div
              key={playerScore.player.id}
              className="flex items-center justify-between px-2"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg font-medium">
                  {index + 1}º
                </span>
                <span className="text-lg">
                  {playerScore.player.name}
                </span>
              </div>
              <span className="text-lg font-bold">
                {playerScore.total} pts
              </span>
            </div>
          ))}
        </div>
        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button 
            onClick={onClose} 
            variant="outline"
            size="xlg"
            className="w-full sm:w-auto order-2 sm:order-1"
          >
            Volver
          </Button>
          <Button 
            onClick={onNewGame} 
            variant="default"
            size="xlg"
            className="w-full sm:w-auto order-1 sm:order-2"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Nueva partida
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
} 