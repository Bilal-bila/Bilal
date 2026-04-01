"use client"

import Link from "next/link"
import { ArrowLeft, Gem, Copy, Check, Fingerprint } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const hudCategories = [
  {
    name: "HUD 2 Dedos",
    description: "Basico / Precision",
    icon: "2",
    color: "from-cyan-500 to-blue-500",
    codes: [
      "#FFHUDT6O3jrVUAWVPo7eM",
      "#FFHUDT6O3JI71AYJPO7EO",
    ],
  },
  {
    name: "HUD 3 Dedos",
    description: "Movilidad / Paredes",
    icon: "3",
    color: "from-purple-500 to-pink-500",
    codes: [
      "#FFHUDV6R9TYU1IOP6L4M2",
      "#FFHUDT7O4krVUBWVQo8fN",
    ],
  },
  {
    name: "HUD 4 Dedos",
    description: "Competitivo / Insano",
    icon: "4",
    color: "from-orange-500 to-red-500",
    codes: [
      "#FFHUDV6R9TYU1IOP6L4M5",
      "#FFHUDT7O4krVUBWVQo9fP",
    ],
  },
]

function CodeCard({ code, color }: { code: string; color: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <div className={`absolute -inset-[1px] rounded-lg bg-gradient-to-r ${color} opacity-30 group-hover:opacity-70 transition-opacity`} />
      <div className="relative flex items-center justify-between gap-3 bg-card/80 backdrop-blur-sm rounded-lg p-3 border border-border/50">
        <code className="text-sm md:text-base font-mono text-foreground break-all">{code}</code>
        <Button
          onClick={handleCopy}
          size="sm"
          variant="ghost"
          className={`shrink-0 transition-all ${copied ? "text-green-400" : "text-muted-foreground hover:text-foreground"}`}
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
        </Button>
      </div>
    </div>
  )
}

export default function HudVipPage() {
  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-background to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/5 border border-purple-500/30 mb-4">
            <Gem className="w-10 h-10 text-purple-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-purple-400 bg-clip-text text-transparent mb-2">
            Hud-Vip
          </h1>
          <p className="text-muted-foreground">HUDs exclusivos y personalizados para destacar en el juego</p>
        </div>

        {/* Master Code List Title */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30">
            <Fingerprint className="w-5 h-5 text-purple-400" />
            <span className="text-lg font-semibold text-foreground">Lista Maestra de Codigos (2026)</span>
          </div>
        </div>

        {/* HUD Categories */}
        <div className="space-y-8">
          {hudCategories.map((category) => (
            <div key={category.name} className="group relative">
              {/* RGB Border */}
              <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-50 group-hover:opacity-100 transition-opacity animate-border-rgb" />
              
              <div className="relative bg-card rounded-2xl p-6 md:p-8">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} text-white font-bold text-2xl shadow-lg`}>
                    {category.icon}
                  </div>
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground">{category.name}</h2>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Codes */}
                <div className="space-y-3">
                  {category.codes.map((code, index) => (
                    <CodeCard key={index} code={code} color={category.color} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
          <h3 className="text-lg font-semibold text-foreground mb-3">Como usar los codigos:</h3>
          <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
            <li>Copia el codigo que desees usando el boton de copiar</li>
            <li>Abre el juego y ve a Configuracion &gt; Controles</li>
            <li>Selecciona "Importar HUD" o "Cargar configuracion"</li>
            <li>Pega el codigo y aplica los cambios</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
