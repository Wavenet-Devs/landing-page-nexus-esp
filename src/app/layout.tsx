import type { Metadata } from 'next';
import { Archivo, Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';

/* Display — Archivo variable, usada expandida (wdth 112–125).
   Cara institucional de formulario: terminaciones planas, autoridad, sin
   el contraste editorial de un serif. */
const archivo = Archivo({
  variable: '--font-archivo',
  subsets:  ['latin', 'latin-ext'],
  axes:     ['wdth'],
  display:  'swap',
});

/* Texto — la misma cara que usa wavenetdevs-web: la marca madre se siente. */
const inter = Inter({
  variable: '--font-inter',
  subsets:  ['latin', 'latin-ext'],
  display:  'swap',
});

/* Datos — toda cifra, tarifa, contrato y etiqueta va aquí, con tabular-nums.
   En un producto de facturación los números son el contenido. */
const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  subsets:  ['latin', 'latin-ext'],
  weight:   ['400', '500', '600'],
  display:  'swap',
});

const SITE = 'https://nexus.wavenetdevs.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default:  'Nexus ESP — Facturación, recaudo y presupuesto para empresas de servicios públicos',
    template: '%s · Nexus ESP',
  },
  description:
    'Nexus conecta la toma de lecturas en campo con la facturación, el recaudo, la cartera y el presupuesto de su empresa de servicios públicos. Un producto de Wavenet. Planes bajo cotización.',
  keywords: [
    'software facturación servicios públicos',
    'software ESP Colombia',
    'facturación energía',
    'recaudo servicios públicos',
    'CDP RP presupuesto público',
    'app lectura medidores',
    'Wavenet',
  ],
  authors:  [{ name: 'Wavenet', url: 'https://wavenetdevs-web.vercel.app/' }],
  creator:  'Wavenet',
  openGraph: {
    type:        'website',
    locale:      'es_CO',
    siteName:    'Nexus ESP',
    title:       'Nexus ESP — El control de su facturación, en un solo sistema',
    description:
      'De la lectura en campo al recaudo y al presupuesto. Plataforma comercial y administrativa para empresas de servicios públicos en Colombia.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es-CO"
      className={`${archivo.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
