import { Cpu, HardDrive, MonitorPlay } from "lucide-react";

export default function Slide7() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-[#f2ebd9] text-[#3e2723] overflow-hidden relative">
      
      {/* Filtro de ruido fotográfico vintage (grano deslavado) */}
      <div 
        className="absolute inset-0 opacity-[0.15] mix-blend-multiply pointer-events-none z-20"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Columna de Texto */}
      <div className="flex flex-col justify-center p-6 lg:p-10 z-10 h-full overflow-y-auto relative">
        <div className="mb-6">
          <span className="text-[#c85a17] font-bold tracking-widest text-xs uppercase mb-2 block">
            Laboratorios Kodak, 1975
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-black mb-3 tracking-tight leading-tight text-[#2b2118]">
            El Salto Digital
          </h2>
          <div className="h-1 w-16 bg-[#c85a17] rounded"></div>
        </div>

        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <Cpu className="w-6 h-6 text-[#c85a17] shrink-0 mt-1" />
            <div className="text-base text-[#4a3f35] leading-relaxed">
              <strong className="font-bold text-[#2b2118] block mb-1">El Prototipo de Sasson</strong>
              Steven Sasson, ingeniero de Kodak, desarrolla el primer prototipo de cámara digital.[cite: 1] La fotografía deja de ser química para convertirse en un código binario procesable.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <HardDrive className="w-6 h-6 text-[#c85a17] shrink-0 mt-1" />
            <div className="text-base text-[#4a3f35] leading-relaxed">
              <strong className="font-bold text-[#2b2118] block mb-1">Almacenamiento Magnético</strong>
              El dispositivo pesaba más de 3 kilos y usaba una cinta de cassette para grabar la información.[cite: 1] Tardaba 23 segundos en procesar y guardar una sola imagen en la cinta.
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <MonitorPlay className="w-6 h-6 text-[#c85a17] shrink-0 mt-1" />
            <div className="text-base text-[#4a3f35] leading-relaxed">
              <strong className="font-bold text-[#2b2118] block mb-1">Resolución Pionera</strong>
              Capturaba imágenes en blanco y negro de 0.01 megapíxeles (100 x 100 píxeles).[cite: 1] Aunque la resolución era bajísima, demostró que la luz podía traducirse a datos.
            </div>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Estética 70s: Cassette de plástico y colores deslavados) */}
      <div className="relative h-full w-full flex items-center justify-center p-6 lg:p-12 z-10 bg-[#e6ddc5] border-l border-[#d4c5a9]">
        
        <div className="relative w-full max-w-[18rem] transform rotate-1 drop-shadow-xl hover:rotate-0 transition-transform duration-500">
          
          <svg viewBox="0 0 200 140" className="w-full h-auto" preserveAspectRatio="xMidYMid meet">
            {/* Sombra base del cassette */}
            <rect x="12" y="12" width="180" height="115" rx="8" fill="rgba(0,0,0,0.1)" />
            
            {/* Cuerpo de plástico del cassette (Beige/Gris claro) */}
            <rect x="10" y="10" width="180" height="115" rx="8" fill="#dcd7cd" stroke="#b0a896" strokeWidth="1" />
            <rect x="25" y="15" width="150" height="105" rx="4" fill="#e8e4db" />

            {/* Etiqueta del Cassette (Colores deslavados tipo Kodak 70s) */}
            <rect x="30" y="25" width="140" height="65" rx="2" fill="#eecb7a" /> {/* Mostaza */}
            <rect x="30" y="25" width="140" height="15" fill="#c85a17" opacity="0.8" /> {/* Naranja oxidado */}
            <rect x="30" y="40" width="140" height="10" fill="#a03c1e" opacity="0.8" /> {/* Rojo ladrillo */}
            
            {/* Texto en la etiqueta */}
            <text x="35" y="35" fill="#f2ebd9" fontSize="6" fontFamily="sans-serif" fontWeight="bold">KODAK DIGITAL PROTOTYPE</text>
            <text x="35" y="83" fill="#5c4d3c" fontSize="8" fontFamily="serif" fontStyle="italic">0.01 Megapixels</text>
            <text x="145" y="83" fill="#5c4d3c" fontSize="8" fontFamily="monospace">1975</text>

            {/* Ventana de la cinta magnética */}
            <rect x="55" y="45" width="90" height="25" rx="2" fill="#333" />
            <rect x="60" y="48" width="80" height="19" rx="1" fill="#1a1a1a" />

            {/* Bobinas (Spools) con animación */}
            <circle cx="75" cy="57" r="8" fill="#e8e4db" />
            <circle cx="75" cy="57" r="4" fill="#1a1a1a" stroke="#dcd7cd" strokeWidth="1" strokeDasharray="2 2" className="origin-[75px_57px] animate-[spin_4s_linear_infinite]" />
            
            <circle cx="125" cy="57" r="8" fill="#e8e4db" />
            <circle cx="125" cy="57" r="4" fill="#1a1a1a" stroke="#dcd7cd" strokeWidth="1" strokeDasharray="2 2" className="origin-[125px_57px] animate-[spin_4s_linear_infinite]" />

            {/* Cinta conectando bobinas */}
            <line x1="75" y1="50" x2="125" y2="50" stroke="#4a3f35" strokeWidth="1" />

            {/* Detalles inferiores del molde de plástico */}
            <path d="M 35 110 L 45 95 L 155 95 L 165 110 Z" fill="#dcd7cd" stroke="#b0a896" strokeWidth="1" />
            <circle cx="55" cy="102" r="3" fill="#b0a896" />
            <circle cx="145" cy="102" r="3" fill="#b0a896" />
            <circle cx="100" cy="102" r="3" fill="#b0a896" />
          </svg>

        </div>

        {/* Textos descriptivos vintage */}
        <div className="absolute bottom-6 right-8 text-[#8c7a61] text-xs text-right font-serif italic space-y-1">
          <p>Almacenamiento en cinta magnética.</p>
          <p>Procesamiento: 23 segundos.</p>
        </div>
      </div>

    </div>
  );
}