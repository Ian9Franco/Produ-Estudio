// app/head.tsx
export default function Head() {
  return (
    <>
      <title>Produ Estudio</title>
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Produ Estudio" />
      <meta property="og:description" content="Fabricamos prendas para marcas de streetwear y básicos." />
      <meta property="og:image" content="/images/logo-produ-estudio.png" />
      <meta property="og:url" content="https://tusitio.com/" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Produ Estudio" />
      <meta name="twitter:description" content="Fabricamos prendas para marcas de streetwear y básicos." />
      <meta name="twitter:image" content="/images/logo-produ-estudio.png" />
    </>
  )
}
