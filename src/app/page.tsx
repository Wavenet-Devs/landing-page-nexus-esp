'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import {
  ArrowRight, ChevronRight, CheckCircle2,
  FileText, CreditCard, Gauge, Banknote,
  BarChart2, Users, Check, Star, Zap,
  MoveRight, TrendingUp, Clock, Plus, Minus,
  Send, Phone, Mail, MapPin,
} from 'lucide-react';

function NexusLogo({ size = 48 }: { size?: number }) {
  return (
    <Image
      src="/nexus-logo.png"
      alt="Nexus"
      width={size}
      height={size}
      className="object-contain drop-shadow-lg"
    />
  );
}

/* ─────────────────────────────────────────────────────────────
   NAV
───────────────────────────────────────────────────────────── */
function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div
          className="flex items-center justify-between rounded-2xl border px-6 py-3"
          style={{
            background:           'rgba(6,9,18,0.88)',
            borderColor:          '#1e2d42',
            backdropFilter:       'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          <a href="#inicio" className="flex items-center gap-3">
            <NexusLogo size={36} />
            <span className="text-lg font-semibold tracking-tight" style={{ color: '#e8f0fe' }}>
              Nexus
            </span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {[
              { label: 'La plataforma', href: '#plataforma'  },
              { label: 'Cómo funciona', href: '#como'        },
              { label: 'Precios',       href: '#precios'     },
              { label: 'Nosotros',      href: '#nosotros'    },
              { label: 'Preguntas',     href: '#faq'         },
            ].map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium nav-link">
                {item.label}
              </a>
            ))}
          </div>

          <a
            href="#contacto"
            className="btn-primary relative inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold"
          >
            <span className="relative z-10">Solicitar demo</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ─────────────────────────────────────────────────────────────
   HERO
───────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg noise-overlay"
      style={{ paddingTop: '120px', paddingBottom: '80px' }}
    >
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute rounded-full" style={{ width: '680px', height: '680px', top: '-200px', left: '-180px', background: 'radial-gradient(circle, rgba(56,189,248,0.18) 0%, transparent 70%)', filter: 'blur(40px)' }} />
        <div className="orb-2 absolute rounded-full" style={{ width: '520px', height: '520px', top: '-100px', right: '-100px', background: 'radial-gradient(circle, rgba(251,146,60,0.14) 0%, transparent 70%)', filter: 'blur(50px)' }} />
        <div className="orb-3 absolute rounded-full" style={{ width: '600px', height: '600px', bottom: '-200px', right: '10%', background: 'radial-gradient(circle, rgba(163,230,53,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border px-4 py-1.5 mb-10" style={{ borderColor: '#243650', background: 'rgba(13,17,32,0.8)' }}>
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: '#a3e635' }} />
          <span className="text-xs font-medium tracking-widest uppercase" style={{ color: '#6b80a3' }}>
            Plataforma SaaS · Empresas de Energía · Colombia
          </span>
        </div>

        <h1 className="animate-fade-up-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem, 8vw, 7rem)', fontWeight: '400', lineHeight: '1.02', letterSpacing: '-0.02em', color: '#e8f0fe', marginBottom: '0.3rem' }}>
          Tu empresa de energía,
        </h1>
        <h1 className="animate-fade-up-delay-1" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(3.2rem, 8vw, 7rem)', fontWeight: '400', fontStyle: 'italic', lineHeight: '1.05', letterSpacing: '-0.02em', marginBottom: '2.5rem' }}>
          <span className="text-shimmer">como debe funcionar.</span>
        </h1>

        <p className="animate-fade-up-delay-2 mx-auto max-w-2xl text-xl leading-relaxed" style={{ color: '#6b80a3', fontWeight: '300', marginBottom: '3rem' }}>
          Nexus centraliza la facturación, cobros y gestión operativa de tu ESP
          en una sola plataforma moderna. Diseñada para el sector, lista desde el primer día.
        </p>

        <div className="animate-fade-up-delay-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contacto" className="btn-primary relative inline-flex items-center gap-3 rounded-2xl px-8 py-4 text-base font-semibold">
            <span className="relative z-10">Ver Nexus en acción</span>
            <ArrowRight className="relative z-10 h-4 w-4" />
          </a>
          <a href="#plataforma" className="inline-flex items-center gap-2 rounded-2xl border px-8 py-4 text-base font-medium" style={{ borderColor: '#1e2d42', color: '#6b80a3' }}>
            Qué hace Nexus <ChevronRight className="h-4 w-4" />
          </a>
        </div>

        <div className="animate-fade-up-delay-4 mt-16 flex flex-col items-center gap-3">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#fb923c' }} />)}
          </div>
          <p className="text-sm" style={{ color: '#3a4d6b' }}>
            Operando en producción con <span style={{ color: '#6b80a3' }}>Electronuqui ESP</span> desde 2024
          </p>
        </div>
      </div>

      <div className="animate-fade-in relative z-10 mx-auto max-w-5xl px-6 mt-20 w-full">
        <DemoPlayer />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   DEMO PLAYER — animated screen recording
───────────────────────────────────────────────────────────── */
const DEMO_DURATION = 5000; // ms per screen

function DemoPlayer() {
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused]     = useState(false);
  const total = 4;

  useEffect(() => {
    if (paused) return;
    const step = 100 / (DEMO_DURATION / 80);
    const iv = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          setActive((a) => (a + 1) % total);
          return 0;
        }
        return p + step;
      });
    }, 80);
    return () => clearInterval(iv);
  }, [paused, active]);

  const screens = ['Dashboard', 'Facturación', 'Cobros', 'Reportes'];
  const paths   = ['/electronuqui/inicio', '/electronuqui/facturacion', '/electronuqui/cobros', '/electronuqui/reportes'];
  const navActive = [0, 2, 3, 4];

  const sidebarItems = ['Inicio', 'Clientes', 'Facturación', 'Cobros', 'Reportes'];

  return (
    <div
      className="animate-float animate-pulse-glow relative rounded-3xl border overflow-hidden"
      style={{ borderColor: '#1e2d42', background: '#0c1120' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Window chrome ── */}
      <div className="flex items-center gap-3 border-b px-5 py-3.5" style={{ borderColor: '#1e2d42' }}>
        <span className="h-3 w-3 rounded-full" style={{ background: '#ef4444' }} />
        <span className="h-3 w-3 rounded-full" style={{ background: '#f59e0b' }} />
        <span className="h-3 w-3 rounded-full" style={{ background: '#22c55e' }} />
        <div className="ml-3 flex-1 rounded-lg px-4 py-1.5 text-xs flex items-center gap-2" style={{ background: '#101828', color: '#3a4d6b', fontFamily: 'monospace' }}>
          nexus.co / {paths[active]}
        </div>
        {/* REC indicator */}
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full animate-pulse" style={{ background: '#ef4444' }} />
          <span className="text-xs font-medium" style={{ color: '#ef4444' }}>EN VIVO</span>
        </div>
      </div>

      {/* ── Progress bar ── */}
      <div className="h-0.5 w-full" style={{ background: '#1e2d42' }}>
        <div
          className="h-full transition-none"
          style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #38bdf8, #a3e635)' }}
        />
      </div>

      {/* ── Screen tabs ── */}
      <div className="flex items-center gap-1 px-5 py-2 border-b" style={{ borderColor: '#1e2d42', background: '#080e1c' }}>
        {screens.map((s, i) => (
          <button
            key={s}
            onClick={() => { setActive(i); setProgress(0); }}
            className="rounded-lg px-3 py-1.5 text-xs font-medium transition-all duration-200"
            style={{ background: active === i ? 'rgba(56,189,248,0.12)' : 'transparent', color: active === i ? '#38bdf8' : '#3a4d6b' }}
          >
            {s}
          </button>
        ))}
        <div className="ml-auto flex gap-1">
          {screens.map((_, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setProgress(0); }}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{ width: active === i ? '20px' : '6px', background: active === i ? '#38bdf8' : '#1e2d42' }}
            />
          ))}
        </div>
      </div>

      {/* ── Main area ── */}
      <div className="flex" style={{ minHeight: '400px' }}>

        {/* Sidebar */}
        <div className="hidden sm:flex w-48 flex-col border-r py-3 shrink-0" style={{ borderColor: '#1e2d42', background: '#080e1c' }}>
          <div className="flex items-center gap-2 px-4 py-2 mb-3">
            <NexusLogo size={24} />
            <span className="text-sm font-semibold" style={{ color: '#e8f0fe' }}>Nexus</span>
          </div>
          <div className="px-3 pb-2">
            <div className="rounded-lg px-3 py-2 mb-1" style={{ background: 'rgba(163,230,53,0.08)' }}>
              <p className="text-[10px] font-medium" style={{ color: '#3a4d6b' }}>EMPRESA</p>
              <p className="text-xs font-semibold truncate" style={{ color: '#6b80a3' }}>Electronuqui ESP</p>
            </div>
          </div>
          {sidebarItems.map((item, i) => (
            <div
              key={item}
              className="mx-3 rounded-xl px-3 py-2.5 text-xs font-medium mb-0.5 transition-colors duration-300"
              style={{ background: navActive[active] === i ? 'rgba(56,189,248,0.15)' : 'transparent', color: navActive[active] === i ? '#38bdf8' : '#3a4d6b' }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Content area */}
        <div className="flex-1 overflow-hidden relative">

          {/* Screen 0 — Dashboard */}
          <div className="absolute inset-0 p-5 transition-opacity duration-500" style={{ opacity: active === 0 ? 1 : 0, pointerEvents: active === 0 ? 'auto' : 'none' }}>
            <ScreenDashboard />
          </div>

          {/* Screen 1 — Facturación */}
          <div className="absolute inset-0 p-5 transition-opacity duration-500" style={{ opacity: active === 1 ? 1 : 0, pointerEvents: active === 1 ? 'auto' : 'none' }}>
            <ScreenFacturacion />
          </div>

          {/* Screen 2 — Cobros */}
          <div className="absolute inset-0 p-5 transition-opacity duration-500" style={{ opacity: active === 2 ? 1 : 0, pointerEvents: active === 2 ? 'auto' : 'none' }}>
            <ScreenCobros />
          </div>

          {/* Screen 3 — Reportes */}
          <div className="absolute inset-0 p-5 transition-opacity duration-500" style={{ opacity: active === 3 ? 1 : 0, pointerEvents: active === 3 ? 'auto' : 'none' }}>
            <ScreenReportes />
          </div>
        </div>
      </div>

      {/* ── Hover-to-pause hint ── */}
      {paused && (
        <div className="absolute bottom-4 right-4 rounded-lg px-3 py-1.5 text-xs flex items-center gap-1.5" style={{ background: 'rgba(6,9,18,0.9)', border: '1px solid #1e2d42', color: '#6b80a3' }}>
          <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#fb923c' }} />
          Pausado
        </div>
      )}
    </div>
  );
}

/* Individual screens ─────────────────────────────────────── */

function ScreenDashboard() {
  const bars = [55, 72, 48, 88, 74, 95, 68, 85];
  return (
    <div className="h-full flex flex-col gap-4">
      <p className="text-xs font-medium" style={{ color: '#3a4d6b' }}>Panel de control · Mayo 2026</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
        {[
          { label: 'Facturado', value: '$48.2M', accent: '#38bdf8', sub: '1.243 facturas'   },
          { label: 'Recaudado', value: '$41.7M', accent: '#a3e635', sub: '86.5% eficiencia' },
          { label: 'Por cobrar',value: '$6.5M',  accent: '#fb923c', sub: '213 clientes'     },
          { label: 'Financiac.',value: '47',     accent: '#c084fc', sub: 'activas'          },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border p-3" style={{ borderColor: '#1e2d42', background: '#101828' }}>
            <p className="text-[10px] mb-1" style={{ color: '#3a4d6b' }}>{s.label}</p>
            <p className="text-sm font-bold" style={{ color: s.accent }}>{s.value}</p>
            <p className="text-[10px] mt-0.5" style={{ color: '#6b80a3' }}>{s.sub}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-xl border p-4" style={{ borderColor: '#1e2d42', background: '#101828' }}>
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-medium" style={{ color: '#6b80a3' }}>Facturación vs. recaudo</p>
          <div className="flex gap-3">
            <span className="flex items-center gap-1 text-[10px]" style={{ color: '#38bdf8' }}><span className="h-1.5 w-1.5 rounded-full bg-current inline-block" />Facturado</span>
            <span className="flex items-center gap-1 text-[10px]" style={{ color: '#a3e635' }}><span className="h-1.5 w-1.5 rounded-full bg-current inline-block" />Recaudado</span>
          </div>
        </div>
        <div className="flex items-end gap-2" style={{ height: '90px' }}>
          {bars.map((h, i) => (
            <div key={i} className="flex-1 flex flex-col gap-0.5 items-center">
              <div className="w-full rounded-sm" style={{ height: `${h}%`, background: 'linear-gradient(to top, #0284c7, #38bdf8)', opacity: 0.9 }} />
              <div className="w-full rounded-sm" style={{ height: `${h * 0.85}%`, background: 'linear-gradient(to top, #4d7c0f, #a3e635)', opacity: 0.7 }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenFacturacion() {
  const invoices = [
    { name: 'María García',      contract: 'C-0041', value: '$82.400',  status: 'Generada', accent: '#a3e635' },
    { name: 'Carlos Hernández',  contract: 'C-0042', value: '$94.100',  status: 'Generada', accent: '#a3e635' },
    { name: 'Ana Restrepo',      contract: 'C-0043', value: '$71.800',  status: 'Generada', accent: '#a3e635' },
    { name: 'Luis Martínez',     contract: 'C-0044', value: '$108.600', status: 'Generando...', accent: '#fb923c' },
    { name: 'Sandra Ospina',     contract: 'C-0045', value: '—',        status: 'En cola',  accent: '#3a4d6b' },
  ];
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium" style={{ color: '#3a4d6b' }}>Generación de facturas · Mayo 2026</p>
          <p className="text-sm font-semibold mt-0.5" style={{ color: '#e8f0fe' }}>1.243 clientes</p>
        </div>
        <div className="rounded-xl px-3 py-1.5 flex items-center gap-2" style={{ background: 'rgba(163,230,53,0.12)', border: '1px solid rgba(163,230,53,0.2)' }}>
          <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: '#a3e635' }} />
          <span className="text-xs font-medium" style={{ color: '#a3e635' }}>Generando...</span>
        </div>
      </div>
      {/* Progress */}
      <div className="rounded-xl border p-3" style={{ borderColor: '#1e2d42', background: '#101828' }}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs" style={{ color: '#6b80a3' }}>Progreso</span>
          <span className="text-xs font-semibold" style={{ color: '#a3e635' }}>987 / 1.243</span>
        </div>
        <div className="h-2 w-full rounded-full overflow-hidden" style={{ background: '#1e2d42' }}>
          <div className="h-full rounded-full" style={{ width: '79%', background: 'linear-gradient(90deg, #4d7c0f, #a3e635)' }} />
        </div>
      </div>
      {/* List */}
      <div className="flex-1 rounded-xl border overflow-hidden" style={{ borderColor: '#1e2d42', background: '#101828' }}>
        <div className="grid grid-cols-4 px-4 py-2 border-b text-[10px] font-semibold uppercase tracking-wider" style={{ borderColor: '#1e2d42', color: '#3a4d6b' }}>
          <span>Cliente</span><span>Contrato</span><span>Valor</span><span>Estado</span>
        </div>
        {invoices.map((inv, i) => (
          <div key={i} className="grid grid-cols-4 px-4 py-2.5 border-b items-center" style={{ borderColor: '#1e2d4218' }}>
            <span className="text-xs truncate" style={{ color: '#8899bb' }}>{inv.name}</span>
            <span className="text-xs font-mono" style={{ color: '#3a4d6b' }}>{inv.contract}</span>
            <span className="text-xs font-semibold" style={{ color: '#e8f0fe' }}>{inv.value}</span>
            <span className="text-[10px] font-medium" style={{ color: inv.accent }}>{inv.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenCobros() {
  return (
    <div className="h-full flex gap-4">
      {/* Client search */}
      <div className="flex flex-col gap-3 w-full lg:w-auto lg:flex-1">
        <p className="text-xs font-medium" style={{ color: '#3a4d6b' }}>Registrar cobro</p>
        {/* Client card */}
        <div className="rounded-xl border p-4" style={{ borderColor: '#243650', background: '#101828' }}>
          <p className="text-[10px] mb-1" style={{ color: '#3a4d6b' }}>CLIENTE</p>
          <p className="text-sm font-semibold" style={{ color: '#e8f0fe' }}>María García Londoño</p>
          <p className="text-xs mt-0.5" style={{ color: '#6b80a3' }}>Contrato C-0041 · Medidor M-8821</p>
          <div className="mt-3 flex gap-2">
            <div className="rounded-lg px-2 py-1 text-[10px] font-medium" style={{ background: 'rgba(251,146,60,0.12)', color: '#fb923c' }}>
              Deuda: $168.000
            </div>
            <div className="rounded-lg px-2 py-1 text-[10px] font-medium" style={{ background: 'rgba(56,189,248,0.08)', color: '#38bdf8' }}>
              2 facturas
            </div>
          </div>
        </div>
        {/* Invoices */}
        <div className="rounded-xl border p-3 flex flex-col gap-2" style={{ borderColor: '#1e2d42', background: '#101828' }}>
          {[
            { period: 'Abril 2026', val: '$82.400',  checked: true  },
            { period: 'Mayo 2026',  val: '$85.600',  checked: false },
          ].map((inv) => (
            <div key={inv.period} className="flex items-center justify-between rounded-lg p-2.5" style={{ background: inv.checked ? 'rgba(56,189,248,0.06)' : 'transparent', border: `1px solid ${inv.checked ? '#38bdf840' : '#1e2d42'}` }}>
              <div className="flex items-center gap-2">
                <div className="h-4 w-4 rounded flex items-center justify-center" style={{ background: inv.checked ? '#38bdf8' : '#1e2d42' }}>
                  {inv.checked && <Check className="h-2.5 w-2.5" style={{ color: '#000' }} />}
                </div>
                <span className="text-xs" style={{ color: '#6b80a3' }}>{inv.period}</span>
              </div>
              <span className="text-xs font-semibold" style={{ color: '#e8f0fe' }}>{inv.val}</span>
            </div>
          ))}
        </div>
        {/* Amount */}
        <div className="rounded-xl border p-3" style={{ borderColor: '#243650', background: '#101828' }}>
          <p className="text-[10px] mb-1.5" style={{ color: '#3a4d6b' }}>MONTO RECIBIDO</p>
          <div className="text-xl font-bold" style={{ color: '#a3e635' }}>$82.400</div>
        </div>
        {/* Button */}
        <button className="w-full rounded-xl py-3 text-sm font-semibold flex items-center justify-center gap-2" style={{ background: '#a3e635', color: '#060912' }}>
          <CreditCard className="h-4 w-4" />
          Registrar y emitir comprobante
        </button>
      </div>
    </div>
  );
}

function ScreenReportes() {
  const rows = [
    { name: 'Barrio El Centro',    clients: 284, deuda: '$2.1M',  pct: 12, accent: '#fb923c' },
    { name: 'Barrio La Esperanza', clients: 198, deuda: '$1.4M',  pct: 8,  accent: '#fb923c' },
    { name: 'Barrio San José',     clients: 156, deuda: '$0.8M',  pct: 5,  accent: '#a3e635' },
    { name: 'Barrio Villa Nueva',  clients: 210, deuda: '$1.9M',  pct: 10, accent: '#fb923c' },
  ];
  return (
    <div className="h-full flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium" style={{ color: '#3a4d6b' }}>Lista de corte · Mayo 2026</p>
          <p className="text-sm font-semibold mt-0.5" style={{ color: '#e8f0fe' }}>213 clientes con deuda</p>
        </div>
        <button className="rounded-xl border px-3 py-1.5 text-xs font-medium flex items-center gap-1.5" style={{ borderColor: '#1e2d42', color: '#6b80a3' }}>
          Exportar XLSX
        </button>
      </div>
      {/* Summary bar */}
      <div className="grid grid-cols-3 gap-2.5">
        {[
          { label: 'Total deuda',      val: '$6.5M',  accent: '#fb923c' },
          { label: 'Clientes al corte',val: '213',    accent: '#fb923c' },
          { label: 'Recaudo del mes',  val: '86.5%',  accent: '#a3e635' },
        ].map((m) => (
          <div key={m.label} className="rounded-xl border p-2.5" style={{ borderColor: '#1e2d42', background: '#101828' }}>
            <p className="text-[10px]" style={{ color: '#3a4d6b' }}>{m.label}</p>
            <p className="text-sm font-bold" style={{ color: m.accent }}>{m.val}</p>
          </div>
        ))}
      </div>
      {/* Table */}
      <div className="flex-1 rounded-xl border overflow-hidden" style={{ borderColor: '#1e2d42', background: '#101828' }}>
        <div className="grid grid-cols-4 px-4 py-2 border-b text-[10px] font-semibold uppercase tracking-wider" style={{ borderColor: '#1e2d42', color: '#3a4d6b' }}>
          <span className="col-span-2">Barrio</span><span>Deuda</span><span>% Cartera</span>
        </div>
        {rows.map((row, i) => (
          <div key={i} className="grid grid-cols-4 px-4 py-2.5 border-b items-center" style={{ borderColor: '#1e2d4218' }}>
            <div className="col-span-2">
              <p className="text-xs" style={{ color: '#8899bb' }}>{row.name}</p>
              <p className="text-[10px]" style={{ color: '#3a4d6b' }}>{row.clients} clientes</p>
            </div>
            <span className="text-xs font-semibold" style={{ color: '#e8f0fe' }}>{row.deuda}</span>
            <div className="flex items-center gap-2">
              <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: '#1e2d42' }}>
                <div className="h-full rounded-full" style={{ width: `${row.pct * 8}%`, background: row.accent }} />
              </div>
              <span className="text-[10px]" style={{ color: row.accent }}>{row.pct}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   STATS
───────────────────────────────────────────────────────────── */
function Stats() {
  const stats = [
    { value: '1.200+', label: 'Clientes gestionados en producción', accent: '#38bdf8' },
    { value: '100%',   label: 'Del ciclo de facturación cubierto',   accent: '#a3e635' },
    { value: '2 min',  label: 'Para activar una empresa nueva',      accent: '#fb923c' },
    { value: '0',      label: 'Instalaciones necesarias',            accent: '#c084fc' },
  ];

  return (
    <section className="relative border-t border-b" style={{ borderColor: '#1e2d42' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px" style={{ background: '#1e2d42' }}>
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center justify-center text-center py-12 px-8" style={{ background: '#060912' }}>
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: s.accent, lineHeight: '1', marginBottom: '0.75rem' }}>{s.value}</p>
              <p className="text-sm leading-snug max-w-[160px]" style={{ color: '#6b80a3' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   QUÉ HACE — narrative
───────────────────────────────────────────────────────────── */
function WhatItDoes() {
  return (
    <section className="relative py-32 border-t" style={{ borderColor: '#1e2d42', background: '#080e1c' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#38bdf8' }}>Para qué está hecha</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1', marginBottom: '2rem' }}>
              Todo lo que necesita<br />
              <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>una ESP para operar.</span>
            </h2>
            <div className="space-y-5" style={{ color: '#6b80a3', fontSize: '1.05rem', lineHeight: '1.75' }}>
              <p>
                Muchas empresas de energía llevan años operando con herramientas que
                funcionan, pero que les quitan más tiempo del que deberían. Nexus no
                está aquí para reemplazar lo que ya sabes hacer — está aquí para que
                lo hagas en una fracción del tiempo.
              </p>
              <p>
                Desde que el lector de campo toma la primera medición del mes, hasta
                que el último cobro queda registrado y el reporte de cartera está listo,
                todo ocurre en un solo lugar. Sin archivos que cruzar. Sin datos que
                copiar entre sistemas.
              </p>
              <p>
                Nexus fue construido dentro de una ESP colombiana real, con su regulación,
                sus procesos y su día a día. Por eso encaja desde el primer momento.
              </p>
            </div>
          </div>

          <div className="grid gap-4 lg:mt-16">
            {[
              { icon: TrendingUp, title: 'Visibilidad total de tu negocio',    desc: 'Sabe en tiempo real cuánto facturaste, cuánto recaudaste y qué queda por cobrar. Sin esperar a que alguien arme el reporte.', accent: '#38bdf8' },
              { icon: Clock,      title: 'El mes cierra en horas, no en días', desc: 'Lecturas, facturas, cobros y reportes fluyen de uno al otro en la misma plataforma. Lo que antes tomaba varios días, ahora toma horas.', accent: '#fb923c' },
              { icon: Users,      title: 'Cada persona con lo que necesita',   desc: 'El cajero ve cobros, el operador gestiona lecturas, el gerente accede a todo. Claro, ordenado y sin ruido.', accent: '#a3e635' },
            ].map(({ icon: Icon, title, desc, accent }) => (
              <div key={title} className="card-glow flex items-start gap-5 rounded-2xl border p-6" style={{ borderColor: '#1e2d42', background: '#0c1120' }}>
                <div className="shrink-0 h-11 w-11 rounded-xl flex items-center justify-center mt-0.5" style={{ background: accent + '15' }}>
                  <Icon className="h-5 w-5" style={{ color: accent }} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1.5" style={{ color: '#e8f0fe' }}>{title}</h4>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b80a3' }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   MÓDULOS
───────────────────────────────────────────────────────────── */
function Modules() {
  const modules = [
    { icon: Gauge,     title: 'Lecturas de medidores',  desc: 'Sube el archivo de campo y Nexus hace el resto: valida, detecta inconsistencias y deja todo listo para facturar. Tu equipo dedica ese tiempo a lo que importa.',                                     accent: '#38bdf8', tag: '01' },
    { icon: FileText,  title: 'Facturación automática', desc: 'El motor calcula cada factura según la tarifa vigente, el estrato del cliente y los subsidios aplicables. Produce las facturas con código de barras para pago en bancos.',                            accent: '#fb923c', tag: '02' },
    { icon: CreditCard,title: 'Cobros y comprobantes',  desc: 'El cajero registra el pago, el sistema aplica el monto a las facturas y la impresora entrega el comprobante al cliente en segundos. Simple y sin errores.',                                          accent: '#a3e635', tag: '03' },
    { icon: Banknote,  title: 'Planes de financiación', desc: 'Para clientes que acumulan deuda, crea un plan de cuotas en minutos. El seguimiento es automático y siempre sabes en qué punto está cada acuerdo.',                                                   accent: '#c084fc', tag: '04' },
    { icon: BarChart2, title: 'Reportes operativos',    desc: 'Lista de corte, planilla de lecturas, estado de cartera, eficiencia de recaudo. Cada reporte está a un clic, en el momento que lo necesitas.',                                                         accent: '#fb923c', tag: '05' },
    { icon: Users,     title: 'Gestión de clientes',    desc: 'Toda la información de tus clientes en un solo lugar: contrato, medidor, historial de facturas, pagos y deuda. Búsqueda y actualización en segundos.',                                                 accent: '#38bdf8', tag: '06' },
  ];

  return (
    <section id="plataforma" className="relative py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-20">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#fb923c' }}>La plataforma</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Un ciclo completo.<br />
            <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>Seis módulos integrados.</span>
          </h2>
          <p style={{ color: '#6b80a3', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Cada módulo comparte los mismos datos, los mismos clientes y las mismas
            configuraciones. No hay nada que conectar ni sincronizar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: '#1e2d42' }}>
          {modules.map((m) => {
            const Icon = m.icon;
            return (
              <div key={m.title} className="card-glow group relative flex flex-col p-8" style={{ background: '#060912' }}>
                <div className="flex items-start justify-between mb-6">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl" style={{ background: m.accent + '14' }}>
                    <Icon className="h-5 w-5" style={{ color: m.accent }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', color: m.accent + '20', lineHeight: '1' }}>{m.tag}</span>
                </div>
                <h3 className="text-lg font-semibold mb-3" style={{ color: '#e8f0fe' }}>{m.title}</h3>
                <p className="text-sm leading-relaxed flex-1" style={{ color: '#6b80a3' }}>{m.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: m.accent }}>
                  Saber más <MoveRight className="h-3.5 w-3.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   HOW IT WORKS
───────────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Lecturas del campo',  desc: 'Tu equipo sube el archivo de lecturas del mes. Nexus valida cada dato y deja todo listo para facturar.',                                          accent: '#38bdf8', icon: Gauge      },
    { num: '02', title: 'Facturas generadas',  desc: 'El sistema produce todas las facturas del período, con tarifas, subsidios y código de barras incluido.',                                           accent: '#fb923c', icon: FileText   },
    { num: '03', title: 'Cobros registrados',  desc: 'El cajero ingresa el pago. El sistema aplica el monto y la impresora entrega el comprobante al cliente en segundos.',                              accent: '#a3e635', icon: CreditCard },
    { num: '04', title: 'Reportes al instante',desc: 'Cartera, recaudo, lista de corte. Todo disponible cuando lo necesitas, sin esperar a que nadie lo arme.',                                         accent: '#c084fc', icon: BarChart2  },
  ];

  return (
    <section id="como" className="relative py-32 border-t" style={{ borderColor: '#1e2d42' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)' }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#fb923c' }}>Cómo funciona</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1' }}>
            Del medidor al cobro.<br />
            <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>En un solo lugar.</span>
          </h2>
        </div>
        <div className="relative">
          <div className="hidden lg:block absolute h-px" style={{ background: 'linear-gradient(90deg, transparent, #1e2d42 15%, #1e2d42 85%, transparent)', top: '52px', left: 0, right: 0 }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col">
                  <div className="relative mb-8">
                    <div className="relative z-10 inline-flex h-[52px] w-[52px] items-center justify-center rounded-2xl border" style={{ borderColor: step.accent + '40', background: step.accent + '12' }}>
                      <Icon className="h-5 w-5" style={{ color: step.accent }} />
                    </div>
                  </div>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', color: step.accent + '25', lineHeight: '1', marginBottom: '0.75rem' }}>{step.num}</p>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: '#e8f0fe' }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#6b80a3' }}>{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   TRUST
───────────────────────────────────────────────────────────── */
function Trust() {
  return (
    <section id="nosotros" className="relative py-32 border-t" style={{ borderColor: '#1e2d42', background: '#080e1c' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#a3e635' }}>Por qué Nexus</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1', marginBottom: '2rem' }}>
              Hecho por personas<br />
              <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>que conocen el sector.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#6b80a3' }}>
              Nexus nació dentro de una ESP colombiana. No es una adaptación
              genérica — es una plataforma que entiende cómo opera el sector,
              sus tiempos, su regulación y sus particularidades del día a día.
            </p>
            <div className="flex flex-col gap-4">
              {[
                'Cumple la regulación colombiana de servicios públicos (CREG)',
                'Facturas con código de barras para pago en bancos y corresponsales',
                'Acceso desde cualquier dispositivo, sin instalar nada',
                'Soporte en español, por personas que entienden tu operación',
                'Cada empresa tiene su espacio privado e independiente',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 mt-0.5" style={{ color: '#a3e635' }} />
                  <span className="text-sm" style={{ color: '#6b80a3' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="rounded-2xl border p-8" style={{ borderColor: '#1e2d42', background: '#0c1120' }}>
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" style={{ color: '#fb923c' }} />)}
              </div>
              <p className="text-base leading-relaxed mb-6" style={{ color: '#8899cc', fontStyle: 'italic' }}>
                &ldquo;Pasamos de generar facturas manualmente a tenerlas listas en minutos.
                Nuestro equipo de cobros trabaja con más orden y los clientes reciben
                su comprobante al momento de pagar.&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-6 border-t" style={{ borderColor: '#1e2d42' }}>
                <div className="h-10 w-10 rounded-full flex items-center justify-center text-sm font-bold" style={{ background: 'rgba(56,189,248,0.15)', color: '#38bdf8' }}>EQ</div>
                <div>
                  <p className="text-sm font-semibold" style={{ color: '#e8f0fe' }}>Electronuqui ESP</p>
                  <p className="text-xs" style={{ color: '#3a4d6b' }}>Primer cliente · En producción desde 2024</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: '1.200+', label: 'Clientes gestionados',  accent: '#38bdf8' },
                { val: '100%',   label: 'Del ciclo automatizado', accent: '#a3e635' },
              ].map((m) => (
                <div key={m.label} className="rounded-2xl border p-6 text-center" style={{ borderColor: '#1e2d42', background: '#0c1120' }}>
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: m.accent, lineHeight: '1', marginBottom: '0.5rem' }}>{m.val}</p>
                  <p className="text-xs" style={{ color: '#6b80a3' }}>{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ONBOARDING DEMO
───────────────────────────────────────────────────────────── */
function OnboardingDemo() {
  const [step, setStep] = useState<'form' | 'creating' | 'done'>('form');

  const handleCreate = () => {
    setStep('creating');
    setTimeout(() => setStep('done'), 2000);
  };

  return (
    <section className="relative py-32 border-t overflow-hidden" style={{ borderColor: '#1e2d42' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 60% 80% at 80% 50%, rgba(163,230,53,0.05) 0%, transparent 70%)' }} />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#a3e635' }}>Así de fácil es empezar</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              Tu empresa activa<br />
              <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>en minutos.</span>
            </h2>
            <p className="text-lg leading-relaxed mb-10" style={{ color: '#6b80a3' }}>
              Sin instalaciones. Sin semanas de implementación. Le das los datos
              de tu empresa y Nexus configura todo automáticamente. Tu equipo
              puede empezar a operar el mismo día.
            </p>
            <div className="flex flex-col gap-4">
              {[
                { n: '1', text: 'Nos das los datos básicos de tu empresa' },
                { n: '2', text: 'Nexus crea tu espacio privado automáticamente' },
                { n: '3', text: 'Tu administrador recibe sus credenciales de acceso' },
                { n: '4', text: 'Empiezas a operar ese mismo día' },
              ].map((item) => (
                <div key={item.n} className="flex items-center gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-bold" style={{ background: 'rgba(163,230,53,0.12)', color: '#a3e635' }}>{item.n}</span>
                  <span className="text-sm" style={{ color: '#6b80a3' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border overflow-hidden" style={{ borderColor: '#1e2d42', background: '#0c1120' }}>
              <div className="flex items-center gap-2 border-b px-5 py-4" style={{ borderColor: '#1e2d42' }}>
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#ef4444' }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#f59e0b' }} />
                <span className="h-2.5 w-2.5 rounded-full" style={{ background: '#22c55e' }} />
                <div className="ml-3 flex items-center gap-2">
                  <NexusLogo size={18} />
                  <span className="text-xs font-medium" style={{ color: '#6b80a3' }}>Nueva empresa</span>
                </div>
              </div>
              <div className="p-6">
                {step === 'form' && (
                  <div className="space-y-4">
                    <p className="text-sm font-semibold mb-5" style={{ color: '#e8f0fe' }}>Cuéntanos sobre tu empresa</p>
                    {[
                      { label: 'Nombre de la empresa',    value: 'Luz del Norte ESP'     },
                      { label: 'Ciudad',                   value: 'Medellín, Antioquia'   },
                      { label: 'NIT',                      value: '900.123.456-7'         },
                      { label: 'Administrador principal',  value: 'Carlos Mejía Restrepo' },
                      { label: 'Correo de acceso',         value: 'cmejia@luzdelnorte.co' },
                    ].map((field) => (
                      <div key={field.label}>
                        <p className="text-xs mb-1.5" style={{ color: '#3a4d6b' }}>{field.label}</p>
                        <div className="rounded-xl border px-4 py-3 text-sm" style={{ borderColor: '#243650', background: '#101828', color: '#8899cc' }}>{field.value}</div>
                      </div>
                    ))}
                    <button onClick={handleCreate} className="btn-primary relative w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold mt-2">
                      <span className="relative z-10">Crear empresa en Nexus</span>
                      <ArrowRight className="relative z-10 h-4 w-4" />
                    </button>
                  </div>
                )}
                {step === 'creating' && (
                  <div className="flex flex-col items-center justify-center py-12 gap-4">
                    <div className="h-12 w-12 rounded-full border-2 animate-spin" style={{ borderColor: '#38bdf8', borderTopColor: 'transparent' }} />
                    <p className="text-sm font-medium" style={{ color: '#e8f0fe' }}>Configurando tu empresa...</p>
                    <p className="text-xs" style={{ color: '#3a4d6b' }}>Esto toma solo unos segundos</p>
                  </div>
                )}
                {step === 'done' && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center py-6">
                      <div className="h-16 w-16 rounded-full flex items-center justify-center" style={{ background: 'rgba(163,230,53,0.15)' }}>
                        <Check className="h-8 w-8" style={{ color: '#a3e635' }} />
                      </div>
                    </div>
                    <p className="text-center text-base font-semibold" style={{ color: '#e8f0fe' }}>¡Luz del Norte ESP está lista!</p>
                    <div className="space-y-3 mt-6">
                      {['Tu espacio privado fue creado', 'El sistema está configurado y listo', 'Carlos Mejía ya puede ingresar', 'Listos para la primera facturación'].map((item, i) => (
                        <div key={i} className="flex items-center gap-3 rounded-xl px-4 py-3" style={{ background: 'rgba(163,230,53,0.06)', border: '1px solid rgba(163,230,53,0.15)' }}>
                          <CheckCircle2 className="h-4 w-4 shrink-0" style={{ color: '#a3e635' }} />
                          <span className="text-sm" style={{ color: '#6b80a3' }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => setStep('form')} className="w-full text-xs text-center mt-2 underline" style={{ color: '#3a4d6b' }}>Ver de nuevo</button>
                  </div>
                )}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-2xl border px-5 py-3 flex items-center gap-2" style={{ background: '#0c1120', borderColor: '#1e2d42' }}>
              <Zap className="h-4 w-4" style={{ color: '#fb923c' }} />
              <span className="text-xs font-medium" style={{ color: '#6b80a3' }}>Menos de 2 minutos</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   PRICING
───────────────────────────────────────────────────────────── */
function Pricing() {
  const [annual, setAnnual] = useState(false);

  const plans = [
    {
      name:     'Básico',
      desc:     'Para ESPs que están dando el salto a una plataforma moderna.',
      price:    { monthly: 99,  annual: 79  },
      currency: 'USD',
      period:   '/mes',
      accent:   '#38bdf8',
      popular:  false,
      cta:      'Empezar ahora',
      features: [
        'Hasta 500 clientes activos',
        'Facturación automática',
        'Módulo de cobros',
        'Comprobantes en impresora térmica',
        'Reportes básicos (PDF)',
        'Hasta 3 usuarios',
        'Soporte por correo',
      ],
      notIncluded: [
        'Exportación a XLSX',
        'Módulo de financiaciones',
        'API REST',
      ],
    },
    {
      name:     'Profesional',
      desc:     'Para ESPs con operación activa que necesitan el ciclo completo.',
      price:    { monthly: 199, annual: 159 },
      currency: 'USD',
      period:   '/mes',
      accent:   '#a3e635',
      popular:  true,
      cta:      'Empezar ahora',
      features: [
        'Hasta 2.500 clientes activos',
        'Todos los módulos incluidos',
        'Facturación + cobros + financiaciones',
        'Reportes avanzados con exportación XLSX',
        'Lecturas de medidores (importación XLSX)',
        'Hasta 10 usuarios',
        'Comprobantes en impresora térmica',
        'Soporte prioritario (< 24h)',
      ],
      notIncluded: [
        'API REST',
      ],
    },
    {
      name:     'Empresa',
      desc:     'Para ESPs grandes o redes con múltiples sedes y necesidades específicas.',
      price:    null,
      currency: '',
      period:   '',
      accent:   '#fb923c',
      popular:  false,
      cta:      'Hablar con el equipo',
      features: [
        'Clientes ilimitados',
        'Usuarios ilimitados',
        'Todos los módulos incluidos',
        'API REST para integraciones',
        'Onboarding personalizado',
        'Migración de datos asistida',
        'Gerente de cuenta dedicado',
        'SLA de respuesta garantizado',
        'Configuración de marca propia',
      ],
      notIncluded: [],
    },
  ];

  return (
    <section id="precios" className="relative py-32 border-t" style={{ borderColor: '#1e2d42', background: '#080e1c' }}>
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.05) 0%, transparent 70%)' }} />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#a3e635' }}>Precios</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1', marginBottom: '1.5rem' }}>
            Transparente.<br />
            <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>Sin sorpresas al final del mes.</span>
          </h2>
          <p style={{ color: '#6b80a3', lineHeight: '1.7' }}>
            Todos los planes incluyen actualizaciones, soporte en español
            y acceso desde cualquier dispositivo. Sin costos ocultos.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="text-sm font-medium" style={{ color: annual ? '#3a4d6b' : '#e8f0fe' }}>Mensual</span>
          <button
            onClick={() => setAnnual(!annual)}
            className="relative h-7 w-14 rounded-full border transition-colors duration-300"
            style={{ background: annual ? '#a3e63520' : '#1e2d42', borderColor: annual ? '#a3e635' : '#243650' }}
          >
            <span
              className="absolute top-1 h-5 w-5 rounded-full transition-all duration-300"
              style={{ background: annual ? '#a3e635' : '#6b80a3', left: annual ? 'calc(100% - 24px)' : '4px' }}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium" style={{ color: annual ? '#e8f0fe' : '#3a4d6b' }}>Anual</span>
            <span className="rounded-full px-2 py-0.5 text-xs font-semibold" style={{ background: 'rgba(163,230,53,0.15)', color: '#a3e635' }}>
              Ahorra 20%
            </span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="relative flex flex-col rounded-3xl border p-8 card-glow"
              style={{
                borderColor: plan.popular ? plan.accent + '50' : '#1e2d42',
                background:  plan.popular ? '#0c1120' : '#060912',
                boxShadow:   plan.popular ? `0 0 0 1px ${plan.accent}30, 0 30px 80px -20px ${plan.accent}15` : 'none',
              }}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full px-4 py-1 text-xs font-semibold" style={{ background: plan.accent, color: '#060912' }}>
                    Más popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <p className="text-xs font-medium tracking-widest uppercase mb-2" style={{ color: plan.accent }}>
                  {plan.name}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: '#6b80a3' }}>{plan.desc}</p>
              </div>

              {/* Price */}
              <div className="mb-8 pb-8 border-b" style={{ borderColor: '#1e2d42' }}>
                {plan.price ? (
                  <div className="flex items-end gap-1">
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '3.5rem', fontWeight: '400', color: '#e8f0fe', lineHeight: '1' }}>
                      ${annual ? plan.price.annual : plan.price.monthly}
                    </span>
                    <span className="pb-2 text-sm" style={{ color: '#6b80a3' }}>
                      {plan.currency} {plan.period}
                    </span>
                  </div>
                ) : (
                  <p style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: '400', color: '#e8f0fe', lineHeight: '1' }}>
                    Personalizado
                  </p>
                )}
                {plan.price && annual && (
                  <p className="text-xs mt-2" style={{ color: '#3a4d6b' }}>
                    Facturado anualmente · ${plan.price.annual * 12} USD/año
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5" style={{ color: plan.accent }} />
                    <span className="text-sm" style={{ color: '#8899bb' }}>{feat}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 opacity-40">
                    <div className="h-4 w-4 shrink-0 mt-0.5 rounded-full border flex items-center justify-center" style={{ borderColor: '#3a4d6b' }}>
                      <span className="text-[10px]" style={{ color: '#3a4d6b' }}>—</span>
                    </div>
                    <span className="text-sm" style={{ color: '#3a4d6b' }}>{feat}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-semibold transition-all duration-200"
                style={
                  plan.popular
                    ? { background: plan.accent, color: '#060912' }
                    : { background: 'transparent', border: `1px solid ${plan.accent}40`, color: plan.accent }
                }
              >
                {plan.cta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <p className="text-center mt-10 text-sm" style={{ color: '#3a4d6b' }}>
          ¿No sabes cuál plan es el tuyo?{' '}
          <a href="#contacto" className="underline" style={{ color: '#6b80a3' }}>
            Cuéntanos sobre tu ESP y te recomendamos.
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ
───────────────────────────────────────────────────────────── */
function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  const faqs = [
    {
      q: '¿Necesito instalar algo para usar Nexus?',
      a: 'No. Nexus funciona completamente en el navegador. Accedes desde cualquier computador, tablet o celular sin instalar ningún programa ni depender del sistema operativo.',
    },
    {
      q: '¿Mis datos están separados de los de otras empresas?',
      a: 'Sí, completamente. Cada empresa en Nexus tiene su propio espacio privado e independiente. Tus clientes, facturas y cobros son exclusivamente tuyos y no tienen ningún contacto con la información de otras ESPs.',
    },
    {
      q: '¿Cuánto tiempo toma la implementación?',
      a: 'Tu empresa queda activa en minutos. Si tienes datos históricos que quieres migrar desde tu sistema anterior, el tiempo depende del volumen de información, pero siempre te acompañamos en ese proceso.',
    },
    {
      q: '¿Puedo probar Nexus antes de pagar?',
      a: 'Sí. Agendamos una demo personalizada donde te mostramos la plataforma funcionando con datos reales de una ESP colombiana. Respondemos todas tus preguntas antes de que tomes cualquier decisión.',
    },
    {
      q: '¿Nexus funciona para empresas de gas o agua también?',
      a: 'Nexus fue diseñado específicamente para empresas de energía eléctrica y su regulación CREG. Para otros servicios públicos, conversemos — dependiendo del modelo operativo, puede haber casos en que se adapte.',
    },
    {
      q: '¿Qué pasa si necesito más usuarios de los del plan?',
      a: 'Puedes agregar usuarios adicionales por un valor mensual por usuario extra. No necesitas cambiar de plan para hacerlo. En el plan Empresa los usuarios son ilimitados.',
    },
    {
      q: '¿Qué tipo de soporte ofrecen?',
      a: 'Todos los planes incluyen soporte en español por personas que conocen la operación de una ESP. El plan Básico tiene soporte por correo, el Profesional respuesta garantizada en menos de 24 horas, y el Empresa incluye gerente de cuenta dedicado.',
    },
    {
      q: '¿Están basados en Colombia?',
      a: 'Sí. Wavenet Dev SAS es una empresa colombiana. Nuestro equipo entiende de primera mano cómo operan las ESPs en el país, su regulación y sus necesidades reales del día a día.',
    },
  ];

  return (
    <section id="faq" className="relative py-32 border-t" style={{ borderColor: '#1e2d42' }}>
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#38bdf8' }}>Preguntas frecuentes</p>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1' }}>
            Resolvemos tus dudas<br />
            <span style={{ fontStyle: 'italic', color: '#6b80a3' }}>antes de que aparezcan.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-2xl border overflow-hidden transition-colors duration-200"
              style={{ borderColor: open === i ? '#243650' : '#1e2d42', background: open === i ? '#0c1120' : '#060912' }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-sm font-medium" style={{ color: '#e8f0fe' }}>{faq.q}</span>
                <span className="shrink-0 h-7 w-7 rounded-lg flex items-center justify-center transition-colors duration-200" style={{ background: open === i ? 'rgba(56,189,248,0.12)' : '#1e2d42', color: open === i ? '#38bdf8' : '#6b80a3' }}>
                  {open === i ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-sm leading-relaxed" style={{ color: '#6b80a3' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="text-center mt-10 text-sm" style={{ color: '#3a4d6b' }}>
          ¿Tienes otra pregunta?{' '}
          <a href="#contacto" className="underline" style={{ color: '#6b80a3' }}>
            Escríbenos directamente.
          </a>
        </p>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   CONTACT / CTA
───────────────────────────────────────────────────────────── */
function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [form, setForm] = useState({ nombre: '', empresa: '', telefono: '', email: '', mensaje: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1800);
  };

  const inputStyle = {
    background:  '#101828',
    borderColor: '#243650',
    color:       '#e8f0fe',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderRadius: '12px',
    padding:     '12px 16px',
    fontSize:    '0.875rem',
    width:       '100%',
    outline:     'none',
    transition:  'border-color 0.2s',
  };

  return (
    <section id="contacto" className="relative py-32 border-t overflow-hidden" style={{ borderColor: '#1e2d42' }}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute rounded-full" style={{ width: '800px', height: '800px', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, rgba(163,230,53,0.04) 40%, transparent 70%)', filter: 'blur(50px)' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* Left — copy */}
          <div>
            <div className="mb-6 flex justify-start">
              <NexusLogo size={56} />
            </div>
            <p className="text-xs font-medium tracking-widest uppercase mb-4" style={{ color: '#fb923c' }}>Conversemos</p>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', fontWeight: '400', color: '#e8f0fe', lineHeight: '1.1', marginBottom: '1.5rem' }}>
              ¿Lista para ver Nexus<br />
              <span style={{ fontStyle: 'italic' }} className="text-shimmer">en tu empresa?</span>
            </h2>
            <p className="text-lg leading-relaxed mb-12" style={{ color: '#6b80a3' }}>
              Agendemos una demo de 30 minutos. Te mostramos la plataforma
              funcionando con datos reales, respondemos tus preguntas y
              evaluamos juntos si Nexus encaja con tu operación.
            </p>

            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(56,189,248,0.12)' }}>
                  <Mail className="h-5 w-5" style={{ color: '#38bdf8' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#3a4d6b' }}>Correo</p>
                  <a href="mailto:hola@wavenet.dev" className="text-sm font-medium nav-link">hola@wavenet.dev</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(163,230,53,0.12)' }}>
                  <Phone className="h-5 w-5" style={{ color: '#a3e635' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#3a4d6b' }}>WhatsApp</p>
                  <a href="https://wa.me/573001234567" className="text-sm font-medium nav-link">+57 300 123 4567</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(251,146,60,0.12)' }}>
                  <MapPin className="h-5 w-5" style={{ color: '#fb923c' }} />
                </div>
                <div>
                  <p className="text-xs mb-0.5" style={{ color: '#3a4d6b' }}>Ubicación</p>
                  <p className="text-sm font-medium" style={{ color: '#6b80a3' }}>Colombia · Atención en todo el país</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="rounded-3xl border p-8" style={{ borderColor: '#1e2d42', background: '#0c1120' }}>
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center py-12 gap-5 text-center">
                <div className="h-20 w-20 rounded-full flex items-center justify-center" style={{ background: 'rgba(163,230,53,0.15)' }}>
                  <Check className="h-10 w-10" style={{ color: '#a3e635' }} />
                </div>
                <h3 className="text-xl font-semibold" style={{ color: '#e8f0fe' }}>¡Mensaje recibido!</h3>
                <p className="text-sm leading-relaxed max-w-xs" style={{ color: '#6b80a3' }}>
                  Nos pondremos en contacto contigo en las próximas horas para agendar tu demo personalizada.
                </p>
                <button onClick={() => { setStatus('idle'); setForm({ nombre: '', empresa: '', telefono: '', email: '', mensaje: '' }); }} className="mt-2 text-xs underline" style={{ color: '#3a4d6b' }}>
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <p className="text-base font-semibold mb-6" style={{ color: '#e8f0fe' }}>Solicitar demo gratuita</p>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: '#3a4d6b' }}>Nombre *</label>
                    <input
                      required
                      placeholder="Tu nombre"
                      value={form.nombre}
                      onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label className="block text-xs mb-1.5" style={{ color: '#3a4d6b' }}>Empresa *</label>
                    <input
                      required
                      placeholder="Nombre de tu ESP"
                      value={form.empresa}
                      onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: '#3a4d6b' }}>Correo electrónico *</label>
                  <input
                    required
                    type="email"
                    placeholder="tu@empresa.co"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: '#3a4d6b' }}>Teléfono / WhatsApp</label>
                  <input
                    placeholder="+57 300 000 0000"
                    value={form.telefono}
                    onChange={(e) => setForm({ ...form, telefono: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label className="block text-xs mb-1.5" style={{ color: '#3a4d6b' }}>¿Qué necesitas? (opcional)</label>
                  <textarea
                    rows={4}
                    placeholder="Cuéntanos sobre tu empresa, cuántos clientes tienes, qué usas actualmente..."
                    value={form.mensaje}
                    onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="btn-primary relative w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 text-sm font-semibold mt-2 disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <span className="h-4 w-4 rounded-full border-2 animate-spin relative z-10" style={{ borderColor: '#000', borderTopColor: 'transparent' }} />
                      <span className="relative z-10">Enviando...</span>
                    </>
                  ) : (
                    <>
                      <span className="relative z-10">Solicitar mi demo gratuita</span>
                      <Send className="relative z-10 h-4 w-4" />
                    </>
                  )}
                </button>

                <p className="text-xs text-center" style={{ color: '#3a4d6b' }}>
                  Sin compromiso · Sin spam · Solo te contactamos para la demo
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t py-16" style={{ borderColor: '#1e2d42' }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-4">
              <NexusLogo size={36} />
              <span className="font-semibold text-lg" style={{ color: '#e8f0fe' }}>Nexus</span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: '#3a4d6b' }}>
              La plataforma de facturación y gestión para empresas de energía
              eléctrica en Colombia. Moderna, automatizada y lista para crecer.
            </p>
            <div className="flex gap-3">
              <a href="mailto:hola@wavenet.dev" className="h-9 w-9 rounded-xl border flex items-center justify-center transition-colors card-glow" style={{ borderColor: '#1e2d42', color: '#3a4d6b' }}>
                <Mail className="h-4 w-4" />
              </a>
              <a href="https://wa.me/573001234567" className="h-9 w-9 rounded-xl border flex items-center justify-center transition-colors card-glow" style={{ borderColor: '#1e2d42', color: '#3a4d6b' }}>
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="flex gap-16 flex-wrap">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3a4d6b' }}>Plataforma</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'La plataforma', href: '#plataforma'  },
                  { label: 'Cómo funciona', href: '#como'        },
                  { label: 'Facturación',   href: '#plataforma'  },
                  { label: 'Cobros',        href: '#plataforma'  },
                  { label: 'Reportes',      href: '#plataforma'  },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="text-sm nav-link">{item.label}</a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: '#3a4d6b' }}>Empresa</p>
              <div className="flex flex-col gap-3">
                {[
                  { label: 'Nosotros',     href: '#nosotros' },
                  { label: 'Precios',      href: '#precios'  },
                  { label: 'Preguntas',    href: '#faq'      },
                  { label: 'Contacto',     href: '#contacto' },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="text-sm nav-link">{item.label}</a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4" style={{ borderColor: '#1e2d42' }}>
          <p className="text-xs" style={{ color: '#3a4d6b' }}>
            © {new Date().getFullYear()} Wavenet Dev SAS · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-4">
            <a href="#inicio" className="text-xs nav-link">Privacidad</a>
            <a href="#inicio" className="text-xs nav-link">Términos</a>
            <p className="text-xs" style={{ color: '#3a4d6b' }}>Hecho en Colombia 🇨🇴</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE
───────────────────────────────────────────────────────────── */
export default function LandingPage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Stats />
        <WhatItDoes />
        <Modules />
        <HowItWorks />
        <Trust />
        <OnboardingDemo />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
