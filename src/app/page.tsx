'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import {
  ArrowRight, ArrowUpRight, Check, Minus, Plus,
  MessageCircle, Mail, MapPin, Clock,
  SlidersHorizontal, Users, Gauge, Receipt, Banknote, HandCoins,
  MessagesSquare, Landmark, BarChart3, ShieldCheck, Building2, Plug,
  SearchCheck, Database, FileCheck2, GraduationCap, Rocket, LifeBuoy,
  Smartphone, ScanLine, Stamp,
} from 'lucide-react';
import { NexusMark, NexusLockup, WavenetMark, LOGO } from '@/components/brand';
import InvoiceDemo from '@/components/invoice-demo';
import ReaderApp from '@/components/reader-app';

const WA_NUM  = '573171557395';
const WA_SHOW = '317 155 7395';
const CORREO  = 'wavenetdevs@gmail.com';
const WAVENET = 'https://wavenetdevs-web.vercel.app/';
const CIUDAD  = 'Cali, Valle del Cauca — Colombia';

const waLink = (t: string) => `https://wa.me/${WA_NUM}?text=${encodeURIComponent(t)}`;

/* ═══════════════════════════════════════════════════════════════════
   PRIMITIVAS
   ═══════════════════════════════════════════════════════════════════ */

function Reveal({ children, className = '', delay = 0 }: {
  children: ReactNode; className?: string; delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('is-in'); io.disconnect(); } },
      { threshold: 0.1, rootMargin: '0px 0px -80px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

/* Un solo lugar define el ritmo vertical de toda la página. */
function Section({ id, band = false, children }: {
  id?: string; band?: boolean; children: ReactNode;
}) {
  return (
    <section
      id={id}
      style={{
        background: band ? 'var(--color-band)' : 'transparent',
        paddingTop:    'clamp(4.5rem, 9vw, 8rem)',
        paddingBottom: 'clamp(4.5rem, 9vw, 8rem)',
      }}
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">{children}</div>
    </section>
  );
}

/* Encabezado: una línea corta de acento, el rótulo y el título.
   Nada de reglas de ancho completo. */
function Encabezado({ eyebrow, titulo, bajada, centrado = false }: {
  eyebrow: string; titulo: ReactNode; bajada?: ReactNode; centrado?: boolean;
}) {
  return (
    <div
      style={{ marginBottom: 'clamp(2.5rem, 5vw, 4rem)' }}
      className={centrado ? 'text-center mx-auto max-w-[54ch]' : ''}
    >
      <div className={`flex items-center gap-2.5 mb-4 ${centrado ? 'justify-center' : ''}`}>
        <span style={{ width: 22, height: 2, borderRadius: 2, background: 'var(--color-verde)' }} aria-hidden />
        <span className="label">{eyebrow}</span>
      </div>
      <h2 style={{ fontSize: 'clamp(1.8rem, 3.6vw, 2.9rem)', maxWidth: centrado ? undefined : '20ch' }}>
        {titulo}
      </h2>
      {bajada && (
        <p
          className={`mt-5 ${centrado ? 'mx-auto' : ''}`}
          style={{ fontSize: 17, color: 'var(--color-ink-2)', lineHeight: 1.7, maxWidth: '62ch' }}
        >
          {bajada}
        </p>
      )}
    </div>
  );
}

/* Icono en recuadro suave. Da un ancla visual a cada bloque. */
function Icono({ children, tono = 'verde', size = 44 }: {
  children: ReactNode; tono?: 'verde' | 'azul' | 'coral' | 'neutro'; size?: number;
}) {
  const paleta = {
    verde:  ['var(--color-verde-tint)', 'var(--color-verde)'],
    azul:   ['var(--color-azul-tint)',  'var(--color-azul)'],
    coral:  ['var(--color-coral-tint)', 'var(--color-coral-text)'],
    neutro: ['var(--color-paper)',      'var(--color-ink-2)'],
  }[tono];
  return (
    <span
      className="inline-flex items-center justify-center shrink-0"
      style={{ width: size, height: size, borderRadius: size * 0.29, background: paleta[0], color: paleta[1] }}
      aria-hidden
    >
      {children}
    </span>
  );
}

/* Ítem de lista sin bordes: el aire hace la separación. */
function Item({ children, color = 'var(--color-verde)' }: { children: ReactNode; color?: string }) {
  return (
    <li className="flex items-start gap-3">
      <Check className="h-[17px] w-[17px] shrink-0 mt-[3px]" style={{ color }} aria-hidden />
      <span style={{ fontSize: 15, color: 'var(--color-ink-2)', lineHeight: 1.6 }}>{children}</span>
    </li>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   NAVEGACIÓN
   ═══════════════════════════════════════════════════════════════════ */

const NAV = [
  { t: 'Plataforma',   h: '#plataforma'  },
  { t: 'App de campo', h: '#campo'       },
  { t: 'Presupuesto',  h: '#presupuesto' },
  { t: 'Soluciones',   h: '#soluciones'  },
  { t: 'Preguntas',    h: '#preguntas'   },
];

function Nav() {
  const [fijo, setFijo] = useState(false);
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    const on = () => setFijo(window.scrollY > 16);
    on();
    window.addEventListener('scroll', on, { passive: true });
    return () => window.removeEventListener('scroll', on);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
      style={{
        background: fijo ? 'rgba(244,246,242,0.82)' : 'transparent',
        borderBottom: `1px solid ${fijo ? 'var(--color-line)' : 'transparent'}`,
        backdropFilter: fijo ? 'blur(14px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: fijo ? 'blur(14px) saturate(1.4)' : 'none',
      }}
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <div className="flex items-center justify-between" style={{ height: 88 }}>
          <a href="#inicio" aria-label="Nexus, inicio">
            <NexusLockup {...LOGO.navegacion} priority />
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Principal">
            {NAV.map((i) => (
              <a
                key={i.t}
                href={i.h}
                className="btn btn-quiet btn-sm"
                style={{ fontWeight: 500 }}
              >
                {i.t}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href="#cotizacion" className="btn btn-solid btn-sm hidden sm:inline-flex">
              Solicitar cotización
            </a>
            <button
              className="lg:hidden btn btn-line btn-sm"
              onClick={() => setAbierto((v) => !v)}
              aria-expanded={abierto}
              aria-controls="menu-movil"
            >
              {abierto ? 'Cerrar' : 'Menú'}
            </button>
          </div>
        </div>

        {abierto && (
          <div id="menu-movil" className="lg:hidden pb-5 a-settle">
            <nav className="card p-3 flex flex-col gap-1" aria-label="Principal, móvil">
              {NAV.map((i) => (
                <a
                  key={i.t}
                  href={i.h}
                  onClick={() => setAbierto(false)}
                  className="btn btn-quiet"
                  style={{ justifyContent: 'flex-start', fontWeight: 500 }}
                >
                  {i.t}
                </a>
              ))}
              <a href="#cotizacion" onClick={() => setAbierto(false)} className="btn btn-solid mt-1">
                Solicitar cotización
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   HERO
   ═══════════════════════════════════════════════════════════════════ */

function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden"
      style={{ paddingTop: 148, paddingBottom: 'clamp(3.5rem, 7vw, 6rem)' }}
    >
      {/* Un halo verde muy tenue detrás del titular. Es el único
          efecto atmosférico de la página. */}
      <div
        aria-hidden
        className="pointer-events-none absolute"
        style={{
          top: -260, left: '50%', transform: 'translateX(-50%)',
          width: 900, height: 620,
          background: 'radial-gradient(ellipse at center, rgba(14,122,69,0.07) 0%, transparent 68%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-[1140px] px-5 sm:px-8">
        <div className="text-center mx-auto max-w-[52rem]">
          <div className="a-settle pill">
            <span
              className="inline-block"
              style={{ width: 6, height: 6, borderRadius: 99, background: 'var(--color-verde)' }}
              aria-hidden
            />
            Plataforma para empresas de servicios públicos · Colombia
          </div>

          <h1
            className="a-settle d-1"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.6rem)', marginTop: 30, lineHeight: 1.06 }}
          >
            Cada lectura, cada factura,{' '}
            <span style={{ color: 'var(--color-verde)' }}>cada peso recaudado.</span>
          </h1>

          <p
            className="a-settle d-2 mx-auto"
            style={{ fontSize: 18.5, lineHeight: 1.7, color: 'var(--color-ink-2)', maxWidth: '46rem', marginTop: 26 }}
          >
            Nexus conecta la toma de lecturas en campo con la facturación, el recaudo,
            la cartera y el presupuesto de su empresa de servicios públicos.
            Un solo sistema, una sola verdad sobre la operación.
          </p>

          <div className="a-settle d-3 flex flex-wrap items-center justify-center gap-3" style={{ marginTop: 34 }}>
            <a href="#cotizacion" className="btn btn-solid">
              Solicitar cotización <ArrowRight className="h-4 w-4" aria-hidden />
            </a>
            <a href="#plataforma" className="btn btn-line">Ver los módulos</a>
          </div>

          <p
            className="a-settle d-4 flex items-center justify-center gap-2 flex-wrap"
            style={{ fontSize: 14, color: 'var(--color-ink-3)', marginTop: 26 }}
          >
            <NexusMark {...LOGO.enLinea} />
            En producción con una empresa prestadora
            <strong style={{ color: 'var(--color-ink-2)', fontWeight: 600 }}>desde 2024</strong>
          </p>
        </div>

        {/* La firma de la página */}
        <div className="a-settle d-4" style={{ marginTop: 'clamp(3.5rem, 7vw, 5.5rem)' }}>
          <div className="flex items-center justify-between gap-4 mb-3.5 flex-wrap px-1">
            <span className="label">Un ciclo completo, de la lectura al recaudo</span>
            <span style={{ fontSize: 12.5, color: 'var(--color-ink-3)' }}>
              Datos de demostración · pase el cursor para pausar
            </span>
          </div>
          <InvoiceDemo />
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EN PRODUCCIÓN
   ═══════════════════════════════════════════════════════════════════ */

const EN_PRODUCCION = [
  'Facturación mensual del ciclo completo',
  'Recaudo con registro y trazabilidad de pagos',
  'Cartera y acuerdos de pago por cuotas',
  'PQR con causal, respuesta y seguimiento',
  'Ejecución presupuestal con CDP y RP',
  'Reportes exportables de toda la operación',
];

function Produccion() {
  return (
    <Section band>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-20 lg:items-center">
        <Reveal>
          <Encabezado
            eyebrow="Operando hoy"
            titulo={<>Hay una prestadora facturando con Nexus desde 2024.</>}
            bajada="No es un piloto ni una maqueta. Es una empresa de servicios públicos emitiendo facturas reales, recaudando y rindiendo su presupuesto sobre esta plataforma, mes tras mes."
          />
        </Reveal>

        <Reveal delay={80}>
          <div className="card" style={{ padding: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <div className="label mb-5">Qué corre en producción</div>
            <ul className="space-y-4">
              {EN_PRODUCCION.map((t) => <Item key={t}>{t}</Item>)}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   EL CONTRASTE
   ═══════════════════════════════════════════════════════════════════ */

const CONTRASTE = [
  { a: 'La lectura se anota en una libreta y se digita días después.',
    b: 'El técnico captura la lectura en campo y llega al sistema el mismo día.' },
  { a: 'La factura se arma en una hoja de cálculo que solo una persona entiende.',
    b: 'La factura se liquida con la tarifa parametrizada y se emite en lote.' },
  { a: 'El recaudo se concilia a mano y la cartera nunca cuadra del todo.',
    b: 'Cada pago descarga la cartera del suscriptor en el momento del registro.' },
  { a: 'El presupuesto vive aparte, en otro archivo y con otros números.',
    b: 'Los CDP y RP se expiden desde el mismo sistema que emite las facturas.' },
];

function Contraste() {
  return (
    <Section>
      <Reveal>
        <Encabezado
          centrado
          eyebrow="Por qué un solo sistema"
          titulo={<>Una operación dispersa cuesta más de lo que parece.</>}
          bajada="Cuando la lectura, la factura, el recaudo y el presupuesto viven en archivos distintos, nadie puede responder con certeza cuánto se facturó, cuánto entró y cuánto falta."
        />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2 max-w-[62rem] mx-auto">
        <Reveal>
          <div className="h-full" style={{ padding: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <div className="label mb-6">Sin un sistema único</div>
            <ul className="space-y-5">
              {CONTRASTE.map((c) => (
                <li key={c.a} className="flex items-start gap-3">
                  <Minus className="h-[17px] w-[17px] shrink-0 mt-[3px]" style={{ color: '#7d8c81' }} aria-hidden />
                  <span style={{ fontSize: 15, color: 'var(--color-ink-3)', lineHeight: 1.6 }}>{c.a}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="card h-full" style={{ padding: 'clamp(1.75rem, 3vw, 2.25rem)' }}>
            <div className="label mb-6" style={{ color: 'var(--color-verde)' }}>Con Nexus</div>
            <ul className="space-y-5">
              {CONTRASTE.map((c) => (
                <li key={c.b} className="flex items-start gap-3">
                  <Check className="h-[17px] w-[17px] shrink-0 mt-[3px]" style={{ color: 'var(--color-verde)' }} aria-hidden />
                  <span style={{ fontSize: 15, color: 'var(--color-ink)', lineHeight: 1.6, fontWeight: 500 }}>{c.b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   MÓDULOS
   ═══════════════════════════════════════════════════════════════════ */

const MODULOS = [
  { ic: SlidersHorizontal, nom: 'Configuración y catálogos', des: 'Deja todo listo para su empresa antes del primer ciclo.',
    items: ['Catálogos y datos maestros', 'Tarifas con histórico de cambios', 'Plantilla de factura editable'] },
  { ic: Users, nom: 'Clientes y contratos', des: 'La ficha del suscriptor como fuente única de verdad.',
    items: ['Búsqueda por contrato o nombre', 'Deuda consolidada por cliente', 'Histórico de facturación'] },
  { ic: Gauge, nom: 'Lecturas', des: 'El ciclo de lectura, controlado de principio a fin.',
    items: ['Carga masiva desde Excel', 'Reporte de clientes sin lectura', 'Impresión del lote de lectura'] },
  { ic: Receipt, nom: 'Facturación', des: 'El núcleo: de la lectura a la factura emitida.',
    items: ['Generación en lote desde el ciclo', 'Notas crédito con aprobación', 'Recálculo e historial de cambios', 'Envío de la factura por correo'] },
  { ic: Banknote, nom: 'Recaudo', des: 'Cada pago registrado, con rastro.',
    items: ['Registro de pagos por canal', 'Reporte de cortes', 'Conciliación por periodo'] },
  { ic: HandCoins, nom: 'Cartera y financiación', des: 'Recuperar sin perder el control del acuerdo.',
    items: ['Cartera por suscriptor y por edad', 'Acuerdos de pago por cuotas', 'Abono y seguimiento de cuota'] },
  { ic: MessagesSquare, nom: 'PQR', des: 'Peticiones, quejas y reclamos en un solo expediente.',
    items: ['Radicación y causal', 'Respuestas y trazabilidad', 'Seguimiento de estado'] },
  { ic: Landmark, nom: 'Presupuesto público', des: 'La ejecución presupuestal, dentro del mismo sistema.',
    items: ['Rubros, cuentas y terceros', 'CDP y RP con certificado', 'Seguimiento de la ejecución'] },
  { ic: BarChart3, nom: 'Reportes', des: 'Responder con cifras, no con estimaciones.',
    items: ['Facturación, recaudo y cartera', 'Tendencia y comportamiento de tarifas', 'Exportación a hoja de cálculo'] },
  { ic: ShieldCheck, nom: 'Usuarios y roles', des: 'Cada persona ve lo que le corresponde.',
    items: ['Perfiles y permisos', 'Control de acceso por módulo', 'Registro de actividad'] },
  { ic: Building2, nom: 'Varias empresas', des: 'Cada prestadora con su información aparte.',
    items: ['Datos aislados por empresa', 'Parametrización independiente', 'Administración central'] },
  { ic: Plug, nom: 'Integración', des: 'Conectar Nexus con lo que la empresa ya usa.',
    items: ['Conexión con otros sistemas', 'Conexión con la aplicación de lectura', 'Conexiones a la medida según el alcance'] },
];

function Modulos() {
  return (
    <Section id="plataforma" band>
      <Reveal>
        <Encabezado
          centrado
          eyebrow="La plataforma"
          titulo={<>Todo lo que una prestadora hace en el mes, en un solo lugar.</>}
          bajada="Los módulos comparten los mismos clientes, las mismas tarifas y el mismo periodo, así que las cifras coinciden entre áreas sin conciliar nada a mano."
        />
      </Reveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {MODULOS.map((m, i) => (
          <Reveal key={m.nom} delay={(i % 3) * 70}>
            <article className="card card-hover h-full" style={{ padding: '1.75rem' }}>
              <Icono><m.ic className="h-[21px] w-[21px]" strokeWidth={1.75} /></Icono>
              <h3 className="mt-4" style={{ fontSize: 17.5 }}>{m.nom}</h3>
              <p className="mt-2" style={{ fontSize: 14.5, color: 'var(--color-ink-3)', lineHeight: 1.6 }}>
                {m.des}
              </p>
              <ul className="mt-5 space-y-2.5">
                {m.items.map((it) => (
                  <li key={it} className="flex items-start gap-2.5">
                    <span
                      className="shrink-0"
                      style={{ width: 5, height: 5, marginTop: 9, borderRadius: 99, background: 'var(--color-verde)', opacity: 0.55 }}
                      aria-hidden
                    />
                    <span style={{ fontSize: 14, color: 'var(--color-ink-2)', lineHeight: 1.55 }}>{it}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   APLICACIÓN DE LECTURA PARA TÉCNICOS
   ═══════════════════════════════════════════════════════════════════ */

const CAMPO_INCLUYE = [
  { ic: Smartphone, t: 'Captura en campo', d: 'Flujo simple para el personal técnico autorizado, pensado para la ruta y no para el escritorio.' },
  { ic: ScanLine,   t: 'Lectura asistida por foto', d: 'La aplicación lee el número del medidor desde la fotografía y lo propone. El técnico confirma o corrige.' },
  { ic: Users,      t: 'Control por técnico', d: 'Gestión de los accesos del personal de campo según el plan contratado.' },
  { ic: Plug,       t: 'Conexión con Nexus', d: 'La lectura entra directo al ciclo de facturación, sin volver a digitarla.' },
  { ic: LifeBuoy,   t: 'Soporte y continuidad', d: 'Nosotros mantenemos la aplicación funcionando, con acompañamiento y correcciones incluidas.' },
];

function Campo() {
  return (
    <Section id="campo">
      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
        <div>
          <Reveal>
            <Encabezado
              eyebrow="Solución de campo"
              titulo={<>La lectura deja de ser el eslabón débil.</>}
              bajada="La aplicación de lectura para técnicos toma el registro del medidor en la misma ruta: el técnico saca la foto, la aplicación propone el número y él confirma. Al conectarse con Nexus, el dato pasa del medidor a la factura sin libreta y sin volver a digitarlo."
            />
          </Reveal>

          <Reveal delay={80}>
            <div
              className="card flex items-start gap-4"
              style={{ padding: '1.375rem 1.5rem', background: 'var(--color-azul-tint)', borderColor: '#cfe4ef', boxShadow: 'none' }}
            >
              <Icono tono="azul" size={40}><ScanLine className="h-[19px] w-[19px]" strokeWidth={1.75} /></Icono>
              <div>
                <div className="label mb-1.5" style={{ color: 'var(--color-azul)' }}>Alcance del plan base</div>
                <p style={{ fontSize: 14.5, color: 'var(--color-ink-2)', lineHeight: 1.65 }}>
                  El plan base no guarda el histórico de las fotos capturadas. Las conexiones con
                  otros sistemas se revisan y se cotizan aparte.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <ReaderApp />
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <div className="label mb-6">Qué incluye</div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CAMPO_INCLUYE.map((c) => (
            <div key={c.t} className="card card-hover h-full" style={{ padding: '1.625rem' }}>
              <Icono tono="azul"><c.ic className="h-[21px] w-[21px]" strokeWidth={1.75} /></Icono>
              <h3 className="mt-4" style={{ fontSize: 16.5 }}>{c.t}</h3>
              <p className="mt-2" style={{ fontSize: 14.5, color: 'var(--color-ink-3)', lineHeight: 1.6 }}>
                {c.d}
              </p>
            </div>
          ))}
          <div
            className="card flex flex-col justify-center h-full"
            style={{ padding: '1.625rem', background: 'var(--color-paper)', boxShadow: 'none' }}
          >
            <p style={{ fontSize: 14.5, color: 'var(--color-ink-2)', lineHeight: 1.65 }}>
              Se licencia según el tamaño de la operación: suscriptores atendidos, lecturas al mes
              y número de técnicos.
            </p>
            <a href="#soluciones" className="link-ul mt-3" style={{ fontSize: 14.5 }}>
              Ver las bandas de escala
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PRESUPUESTO PÚBLICO
   ═══════════════════════════════════════════════════════════════════ */

const PRESUPUESTO: [typeof Landmark, string, string][] = [
  [Landmark,   'Rubros y cuentas', 'Estructura presupuestal parametrizada según el alcance definido para la empresa.'],
  [Users,      'Terceros y proveedores', 'Registro y búsqueda de terceros asociados a la ejecución.'],
  [FileCheck2, 'CDP', 'Certificado de disponibilidad presupuestal, con su consecutivo y su certificado imprimible.'],
  [Stamp,      'RP', 'Registro presupuestal expedido contra el CDP, con certificado y trazabilidad.'],
  [BarChart3,  'Seguimiento', 'Consulta de la ejecución y del saldo disponible por rubro.'],
];

/* Un CDP tal como sale del sistema. Datos de ejemplo. */
function Certificado() {
  return (
    <div className="card overflow-hidden" style={{ boxShadow: 'var(--shadow-lift)' }}>
      <div
        className="flex items-start justify-between gap-4"
        style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--color-line)' }}
      >
        <div>
          <div className="label" style={{ fontSize: 9.5 }}>Certificado de disponibilidad presupuestal</div>
          <div className="num" style={{ fontSize: 19, fontWeight: 600, color: 'var(--color-ink)', marginTop: 4 }}>
            CDP 2026-0142
          </div>
        </div>
        <Icono tono="verde" size={40}><FileCheck2 className="h-[19px] w-[19px]" strokeWidth={1.75} /></Icono>
      </div>

      <div style={{ padding: '1.375rem 1.5rem' }}>
        <div className="space-y-4">
          {[
            ['Rubro', '2.1.2.02.02.008'],
            ['Objeto', 'Mantenimiento de redes de distribución'],
            ['Vigencia fiscal', '2026'],
            ['Fecha de expedición', '12 ago 2026'],
          ].map(([r, v]) => (
            <div key={r}>
              <div className="label" style={{ fontSize: 9 }}>{r}</div>
              <div
                className={r === 'Objeto' ? '' : 'num'}
                style={{ fontSize: 13.5, color: 'var(--color-ink)', fontWeight: 500, marginTop: 2 }}
              >
                {v}
              </div>
            </div>
          ))}
        </div>

        <div
          className="flex items-baseline justify-between gap-3 mt-5"
          style={{ background: 'var(--color-ink)', borderRadius: 12, padding: '13px 16px' }}
        >
          <span className="label" style={{ fontSize: 9.5, color: '#98a89d' }}>Valor certificado</span>
          <span
            className="num"
            style={{ fontSize: 21, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.02em' }}
          >
            $ 48.500.000
          </span>
        </div>

        <div
          className="flex items-baseline justify-between gap-3 mt-3"
          style={{ background: 'var(--color-verde-tint)', borderRadius: 12, padding: '11px 16px' }}
        >
          <span className="label" style={{ fontSize: 9.5, color: 'var(--color-verde-deep)' }}>
            Saldo del rubro
          </span>
          <span className="num" style={{ fontSize: 14.5, fontWeight: 600, color: 'var(--color-verde-deep)' }}>
            $ 211.300.000
          </span>
        </div>
      </div>

      <div
        className="flex items-center justify-between gap-4"
        style={{ padding: '1rem 1.5rem', background: 'var(--color-paper)', borderTop: '1px dashed #cdd8ce' }}
      >
        <span className="num" style={{ fontSize: 10.5, color: 'var(--color-ink-3)', lineHeight: 1.5 }}>
          Documento de ejemplo<br />generado por Nexus
        </span>
        <span
          className="flex flex-col items-center justify-center"
          style={{
            border: '2px solid var(--color-verde)', borderRadius: 9,
            color: 'var(--color-verde)', transform: 'rotate(-8deg)', padding: '5px 12px',
          }}
        >
          <span className="display-wide" style={{ fontSize: 14, fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1 }}>
            EXPEDIDO
          </span>
          <span className="num" style={{ fontSize: 7.5, letterSpacing: '0.08em', marginTop: 2 }}>
            12 AGO 2026
          </span>
        </span>
      </div>
    </div>
  );
}

function Presupuesto() {
  return (
    <Section id="presupuesto" band>
      <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
        <div>
          <Reveal>
            <Encabezado
              eyebrow="Prestadoras con presupuesto público"
              titulo={<>CDP y RP se expiden en el mismo sistema que emite las facturas.</>}
              bajada="Muchas empresas municipales llevan la ejecución presupuestal en un archivo aparte, con números que no coinciden con los del área comercial. En Nexus el presupuesto es un módulo más: los rubros, las cuentas, los terceros y los certificados viven junto al recaudo que los alimenta."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="grid gap-4 sm:grid-cols-2">
              {PRESUPUESTO.map(([Ic, t, d], i) => (
                <div
                  key={t}
                  className={`card card-hover ${i === PRESUPUESTO.length - 1 ? 'sm:col-span-2' : ''}`}
                  style={{ padding: '1.375rem' }}
                >
                  <div className="flex items-center gap-3">
                    <Icono size={36}><Ic className="h-[17px] w-[17px]" strokeWidth={1.75} /></Icono>
                    <div className="display-wide" style={{ fontSize: 15.5, fontWeight: 700, color: 'var(--color-ink)' }}>
                      {t}
                    </div>
                  </div>
                  <p className="mt-2.5" style={{ fontSize: 14, color: 'var(--color-ink-2)', lineHeight: 1.6 }}>
                    {d}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="lg:sticky lg:top-32">
            <Certificado />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   IMPLEMENTACIÓN — una secuencia real, por eso va numerada
   ═══════════════════════════════════════════════════════════════════ */

const IMPLEMENTACION = [
  { ic: SearchCheck, n: '01', t: 'Diagnóstico y alcance', d: 'Revisamos su operación, el número de suscriptores y los módulos que necesita. De aquí sale la cotización.' },
  { ic: SlidersHorizontal, n: '02', t: 'Parametrización',       d: 'Configuramos catálogos, tarifas, estratos, reglas de liquidación y el diseño de su factura.' },
  { ic: Database, n: '03', t: 'Carga de información',  d: 'Subimos la base de suscriptores y los saldos con los que arranca la operación.' },
  { ic: FileCheck2, n: '04', t: 'Validación funcional',  d: 'Corremos un ciclo de prueba y comparamos las cifras contra su facturación actual, factura por factura.' },
  { ic: GraduationCap, n: '05', t: 'Capacitación',          d: 'Formamos a los equipos de comercial, cartera, PQR y presupuesto en el módulo que le corresponde a cada uno.' },
  { ic: Rocket, n: '06', t: 'Salida en vivo',        d: 'Emitimos el primer ciclo real con acompañamiento directo del equipo de Wavenet.' },
  { ic: LifeBuoy, n: '07', t: 'Continuidad',           d: 'Acompañamiento, vigilancia del servicio, correcciones y mejoras continuas a partir del uso real.' },
];

function Implementacion() {
  return (
    <Section>
      <Reveal>
        <Encabezado
          centrado
          eyebrow="Puesta en marcha"
          titulo={<>Nadie compra un software; compra el día en que empieza a funcionar.</>}
          bajada="La implementación es parte de la propuesta, no un servicio aparte. El paso 04 es el que más tranquilidad da: no salimos en vivo hasta que su ciclo de prueba cuadre contra el que usted ya emite."
        />
      </Reveal>

      <ol className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
        {IMPLEMENTACION.map((p, i) => (
          <Reveal key={p.n} delay={(i % 4) * 60}>
            <li>
              <div className="flex items-center gap-3">
                <Icono size={40}><p.ic className="h-[19px] w-[19px]" strokeWidth={1.75} /></Icono>
                <span
                  className="num"
                  style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--color-ink-3)', letterSpacing: '0.1em' }}
                >
                  {p.n}
                </span>
              </div>
              <h3 className="mt-4" style={{ fontSize: 16.5 }}>{p.t}</h3>
              <p className="mt-2" style={{ fontSize: 14.5, color: 'var(--color-ink-3)', lineHeight: 1.6 }}>
                {p.d}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   SOLUCIONES Y ESCALA — sin precios: todo bajo cotización
   ═══════════════════════════════════════════════════════════════════ */

const SOLUCIONES = [
  {
    nom: 'Nexus ESP',
    lema: 'El sistema comercial y administrativo de la prestadora.',
    acento: 'var(--color-verde)', tinte: 'var(--color-verde-tint)', destacado: false,
    incluye: [
      'Licencia de uso e implementación inicial',
      'Configuración, Facturación, Recaudo, PQR y Presupuesto',
      'Parametrización base según el alcance contratado',
      'El sistema alojado en la nube, uno por empresa',
      'Soporte operativo y funcional de primer nivel',
      'Correcciones y vigilancia permanente del servicio',
      'Bolsa básica para ajustes menores o remodelación de la factura',
    ],
    escalaRot: 'Se licencia por cantidad de usuarios o suscriptores',
    escala: ['Hasta 2.500', '2.501 – 5.000', '5.001 – 10.000', '10.001 – 20.000', 'Más de 20.000'],
  },
  {
    nom: 'Nexus + Aplicación de lectura',
    lema: 'Una operación conectada entre campo, facturación y control.',
    acento: 'var(--color-coral-text)', tinte: 'var(--color-coral-tint)', destacado: true,
    incluye: [
      'Todo lo de Nexus ESP: Configuración, Facturación, Recaudo, PQR y Presupuesto',
      'Todo lo de la aplicación de lectura para técnicos',
      'Trazabilidad entre la lectura, la operación de campo y el proceso comercial',
      'Menos reprocesos y menos errores por digitación manual',
      'Una sola implementación, un solo acompañamiento',
    ],
    escalaRot: 'Se licencia por cantidad de usuarios o suscriptores',
    escala: ['Hasta 2.500', '2.501 – 5.000', '5.001 – 10.000', '10.001 – 20.000', 'Más de 20.000'],
  },
  {
    nom: 'Aplicación de lectura para técnicos',
    lema: 'La toma de lecturas en campo, asistida por foto.',
    acento: 'var(--color-azul)', tinte: 'var(--color-azul-tint)', destacado: false,
    incluye: [
      'Aplicación móvil para el personal técnico autorizado',
      'Lectura asistida: la aplicación propone el número desde la foto',
      'Control de accesos por técnico',
      'Mantenemos la aplicación funcionando, con soporte incluido',
      'Integración con Nexus ESP cuando se adquiere el conjunto',
    ],
    escalaRot: 'Se licencia por escala operativa',
    escala: [
      'Hasta 2.500 suscriptores · 2.500 lecturas/mes · 5 técnicos',
      '2.501 – 5.000 · 5.000 lecturas/mes · 10 técnicos',
      '5.001 – 10.000 · 10.000 lecturas/mes · 20 técnicos',
      '10.001 – 20.000 · 20.000 lecturas/mes · 40 técnicos',
      'Más de 20.000 · a definir según la operación',
    ],
  },
];

function Soluciones() {
  return (
    <Section id="soluciones" band>
      <Reveal>
        <Encabezado
          centrado
          eyebrow="Soluciones y escala"
          titulo={<>Tres formas de contratar. Todas bajo cotización.</>}
          bajada={
            <>
              No publicamos tarifas porque ninguna empresa prestadora se parece a otra.
              El modelo siempre es el mismo — un <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>pago
              único de licencia e implementación</strong> y una <strong style={{ color: 'var(--color-ink)', fontWeight: 600 }}>mensualidad
              de soporte y continuidad</strong> — y la cifra se define después de revisar su operación.
            </>
          }
        />
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-3">
        {SOLUCIONES.map((s, i) => (
          <Reveal key={s.nom} delay={i * 80}>
            <article
              className="card flex flex-col h-full"
              style={{
                padding: 'clamp(1.75rem, 3vw, 2.125rem)',
                borderColor: s.destacado ? 'rgba(194,58,24,0.3)' : undefined,
                boxShadow: s.destacado ? 'var(--shadow-lift)' : undefined,
              }}
            >
              {s.destacado && (
                <span
                  className="label self-start mb-4"
                  style={{
                    color: s.acento, background: s.tinte,
                    padding: '5px 11px', borderRadius: 999, fontSize: 10,
                  }}
                >
                  Mayor integración
                </span>
              )}

              <h3 style={{ fontSize: 20 }}>{s.nom}</h3>
              <p className="mt-2" style={{ fontSize: 15, color: 'var(--color-ink-3)', lineHeight: 1.6 }}>
                {s.lema}
              </p>

              <div className="label mt-7 mb-4">Qué incluye</div>
              <ul className="space-y-3 grow">
                {s.incluye.map((it) => <Item key={it} color={s.acento}>{it}</Item>)}
              </ul>

              <div className="label mt-7 mb-3">{s.escalaRot}</div>
              <ul className="space-y-2">
                {s.escala.map((e) => (
                  <li
                    key={e}
                    className="num"
                    style={{
                      fontSize: 12.5, color: 'var(--color-ink-2)', lineHeight: 1.5,
                      background: 'var(--color-paper)', borderRadius: 8, padding: '7px 11px',
                    }}
                  >
                    {e}
                  </li>
                ))}
              </ul>

              <div className="mt-7 pt-6" style={{ borderTop: '1px solid var(--color-line-2)' }}>
                <div className="label mb-1.5">Valor</div>
                <div className="display-wide" style={{ fontSize: 21, fontWeight: 700, color: 'var(--color-ink)' }}>
                  Bajo cotización
                </div>
                <a href="#cotizacion" className={`btn ${s.destacado ? 'btn-solid' : 'btn-line'} w-full mt-4`}>
                  Cotizar esta opción <ArrowRight className="h-4 w-4" aria-hidden />
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PREGUNTAS
   ═══════════════════════════════════════════════════════════════════ */

const PREGUNTAS: [string, ReactNode][] = [
  ['¿Cuánto cuesta Nexus?',
    <>Todos los planes se manejan bajo cotización. El valor depende de tres cosas: la cantidad
      de usuarios o suscriptores de su empresa, los módulos que necesite y si va a operar con
      la aplicación de lectura para técnicos. Escríbanos por WhatsApp con el número de
      suscriptores y le devolvemos una propuesta con el alcance detallado.</>],
  ['¿Por qué hay un pago único y además una mensualidad?',
    <>El pago único cubre la licencia, la implementación, la parametrización y la salida en
      vivo: que la solución quede operando en su empresa, no solamente que le entreguemos unas
      claves. La mensualidad cubre el alojamiento, el soporte, la vigilancia del servicio,
      las correcciones y la mejora continua.</>],
  ['¿Nexus sirve para agua o aseo, o solo para energía?',
    <>Nexus se parametriza por servicio, tarifa y regla de liquidación, así que la estructura
      admite otros servicios públicos domiciliarios. Hoy opera en producción en energía. Si su
      empresa presta otro servicio, lo revisamos en el diagnóstico y lo dejamos por escrito
      en la cotización.</>],
  ['Somos una empresa municipal con presupuesto público. ¿Nexus lo maneja?',
    <>Sí. El módulo de presupuesto expide CDP y RP con su certificado y su consecutivo, y
      permite hacer seguimiento a la ejecución por rubro. Está en el mismo sistema que emite
      las facturas, así que la ejecución y el recaudo no viven en archivos distintos.</>],
  ['¿Podemos traer la información que ya tenemos?',
    <>La carga de la base de suscriptores y de los saldos de arranque hace parte de la
      implementación. Las migraciones históricas masivas —años de facturación anterior— se
      evalúan y se cotizan aparte, porque el esfuerzo depende del estado y del formato de
      la información.</>],
  ['¿Qué pasa si crecemos y cambiamos de banda?',
    <>Las bandas están definidas por rangos de suscriptores justamente para eso. Cuando su
      base crece y pasa de banda, se ajusta la mensualidad al nuevo rango. Se lo informamos
      antes, nunca después.</>],
  ['¿Se puede integrar con el ERP o con otros sistemas que ya usamos?',
    <>Sí. Nexus puede conectarse con otros sistemas para intercambiar información. Las
      conexiones especiales, o con sistemas antiguos, no vienen incluidas en el paquete base:
      las revisamos caso por caso y se cotizan por separado.</>],
  ['¿Cuánto demora la puesta en marcha?',
    <>Depende del alcance, del número de suscriptores y del estado de la información que
      recibamos. Definimos el cronograma en el diagnóstico y queda en la cotización. No
      salimos en vivo hasta que el ciclo de prueba cuadre contra el que su empresa ya emite.</>],
];

function Preguntas() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <Section id="preguntas">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            <Encabezado
              eyebrow="Preguntas frecuentes"
              titulo={<>Lo que preguntan antes de cotizar.</>}
              bajada={
                <>
                  ¿Falta la suya? Escríbanos por WhatsApp al{' '}
                  <a className="link-ul num" href={waLink('Hola, tengo una pregunta sobre Nexus ESP.')} target="_blank" rel="noopener">
                    {WA_SHOW}
                  </a>.
                </>
              }
            />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="card" style={{ padding: 'clamp(0.5rem, 1.5vw, 1rem)' }}>
            {PREGUNTAS.map(([q, a], i) => {
              const on = abierta === i;
              return (
                <div
                  key={q}
                  style={{ borderTop: i === 0 ? 'none' : '1px solid var(--color-line-2)' }}
                >
                  <h3>
                    <button
                      onClick={() => setAbierta(on ? null : i)}
                      aria-expanded={on}
                      className="w-full flex items-start justify-between gap-5 text-left"
                      style={{ padding: '1.25rem 1.25rem' }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-display)', fontStretch: '104%',
                          fontWeight: 600, fontSize: 16.5,
                          color: on ? 'var(--color-verde)' : 'var(--color-ink)',
                          lineHeight: 1.4,
                          transition: 'color .18s ease',
                        }}
                      >
                        {q}
                      </span>
                      <span
                        className="shrink-0 mt-0.5 flex items-center justify-center"
                        style={{
                          width: 26, height: 26, borderRadius: 8,
                          background: on ? 'var(--color-verde)' : 'var(--color-paper)',
                          transition: 'background .18s ease',
                        }}
                        aria-hidden
                      >
                        {on
                          ? <Minus className="h-3.5 w-3.5" style={{ color: '#fff' }} />
                          : <Plus  className="h-3.5 w-3.5" style={{ color: 'var(--color-ink-2)' }} />}
                      </span>
                    </button>
                  </h3>
                  {on && (
                    <div className="a-ink" style={{ padding: '0 3.75rem 1.5rem 1.25rem' }}>
                      <p style={{ fontSize: 15.5, color: 'var(--color-ink-2)', lineHeight: 1.72 }}>{a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   COTIZACIÓN
   ═══════════════════════════════════════════════════════════════════ */

const BANDAS = [
  'Hasta 2.500 suscriptores', 'Entre 2.501 y 5.000', 'Entre 5.001 y 10.000',
  'Entre 10.001 y 20.000', 'Más de 20.000', 'Todavía no lo tenemos definido',
];
const INTERES = [
  'Nexus ESP', 'Aplicación de lectura para técnicos',
  'Nexus + Aplicación de lectura', 'Aún no lo sé, quiero asesoría',
];
const MODULOS_INTERES = [
  'Facturación', 'Recaudo', 'Cartera y financiación',
  'PQR', 'Presupuesto (CDP y RP)', 'Reportes',
];

function Cotizacion() {
  const [f, setF] = useState({
    empresa: '', nombre: '', cargo: '', correo: '', telefono: '',
    banda: BANDAS[0], interes: INTERES[0], servicio: '', mensaje: '',
  });
  const [mods, setMods] = useState<string[]>([]);
  const [acepta, setAcepta] = useState(false);

  const set = (k: keyof typeof f) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((s) => ({ ...s, [k]: e.target.value }));

  const toggleMod = (m: string) =>
    setMods((s) => (s.includes(m) ? s.filter((x) => x !== m) : [...s, m]));

  const armarMensaje = () => [
    'Solicitud de cotización — Nexus ESP', '',
    `Empresa: ${f.empresa || '—'}`,
    `Contacto: ${f.nombre || '—'}${f.cargo ? ` (${f.cargo})` : ''}`,
    `Correo: ${f.correo || '—'}`,
    `Teléfono: ${f.telefono || '—'}`,
    `Servicio que presta: ${f.servicio || '—'}`,
    `Suscriptores: ${f.banda}`,
    `Solución de interés: ${f.interes}`,
    `Módulos: ${mods.length ? mods.join(', ') : 'Por definir'}`,
    f.mensaje ? `\nNota: ${f.mensaje}` : '',
  ].filter(Boolean).join('\n');

  const enviar = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(waLink(armarMensaje()), '_blank', 'noopener');
  };

  const porCorreo = () => {
    if (!acepta) return;
    const asunto = encodeURIComponent(`Solicitud de cotización Nexus — ${f.empresa || 'nueva empresa'}`);
    window.location.href = `mailto:${CORREO}?subject=${asunto}&body=${encodeURIComponent(armarMensaje())}`;
  };

  const canal = 'flex items-start gap-4 p-5 transition-colors';

  return (
    <Section id="cotizacion" band>
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <Reveal>
            <Encabezado
              eyebrow="Hablemos"
              titulo={<>Cuéntenos el tamaño de su operación y le armamos la propuesta.</>}
              bajada="Diligencie el formulario y se abre WhatsApp con la solicitud ya redactada, o escríbanos directo por el canal que prefiera."
            />
          </Reveal>

          <Reveal delay={80}>
            <div className="card overflow-hidden" style={{ padding: 0 }}>
              <a
                href={waLink('Hola, quiero cotizar Nexus ESP para mi empresa de servicios públicos.')}
                target="_blank" rel="noopener"
                className={`${canal} hover:bg-[var(--color-paper)]`}
              >
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--color-verde-tint)' }}
                  aria-hidden
                >
                  <MessageCircle className="h-[19px] w-[19px]" style={{ color: 'var(--color-verde)' }} />
                </span>
                <span className="min-w-0">
                  <span className="label block mb-1">WhatsApp · cotizaciones</span>
                  <span className="num" style={{ fontSize: 17.5, fontWeight: 600, color: 'var(--color-ink)' }}>
                    {WA_SHOW}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 ml-auto shrink-0 mt-1" style={{ color: 'var(--color-ink-3)' }} aria-hidden />
              </a>

              <a
                href={`mailto:${CORREO}?subject=${encodeURIComponent('Solicitud de cotización Nexus ESP')}`}
                className={`${canal} hover:bg-[var(--color-paper)]`}
                style={{ borderTop: '1px solid var(--color-line-2)' }}
              >
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--color-verde-tint)' }}
                  aria-hidden
                >
                  <Mail className="h-[19px] w-[19px]" style={{ color: 'var(--color-verde)' }} />
                </span>
                <span className="min-w-0">
                  <span className="label block mb-1">Correo</span>
                  <span className="num break-all" style={{ fontSize: 15, fontWeight: 500, color: 'var(--color-ink)' }}>
                    {CORREO}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 ml-auto shrink-0 mt-1" style={{ color: 'var(--color-ink-3)' }} aria-hidden />
              </a>

              <div className={canal} style={{ borderTop: '1px solid var(--color-line-2)' }}>
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--color-paper)' }}
                  aria-hidden
                >
                  <Clock className="h-[19px] w-[19px]" style={{ color: 'var(--color-ink-3)' }} />
                </span>
                <span>
                  <span className="label block mb-1">Horario · GMT−5</span>
                  <span className="num" style={{ fontSize: 14, color: 'var(--color-ink)', lineHeight: 1.55 }}>
                    Lun a vie · 8:00 a.m. – 6:00 p.m.<br />
                    Sábados · 8:00 a.m. – 12:00 m.
                  </span>
                </span>
              </div>

              <div className={canal} style={{ borderTop: '1px solid var(--color-line-2)' }}>
                <span
                  className="shrink-0 flex items-center justify-center"
                  style={{ width: 40, height: 40, borderRadius: 12, background: 'var(--color-paper)' }}
                  aria-hidden
                >
                  <MapPin className="h-[19px] w-[19px]" style={{ color: 'var(--color-ink-3)' }} />
                </span>
                <span>
                  <span className="label block mb-1">Wavenet</span>
                  <span style={{ fontSize: 14.5, color: 'var(--color-ink)' }}>{CIUDAD}</span>
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={enviar} className="card" style={{ padding: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
            <div className="label mb-6">Solicitud de cotización</div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="sm:col-span-2">
                <span className="label block mb-2">Empresa prestadora *</span>
                <input required className="field" value={f.empresa} onChange={set('empresa')}
                       placeholder="Nombre de la empresa" autoComplete="organization" />
              </label>

              <label>
                <span className="label block mb-2">Nombre y apellido *</span>
                <input required className="field" value={f.nombre} onChange={set('nombre')}
                       placeholder="Quién nos escribe" autoComplete="name" />
              </label>

              <label>
                <span className="label block mb-2">Cargo</span>
                <input className="field" value={f.cargo} onChange={set('cargo')}
                       placeholder="Gerente, director comercial…" autoComplete="organization-title" />
              </label>

              <label>
                <span className="label block mb-2">Correo *</span>
                <input required type="email" className="field" value={f.correo} onChange={set('correo')}
                       placeholder="nombre@empresa.com" autoComplete="email" />
              </label>

              <label>
                <span className="label block mb-2">Teléfono *</span>
                <input required type="tel" className="field" value={f.telefono} onChange={set('telefono')}
                       placeholder="300 000 0000" autoComplete="tel" />
              </label>

              <label>
                <span className="label block mb-2">Servicio que presta</span>
                <input className="field" value={f.servicio} onChange={set('servicio')}
                       placeholder="Energía, acueducto, aseo…" />
              </label>

              <label>
                <span className="label block mb-2">Cantidad de suscriptores *</span>
                <select className="field" value={f.banda} onChange={set('banda')}>
                  {BANDAS.map((b) => <option key={b}>{b}</option>)}
                </select>
              </label>

              <label className="sm:col-span-2">
                <span className="label block mb-2">Solución de interés</span>
                <select className="field" value={f.interes} onChange={set('interes')}>
                  {INTERES.map((i) => <option key={i}>{i}</option>)}
                </select>
              </label>

              <fieldset className="sm:col-span-2">
                <legend className="label mb-3">Módulos que le interesan</legend>
                <div className="flex flex-wrap gap-2">
                  {MODULOS_INTERES.map((m) => {
                    const on = mods.includes(m);
                    return (
                      <button
                        type="button" key={m} onClick={() => toggleMod(m)} aria-pressed={on}
                        className="transition-all"
                        style={{
                          fontSize: 13.5, padding: '0.5rem 0.9375rem', borderRadius: 999,
                          border: `1px solid ${on ? 'var(--color-verde)' : 'var(--color-line)'}`,
                          background: on ? 'var(--color-verde-tint)' : 'var(--color-sheet)',
                          color: on ? 'var(--color-verde-deep)' : 'var(--color-ink-2)',
                          fontWeight: on ? 600 : 400,
                        }}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <label className="sm:col-span-2">
                <span className="label block mb-2">Algo más que debamos saber</span>
                <textarea className="field" value={f.mensaje} onChange={set('mensaje')}
                          placeholder="Con qué facturan hoy, qué les urge resolver, para cuándo lo necesitan." />
              </label>
            </div>

            <label
              className="flex items-start gap-3 mt-7 cursor-pointer"
              style={{ background: 'var(--color-paper)', borderRadius: 12, padding: '0.9375rem 1rem' }}
            >
              <input
                type="checkbox"
                required
                checked={acepta}
                onChange={(e) => setAcepta(e.target.checked)}
                style={{ width: 17, height: 17, marginTop: 2, accentColor: 'var(--color-verde)', flexShrink: 0 }}
              />
              <span style={{ fontSize: 13.5, color: 'var(--color-ink-2)', lineHeight: 1.6 }}>
                Autorizo a Wavenet a usar estos datos para responder mi solicitud de cotización,
                según la{' '}
                <Link href="/privacidad" className="link-ul">política de tratamiento de datos</Link>.
              </span>
            </label>

            <div className="flex flex-col sm:flex-row gap-3 mt-5">
              <button type="submit" className="btn btn-solid grow" disabled={!acepta}
                      style={{ opacity: acepta ? 1 : 0.55, cursor: acepta ? 'pointer' : 'not-allowed' }}>
                <MessageCircle className="h-4 w-4" aria-hidden /> Enviar por WhatsApp
              </button>
              <button type="button" onClick={porCorreo} className="btn btn-line" disabled={!acepta}
                      style={{ opacity: acepta ? 1 : 0.55, cursor: acepta ? 'pointer' : 'not-allowed' }}>
                <Mail className="h-4 w-4" aria-hidden /> Enviar por correo
              </button>
            </div>

            <p className="mt-5" style={{ fontSize: 13, color: 'var(--color-ink-3)', lineHeight: 1.6 }}>
              Esta página no guarda nada. Al enviar se abre WhatsApp con la solicitud ya
              redactada y usted la revisa antes de mandarla.
            </p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PIE
   ═══════════════════════════════════════════════════════════════════ */

function Footer() {
  return (
    <footer style={{ background: 'var(--color-ink)' }}>
      <div className="mx-auto w-full max-w-[1140px] px-5 sm:px-8" style={{ paddingTop: 64, paddingBottom: 44 }}>
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <NexusLockup {...LOGO.pie} oscuro />
            <p className="mt-5 max-w-[38ch]" style={{ fontSize: 14.5, color: '#a3b0a6', lineHeight: 1.7 }}>
              Plataforma comercial y administrativa para empresas de servicios públicos
              domiciliarias en Colombia.
            </p>
            <a
              href={WAVENET} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 mt-5"
              style={{ fontSize: 14, color: 'var(--color-coral)', fontWeight: 600 }}
            >
              <WavenetMark {...LOGO.wavenet} />
              Un producto de Wavenet
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
            </a>
          </div>

          <nav aria-label="Pie, plataforma">
            <div className="label mb-4" style={{ color: '#98a89d' }}>Plataforma</div>
            <ul className="space-y-3">
              {NAV.map((i) => (
                <li key={i.t}><a href={i.h} style={{ fontSize: 14.5, color: '#c6d3c7' }}>{i.t}</a></li>
              ))}
              <li><a href="#cotizacion" style={{ fontSize: 14.5, color: '#c6d3c7' }}>Solicitar cotización</a></li>
              <li><Link href="/privacidad" style={{ fontSize: 14.5, color: '#c6d3c7' }}>Tratamiento de datos</Link></li>
            </ul>
          </nav>

          <div>
            <div className="label mb-4" style={{ color: '#98a89d' }}>Contacto</div>
            <ul className="space-y-3.5">
              <li>
                <a
                  className="num" href={waLink('Hola, quiero cotizar Nexus ESP.')}
                  target="_blank" rel="noopener"
                  style={{ fontSize: 15, color: '#ffffff', fontWeight: 600 }}
                >
                  {WA_SHOW}
                </a>
                <span className="block label" style={{ color: '#98a89d', marginTop: 3 }}>WhatsApp</span>
              </li>
              <li>
                <a className="num break-all" href={`mailto:${CORREO}`} style={{ fontSize: 13.5, color: '#c6d3c7' }}>
                  {CORREO}
                </a>
              </li>
              <li style={{ fontSize: 13.5, color: '#a3b0a6' }}>{CIUDAD}</li>
              <li className="num" style={{ fontSize: 12.5, color: '#98a89d', lineHeight: 1.6 }}>
                Lun–vie 8:00 a.m.–6:00 p.m.<br />Sáb 8:00 a.m.–12:00 m.
              </li>
            </ul>
          </div>
        </div>

        <div
          className="flex flex-wrap items-center justify-between gap-3 mt-12 pt-6"
          style={{ borderTop: '1px solid rgba(255,255,255,0.09)' }}
        >
          <span className="num" style={{ fontSize: 12.5, color: '#98a89d', lineHeight: 1.6 }}>
            © {new Date().getFullYear()} Wavenet Dev S.A.S. · NIT 902.002.900-5
          </span>
          <span className="num" style={{ fontSize: 12.5, color: '#98a89d' }}>
            Todos los planes se manejan bajo cotización
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════════════════════════ */

export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Produccion />
        <Contraste />
        <Modulos />
        <Campo />
        <Presupuesto />
        <Implementacion />
        <Soluciones />
        <Preguntas />
        <Cotizacion />
      </main>
      <Footer />
    </>
  );
}
