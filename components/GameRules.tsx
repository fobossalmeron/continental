import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const rounds = [
  { round: "1ª", combination: "Dos tercias", cards: 7 },
  { round: "2ª", combination: "Una tercia y una escalera", cards: 8 },
  { round: "3ª", combination: "Dos escaleras", cards: 9 },
  { round: "4ª", combination: "Tres tercias", cards: 10 },
  { round: "5ª", combination: "Dos tercias y una escalera", cards: 11 },
  { round: "6ª", combination: "Una tercia y dos escaleras", cards: 12 },
  { round: "7ª", combination: "Tres escaleras", cards: 13 },
]

const cardValues = [
  { type: "Comodín", value: 50 },
  { type: "As", value: 20 },
  { type: "Figuras (Rey, Reina, Joto)", value: 10 },
  { type: "Cartas numéricas (10-2)", value: "Valor de la carta" },
]

export function GameRules() {
  return (
    <div className="w-full text-gray-500">
      <div className="container mx-auto py-8 px-4">
        <div className="bg-gray-50 sm:p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="w-full overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Combinaciones por ronda</h3>
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
                      <TableCell className="text-right">{round.cards}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="w-full overflow-x-auto">
              <h3 className="text-xl font-semibold mb-4">Valor de las cartas</h3>
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
                        {typeof card.value === 'number' ? `${card.value} puntos` : card.value}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 