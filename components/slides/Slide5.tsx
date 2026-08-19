import { Users, Sparkles, ImageOff } from "lucide-react";

export default function Slide5() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#1c1d21] text-[#f3f4f6] overflow-hidden relative">
      
      {/* Brillo sutil de fondo */}
      <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-700/40 via-[#1c1d21] to-[#1c1d21] pointer-events-none"></div>

      {/* Columna de Texto */}
      <div className="flex flex-col justify-center p-8 lg:p-14 z-10 h-full overflow-y-auto">
        <div className="mb-8">
          <span className="text-gray-400 font-medium tracking-widest text-sm uppercase mb-3 block">
            París, 1839
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tight leading-tight text-white drop-shadow-lg">
            La Era Comercial: <br/>El Daguerrotipo
          </h2>
          <div className="h-1 w-24 bg-gray-500 rounded"></div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <Sparkles className="w-7 h-7 text-yellow-500/70 shrink-0 mt-1" />
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Louis Daguerre, tras asociarse con Niépce, perfecciona el proceso químico utilizando placas de cobre recubiertas con plata pulida y tratadas con vapores de yodo.[cite: 1] El resultado era una imagen increíblemente nítida y detallada.[cite: 1]
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Users className="w-7 h-7 text-yellow-500/70 shrink-0 mt-1" />
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Este avance tecnológico logró reducir drásticamente los tiempos de exposición a unos pocos minutos, haciendo viables los retratos por primera vez.[cite: 1] <strong>Aquí cambió la humanidad:</strong> se democratizó la memoria visual sin depender de pintores.
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <ImageOff className="w-7 h-7 text-yellow-500/70 shrink-0 mt-1" />
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              A pesar de su éxito masivo, tenía una gran limitante: era una pieza única, sin negativo, frágil y sin posibilidad de realizar copias.[cite: 1] Cada placa era un tesoro irrepetible.
            </p>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Daguerrotipo generado con SVG) */}
      <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12 z-10">
        
        {/* Contenedor flotante con animación */}
        <div className="relative w-full max-w-sm aspect-[4/5] transform rotate-2 hover:-rotate-1 transition-transform duration-700 shadow-[0_30px_60px_rgba(0,0,0,0.8)]">
          
          {/* SVG que dibuja el estuche, el marco de latón y la placa de plata espejada */}
          <svg viewBox="0 0 200 250" className="w-full h-full rounded-md" preserveAspectRatio="xMidYMid slice">
            <defs>
              {/* Gradiente de Latón/Bronce para el marco */}
              <linearGradient id="brassMat" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#b89947" />
                <stop offset="25%" stopColor="#f4e094" />
                <stop offset="50%" stopColor="#8a6d2b" />
                <stop offset="80%" stopColor="#d1b464" />
                <stop offset="100%" stopColor="#5c4716" />
              </linearGradient>
              
              {/* Gradiente de Plata Espejada para la fotografía */}
              <linearGradient id="silverPlate" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4a5568" />
                <stop offset="40%" stopColor="#cbd5e1" />
                <stop offset="50%" stopColor="#f8fafc" />
                <stop offset="60%" stopColor="#94a3b8" />
                <stop offset="100%" stopColor="#1e293b" />
              </linearGradient>

              {/* Sombra interna del marco */}
              <filter id="innerShadow">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.8"/>
              </filter>
            </defs>

            {/* 1. Estuche exterior de cuero/terciopelo oscuro */}
            <rect x="0" y="0" width="200" height="250" fill="#291e1e" rx="4" />
            <rect x="4" y="4" width="192" height="242" fill="#1c1414" rx="2" />

            {/* 2. Placa de plata de fondo */}
            <rect x="15" y="15" width="170" height="220" fill="url(#silverPlate)" />

            {/* 3. Retrato (Silueta de época) */}
            <g opacity="0.85">
              {/* Cuerpo / Traje */}
              <path d="M 100,80 C 80,80 60,110 50,160 L 40,230 H 160 L 150,160 C 140,110 120,80 100,80 Z" fill="#1f2937" />
              {/* Cuello de la camisa */}
              <path d="M 90,95 L 100,110 L 110,95 Z" fill="#e2e8f0" />
              {/* Cabeza */}
              <ellipse cx="100" cy="65" rx="18" ry="24" fill="#1f2937" />
              {/* Cabello clásico */}
              <path d="M 82,65 C 82,40 118,40 118,65 C 122,50 100,30 80,50 Z" fill="#111827" />
            </g>

            {/* 4. Marco de latón (Mat) con apertura ovalada */}
            <path 
              d="M 10,10 H 190 V 240 H 10 Z M 100,25 C 145,25 165,75 165,125 C 165,175 145,225 100,225 C 55,225 35,175 35,125 C 35,75 55,25 100,25 Z" 
              fill="url(#brassMat)" 
              filter="url(#innerShadow)"
            />

            {/* 5. Reflejos de cristal sobre el daguerrotipo */}
            <polygon points="12,12 80,12 25,238 12,238" fill="#ffffff" opacity="0.15" />
            <polygon points="188,12 188,60 140,12" fill="#ffffff" opacity="0.1" />
          </svg>

        </div>

        {/* Pie de foto */}
        <p className="absolute bottom-6 right-8 font-serif italic text-gray-500 text-sm">
          Simulación de un Daguerrotipo clásico (Plata sobre cobre).
        </p>
      </div>

    </div>
  );
}