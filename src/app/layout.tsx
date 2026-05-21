import type { Metadata } from 'next';
import { Instrument_Serif, DM_Sans } from 'next/font/google';
import './globals.css';

const instrumentSerif = Instrument_Serif({
  variable:  '--font-instrument',
  subsets:   ['latin'],
  weight:    '400',
  style:     ['normal', 'italic'],
  display:   'swap',
});

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets:  ['latin'],
  weight:   ['300', '400', '500', '600', '700'],
  display:  'swap',
});

export const metadata: Metadata = {
  title:       'Nexus — Plataforma SaaS para Empresas de Servicios Públicos',
  description: 'Nexus automatiza el ciclo completo de las ESPs: lecturas de medidores, facturación, cobros y reportes en una plataforma multi-tenant lista para escalar.',
  keywords:    ['facturación eléctrica', 'SaaS ESP', 'empresas servicios públicos', 'Colombia', 'multi-tenant'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${instrumentSerif.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
