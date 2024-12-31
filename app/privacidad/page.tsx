"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col items-start gap-4 mb-8">
          <Link href="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver
            </Button>
          </Link>
          <h1 className="text-2xl font-semibold">Política de Privacidad</h1>

        </div>

        <div className="space-y-8 max-w-3xl">
          <Card>
            <CardHeader>
              <CardTitle>Información que recopilamos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Esta aplicación utiliza servicios de Google que recopilan datos
                de forma automática:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Google Analytics:</strong> Utilizamos este servicio
                  para entender cómo se usa nuestra aplicación. Recopila
                  información como el tiempo que pasas en la app, las páginas
                  que visitas y datos básicos de tu dispositivo.
                </li>
                <li>
                  <strong>Google AdSense:</strong> Mostramos anuncios
                  personalizados a través de este servicio. Google puede usar
                  cookies para mostrar anuncios basados en tus visitas previas.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Almacenamiento local</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Guardamos los datos de tus partidas en el almacenamiento local
                de tu dispositivo. Esta información no se comparte y permanece
                exclusivamente en tu dispositivo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Más información</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Para entender mejor cómo Google utiliza tus datos, puedes
                visitar:
              </p>
              <Link
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Cómo Google utiliza la información de sitios o apps que usan sus
                servicios
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
