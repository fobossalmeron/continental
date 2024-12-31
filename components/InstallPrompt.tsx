'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { AddIcon } from "@/components/icons/AddIcon";
import { Button } from "@/components/ui/button"
import { ShareIcon } from "@/components/icons/ShareIcon";

// Añadimos la interfaz para el evento de instalación
interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showInstallDialog, setShowInstallDialog] = useState(false)

  useEffect(() => {
    // Detectar si es móvil
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Detectar si es iOS
    setIsIOS(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream)
    
    // Verificar si ya está instalada
    setIsStandalone(window.matchMedia('(display-mode: standalone)').matches)

    // Capturar evento beforeinstallprompt para navegadores que lo soportan
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault()
      setDeferredPrompt(e)
    }

    // Verificar inicialmente si es móvil
    checkIsMobile()

    // Escuchar cambios en el tamaño de la ventana
    window.addEventListener('resize', checkIsMobile)
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener)

    // Mostrar el modal después de 10 segundos si no está instalada y es móvil
    const timer = setTimeout(() => {
      if (!isStandalone && isMobile) {
        setShowInstallDialog(true)
      }
    }, 10000)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt as EventListener)
      clearTimeout(timer)
    }
  }, [isStandalone, isMobile])

  const handleInstallClick = async () => {
    if (!deferredPrompt) return

    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice
    console.log(`Usuario ${outcome === 'accepted' ? 'aceptó' : 'rechazó'} la instalación`)
    setDeferredPrompt(null)
    setShowInstallDialog(false)
  }

  // No mostrar nada si ya está instalada o no es móvil
  if (isStandalone || !isMobile) return null

  return (
    <Dialog open={showInstallDialog} onOpenChange={setShowInstallDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>¿Quieres instalar la app?</DialogTitle>
          <DialogDescription>
            {isIOS ? `Sigue estos pasos para instalar la app en tu iOS:` : 'Instala la aplicación para una mejor experiencia'}
          </DialogDescription>
        </DialogHeader>
        
        {isIOS ? (
          <ol className="list-decimal pl-0 space-y-4">
            <li className="flex items-center">
              1. Toca el botón compartir 
              <ShareIcon className="inline-block w-5 h-5 ml-1" />
            </li>
            <li className="flex items-center">
              2. Selecciona "Agregar a inicio" 
              <AddIcon className="inline-block w-5 h-5 ml-1" />
            </li>
          </ol>
        ) : deferredPrompt && (
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t shadow-lg">
            <div className="container mx-auto flex items-center justify-between">
              <div>
                <h3 className="font-semibold">Instalar app</h3>
                <p className="text-sm text-muted-foreground">
                  Agrega la app a tu pantalla de inicio
                </p>
              </div>
              
              <Button 
                onClick={handleInstallClick} 
                variant="outline"
                size="icon"
              >
                <AddIcon className="h-5 w-5" />
                <span className="sr-only">Instalar app</span>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
