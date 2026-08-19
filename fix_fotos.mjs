import fs from 'fs';

// URLs crudas y directas a los servidores de almacenamiento de Wikipedia
const foto6 = "https://upload.wikimedia.org/wikipedia/commons/5/54/Migrant_Mother_Nipomo_California.jpg";
const foto8 = "https://upload.wikimedia.org/wikipedia/commons/a/a4/Earthrise_-_December_24%2C_1968.jpg";

async function reparar() {
  console.log("Reparando Foto 6 y Foto 8...");
  
  try {
    // Descarga Foto 6
    const res6 = await fetch(foto6, { headers: { "User-Agent": "Cty_Presentacion_School_Project/1.0" } });
    const buf6 = await res6.arrayBuffer();
    fs.writeFileSync("public/trivia/6.jpg", Buffer.from(buf6));
    console.log(`✅ Foto 6 (Madre Migrante) descargada con éxito (Peso: ${(buf6.byteLength / 1024).toFixed(2)} KB).`);

    // Descarga Foto 8
    const res8 = await fetch(foto8, { headers: { "User-Agent": "Cty_Presentacion_School_Project/1.0" } });
    const buf8 = await res8.arrayBuffer();
    fs.writeFileSync("public/trivia/8.jpg", Buffer.from(buf8));
    console.log(`✅ Foto 8 (Earthrise) descargada con éxito (Peso: ${(buf8.byteLength / 1024).toFixed(2)} KB).`);
    
    console.log("¡Colección completada al 100%!");
  } catch (error) {
    console.log(`❌ Error:`, error.message);
  }
}

reparar();
