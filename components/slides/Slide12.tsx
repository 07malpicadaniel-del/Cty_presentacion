"use client";

import { useState } from "react";
import { Trophy, ArrowRight, Camera, CheckCircle2, XCircle } from "lucide-react";

const questions = [
  {
    image: "/trivia/1.jpg?v=2",
    title: "Vista desde la ventana en Le Gras",
    options: ["1790", "1826", "1850", "1901"],
    correct: 1, 
    fact: "¡Correcto! Es la primera fotografía de la historia. Niépce la expuso durante 8 horas continuas."
  },
  {
    image: "/trivia/2.jpg?v=2",
    title: "Boulevard du Temple (El primer humano)",
    options: ["1810", "1838", "1865", "1890"],
    correct: 1, 
    fact: "¡Exacto! Tomada por Daguerre. Por los 10 minutos de exposición, solo se registró a un hombre lustrándose los zapatos."
  },
  {
    image: "/trivia/3.jpg?v=2",
    title: "El Primer 'Selfie' (Autorretrato)",
    options: ["1839", "1875", "1910", "1925"],
    correct: 0, 
    fact: "¡Sí! Robert Cornelius tuvo que correr frente a la cámara y quedarse quieto entre 10 y 15 minutos para este daguerrotipo."
  },
  {
    image: "/trivia/4.jpg?v=2",
    title: "La Cinta de Tartán (Primera foto a color)",
    options: ["1845", "1861", "1888", "1907"],
    correct: 1, 
    fact: "¡Correcto! El físico James Clerk Maxwell demostró que mezclando filtros rojo, verde y azul (RGB) se podía recrear el color."
  },
  {
    image: "/trivia/5.jpg?v=2",
    title: "El Caballo en Movimiento",
    options: ["1850", "1878", "1895", "1912"],
    correct: 1, 
    fact: "¡Exacto! Eadweard Muybridge demostró que al galopar, hay un instante donde el caballo tiene las 4 patas en el aire."
  },
  {
    image: "/trivia/6.jpg?v=2",
    title: "Madre Migrante",
    options: ["1914", "1929", "1936", "1945"],
    correct: 2, 
    fact: "¡Sí! Dorothea Lange tomó esta foto en la Gran Depresión. Símbolo universal de la fotografía documental."
  },
  {
    image: "/trivia/7.jpg?v=2",
    title: "La Primera Foto desde el Espacio",
    options: ["1946", "1957", "1961", "1969"],
    correct: 0, 
    fact: "¡Correcto! Se tomó desde un cohete V-2 capturado a los alemanes, años antes de que existiera la NASA."
  },
  {
    image: "/trivia/8.jpg?v=2",
    title: "Earthrise (Amanecer de la Tierra)",
    options: ["1955", "1968", "1972", "1980"],
    correct: 1, 
    fact: "¡Exacto! Tomada por la tripulación del Apolo 8 al orbitar la luna. Impulsó el movimiento ecologista mundial."
  },
  {
    image: "/trivia/9.jpg?v=2",
    title: "Un Punto Azul Pálido",
    options: ["1977", "1985", "1990", "1998"],
    correct: 2, 
    fact: "¡Sí! Carl Sagan pidió que la sonda Voyager 1 volteara su cámara a 6 mil millones de km para fotografiar la Tierra."
  },
  {
    image: "/trivia/10.jpg?v=2",
    title: "La Sombra de un Agujero Negro",
    options: ["2012", "2015", "2019", "2022"],
    correct: 2, 
    fact: "¡Correcto! Procesada por una red global de telescopios y algoritmos, la fotografía puramente computacional."
  }
];

export default function Slide12() {
  const [currentQ, setCurrentQ] = useState(0);
  const [selectedAns, setSelectedAns] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAns !== null) return;
    setSelectedAns(index);
    if (index === questions[currentQ].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
      setSelectedAns(null);
    } else {
      setIsGameOver(true);
    }
  };

  const resetGame = () => {
    setCurrentQ(0);
    setSelectedAns(null);
    setScore(0);
    setIsGameOver(false);
  };

  return (
    <div className="w-full h-full flex flex-col bg-[#111827] text-white overflow-hidden relative">
      
      <div className="w-full p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900/50 backdrop-blur-md z-20">
        <div className="flex items-center gap-3">
          <Camera className="w-6 h-6 text-indigo-400" />
          <h2 className="text-xl font-bold tracking-widest uppercase text-indigo-100">Trivia Fotográfica</h2>
        </div>
        {!isGameOver && (
          <div className="text-sm font-mono bg-indigo-900/50 text-indigo-200 px-4 py-1.5 rounded-full border border-indigo-500/30">
            Foto {currentQ + 1} de {questions.length}
          </div>
        )}
      </div>

      {isGameOver ? (
        <div className="flex-1 flex flex-col items-center justify-center p-8 z-10 text-center animate-in fade-in zoom-in duration-500">
          <Trophy className="w-24 h-24 text-yellow-400 mb-6 drop-shadow-[0_0_20px_rgba(250,204,21,0.4)]" />
          <h2 className="text-5xl font-black mb-4">¡Juego Terminado!</h2>
          <p className="text-2xl text-gray-400 mb-10">
            Puntuación de la clase: <strong className="text-white">{score} / {questions.length}</strong>
          </p>
          <button 
            onClick={resetGame}
            className="px-8 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-full font-bold transition-colors shadow-lg text-lg"
          >
            Volver a jugar
          </button>
        </div>
      ) : (
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 z-10">
          
          <div className="p-8 flex items-center justify-center border-r border-gray-800 bg-black/60 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-indigo-500/10 blur-[100px] pointer-events-none"></div>
            
            <div className="relative w-full max-w-lg aspect-square md:aspect-[4/3] bg-black p-2 rounded-xl shadow-2xl border border-gray-800 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={questions[currentQ].image} 
                alt="Fotografía Histórica" 
                className="w-full h-full object-contain rounded filter hover:brightness-110 transition-all duration-300"
              />
            </div>
          </div>

          <div className="p-8 lg:p-14 flex flex-col justify-center">
            <h3 className="text-3xl font-serif font-bold mb-8 leading-tight">
              ¿En qué año se tomó <br/><span className="text-indigo-400">"{questions[currentQ].title}"</span>?
            </h3>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              {questions[currentQ].options.map((opt, idx) => {
                let btnStyle = "bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-200";
                
                if (selectedAns !== null) {
                  if (idx === questions[currentQ].correct) {
                    btnStyle = "bg-green-600 border-green-500 text-white shadow-[0_0_15px_rgba(34,197,94,0.3)]";
                  } else if (idx === selectedAns) {
                    btnStyle = "bg-red-600 border-red-500 text-white";
                  } else {
                    btnStyle = "bg-gray-900 border-gray-900 text-gray-600 opacity-50";
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(idx)}
                    disabled={selectedAns !== null}
                    className={`p-4 rounded-xl border-2 text-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 ${btnStyle}`}
                  >
                    {opt}
                    {selectedAns !== null && idx === questions[currentQ].correct && <CheckCircle2 className="w-5 h-5" />}
                    {selectedAns !== null && idx === selectedAns && idx !== questions[currentQ].correct && <XCircle className="w-5 h-5" />}
                  </button>
                );
              })}
            </div>

            {selectedAns !== null && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 bg-indigo-950/50 p-6 rounded-xl border border-indigo-500/30 backdrop-blur-sm">
                <p className="text-indigo-100 text-lg mb-6 leading-relaxed">
                  {questions[currentQ].fact}
                </p>
                <button 
                  onClick={nextQuestion}
                  className="w-full py-4 bg-white text-black hover:bg-gray-200 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors text-lg"
                >
                  {currentQ < questions.length - 1 ? "Siguiente Imagen" : "Ver Puntuación"} <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
