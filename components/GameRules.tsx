import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { GameState, Player, Round } from "@/types/game";

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
        <h2 className="text-xl font-semibold mb-6">Reglas del Continental</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                Combinaciones por ronda
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Ronda</TableHead>
                    <TableHead>Combinación</TableHead>
                    <TableHead className="text-right">Cartas</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {rounds.map((round) => (
                    <TableRow
                      key={round.round}
                      className="text-muted-foreground"
                    >
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
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                Valor de las cartas
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="hover:bg-transparent">
                    <TableHead>Tipo de carta</TableHead>
                    <TableHead className="text-right">Puntos</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {cardValues.map((card) => (
                    <TableRow key={card.type} className="text-muted-foreground">
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

          <Card>
            <CardHeader className="p-4">
              <CardTitle className="text-lg font-semibold text-foreground">
                ¿Cómo se juega?
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4 text-muted-foreground text-sm">
              <p>
                El objetivo del juego es sumar la menor cantidad de puntos
                posible a lo largo de siete rondas. En cada ronda, los jugadores
                deben cumplir con una combinación específica de cartas para
                poder bajar. Si un jugador no logra bajar, suma los puntos de
                las cartas que le quedan en la mano. El valor de las cartas
                varía según su tipo. Al final de la séptima ronda, el jugador
                con menos puntos acumulados es el ganador.
              </p>
              <p className="mt-4">
                Al inicio de cada ronda, se reparten las cartas indicadas para
                esa ronda en <b>Combinaciones por ronda</b>. Los jugadores, en
                su turno, pueden tomar una carta del mazo o del descarte y luego
                deben descartar una carta. El objetivo es formar las
                combinaciones requeridas (tercias o escaleras) para poder
                "bajar". Bajar significa mostrar las combinaciones completas
                sobre la mesa, cumpliendo exactamente con lo que pide la ronda.
                Una vez que un jugador baja, puede seguir jugando para
                deshacerse de las cartas restantes, ya sea agregándolas a sus
                propias combinaciones o a las de otros jugadores que ya hayan
                bajado.
              </p>
              <p className="mt-2">
                La ronda termina cuando un jugador se queda sin cartas en la
                mano, o cuando ya no es posible continuar. En ese momento, los
                jugadores que no hayan bajado suman los puntos de todas las
                cartas que les quedan. Los que sí bajaron, solo suman los puntos
                de las cartas que no lograron colocar. Tras siete rondas, el
                jugador con menos puntos acumulados es el ganador. Es
                fundamental planear bien cuándo bajar y cómo administrar las
                cartas para evitar acumular puntos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </footer>
  );
}
