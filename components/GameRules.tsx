import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const rounds = [
  { round: "1ª", combination: "Dos tercias", cards: 7 },
  { round: "2ª", combination: "Una tercia y una escalera", cards: 8 },
  { round: "3ª", combination: "Dos escaleras", cards: 9 },
  { round: "4ª", combination: "Tres tercias", cards: 10 },
  { round: "5ª", combination: "Dos tercias y una escalera", cards: 11 },
  { round: "6ª", combination: "Una tercia y dos escaleras", cards: 12 },
  { round: "7ª", combination: "Tres escaleras", cards: 13 },
];

const cardValues = [
  { type: "Comodín", value: 50 },
  { type: "As", value: 20 },
  { type: "Figuras (Rey, Reina, Joto)", value: 10 },
  { type: "Cartas numéricas (10-2)", value: "Valor de la carta" },
];

export function GameRules() {
  return (
    <footer className="w-full">
      <div className="container mx-auto px-0 py-8 sm:px-4">
        <h2 className="text-xl font-semibold mb-6">Reglas</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Combinaciones por ronda
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Ronda</TableHead>
                    <TableHead>Combinación</TableHead>
                    <TableHead className="text-right">Cartas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rounds.map((round) => (
                    <TableRow key={round.round}>
                      <TableCell>{round.round}</TableCell>
                      <TableCell>{round.combination}</TableCell>
                      <TableCell className="text-right">
                        {round.cards}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-foreground">
                Valor de las cartas
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table className="w-full">
                <TableHeader>
                  <TableRow>
                    <TableHead>Tipo de carta</TableHead>
                    <TableHead className="text-right">Puntos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cardValues.map((card) => (
                    <TableRow key={card.type}>
                      <TableCell>{card.type}</TableCell>
                      <TableCell className="text-right">
                        {typeof card.value === "number"
                          ? `${card.value} puntos`
                          : card.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
}
