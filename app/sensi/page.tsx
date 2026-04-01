"use client"

import Link from "next/link"
import { ArrowLeft, Target, Copy, Check, Smartphone, Tablet, Zap, Crosshair, Shield } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const deviceCategories = [
  {
    id: "gama-alta",
    title: "Gama Alta",
    subtitle: "iPhone 13/14/15, Samsung S23/S24, Xiaomi 13 Ultra",
    icon: Zap,
    color: "cyan",
    description: "Estos telefonos tienen una respuesta tactil muy rapida, por lo que no siempre necesitas llegar a 200 para tener control.",
    settings: {
      general: "185 - 195",
      puntoRojo: "170",
      mira2x: "160",
      mira4x: "155",
      francotirador: "80",
      botonDisparo: "45% - 50%",
      dpi: "No es necesario (puedes dejar el de fabrica)"
    }
  },
  {
    id: "gama-media",
    title: "Gama Media",
    subtitle: "Xiaomi Redmi Note 12/13, Samsung A54, Motorola Edge",
    icon: Smartphone,
    color: "purple",
    description: "Equilibrio entre fluidez y precision. Aqui el 200 ayuda mucho en el movimiento general.",
    settings: {
      general: "200",
      puntoRojo: "185",
      mira2x: "175",
      mira4x: "170",
      francotirador: "95",
      botonDisparo: "42%",
      dpi: "500 - 550"
    }
  },
  {
    id: "gama-baja",
    title: "Gama Baja",
    subtitle: "Dispositivos con 2GB - 4GB RAM",
    icon: Shield,
    color: "orange",
    description: "En estos modelos la pantalla suele ser menos sensible al tacto, por lo que el 200 es obligatorio para poder levantar mira.",
    settings: {
      general: "200",
      puntoRojo: "200",
      mira2x: "190",
      mira4x: "185",
      francotirador: "110",
      botonDisparo: "38% - 40%",
      dpi: "600+"
    }
  },
  {
    id: "tablets",
    title: "Tablets / iPad",
    subtitle: "Pantallas grandes",
    icon: Tablet,
    color: "green",
    description: "Al tener una pantalla mas grande, el recorrido del dedo es mayor, por lo que una sensi muy alta puede ser dificil de controlar.",
    settings: {
      general: "140 - 160",
      puntoRojo: "130",
      mira2x: "125",
      mira4x: "120",
      francotirador: "50",
      botonDisparo: "55% - 60%",
      dpi: "No aplica"
    }
  }
]

const playStyles = [
  { style: "Rush (Cerca)", general: "200", puntoRojo: "190", recomendacion: "Usa boton de disparo bajo en la pantalla." },
  { style: "Precision (Lejos)", general: "175", puntoRojo: "165", recomendacion: "Levanta la mira suavemente, no de golpe." },
  { style: "Versatil", general: "190", puntoRojo: "180", recomendacion: "La mas usada por los creadores de contenido." },
]

const colorClasses: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  cyan: { bg: "bg-cyan-500/20", border: "border-cyan-500/30", text: "text-cyan-400", gradient: "from-cyan-500 via-blue-500 to-cyan-500" },
  purple: { bg: "bg-purple-500/20", border: "border-purple-500/30", text: "text-purple-400", gradient: "from-purple-500 via-pink-500 to-purple-500" },
  orange: { bg: "bg-orange-500/20", border: "border-orange-500/30", text: "text-orange-400", gradient: "from-orange-500 via-red-500 to-orange-500" },
  green: { bg: "bg-green-500/20", border: "border-green-500/30", text: "text-green-400", gradient: "from-green-500 via-emerald-500 to-green-500" },
}

export default function SensiPage() {
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const copyToClipboard = (category: typeof deviceCategories[0]) => {
    const text = `${category.title} - ${category.subtitle}
General: ${category.settings.general}
Mira Punto Rojo: ${category.settings.puntoRojo}
Mira 2x: ${category.settings.mira2x}
Mira 4x: ${category.settings.mira4x}
Francotirador: ${category.settings.francotirador}
Boton de disparo: ${category.settings.botonDisparo}
DPI: ${category.settings.dpi}`
    navigator.clipboard.writeText(text)
    setCopiedId(category.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-background to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-cyan-500/5 border border-cyan-500/30 mb-4">
            <Target className="w-10 h-10 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Sensibilidades Update 200
          </h1>
          <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
            Configuraciones optimizadas segun el tipo de dispositivo para maximo rendimiento
          </p>
        </div>

        {/* Device Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {deviceCategories.map((category) => {
            const colors = colorClasses[category.color]
            const IconComponent = category.icon
            return (
              <div key={category.id} className="group relative">
                <div className={`absolute -inset-[1px] rounded-xl bg-gradient-to-r ${colors.gradient} opacity-50 group-hover:opacity-100 transition-opacity animate-border-rgb`} />
                <div className="relative bg-card rounded-xl p-6 h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <IconComponent className={`w-6 h-6 ${colors.text}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                      <p className={`text-sm ${colors.text}`}>{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                    <div className={`px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <span className="text-muted-foreground">General:</span>
                      <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.general}</span>
                    </div>
                    <div className={`px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <span className="text-muted-foreground">Punto Rojo:</span>
                      <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.puntoRojo}</span>
                    </div>
                    <div className={`px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <span className="text-muted-foreground">Mira 2x:</span>
                      <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.mira2x}</span>
                    </div>
                    <div className={`px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <span className="text-muted-foreground">Mira 4x:</span>
                      <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.mira4x}</span>
                    </div>
                    <div className={`px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <span className="text-muted-foreground">Sniper:</span>
                      <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.francotirador}</span>
                    </div>
                    <div className={`px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border`}>
                      <span className="text-muted-foreground">Disparo:</span>
                      <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.botonDisparo}</span>
                    </div>
                  </div>
                  
                  <div className={`text-sm px-3 py-2 rounded-lg ${colors.bg} ${colors.border} border mb-4`}>
                    <span className="text-muted-foreground">DPI Sugerido:</span>
                    <span className={`ml-2 font-bold ${colors.text}`}>{category.settings.dpi}</span>
                  </div>

                  <Button
                    onClick={() => copyToClipboard(category)}
                    variant="outline"
                    className={`w-full ${colors.border} hover:${colors.bg}`}
                  >
                    {copiedId === category.id ? (
                      <>
                        <Check className="w-4 h-4 mr-2 text-green-400" />
                        Copiado
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copiar Configuracion
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Play Styles Summary */}
        <div className="relative">
          <div className="absolute -inset-[1px] rounded-xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 animate-border-rgb" />
          <div className="relative bg-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Crosshair className="w-6 h-6 text-cyan-400" />
              <h2 className="text-2xl font-bold text-foreground">Resumen de Ajustes Clave (Update 200)</h2>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Estilo de Juego</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">General</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Punto Rojo</th>
                    <th className="text-left py-3 px-4 text-muted-foreground font-medium">Recomendacion</th>
                  </tr>
                </thead>
                <tbody>
                  {playStyles.map((item, index) => (
                    <tr key={item.style} className={index !== playStyles.length - 1 ? "border-b border-border/50" : ""}>
                      <td className="py-3 px-4 font-semibold text-foreground">{item.style}</td>
                      <td className="py-3 px-4 text-cyan-400 font-bold">{item.general}</td>
                      <td className="py-3 px-4 text-purple-400 font-bold">{item.puntoRojo}</td>
                      <td className="py-3 px-4 text-muted-foreground">{item.recomendacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
