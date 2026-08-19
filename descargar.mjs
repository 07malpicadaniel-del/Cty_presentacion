import fs from 'fs';

// Usamos el endpoint especial que resuelve la ubicación exacta automáticamente
const baseUrl = "https://commons.wikimedia.org/wiki/Special:FilePath/";

const files = [
  "View_from_the_Window_at_Le_Gras%2C_Joseph_Nic%C3%A9phore_Ni%C3%A9pce.jpg",
  "Boulevard_du_Temple_by_Daguerre.jpg",
  "RobertCornelius.jpg",
  "Tartan_Ribbon.jpg",
  "The_Horse_in_Motion.jpg",
  "Migrant_Mother_Nipomo_California.jpg",
  "First_photo_from_space.jpg",
  "Earthrise_-_December_24%2C_1968.jpg",
  "Pale_Blue_Dot.png",
  "Black_hole_-_Messier_87_crop_max_res.jpg"
];

async function descargar() {
  console.log("Iniciando descarga a través de la API Special:FilePath...");
  
  for (let i = 0; i < files.length; i++) {
    try {
      const res = await fetch(baseUrl + files[i], {
        // Node fetch sigue las redirecciones (302) por defecto
        redirect: 'follow',
        headers: {
          "User-Agent": "Cty_Presentacion_School_Project/1.0 (daniel@gentoo.localhost)"
        }
      });

      if (!res.ok) {
        throw new Error(`Error HTTP ${res.status}: ${res.statusText}`);
      }

      const buffer = await res.arrayBuffer();
      fs.writeFileSync(`public/trivia/${i + 1}.jpg`, Buffer.from(buffer));
      console.log(`✅ Foto ${i + 1} descargada con éxito (Peso: ${(buffer.byteLength / 1024).toFixed(2)} KB).`);
      
      await new Promise(resolve => setTimeout(resolve, 300));
      
    } catch (error) {
      console.log(`❌ Error en foto ${i + 1}:`, error.message);
    }
  }
  console.log("¡Listo! Imágenes aseguradas localmente.");
}

descargar();
