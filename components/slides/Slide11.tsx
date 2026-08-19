import { Smartphone, Cpu, Network } from "lucide-react";

export default function Slide11() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#09090b] text-zinc-100 overflow-hidden relative">
      
      {/* Fondo con gradiente tecnológico sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#09090b] to-[#09090b] pointer-events-none"></div>

      {/* Columna de Texto */}
      <div className="flex flex-col justify-center p-8 lg:p-14 z-10 h-full overflow-y-auto relative">
        <div className="mb-8">
          <span className="text-indigo-400 font-mono tracking-widest text-xs uppercase mb-3 block">
            2000 — Actualidad
          </span>
          <h2 className="text-4xl md:text-5xl font-sans font-black mb-4 tracking-tight leading-tight text-white">
            Fotografía <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Computacional</span>
          </h2>
          <div className="h-1 w-24 bg-indigo-500/50 rounded"></div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <Smartphone className="w-7 h-7 text-indigo-400 shrink-0 mt-1" />
            <div className="text-base text-zinc-400 leading-relaxed font-light">
              <strong className="font-bold text-zinc-100 block mb-1">El Lente en el Bolsillo (2000)</strong>
              Con el lanzamiento del J-SH04 en Japón, la cámara se integró al teléfono móvil. Esto detonó la era de la hiper-documentación diaria; hoy se toman más fotografías en un solo día que en todo el siglo XIX.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Cpu className="w-7 h-7 text-cyan-400 shrink-0 mt-1" />
            <div className="text-base text-zinc-400 leading-relaxed font-light">
              <strong className="font-bold text-zinc-100 block mb-1">El Software supera al Hardware</strong>
              Al no poder integrar lentes gigantes en teléfonos de 8mm de grosor, la industria trasladó el esfuerzo al software. Múltiples sensores pequeños capturan datos simultáneos para crear una sola imagen óptima.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <Network className="w-7 h-7 text-indigo-400 shrink-0 mt-1" />
            <div className="text-base text-zinc-400 leading-relaxed font-light">
              <strong className="font-bold text-zinc-100 block mb-1">Inteligencia Artificial</strong>
              Las imágenes ya no solo se capturan, se "calculan". Redes neuronales analizan la escena en milisegundos, ajustando el rango dinámico, separando sujetos del fondo y generando pixeles faltantes para visión nocturna.
            </div>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Arte SVG: Smartphone y Redes Neuronales) */}
      <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12 z-10 border-l border-white/5">
        
        {/* Nodos de IA de fondo animando */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
          <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_120s_linear_infinite]">
            <circle cx="100" cy="100" r="60" fill="none" stroke="#6366f1" strokeWidth="0.5" strokeDasharray="4 4" />
            <circle cx="100" cy="100" r="80" fill="none" stroke="#22d3ee" strokeWidth="0.5" strokeDasharray="2 6" className="origin-center animate-[spin_60s_reverse_infinite]" />
          </svg>
        </div>

        {/* Smartphone UI */}
        <div className="relative w-full max-w-[14rem] transform rotate-3 drop-shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:rotate-0 transition-transform duration-500">
          
          <svg viewBox="0 0 120 240" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            
            {/* Chasis del Teléfono */}
            <rect x="5" y="5" width="110" height="230" rx="16" fill="#18181b" stroke="#3f3f46" strokeWidth="2" />
            
            {/* Módulo de Cámaras (Triple lente) */}
            <rect x="15" y="15" width="45" height="50" rx="8" fill="#09090b" stroke="#27272a" strokeWidth="1" />
            
            {/* Lente Principal (con reflejo cyan) */}
            <circle cx="37" cy="27" r="8" fill="#18181b" stroke="#3f3f46" strokeWidth="1.5" />
            <circle cx="37" cy="27" r="4" fill="#09090b" />
            <circle cx="39" cy="25" r="1.5" fill="#22d3ee" opacity="0.6" />
            
            {/* Lente Ultra Gran Angular */}
            <circle cx="26" cy="42" r="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <circle cx="26" cy="42" r="3" fill="#09090b" />
            <circle cx="27" cy="41" r="1" fill="#818cf8" opacity="0.6" />

            {/* Lente Telefoto */}
            <circle cx="48" cy="42" r="6" fill="#18181b" stroke="#3f3f46" strokeWidth="1" />
            <circle cx="48" cy="42" r="3" fill="#09090b" />
            <circle cx="49" cy="41" r="1" fill="#818cf8" opacity="0.6" />

            {/* Flash LED */}
            <circle cx="48" cy="22" r="2" fill="#fef08a" opacity="0.8" />
            <circle cx="48" cy="22" r="4" fill="#fef08a" opacity="0.2" className="animate-pulse" />

            {/* Pantalla trasera simulando la detección de IA (Bounding boxes) */}
            <g transform="translate(15, 80)">
              <rect x="0" y="0" width="90" height="140" rx="4" fill="#09090b" />
              
              {/* Grid de escaneo */}
              <line x1="0" y1="70" x2="90" y2="70" stroke="#6366f1" strokeWidth="1" strokeDasharray="2 2" className="animate-[pulse_2s_ease-in-out_infinite]" />
              
              {/* Cuadros de reconocimiento facial / objetos */}
              <rect x="25" y="30" width="40" height="40" fill="none" stroke="#22d3ee" strokeWidth="1" />
              <circle cx="25" cy="30" r="1.5" fill="#22d3ee" />
              <circle cx="65" cy="30" r="1.5" fill="#22d3ee" />
              <circle cx="25" cy="70" r="1.5" fill="#22d3ee" />
              <circle cx="65" cy="70" r="1.5" fill="#22d3ee" />
              
              <text x="25" y="25" fill="#22d3ee" fontSize="4" fontFamily="monospace">SUBJECT_DETECTED</text>
              <text x="25" y="78" fill="#6366f1" fontSize="4" fontFamily="monospace">HDR+ ACTIVE</text>
            </g>

          </svg>

        </div>
      </div>
    </div>
  );
}
