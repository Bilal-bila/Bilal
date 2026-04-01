"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { useClickSound } from "@/hooks/use-click-sound"

const menuItems = [
  {
    title: "Sensi",
    emoji: "🎯",
    href: "/sensi",
    description: "Configuraciones de sensibilidad optimizadas",
    color: "from-cyan-500 via-blue-500 to-cyan-400",
    glow: "cyan",
  },
  {
    title: "Hud-Vip",
    emoji: "💎",
    href: "/hud-vip",
    description: "HUDs exclusivos y personalizados",
    color: "from-purple-500 via-pink-500 to-purple-400",
    glow: "purple",
  },
  {
    title: "Modificación Android",
    emoji: "🤖",
    href: "/android",
    description: "Mods y herramientas para Android",
    color: "from-green-500 via-emerald-500 to-green-400",
    glow: "green",
  },
  {
    title: "Modificación iPhone",
    emoji: "🍎",
    href: "/iphone",
    description: "Mods y herramientas para iPhone",
    color: "from-rose-500 via-red-500 to-orange-400",
    glow: "rose",
  },
]

// Floating particles component
function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([])

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))
    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full animate-float"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: `radial-gradient(circle, rgba(${Math.random() > 0.5 ? '0,255,255' : '255,0,255'},0.8) 0%, transparent 70%)`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}
    </div>
  )
}

// Laser beam effect
function LaserBeams() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-500/50 to-transparent animate-laser-vertical" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/50 to-transparent animate-laser-vertical-delayed" />
      <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent animate-laser-horizontal" />
      <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent animate-laser-horizontal-delayed" />
    </div>
  )
}

// Glitch text component
function GlitchText({ text, onComplete }: { text: string; onComplete: () => void }) {
  const [displayText, setDisplayText] = useState("")
  const [isVisible, setIsVisible] = useState(true)
  const chars = "!@#$%^&*()_+{}|:<>?ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  
  useEffect(() => {
    let iteration = 0
    const maxIterations = text.length * 3
    
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (index < iteration / 3) {
              return text[index]
            }
            return chars[Math.floor(Math.random() * chars.length)]
          })
          .join("")
      )
      
      iteration++
      
      if (iteration >= maxIterations) {
        clearInterval(interval)
        setDisplayText(text)
        
        // Fade out after showing complete text
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(onComplete, 500)
        }, 1500)
      }
    }, 50)
    
    return () => clearInterval(interval)
  }, [text, onComplete])
  
  if (!isVisible) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm transition-opacity duration-500 opacity-0 pointer-events-none" />
    )
  }
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/80 backdrop-blur-sm animate-pulse">
      <div className="relative">
        <div className="absolute inset-0 blur-2xl bg-gradient-to-r from-red-500 via-purple-500 to-cyan-500 opacity-50 animate-pulse" />
        <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-black text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-cyan-500 bg-clip-text tracking-widest animate-gradient-x bg-[length:200%_auto]"
            style={{ 
              textShadow: '0 0 20px rgba(255,0,0,0.8), 0 0 40px rgba(255,255,0,0.6), 0 0 60px rgba(0,255,255,0.4)',
              fontFamily: 'monospace'
            }}>
          {displayText}
        </h1>
      </div>
    </div>
  )
}

// Macro activation component
function MacroActivator() {
  const [state, setState] = useState<"idle" | "loading" | "glitch" | "complete">("idle")
  const [progress, setProgress] = useState(0)
  const [loadingText, setLoadingText] = useState("Iniciando...")
  const playSound = useClickSound()

  const handleActivate = () => {
    if (state !== "idle") return
    playSound()
    setState("loading")
    setProgress(0)
    
    const loadingMessages = [
      "Iniciando conexion...",
      "Verificando sistema...",
      "Cargando modulos...",
      "Inyectando codigo...",
      "Configurando macro...",
      "Optimizando rendimiento...",
      "Finalizando...",
    ]
    
    let currentProgress = 0
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15 + 5
      if (currentProgress >= 100) {
        currentProgress = 100
        clearInterval(interval)
        setTimeout(() => {
          setState("glitch")
        }, 500)
      }
      setProgress(Math.min(currentProgress, 100))
      setLoadingText(loadingMessages[Math.floor((currentProgress / 100) * loadingMessages.length)] || loadingMessages[loadingMessages.length - 1])
    }, 400)
  }

  const handleGlitchComplete = () => {
    setState("complete")
  }

  const handleReset = () => {
    setState("idle")
    setProgress(0)
  }

  return (
    <div className="relative z-10 w-full max-w-md mx-auto mt-8">
      {/* Outer glow */}
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 opacity-30 blur-2xl animate-pulse" />
      
      {/* RGB Animated Border */}
      <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-yellow-500 via-orange-500 via-red-500 via-pink-500 to-yellow-500 opacity-100 animate-border-rgb-fast" />
      <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-red-500 via-yellow-500 via-orange-500 via-pink-500 to-red-500 opacity-75 blur-sm animate-border-rgb-fast-reverse" />
      
      <div className="relative bg-[#12121a]/95 backdrop-blur-xl rounded-2xl p-6 border border-white/5 overflow-hidden">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-yellow-500/50 rounded-tl-2xl" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-orange-500/50 rounded-tr-2xl" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-red-500/50 rounded-bl-2xl" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-yellow-500/50 rounded-br-2xl" />

        {state === "idle" && (
          <div className="flex flex-col items-center gap-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white/10 to-transparent border-2 border-white/20 flex items-center justify-center">
                <span className="text-4xl">🎮</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text">
              Activar Macro
            </h3>
            <p className="text-gray-400 text-sm text-center">
              Activa el macro para mejorar tu gameplay
            </p>
            <button
              onClick={handleActivate}
              className="relative group px-8 py-3 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 animate-gradient-x bg-[length:200%_auto]" />
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 blur-md opacity-50 group-hover:opacity-100 transition-opacity" />
              <span className="relative font-bold text-white text-lg tracking-wide">ACTIVAR</span>
            </button>
          </div>
        )}

        {state === "loading" && (
          <div className="flex flex-col items-center gap-4">
            {/* Spinning loader */}
            <div className="relative w-24 h-24">
              <div className="absolute inset-0 rounded-full border-4 border-gray-700" />
              <div 
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-yellow-500 border-r-orange-500 animate-spin"
                style={{ animationDuration: '1s' }}
              />
              <div 
                className="absolute inset-2 rounded-full border-4 border-transparent border-b-red-500 border-l-pink-500 animate-spin"
                style={{ animationDuration: '1.5s', animationDirection: 'reverse' }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{Math.floor(progress)}%</span>
              </div>
            </div>
            
            {/* Progress bar */}
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 transition-all duration-300 relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent animate-pulse" />
              </div>
            </div>
            
            {/* Loading text with dots animation */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-2 h-2 rounded-full bg-orange-500 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-2 h-2 rounded-full bg-red-500 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <p className="text-yellow-400 text-sm font-mono">{loadingText}</p>
            
            {/* Fake console output */}
            <div className="w-full bg-black/50 rounded-lg p-3 font-mono text-xs text-green-400 max-h-20 overflow-hidden">
              <p className="opacity-50">{"> Conectando al servidor..."}</p>
              <p className="opacity-70">{"> Módulos cargados: OK"}</p>
              <p className="animate-pulse">{"> Procesando..."}</p>
            </div>
          </div>
        )}

        {state === "complete" && (
          <div className="flex flex-col items-center gap-4">
            {/* Success checkmark */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full blur-2xl opacity-60 animate-pulse" />
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text">
              MACRO ACTIVADO
            </h3>
            
            {/* Main message */}
            <div className="relative w-full p-4 rounded-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-gradient-x bg-[length:200%_auto]" />
              <div className="absolute inset-[1px] rounded-xl bg-[#12121a]" />
              <div className="relative text-center">
                <p className="text-xl font-bold text-white mb-1">
                  ENTRA A FREE FIRE/MAX
                </p>
                <p className="text-gray-400 text-sm">
                  El macro estara activo en tu proxima partida
                </p>
              </div>
            </div>
            
            <button
              onClick={handleReset}
              className="px-6 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-sm transition-colors"
            >
              Volver a activar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const playSound = useClickSound()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col items-center px-4 py-8 md:py-12 overflow-hidden relative">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-[#0a0a0f] to-[#0a0a0f]" />
      
      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Mouse follower glow */}
      <div 
        className="fixed w-96 h-96 rounded-full pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
          background: 'radial-gradient(circle, rgba(139,92,246,0.15) 0%, rgba(6,182,212,0.1) 30%, transparent 70%)',
        }}
      />

      {/* Floating particles */}
      <FloatingParticles />
      
      {/* Laser beams */}
      <LaserBeams />

      {/* Glowing orbs */}
      <div className="fixed top-20 left-20 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="fixed bottom-20 right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow-delayed" />
      <div className="fixed top-1/2 right-10 w-24 h-24 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" />

      {/* Title with intense glow */}
      <div className="relative z-10 mb-12 md:mb-16">
        {/* Multiple glow layers */}
        <div className="absolute inset-0 blur-3xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-50">
            NOCTY
          </h1>
        </div>
        <div className="absolute inset-0 blur-xl">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-wider bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent opacity-70">
            NOCTY
          </h1>
        </div>
        <h1 className="relative text-4xl md:text-6xl lg:text-8xl font-black text-center tracking-wider">
          <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
            NOCTY
          </span>
        </h1>
        
        {/* Animated underline */}
        <div className="relative mt-4 h-1 w-48 md:w-64 mx-auto overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-gradient-x bg-[length:200%_auto]" />
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 blur-md animate-gradient-x bg-[length:200%_auto]" />
        </div>
        
        {/* Subtitle */}
        <p className="text-center text-cyan-300/60 mt-4 text-sm md:text-base tracking-widest uppercase animate-pulse">
          Gaming Hub
        </p>
      </div>

      {/* Menu Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full max-w-4xl">
        {menuItems.map((item, index) => (
          <Link
            key={item.title}
            href={item.href}
            onClick={playSound}
            className="group relative transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
            style={{ animationDelay: `${index * 150}ms` }}
          >
            {/* Outer glow effect */}
            <div className={`absolute -inset-4 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-30 blur-2xl transition-all duration-500`} />
            
            {/* RGB Animated Border - multiple layers */}
            <div className="absolute -inset-[3px] rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 via-pink-500 via-yellow-500 to-cyan-500 opacity-100 animate-border-rgb-fast" />
            <div className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-pink-500 via-cyan-500 via-yellow-500 via-purple-500 to-pink-500 opacity-75 blur-sm animate-border-rgb-fast-reverse" />
            
            {/* Inner border glow */}
            <div className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
            
            {/* Card Content */}
            <div className="relative bg-[#12121a]/95 backdrop-blur-xl rounded-2xl p-6 md:p-8 h-full border border-white/5 overflow-hidden">
              {/* Inner light effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/50 rounded-tl-2xl" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-pink-500/50 rounded-bl-2xl" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/50 rounded-br-2xl" />
              
              <div className="relative flex flex-col items-center text-center gap-4">
                {/* Icon with intense glow */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} rounded-full blur-2xl opacity-60 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500`} />
                  <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-white/10 to-transparent border-2 border-white/20 flex items-center justify-center group-hover:border-white/40 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]">
                    <span className="text-4xl md:text-5xl transform group-hover:scale-110 transition-transform duration-300">{item.emoji}</span>
                  </div>
                </div>
                
                {/* Title with glow on hover */}
                <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:via-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                  {item.title}
                </h2>
                
                {/* Description */}
                <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {item.description}
                </p>
                
                {/* Animated enter button */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-transparent to-transparent group-hover:from-cyan-500/20 group-hover:to-purple-500/20 border border-transparent group-hover:border-white/20 transition-all duration-300">
                  <span className="text-sm text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">Entrar</span>
                  <svg className="w-5 h-5 text-cyan-400 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Macro Activator */}
      <MacroActivator />

      {/* Decorative bottom element */}
      <div className="relative z-10 mt-16 flex items-center gap-4">
        <div className="w-16 h-px bg-gradient-to-r from-transparent to-cyan-500" />
        <div className="w-3 h-3 rotate-45 border border-purple-500 animate-spin-slow" />
        <div className="w-16 h-px bg-gradient-to-l from-transparent to-pink-500" />
      </div>

      {/* Footer */}
      <footer className="relative z-10 mt-8 text-center">
        <p className="text-gray-500 text-sm tracking-wider">
          © 2026 <span className="text-transparent bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text">NOCTY</span>. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  )
}
