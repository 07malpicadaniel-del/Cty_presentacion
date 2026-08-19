import { Clock, FlaskConical, Image as ImageIcon } from "lucide-react";

export default function Slide4() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-zinc-800 via-zinc-700 to-slate-900 text-zinc-100 overflow-hidden relative">
      
      {/* Textura de metal desgastado (Ruido SVG inyectado) */}
      <div 
        className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none" 
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}
      ></div>

      {/* Columna de Texto */}
      <div className="flex flex-col justify-center p-8 lg:p-14 z-10 h-full overflow-y-auto">
        <div className="mb-8">
          <span className="text-zinc-400 font-mono tracking-widest text-sm uppercase mb-3 block">
            Francia, 1826
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-black mb-4 tracking-tight leading-tight text-white drop-shadow-md">
            El Primer Disparo
          </h2>
          <div className="h-1 w-24 bg-zinc-400 rounded"></div>
        </div>

        <div className="space-y-8">
          <div className="flex gap-4 items-start">
            <ImageIcon className="w-7 h-7 text-zinc-400 shrink-0 mt-1" />
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              El científico francés Joseph Nicéphore Niépce logra la hazaña técnica: la primera fotografía conservada de la historia, titulada <strong className="text-white font-medium">"Vista desde la ventana en Le Gras"</strong>.[cite: 1]
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <FlaskConical className="w-7 h-7 text-zinc-400 shrink-0 mt-1" />
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              Utilizó una placa de peltre recubierta con betún de Judea.[cite: 1] La exposición a la luz solar endureció el betún, revelando la imagen latente tras lavar con solventes las partes no expuestas.[cite: 1]
            </p>
          </div>

          <div className="flex gap-4 items-start">
            <Clock className="w-7 h-7 text-zinc-400 shrink-0 mt-1" />
            <p className="text-lg text-zinc-300 leading-relaxed font-light">
              Debido a la baja sensibilidad del material, este proceso requirió un tiempo de exposición continuo de aproximadamente <strong className="text-white text-2xl font-bold border-b-2 border-red-900">8 horas</strong>.[cite: 1]
            </p>
          </div>
        </div>
      </div>

      {/* Columna de Imagen (Simulando la placa de peltre) */}
      <div className="relative h-full w-full flex items-center justify-center p-8 lg:p-12 border-l border-zinc-600/50 z-10 bg-zinc-800/50 backdrop-blur-sm">
        
        {/* Marco simulando el bloque de metal pesado */}
        <div className="relative w-full aspect-square md:aspect-[4/3] bg-zinc-400 p-2 shadow-[20px_20px_60px_rgba(0,0,0,0.8)] border-b-8 border-r-8 border-zinc-900 rounded-sm transform -rotate-1 hover:rotate-0 transition-transform duration-700">
          <div className="w-full h-full relative overflow-hidden bg-zinc-900">
            
            {/* Imagen cargada a través del proxy para evitar bloqueos */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://wsrv.nl/?url=upload.wikimedia.org/wikipedia/commons/5/5c/View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg"
              alt="Vista desde la ventana en Le Gras"
              className="object-cover w-full h-full grayscale contrast-[1.8] brightness-75 mix-blend-luminosity hover:mix-blend-normal transition-all duration-1000"
              crossOrigin="anonymous"
            />
            
            {/* Sombra interna para simular el desgaste de los químicos */}
            <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] pointer-events-none"></div>
          </div>
        </div>

        <p className="absolute bottom-6 right-8 font-mono text-zinc-500 text-sm tracking-widest">
          HELIOGRAFÍA - PLACA ORIGINAL
        </p>
      </div>

    </div>
  );
}