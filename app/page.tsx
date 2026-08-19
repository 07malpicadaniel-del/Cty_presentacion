import SlideDeck from "@/components/SlideDeck";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* 
        El Navbar global ya se está renderizando desde layout.tsx.
        SlideDeck ocupa el resto del espacio disponible (calc(100vh - 4rem)).
      */}
      <SlideDeck />
    </div>
  );
}