import { Lightbulb, MessageCircleQuestion, Quote } from "lucide-react";

export default function Slide10() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-zinc-950 text-white overflow-hidden relative p-8">
      
      {/* Fondo radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/30 via-zinc-950 to-zinc-950 pointer-events-none"></div>

      {/* SVG Animado: Un obturador/lente minimalista girando lentamente de fondo */}
      <div className="absolute opacity-5 pointer-events-none w-[800px] h-[800px] flex items-center justify-center animate-[spin_60s_linear_infinite]">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="none" stroke="white" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center">
        
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-serif font-black mb-6 tracking-tight text-white drop-shadow-md">
            Conclusiones y Reflexión
          </h2>
          <div className="h-1 w-24 bg-white/20 mx-auto rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full text-left mb-16">
          
          {/* Tarjeta 1: Aportaciones */}
          <div className="bg-zinc-900/60 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-md shadow-2xl hover:border-zinc-700 transition-colors">
            <Lightbulb className="w-8 h-8 text-zinc-400 mb-5" />
            <h3 className="text-2xl font-bold mb-3 text-zinc-100">Aportaciones Clave</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              La fotografía no solo evolucionó en técnica —de la cámara oscura al sensor digital—, sino que democratizó la memoria humana. Transformó la ciencia, revolucionó el arte y nos permitió explorar desde lo microscópico hasta los confines del universo.
            </p>
          </div>

          {/* Tarjeta 2: El Futuro */}
          <div className="bg-zinc-900/60 p-8 rounded-3xl border border-zinc-800/50 backdrop-blur-md shadow-2xl hover:border-zinc-700 transition-colors">
            <Quote className="w-8 h-8 text-zinc-400 mb-5" />
            <h3 className="text-2xl font-bold mb-3 text-zinc-100">El Futuro Visual</h3>
            <p className="text-zinc-400 leading-relaxed font-light text-lg">
              Hoy, con la inteligencia artificial generativa y la inmediatez algorítmica, el paradigma cambia de nuevo. Sin embargo, seguimos buscando exactamente lo mismo que Niépce en 1826: congelar un fragmento de tiempo para vencer al olvido.
            </p>
          </div>

        </div>

        {/* Botón / Llamado a la acción para el público */}
        <div className="inline-flex items-center gap-4 bg-white text-black px-8 py-4 rounded-full font-bold text-xl shadow-[0_0_40px_rgba(255,255,255,0.15)] transform hover:scale-105 transition-transform cursor-default">
          <MessageCircleQuestion className="w-6 h-6" />
          ¿Preguntas y Comentarios?
        </div>

      </div>
    </div>
  );
}