"use client"

import Link from "next/link"
import { ArrowLeft, Smartphone, MessageCircle, Youtube, Music2 } from "lucide-react"
import { useClickSound } from "@/hooks/use-click-sound"

export default function AndroidPage() {
  const playSound = useClickSound()
  
  return (
    <main className="min-h-screen bg-background px-4 py-8">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900/20 via-background to-background pointer-events-none" />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors mb-8">
          <ArrowLeft className="w-5 h-5" />
          <span>Volver al inicio</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-green-500/20 to-emerald-500/5 border border-green-500/30 mb-4">
            <Smartphone className="w-10 h-10 text-green-400" />
          </div>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
            Modificacion Android
          </h1>
          <p className="text-muted-foreground mt-2">Unete a nuestra comunidad y mira los tutoriales</p>
        </div>

        {/* Links Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* WhatsApp Link */}
          <a 
            href="https://chat.whatsapp.com/IWgazMM8EOSKuQ1YuTpCcN"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playSound}
            className="group relative block"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all animate-border-rgb" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-green-500 via-emerald-400 to-green-500 animate-border-rgb" />
            <div className="relative bg-card rounded-2xl p-8 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center shadow-lg shadow-green-500/30">
                <MessageCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-1">WhatsApp</h2>
                <p className="text-muted-foreground text-sm">Unete al grupo de la comunidad</p>
              </div>
              <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-sm font-medium">
                Unirse ahora
              </span>
            </div>
          </a>

          {/* YouTube Link */}
          <a 
            href="https://youtube.com/shorts/FPan7OVR0vA?si=Xa1q2dx0t5oscLTF"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playSound}
            className="group relative block"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-red-500 via-rose-400 to-red-500 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all animate-border-rgb" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-red-500 via-rose-400 to-red-500 animate-border-rgb" />
            <div className="relative bg-card rounded-2xl p-8 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-rose-600 flex items-center justify-center shadow-lg shadow-red-500/30">
                <Youtube className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-1">YouTube</h2>
                <p className="text-muted-foreground text-sm">Mira el tutorial completo</p>
              </div>
              <span className="px-4 py-2 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 text-sm font-medium">
                Ver video
              </span>
            </div>
          </a>

          {/* TikTok Link */}
          <a 
            href="https://www.tiktok.com/@noctyx7770?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            onClick={playSound}
            className="group relative block"
          >
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-cyan-400 to-pink-500 opacity-75 group-hover:opacity-100 blur-sm group-hover:blur transition-all animate-border-rgb" />
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-pink-500 via-cyan-400 to-pink-500 animate-border-rgb" />
            <div className="relative bg-card rounded-2xl p-8 flex flex-col items-center gap-4 transition-transform duration-300 group-hover:scale-[1.02]">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 via-black to-cyan-400 flex items-center justify-center shadow-lg shadow-pink-500/30">
                <Music2 className="w-10 h-10 text-white" />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold text-foreground mb-1">TikTok</h2>
                <p className="text-muted-foreground text-sm">Sigueme en TikTok</p>
              </div>
              <span className="px-4 py-2 rounded-full bg-pink-500/20 text-pink-400 border border-pink-500/30 text-sm font-medium">
                Seguir
              </span>
            </div>
          </a>
        </div>
      </div>
    </main>
  )
}
