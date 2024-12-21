"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserPlus } from 'lucide-react';

interface AddPlayerProps {
  onAddPlayer: (name: string) => void;
}

export function AddPlayer({ onAddPlayer }: AddPlayerProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onAddPlayer(name.trim());
      setName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre del jugador"
        className="max-w-xs text-base"
      />
      <Button type="submit" variant="secondary">
        <UserPlus className="mr-2 h-4 w-4" />
        Agregar
      </Button>
    </form>
  );
}