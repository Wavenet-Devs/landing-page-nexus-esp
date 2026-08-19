import Image from 'next/image';

/* ═══════════════════════════════════════════════════════════════════
   ▸▸ TAMAÑOS DEL LOGO — cambie estos números a su gusto ◂◂

   `marca` es el ALTO del logo en píxeles. El ancho se calcula solo,
   así que la gota nunca se deforma.
   `texto` es el tamaño de la palabra «Nexus» en píxeles.

   Guarde el archivo y la página se recarga sola.
   Si el logo del encabezado roza los bordes de la barra, suba también
   la altura `88` del `style={{ height: 88 }}` en src/app/page.tsx.
   ═══════════════════════════════════════════════════════════════════ */
export const LOGO = {
  navegacion:     { marca: 50, texto: 25 },  // barra superior de la landing
  pie:            { marca: 56, texto: 27 },  // pie de página
  enLinea:        { marca: 26            },  // junto a «En producción con…»
  privacidadNav:  { marca: 46, texto: 23 },  // barra de la página de privacidad
  privacidadPie:  { marca: 50, texto: 25 },
  wavenet:        { marca: 18            },  // la onda, junto a «Un producto de Wavenet»
};

/* Los PNG originales traen la marca pequeña en medio de un lienzo
   enorme de resplandor casi invisible. Estas versiones están
   recortadas al arte real: se ven grandes y pesan una fracción. */
const NEXUS   = { src: '/nexus-mark.png',   w: 521, h: 611, alto: 611 / 521 };
const WAVENET = { src: '/wavenet-mark.png', w: 570, h: 255, alto: 255 / 570 };

/* La gota de Nexus: agua, energía y medio ambiente. */
export function NexusMark({
  marca = 50, className = '', priority = false,
}: { marca?: number; className?: string; priority?: boolean }) {
  return (
    <Image
      src={NEXUS.src} alt="" width={NEXUS.w} height={NEXUS.h}
      priority={priority} aria-hidden className={className}
      style={{ height: marca, width: Math.round(marca / NEXUS.alto) }}
    />
  );
}

/* La onda de Wavenet, la casa que hace Nexus. */
export function WavenetMark({
  marca = 18, className = '',
}: { marca?: number; className?: string }) {
  return (
    <Image
      src={WAVENET.src} alt="" width={WAVENET.w} height={WAVENET.h}
      aria-hidden className={className}
      style={{ height: marca, width: Math.round(marca / WAVENET.alto) }}
    />
  );
}

export function NexusLockup({
  marca = 50, texto = 25, showParent = true, oscuro = false, priority = false,
}: {
  marca?: number; texto?: number; showParent?: boolean;
  oscuro?: boolean; priority?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5">
      <NexusMark marca={marca} priority={priority} />
      <span className="flex flex-col leading-none">
        <span
          className="display-wide font-bold"
          style={{
            fontSize: texto,
            letterSpacing: '-0.02em',
            color: oscuro ? '#ffffff' : 'var(--color-ink)',
          }}
        >
          Nexus
        </span>
        {showParent && (
          <span
            className="label"
            style={{
              fontSize: Math.max(texto * 0.36, 8.5),
              letterSpacing: '0.15em',
              marginTop: texto * 0.18,
              color: oscuro ? '#98a89d' : 'var(--color-ink-3)',
            }}
          >
            de Wavenet
          </span>
        )}
      </span>
    </span>
  );
}
