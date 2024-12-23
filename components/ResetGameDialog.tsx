"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { RefreshCcw } from "lucide-react";

interface ResetGameDialogProps {
  onReset: () => void;
}

export function ResetGameDialog({ onReset }: ResetGameDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="destructive" size="sm" className="mt-4 ml-auto">
          <RefreshCcw className="mr-2 h-4 w-4" />
          Nueva partida
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">¿Estás seguro?</DialogTitle>
          <DialogDescription className="text-base">
            Esta acción no se puede deshacer.<br/> Se perderán todos los jugadores y puntuaciones.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-col gap-2 sm:flex-row">
          <Button 
            onClick={() => {
              onReset();
              setOpen(false);
            }}
            variant="destructive" 
            size="xlg"
            className="w-full sm:w-auto"
          >
            <RefreshCcw className="mr-2 h-4 w-4" />
            Nueva partida
          </Button>
          <Button 
            onClick={() => setOpen(false)}
            variant="default"
            size="xlg" 
            className="w-full sm:w-auto"
          >
            Volver
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}