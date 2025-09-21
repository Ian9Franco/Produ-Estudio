// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Produ Estudio</title>

      {/* Favicon para navegador */}
      <link rel="icon" href="/favicon.ico" />

      {/* PNG para dispositivos que prefieren PNG */}
      <link rel="icon" type="image/png" href="/produestudio-b.png" />

      {/* Meta tags para redes sociales */}
      <meta property="og:title" content="Produ Estudio" />
      <meta property="og:description" content="Fabricamos prendas para marcas de streetwear y básicos con calidad, compromiso y confianza." />
      <meta property="og:image" content="/produestudio-b.png" />
      <meta property="og:image:type" content="image/png" />
      <meta property="og:image:width" content="512" />
      <meta property="og:image:height" content="512" />
      <meta property="og:url" content="https://tu-sitio.com" />
      <meta property="og:type" content="website" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  )
}
