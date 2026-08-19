import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Mail, MessageCircle, MapPin } from 'lucide-react';
import { NexusLockup, LOGO } from '@/components/brand';

export const metadata: Metadata = {
  title: 'Política de tratamiento de datos personales',
  description:
    'Cómo Wavenet recoge, usa, guarda y protege los datos personales que usted nos entrega al solicitar una cotización de Nexus ESP. Ley 1581 de 2012.',
  robots: { index: true, follow: true },
};

/* ═══════════════════════════════════════════════════════════════════
   Identificación tomada del RUT de la empresa. La dirección es la de
   notificación judicial; cámbiela si tienen otra para ese efecto.
   Si algún campo vuelve a decir «PENDIENTE», la página muestra sola
   un aviso visible.
   ═══════════════════════════════════════════════════════════════════ */
const EMPRESA = {
  razonSocial: 'Wavenet Dev S.A.S.',
  nit:         '902.002.900-5',
  direccion:   'Carrera 1L Norte # 80-70',
  ciudad:      'Cali, Valle del Cauca — Colombia',
  correo:      'wavenetdevs@gmail.com',
  whatsapp:    '317 155 7395',
  waLink:      'https://wa.me/573171557395',
  vigencia:    '19 de agosto de 2026',
};

const faltantes = Object.entries(EMPRESA)
  .filter(([, v]) => v.startsWith('PENDIENTE'))
  .map(([k]) => k);

/* ── Piezas ───────────────────────────────────────────────────────── */

function Bloque({ n, titulo, children }: { n: string; titulo: string; children: React.ReactNode }) {
  return (
    <section className="scroll-mt-28" id={`s${n}`}>
      <div className="flex items-baseline gap-3 mb-4">
        <span className="num" style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-verde)' }}>
          {n}
        </span>
        <h2 style={{ fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)' }}>{titulo}</h2>
      </div>
      <div className="prosa space-y-4">{children}</div>
    </section>
  );
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 15.5, color: 'var(--color-ink-2)', lineHeight: 1.75 }}>{children}</p>;
}

function Lista({ items }: { items: React.ReactNode[] }) {
  return (
    <ul className="space-y-2.5">
      {items.map((t, i) => (
        <li key={i} className="flex items-start gap-3">
          <span
            className="shrink-0"
            style={{ width: 5, height: 5, marginTop: 10, borderRadius: 99, background: 'var(--color-verde)', opacity: 0.6 }}
            aria-hidden
          />
          <span style={{ fontSize: 15.5, color: 'var(--color-ink-2)', lineHeight: 1.7 }}>{t}</span>
        </li>
      ))}
    </ul>
  );
}

const INDICE = [
  ['01', 'Quién responde por sus datos'],
  ['02', 'Qué datos recogemos'],
  ['03', 'Para qué los usamos'],
  ['04', 'Su autorización'],
  ['05', 'Por dónde viajan sus datos'],
  ['06', 'Cuánto tiempo los guardamos'],
  ['07', 'Sus derechos'],
  ['08', 'Cómo ejercer sus derechos'],
  ['09', 'Datos de niños y adolescentes'],
  ['10', 'Datos sensibles'],
  ['11', 'Navegación y cookies'],
  ['12', 'Cómo protegemos la información'],
  ['13', 'Si algo no le parece'],
  ['14', 'Cambios en esta política'],
];

export default function Privacidad() {
  return (
    <>
      {/* ── Cabecera ─────────────────────────────────────────────── */}
      <header
        className="sticky top-0 z-50"
        style={{
          background: 'rgba(244,246,242,0.85)',
          backdropFilter: 'blur(14px) saturate(1.4)',
          WebkitBackdropFilter: 'blur(14px) saturate(1.4)',
          borderBottom: '1px solid var(--color-line)',
        }}
      >
        <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
          <div className="flex items-center justify-between" style={{ height: 88 }}>
            <Link href="/" aria-label="Nexus, inicio"><NexusLockup {...LOGO.privacidadNav} priority /></Link>
            <Link href="/" className="btn btn-line btn-sm">
              <ArrowLeft className="h-4 w-4" aria-hidden /> Volver al inicio
            </Link>
          </div>
        </div>
      </header>

      <main>
        <div
          className="mx-auto w-full max-w-[1140px] px-5 sm:px-8"
          style={{ paddingTop: 'clamp(3rem, 6vw, 5rem)', paddingBottom: 'clamp(4rem, 8vw, 7rem)' }}
        >
          {/* ── Título ──────────────────────────────────────────── */}
          <div className="max-w-[46rem]">
            <div className="flex items-center gap-2.5 mb-4">
              <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--color-verde)' }} aria-hidden />
              <span className="label">Protección de datos personales</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)' }}>
              Política de tratamiento de datos personales
            </h1>
            <p className="mt-5" style={{ fontSize: 17.5, color: 'var(--color-ink-2)', lineHeight: 1.7 }}>
              Esta página explica, en palabras claras, qué información suya recogemos cuando nos
              pide una cotización de Nexus, para qué la usamos, cuánto tiempo la guardamos y qué
              puede exigirnos en cualquier momento.
            </p>
            <p className="num mt-5" style={{ fontSize: 13.5, color: 'var(--color-ink-3)' }}>
              Vigente desde el {EMPRESA.vigencia} · Ley 1581 de 2012 · Decreto 1074 de 2015
            </p>
          </div>

          {/* ── Aviso de campos por completar ───────────────────── */}
          {faltantes.length > 0 && (
            <div
              className="card mt-10 flex items-start gap-4"
              style={{ padding: '1.25rem 1.5rem', background: '#fff8e6', borderColor: '#f0dca8', boxShadow: 'none' }}
            >
              <AlertTriangle className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#a06b00' }} aria-hidden />
              <div>
                <p style={{ fontSize: 15, fontWeight: 600, color: '#6b4700' }}>
                  Falta completar la identificación de la empresa antes de publicar
                </p>
                <p className="mt-1.5" style={{ fontSize: 14.5, color: '#7a5400', lineHeight: 1.65 }}>
                  Campos pendientes: <strong>{faltantes.join(', ')}</strong>. Están al inicio de{' '}
                  <code className="num" style={{ fontSize: 13 }}>src/app/privacidad/page.tsx</code>,
                  en el objeto <code className="num" style={{ fontSize: 13 }}>EMPRESA</code>. Este aviso
                  desaparece solo cuando los reemplace.
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-12 lg:grid-cols-[240px_1fr] lg:gap-16 mt-14">

            {/* ── Índice ────────────────────────────────────────── */}
            <nav aria-label="Contenido" className="lg:sticky lg:top-28 lg:self-start">
              <div className="label mb-4">Contenido</div>
              <ol className="space-y-2">
                {INDICE.map(([n, t]) => (
                  <li key={n}>
                    <a
                      href={`#s${n}`}
                      className="flex items-start gap-2.5 transition-colors hover:text-[var(--color-verde)]"
                      style={{ fontSize: 13.5, color: 'var(--color-ink-3)', lineHeight: 1.5 }}
                    >
                      <span className="num shrink-0" style={{ fontSize: 11, paddingTop: 2 }}>{n}</span>
                      {t}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            {/* ── Cuerpo ────────────────────────────────────────── */}
            <div className="max-w-[46rem] space-y-14">

              <Bloque n="01" titulo="Quién responde por sus datos">
                <P>
                  El responsable del tratamiento de sus datos personales es{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>{EMPRESA.razonSocial}</strong>,
                  identificada con NIT <span className="num">{EMPRESA.nit}</span>, empresa
                  desarrolladora de Nexus ESP.
                </P>
                <div className="card" style={{ padding: '1.25rem 1.5rem' }}>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-[18px] w-[18px] shrink-0 mt-0.5" style={{ color: 'var(--color-ink-3)' }} aria-hidden />
                      <span style={{ fontSize: 14.5, color: 'var(--color-ink-2)' }}>
                        {EMPRESA.direccion} · {EMPRESA.ciudad}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-[18px] w-[18px] shrink-0 mt-0.5" style={{ color: 'var(--color-ink-3)' }} aria-hidden />
                      <a className="link-ul num break-all" href={`mailto:${EMPRESA.correo}`} style={{ fontSize: 14.5 }}>
                        {EMPRESA.correo}
                      </a>
                    </div>
                    <div className="flex items-start gap-3">
                      <MessageCircle className="h-[18px] w-[18px] shrink-0 mt-0.5" style={{ color: 'var(--color-ink-3)' }} aria-hidden />
                      <a className="link-ul num" href={EMPRESA.waLink} target="_blank" rel="noopener" style={{ fontSize: 14.5 }}>
                        {EMPRESA.whatsapp}
                      </a>
                    </div>
                  </div>
                </div>
              </Bloque>

              <Bloque n="02" titulo="Qué datos recogemos">
                <P>
                  Solo recogemos lo que usted escribe en el formulario de cotización, o lo que nos
                  envía por WhatsApp o por correo. Nada más. En concreto:
                </P>
                <Lista items={[
                  <>Su <strong>nombre y apellido</strong>, y el <strong>cargo</strong> que ocupa.</>,
                  <>El <strong>nombre de la empresa prestadora</strong> y el servicio que presta.</>,
                  <>Su <strong>correo electrónico</strong> y su <strong>número de teléfono</strong>.</>,
                  <>El <strong>rango de suscriptores</strong> de la empresa y los módulos que le interesan.</>,
                  <>Cualquier cosa que nos escriba en el campo de mensaje libre.</>,
                ]} />
                <P>
                  Ninguno de estos campos es obligatorio por ley: usted decide qué nos cuenta. Si
                  prefiere no dejar su correo o su teléfono, escríbanos directamente por WhatsApp.
                </P>
              </Bloque>

              <Bloque n="03" titulo="Para qué los usamos">
                <P>Usamos su información únicamente para estas finalidades:</P>
                <Lista items={[
                  'Responder su solicitud y prepararle una cotización ajustada al tamaño de su operación.',
                  'Contactarlo para aclarar dudas sobre lo que necesita antes de armar la propuesta.',
                  'Hacer seguimiento comercial a esa solicitud, mientras usted quiera recibirlo.',
                  'Dejar constancia interna de las propuestas que hemos enviado.',
                  'Cumplir obligaciones legales, contables o tributarias si llegamos a contratar.',
                ]} />
                <P>
                  <strong style={{ color: 'var(--color-ink)' }}>No vendemos ni compartimos su información
                  con terceros con fines publicitarios</strong>, y no lo inscribimos en listas de
                  correo masivo sin que usted lo pida.
                </P>
              </Bloque>

              <Bloque n="04" titulo="Su autorización">
                <P>
                  Cuando usted marca la casilla del formulario y lo envía, nos está autorizando de
                  forma previa, expresa e informada a tratar sus datos para las finalidades del
                  punto 03. Esa autorización es voluntaria y puede revocarla cuando quiera, por los
                  canales del punto 08, sin que eso le cueste nada.
                </P>
                <P>
                  Si nos escribe directamente por WhatsApp o por correo sin pasar por el formulario,
                  entendemos que autoriza el uso de esos datos para responderle esa misma solicitud.
                </P>
              </Bloque>

              <Bloque n="05" titulo="Por dónde viajan sus datos">
                <P>
                  Conviene que sepa esto con claridad, porque afecta dónde queda guardada su
                  información:
                </P>
                <Lista items={[
                  <>
                    <strong>Esta página web no guarda nada.</strong> El formulario no envía la
                    información a ningún servidor nuestro: arma un mensaje con lo que usted escribió
                    y lo abre en WhatsApp o en su cliente de correo, para que usted lo revise y
                    decida si lo manda.
                  </>,
                  <>
                    <strong>Si lo envía por WhatsApp</strong>, el mensaje viaja por la
                    infraestructura de WhatsApp (Meta Platforms), que tiene servidores fuera de
                    Colombia. Eso implica una transferencia internacional de datos, sujeta a las
                    políticas de ese servicio.
                  </>,
                  <>
                    <strong>Si lo envía por correo</strong>, el mensaje llega a nuestra cuenta de
                    Gmail (Google), que también opera servidores fuera de Colombia.
                  </>,
                  <>
                    Una vez recibido, guardamos su solicitud en nuestras herramientas internas de
                    trabajo, con acceso limitado al equipo comercial.
                  </>,
                ]} />
                <P>
                  Al usar cualquiera de esos dos canales usted acepta esa transferencia. Si prefiere
                  evitarla, puede pedirnos por teléfono que tomemos sus datos de otra forma.
                </P>
              </Bloque>

              <Bloque n="06" titulo="Cuánto tiempo los guardamos">
                <P>
                  Conservamos su información mientras siga viva la relación comercial y durante el
                  tiempo que nos exijan las normas contables y tributarias si llegamos a contratar.
                </P>
                <P>
                  Si la cotización no prospera, guardamos la solicitud por un máximo de{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>dos años</strong> desde el último
                  contacto, por si usted retoma la conversación. Cumplido ese plazo la eliminamos,
                  salvo que usted nos pida borrarla antes.
                </P>
              </Bloque>

              <Bloque n="07" titulo="Sus derechos">
                <P>
                  Como titular de sus datos personales, la ley colombiana le reconoce estos derechos,
                  y nosotros los respetamos sin ponerle trabas:
                </P>
                <Lista items={[
                  <><strong>Conocer</strong> qué datos suyos tenemos y cómo los estamos usando.</>,
                  <><strong>Actualizar</strong> o <strong>rectificar</strong> los que estén incompletos, desactualizados o equivocados.</>,
                  <><strong>Solicitar prueba</strong> de la autorización que nos dio.</>,
                  <><strong>Revocar</strong> esa autorización o <strong>pedir que borremos</strong> sus datos, cuando no exista un deber legal o contractual que nos obligue a conservarlos.</>,
                  <><strong>Ser informado</strong>, si lo pide, sobre el uso que le hemos dado a su información.</>,
                  <><strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio.</>,
                  <><strong>Acceder gratuitamente</strong> a sus datos. No cobramos por ninguna de estas gestiones.</>,
                ]} />
              </Bloque>

              <Bloque n="08" titulo="Cómo ejercer sus derechos">
                <P>
                  Escríbanos al correo{' '}
                  <a className="link-ul num" href={`mailto:${EMPRESA.correo}`}>{EMPRESA.correo}</a>{' '}
                  o por WhatsApp al{' '}
                  <a className="link-ul num" href={EMPRESA.waLink} target="_blank" rel="noopener">
                    {EMPRESA.whatsapp}
                  </a>, indicando su nombre, un dato de contacto y qué necesita. Con eso basta.
                </P>
                <div className="card" style={{ padding: '1.5rem' }}>
                  <div className="label mb-4">Plazos de respuesta</div>
                  <div className="space-y-4">
                    <div>
                      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-ink)' }}>
                        Consultas
                      </div>
                      <p style={{ fontSize: 14.5, color: 'var(--color-ink-2)', lineHeight: 1.65 }}>
                        Máximo <span className="num">10</span> días hábiles. Si no alcanzamos, se lo
                        avisamos y tomamos hasta <span className="num">5</span> días hábiles más.
                      </p>
                    </div>
                    <div style={{ borderTop: '1px solid var(--color-line-2)', paddingTop: 16 }}>
                      <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--color-ink)' }}>
                        Reclamos
                      </div>
                      <p style={{ fontSize: 14.5, color: 'var(--color-ink-2)', lineHeight: 1.65 }}>
                        Máximo <span className="num">15</span> días hábiles. Si no alcanzamos, se lo
                        avisamos y tomamos hasta <span className="num">8</span> días hábiles más.
                      </p>
                    </div>
                  </div>
                </div>
              </Bloque>

              <Bloque n="09" titulo="Datos de niños y adolescentes">
                <P>
                  Nexus es un producto para empresas y esta página se dirige a personas mayores de
                  edad que actúan en nombre de una empresa prestadora. No recogemos a sabiendas
                  datos de menores de edad. Si detectamos que recibimos alguno, lo eliminamos.
                </P>
              </Bloque>

              <Bloque n="10" titulo="Datos sensibles">
                <P>
                  No pedimos ni necesitamos datos sensibles: nada de origen étnico, salud, datos
                  biométricos, orientación sexual, convicciones religiosas, políticas o filosóficas,
                  ni pertenencia a sindicatos. Le pedimos que tampoco los incluya en el campo de
                  mensaje libre.
                </P>
              </Bloque>

              <Bloque n="11" titulo="Navegación y cookies">
                <P>
                  Esta página <strong style={{ color: 'var(--color-ink)' }}>no instala cookies de
                  seguimiento, ni analítica, ni píxeles publicitarios</strong>. No sabemos quién
                  entra ni cuánto se queda. Las fuentes tipográficas se sirven desde este mismo
                  sitio, no desde un servicio externo.
                </P>
                <P>
                  Si más adelante agregamos alguna herramienta de medición, lo anunciaremos aquí y
                  le pediremos su consentimiento antes de activarla.
                </P>
              </Bloque>

              <Bloque n="12" titulo="Cómo protegemos la información">
                <P>
                  Aplicamos medidas razonables para que sus datos no se pierdan, no se filtren ni
                  los consulte quien no debe: acceso restringido al personal que atiende
                  cotizaciones, cuentas protegidas y conexión cifrada en este sitio.
                </P>
                <P>
                  Ningún sistema es infalible. Si llegara a ocurrir un incidente que afecte sus
                  datos, se lo informaremos y lo reportaremos a la autoridad, como exige la norma.
                </P>
              </Bloque>

              <Bloque n="13" titulo="Si algo no le parece">
                <P>
                  Escríbanos primero a nosotros: casi todo se resuelve rápido y sin formalismos. Si
                  no queda conforme con nuestra respuesta, puede acudir a la{' '}
                  <strong style={{ color: 'var(--color-ink)' }}>Superintendencia de Industria y
                  Comercio</strong>, que es la autoridad de protección de datos personales en
                  Colombia.
                </P>
              </Bloque>

              <Bloque n="14" titulo="Cambios en esta política">
                <P>
                  Si cambiamos algo de fondo, actualizamos esta página y la fecha de vigencia que
                  aparece arriba. Le recomendamos revisarla cuando vuelva a escribirnos.
                </P>
                <p className="num" style={{ fontSize: 15, color: 'var(--color-ink-3)' }}>Última actualización: {EMPRESA.vigencia}.</p>
              </Bloque>

              {/* ── Cierre ─────────────────────────────────────── */}
              <div className="card" style={{ padding: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
                <h2 style={{ fontSize: 20 }}>¿Le quedó alguna duda sobre sus datos?</h2>
                <p className="mt-3" style={{ fontSize: 15.5, color: 'var(--color-ink-2)', lineHeight: 1.7 }}>
                  Pregúntenos sin compromiso. Responder esto hace parte de nuestro trabajo, no es
                  un favor.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <a href={EMPRESA.waLink} target="_blank" rel="noopener" className="btn btn-solid">
                    <MessageCircle className="h-4 w-4" aria-hidden /> Escribir por WhatsApp
                  </a>
                  <a href={`mailto:${EMPRESA.correo}`} className="btn btn-line">
                    <Mail className="h-4 w-4" aria-hidden /> Escribir por correo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ── Pie ──────────────────────────────────────────────────── */}
      <footer style={{ background: 'var(--color-ink)' }}>
        <div
          className="mx-auto w-full max-w-[1140px] px-5 sm:px-8 flex flex-wrap items-center justify-between gap-4"
          style={{ paddingTop: 36, paddingBottom: 36 }}
        >
          <NexusLockup {...LOGO.privacidadPie} oscuro />
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/" style={{ fontSize: 14.5, color: '#c6d3c7' }}>Inicio</Link>
            <span className="num" style={{ fontSize: 12.5, color: '#98a89d' }}>
              © {new Date().getFullYear()} Wavenet · Nexus ESP
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
