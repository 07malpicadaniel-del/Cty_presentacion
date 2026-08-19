import Timeline from "@/components/Timeline";

export default function TimelinePage() {
  return (
    <div className="min-h-screen bg-[#fafafa] py-12">
      {/* Encabezado de la página */}
      <div className="max-w-3xl mx-auto text-center px-4 mb-16 pt-8">
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl mb-6">
          Línea del Tiempo Histórica
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Un recorrido cronológico a través de los hitos y técnicas que definieron la captura de la luz, desde los primeros experimentos ópticos hasta la era digital.
        </p>
      </div>

      {/* Aquí llamamos a nuestro componente interactivo */}
      <Timeline />
    </div>
  );
}