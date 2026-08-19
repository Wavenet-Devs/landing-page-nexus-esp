'use client';

import { useEffect, useRef, useState } from 'react';

/* ═══════════════════════════════════════════════════════════════════
   LA FACTURA VIVA
   Un ciclo real llenándose solo: lectura → consumo → tarifa →
   emisión → recaudo. Las cifras cuadran.
   ═══════════════════════════════════════════════════════════════════ */

const STEP_MS = 4400;

const PASOS = [
  { n: '01', clave: 'Lectura',     glosa: 'El técnico captura el registro del medidor en campo.' },
  { n: '02', clave: 'Consumo',     glosa: 'Nexus calcula la diferencia y la contrasta con el histórico.' },
  { n: '03', clave: 'Liquidación', glosa: 'Aplica la tarifa del estrato, el subsidio y el alumbrado.' },
  { n: '04', clave: 'Emisión',     glosa: 'Emite la factura, fija las fechas y la envía al suscriptor.' },
  { n: '05', clave: 'Recaudo',     glosa: 'Registra el pago y descarga la cartera del cliente.' },
];

/* 152.371 − 76.185 + 8.400 = 84.586 */
const F = {
  empresa: 'Electrificadora Ejemplo S.A. E.S.P.', nit: '900.000.000-0', consecutivo: 'FE-2026-0084217',
  contrato: '0041-2287', suscriptor: 'Ana M. Ríos Valencia',
  direccion: 'Cra. 7 # 15-42, B. San Antonio', estrato: '2', uso: 'Residencial',
  fLectura: '05 ago 2026', fEmision: '07 ago 2026', fLimite: '22 ago 2026', fCorte: '29 ago 2026',
  lecAnt: 4812, lecAct: 4979, consumo: 167, cu: 912.4,
  valConsumo: 152371, subsidio: -76185, alumbrado: 8400, saldoAnt: 0, mora: 0, total: 84586,
  fPago: '19 ago 2026', canal: 'Corresponsal bancario',
};

const HISTORICO = [
  { mes: 'MAR', kwh: 142 }, { mes: 'ABR', kwh: 155 }, { mes: 'MAY', kwh: 138 },
  { mes: 'JUN', kwh: 161 }, { mes: 'JUL', kwh: 149 }, { mes: 'AGO', kwh: 167 },
];

const cop = (n: number) =>
  new Intl.NumberFormat('es-CO', { maximumFractionDigits: 0 }).format(Math.round(n));

/* Las cifras aterrizan, no aparecen. */
function useTicker(target: number, active: boolean, vuelta = 0, ms = 640) {
  const [v, setV] = useState(0);
  const raf = useRef<number | undefined>(undefined);
  useEffect(() => {
    if (!active) { setV(0); return; }
    if (typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setV(target); return; }
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / ms, 1);
      setV(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => { if (raf.current) cancelAnimationFrame(raf.current); };
  }, [target, active, vuelta, ms]);
  return v;
}

function Campo({ rot, val, mono = false }: { rot: string; val: string; mono?: boolean }) {
  return (
    <div>
      <div className="label" style={{ fontSize: 9.5, letterSpacing: '0.1em' }}>{rot}</div>
      <div
        className={mono ? 'num' : ''}
        style={{ fontSize: 13, fontWeight: 500, color: 'var(--color-ink)', marginTop: 3, lineHeight: 1.35 }}
      >
        {val}
      </div>
    </div>
  );
}

function Renglon({ concepto, valor, tono = 'ink', delay = 0 }: {
  concepto: string; valor: string; tono?: 'ink' | 'verde' | 'muted'; delay?: number;
}) {
  const color = tono === 'verde' ? 'var(--color-verde)'
              : tono === 'muted' ? 'var(--color-ink-3)'
              : 'var(--color-ink)';
  return (
    <div
      className="a-settle flex items-baseline justify-between gap-4"
      style={{ animationDelay: `${delay}ms`, paddingBlock: 6 }}
    >
      <span style={{ fontSize: 12.5, color: 'var(--color-ink-2)' }}>{concepto}</span>
      <span className="num shrink-0" style={{ fontSize: 13, color, fontWeight: 500 }}>{valor}</span>
    </div>
  );
}

export default function InvoiceDemo() {
  const [paso, setPaso]     = useState(0);
  const [prog, setProg]     = useState(0);
  const [pausa, setPausa]   = useState(false);
  const [vuelta, setVuelta] = useState(0);

  useEffect(() => { if (paso === 0) setVuelta((v) => v + 1); }, [paso]);

  useEffect(() => {
    if (pausa) return;
    const salto = 100 / (STEP_MS / 60);
    const iv = setInterval(() => {
      setProg((p) => {
        if (p >= 100) { setPaso((s) => (s + 1) % PASOS.length); return 0; }
        return p + salto;
      });
    }, 60);
    return () => clearInterval(iv);
  }, [pausa, paso]);

  const ir = (i: number) => { setPaso(i); setProg(0); };

  const v = {
    lectura: paso >= 0, consumo: paso >= 1, tarifa: paso >= 2,
    emision: paso >= 3, recaudo: paso >= 4,
  };

  const tLecAct = useTicker(F.lecAct,  v.lectura, vuelta);
  const tCons   = useTicker(F.consumo, v.consumo, vuelta);
  const tTotal  = useTicker(F.total,   v.emision, vuelta);
  const maxKwh  = Math.max(...HISTORICO.map((h) => h.kwh));

  return (
    <div
      className="card overflow-hidden"
      style={{ boxShadow: 'var(--shadow-lift)' }}
      onMouseEnter={() => setPausa(true)}
      onMouseLeave={() => setPausa(false)}
    >
      <div className="grid lg:grid-cols-[236px_1fr]">

        {/* ── Riel del ciclo ─────────────────────────────────────── */}
        <div
          className="p-4 lg:p-6"
          style={{ background: 'var(--color-paper)', borderRight: '1px solid var(--color-line)' }}
        >
          <div className="flex items-center justify-between mb-4">
            <span className="label" style={{ fontSize: 10 }}>Ciclo de facturación</span>
            <span
              className="num"
              style={{ fontSize: 9.5, fontWeight: 600, color: pausa ? 'var(--color-coral-text)' : 'var(--color-verde)' }}
            >
              {pausa ? 'PAUSA' : 'EN CURSO'}
            </span>
          </div>

          <ol className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-1 lg:pb-0">
            {PASOS.map((p, i) => {
              const act = i === paso;
              const hecho = i < paso;
              return (
                <li key={p.n} className="shrink-0 lg:shrink">
                  <button
                    onClick={() => ir(i)}
                    aria-current={act ? 'step' : undefined}
                    className="w-full text-left transition-all"
                    style={{
                      background: act ? 'var(--color-sheet)' : 'transparent',
                      border: `1px solid ${act ? 'var(--color-line)' : 'transparent'}`,
                      boxShadow: act ? 'var(--shadow-card)' : 'none',
                      borderRadius: 12,
                      padding: '10px 12px',
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className="shrink-0 flex items-center justify-center num"
                        style={{
                          width: 20, height: 20, borderRadius: 999, fontSize: 9, fontWeight: 600,
                          background: act ? 'var(--color-verde)' : hecho ? 'var(--color-verde-tint)' : 'transparent',
                          color: act ? '#fff' : hecho ? 'var(--color-verde)' : 'var(--color-ink-3)',
                          border: act || hecho ? 'none' : '1px solid var(--color-line)',
                        }}
                      >
                        {p.n}
                      </span>
                      <span
                        style={{
                          fontSize: 13.5, whiteSpace: 'nowrap',
                          fontWeight: act ? 600 : 500,
                          color: act ? 'var(--color-ink)' : 'var(--color-ink-3)',
                        }}
                      >
                        {p.clave}
                      </span>
                    </div>

                    {act && (
                      <>
                        <p
                          className="hidden lg:block a-ink"
                          style={{ fontSize: 11.5, lineHeight: 1.5, color: 'var(--color-ink-3)', marginTop: 7 }}
                        >
                          {p.glosa}
                        </p>
                        <div
                          className="mt-2.5"
                          style={{ height: 3, borderRadius: 99, background: 'var(--color-line)', overflow: 'hidden' }}
                        >
                          <div style={{ width: `${prog}%`, height: '100%', background: 'var(--color-verde)' }} />
                        </div>
                      </>
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        {/* ── La hoja ────────────────────────────────────────────── */}
        <div style={{ background: 'var(--color-sheet)' }}>
          <div style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}>

            {/* Membrete */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-7">
              <div>
                <div className="display-wide" style={{ fontSize: 16, fontWeight: 700, color: 'var(--color-ink)' }}>
                  {F.empresa}
                </div>
                <div className="label" style={{ fontSize: 9.5, marginTop: 4 }}>
                  NIT <span className="num">{F.nit}</span> · Factura de servicios públicos
                </div>
              </div>
              <div className="text-right">
                <div className="label" style={{ fontSize: 9.5 }}>Consecutivo</div>
                <div className="num" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-ink)', marginTop: 3 }}>
                  {F.consecutivo}
                </div>
              </div>
            </div>

            {/* Suscriptor */}
            <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2 lg:grid-cols-4 mb-8">
              <Campo rot="Contrato" val={F.contrato} mono />
              <Campo rot="Suscriptor" val={F.suscriptor} />
              <Campo rot="Dirección" val={F.direccion} />
              <Campo rot="Estrato / uso" val={`${F.estrato} · ${F.uso}`} />
            </div>

            <div className="grid gap-7 lg:grid-cols-2 lg:gap-9">

              {/* Lectura e histórico */}
              <div>
                <div className="label mb-3">Lectura del medidor</div>

                <div className="grid grid-cols-3 gap-2.5 mb-7">
                  {[
                    { r: 'Anterior', v: F.lecAnt, on: true },
                    { r: 'Actual',   v: Math.round(tLecAct), on: v.lectura },
                    { r: 'Consumo',  v: Math.round(tCons), on: v.consumo, u: 'kWh', hi: true },
                  ].map((c) => (
                    <div
                      key={c.r}
                      style={{
                        background: c.hi && c.on ? 'var(--color-verde-tint)' : 'var(--color-paper)',
                        borderRadius: 12, padding: '10px 12px',
                        opacity: c.on ? 1 : 0.4,
                        transition: 'opacity .45s ease, background .45s ease',
                      }}
                    >
                      <div className="label" style={{ fontSize: 9.5 }}>{c.r}</div>
                      <div
                        className="num"
                        style={{
                          fontSize: 18, fontWeight: 600, lineHeight: 1.2, marginTop: 2,
                          color: c.hi ? 'var(--color-verde-deep)' : 'var(--color-ink)',
                        }}
                      >
                        {c.on ? cop(c.v) : '—'}
                        {c.u && <span style={{ fontSize: 9.5, fontWeight: 500, marginLeft: 3 }}>{c.u}</span>}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="label mb-4">Consumo de los últimos 6 periodos · kWh</div>
                <div
                  className="flex items-end gap-2"
                  style={{ height: 78, opacity: v.consumo ? 1 : 0.3, transition: 'opacity .5s ease' }}
                >
                  {HISTORICO.map((h, i) => {
                    const ult = i === HISTORICO.length - 1;
                    return (
                      <div key={h.mes} className="flex-1 flex flex-col items-center gap-1.5">
                        <span
                          className="num"
                          style={{ fontSize: 9.5, fontWeight: ult ? 600 : 500,
                                   color: ult ? 'var(--color-verde-deep)' : 'var(--color-ink-3)' }}
                        >
                          {h.kwh}
                        </span>
                        <div
                          className={v.consumo ? 'a-bar w-full' : 'w-full'}
                          style={{
                            height: `${(h.kwh / maxKwh) * 44}px`,
                            borderRadius: 5,
                            background: ult ? 'var(--color-verde)' : '#d5e0d6',
                            animationDelay: `${i * 55}ms`,
                          }}
                        />
                        <span className="label" style={{ fontSize: 9, letterSpacing: '0.06em' }}>{h.mes}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Liquidación */}
              <div>
                <div className="label mb-2">Liquidación</div>

                <div style={{ opacity: v.tarifa ? 1 : 0.25, transition: 'opacity .5s ease', minHeight: 152 }}>
                  {v.tarifa ? (
                    <>
                      <Renglon
                        concepto={`Consumo · ${F.consumo} kWh × $ ${new Intl.NumberFormat('es-CO', { minimumFractionDigits: 2 }).format(F.cu)}`}
                        valor={`$ ${cop(F.valConsumo)}`} />
                      <Renglon concepto="Subsidio estrato 2 (50 %)" valor={`− $ ${cop(-F.subsidio)}`} tono="verde" delay={70} />
                      <Renglon concepto="Alumbrado público" valor={`$ ${cop(F.alumbrado)}`} delay={140} />
                      <Renglon concepto="Saldo anterior" valor={`$ ${cop(F.saldoAnt)}`} tono="muted" delay={210} />
                      <Renglon concepto="Interés por mora" valor={`$ ${cop(F.mora)}`} tono="muted" delay={280} />
                    </>
                  ) : (
                    <div className="space-y-[19px] pt-2">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} style={{ height: 1, background: 'var(--color-line-2)' }} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Total */}
                <div
                  className="flex items-baseline justify-between gap-3 mt-4"
                  style={{
                    background: v.emision ? 'var(--color-ink)' : 'var(--color-paper)',
                    borderRadius: 14, padding: '14px 16px',
                    transition: 'background .5s ease',
                  }}
                >
                  <div>
                    <div className="label" style={{ fontSize: 9.5, color: v.emision ? '#98a89d' : 'var(--color-ink-3)' }}>
                      Total a pagar
                    </div>
                    <div
                      className="num"
                      style={{ fontSize: 10, marginTop: 3, color: v.emision ? '#a7b9ab' : 'var(--color-ink-3)' }}
                    >
                      Límite {v.emision ? F.fLimite : '—'}
                    </div>
                  </div>
                  <div
                    className="num"
                    style={{
                      fontSize: 27, fontWeight: 600, lineHeight: 1, letterSpacing: '-0.02em',
                      color: v.emision ? '#ffffff' : 'var(--color-ink-3)',
                    }}
                  >
                    $ {v.emision ? cop(tTotal) : '—'}
                  </div>
                </div>

                {/* Fechas */}
                <div
                  className="grid grid-cols-2 gap-x-5 gap-y-2.5 mt-5"
                  style={{ opacity: v.emision ? 1 : 0.3, transition: 'opacity .5s ease' }}
                >
                  {[['Lectura', F.fLectura], ['Emisión', F.fEmision],
                    ['Límite de pago', F.fLimite], ['Suspensión', F.fCorte]].map(([r, d]) => (
                    <div key={r} className="flex items-baseline justify-between gap-2">
                      <span className="label" style={{ fontSize: 9.5 }}>{r}</span>
                      <span
                        className="num"
                        style={{ fontSize: 11,
                                 color: r === 'Suspensión' ? 'var(--color-coral-text)' : 'var(--color-ink-2)' }}
                      >
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Desprendible ─────────────────────────────────────── */}
          <div
            style={{
              borderTop: '1px dashed #cdd8ce',
              background: 'var(--color-paper)',
              padding: 'clamp(1.125rem, 2.5vw, 1.5rem) clamp(1.25rem, 3vw, 2rem)',
            }}
          >
            <div className="flex flex-wrap items-center justify-between gap-5">
              <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                <div>
                  <div className="label" style={{ fontSize: 9.5 }}>Desprendible · contrato</div>
                  <div className="num" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-ink)', marginTop: 2 }}>
                    {F.contrato}
                  </div>
                </div>
                <div style={{ opacity: v.recaudo ? 1 : 0.3, transition: 'opacity .45s ease' }}>
                  <div className="label" style={{ fontSize: 9.5 }}>Pago recibido</div>
                  <div className="num" style={{ fontSize: 13, fontWeight: 600, color: 'var(--color-ink)', marginTop: 2 }}>
                    {v.recaudo ? `${F.fPago} · ${F.canal}` : '—'}
                  </div>
                </div>
                <div style={{ opacity: v.recaudo ? 1 : 0.3, transition: 'opacity .45s ease' }}>
                  <div className="label" style={{ fontSize: 9.5 }}>Cartera del cliente</div>
                  <div
                    className="num"
                    style={{ fontSize: 13, fontWeight: 600, marginTop: 2,
                             color: v.recaudo ? 'var(--color-verde)' : 'var(--color-ink)' }}
                  >
                    $ {v.recaudo ? '0' : cop(F.total)}
                  </div>
                </div>
              </div>

              {/* El sello: el único momento de audacia de la página */}
              <div className="relative" style={{ width: 134, height: 48 }}>
                {v.recaudo && (
                  <div
                    className="a-stamp absolute inset-0 flex flex-col items-center justify-center"
                    style={{
                      border: '2.5px solid var(--color-verde)', borderRadius: 10,
                      color: 'var(--color-verde)', transform: 'rotate(-10deg)',
                    }}
                  >
                    <span
                      className="display-wide"
                      style={{ fontSize: 19, fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1 }}
                    >
                      PAGADO
                    </span>
                    <span className="num" style={{ fontSize: 8.5, letterSpacing: '0.08em', marginTop: 3 }}>
                      {F.fPago}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
