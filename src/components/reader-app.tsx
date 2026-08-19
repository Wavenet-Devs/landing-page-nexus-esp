'use client';

import { useEffect, useState } from 'react';
import { Camera, Check, Signal, Wifi, BatteryFull } from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════════
   LA APP DE LECTURA
   El técnico enfoca el medidor, la aplicación propone el número y él
   confirma. Tres tiempos, en bucle.
   ═══════════════════════════════════════════════════════════════════ */

const PASO_MS = 2600;
const LECTURA = '04979';

const ESTADOS = [
  { t: 'Enfocando el medidor',  d: 'Encuadre el registro dentro del marco.' },
  { t: 'Lectura propuesta',     d: 'Revise el número antes de guardar.' },
  { t: 'Lectura guardada',      d: 'Sincronizada con Nexus.' },
];

/* Medidor de energía dibujado: cuerpo, ventana de dígitos y disco. */
function Medidor({ resalta }: { resalta: boolean }) {
  return (
    <svg viewBox="0 0 200 132" className="w-full h-auto" role="img" aria-label="Medidor de energía">
      <rect x="4" y="4" width="192" height="124" rx="12" fill="#2b3a31" />
      <rect x="12" y="12" width="176" height="108" rx="8" fill="#3c4f43" />

      {/* Ventana de dígitos */}
      <rect x="30" y="30" width="140" height="40" rx="4" fill="#e9ede8" />
      {LECTURA.split('').map((n, i) => (
        <g key={i}>
          <rect
            x={34 + i * 27} y={34} width="23" height="32" rx="2"
            fill={i === 4 ? '#c23a18' : '#1a2620'}
          />
          <text
            x={34 + i * 27 + 11.5} y={56}
            textAnchor="middle"
            fill="#f2f5f1"
            style={{ font: '600 19px ui-monospace, monospace' }}
          >
            {n}
          </text>
        </g>
      ))}

      {/* Rótulo y disco */}
      <text x="30" y="88" fill="#9db0a3" style={{ font: '500 9px ui-monospace, monospace', letterSpacing: '1px' }}>
        kWh
      </text>
      <rect x="30" y="96" width="86" height="4" rx="2" fill="#4d6355" />
      <circle cx="158" cy="94" r="15" fill="#2b3a31" stroke="#5d7566" strokeWidth="1.5" />
      <circle
        cx="158" cy="94" r="9"
        fill="none"
        stroke={resalta ? '#7ddba6' : '#5d7566'}
        strokeWidth="3"
        strokeDasharray="14 42"
        style={{ transformOrigin: '158px 94px', animation: 'girar 2.4s linear infinite' }}
      />
      <style>{`@keyframes girar { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { circle { animation: none !important; } }`}</style>
    </svg>
  );
}

export default function ReaderApp() {
  const [paso, setPaso] = useState(0);

  useEffect(() => {
    const iv = setInterval(() => setPaso((p) => (p + 1) % ESTADOS.length), PASO_MS);
    return () => clearInterval(iv);
  }, []);

  const leyendo   = paso === 0;
  const propuesta = paso >= 1;
  const guardada  = paso === 2;

  return (
    <div className="flex justify-center">
      <div
        style={{
          width: 288, background: 'var(--color-ink)', borderRadius: 38,
          padding: 9, boxShadow: 'var(--shadow-lift)',
        }}
      >
        <div style={{ background: 'var(--color-sheet)', borderRadius: 30, overflow: 'hidden' }}>

          {/* Barra de estado */}
          <div
            className="flex items-center justify-between"
            style={{ padding: '10px 20px 6px' }}
          >
            <span className="num" style={{ fontSize: 11, fontWeight: 600, color: 'var(--color-ink)' }}>
              9:41
            </span>
            <div className="flex items-center gap-1" style={{ color: 'var(--color-ink)' }}>
              <Signal className="h-3 w-3" aria-hidden />
              <Wifi className="h-3 w-3" aria-hidden />
              <BatteryFull className="h-3.5 w-3.5" aria-hidden />
            </div>
          </div>

          {/* Encabezado de ruta */}
          <div style={{ padding: '6px 18px 14px' }}>
            <div className="flex items-baseline justify-between">
              <span className="label" style={{ fontSize: 9.5 }}>Ruta 07 · San Antonio</span>
              <span className="num" style={{ fontSize: 10, color: 'var(--color-verde)', fontWeight: 600 }}>
                12/48
              </span>
            </div>
            <div
              className="mt-2"
              style={{ height: 3, borderRadius: 99, background: 'var(--color-line)', overflow: 'hidden' }}
            >
              <div style={{ width: '25%', height: '100%', background: 'var(--color-verde)' }} />
            </div>
          </div>

          {/* Visor de cámara */}
          <div style={{ position: 'relative', background: '#1a2620', padding: 14 }}>
            <div style={{ position: 'relative' }}>
              <Medidor resalta={propuesta} />

              {/* Marco de encuadre sobre la ventana de dígitos */}
              <div
                style={{
                  position: 'absolute', left: '13%', top: '20%', width: '74%', height: '34%',
                  border: `2px solid ${propuesta ? '#7ddba6' : 'rgba(255,255,255,0.55)'}`,
                  borderRadius: 6,
                  boxShadow: propuesta ? '0 0 0 3px rgba(125,219,166,0.2)' : 'none',
                  transition: 'border-color .4s ease, box-shadow .4s ease',
                }}
              >
                {leyendo && (
                  <div
                    style={{
                      position: 'absolute', left: 0, right: 0, height: 2,
                      background: 'linear-gradient(90deg, transparent, #7ddba6, transparent)',
                      animation: 'escanear 1.6s ease-in-out infinite',
                    }}
                  />
                )}
              </div>
            </div>

            <style>{`
              @keyframes escanear { 0%,100% { top: 4%; } 50% { top: 88%; } }
              @media (prefers-reduced-motion: reduce) {
                [style*="escanear"] { animation: none !important; top: 50% !important; }
              }
            `}</style>
          </div>

          {/* Resultado */}
          <div style={{ padding: '16px 18px 20px' }}>
            <div className="label" style={{ fontSize: 9.5 }}>Contrato 0041-2287</div>

            <div className="flex items-baseline justify-between gap-3 mt-2.5">
              <div>
                <div className="label" style={{ fontSize: 9 }}>Lectura</div>
                <div
                  className="num"
                  style={{
                    fontSize: 27, fontWeight: 600, lineHeight: 1.1, letterSpacing: '-0.02em',
                    color: propuesta ? 'var(--color-ink)' : 'var(--color-ink-3)',
                    transition: 'color .4s ease',
                  }}
                >
                  {propuesta ? '4.979' : '—'}
                </div>
              </div>
              {propuesta && (
                <span
                  className="a-settle num"
                  style={{
                    fontSize: 9.5, fontWeight: 600, letterSpacing: '0.06em',
                    color: 'var(--color-verde)', background: 'var(--color-verde-tint)',
                    padding: '4px 9px', borderRadius: 999,
                  }}
                >
                  LEÍDA POR FOTO
                </span>
              )}
            </div>

            <p
              className="mt-3"
              style={{ fontSize: 11.5, color: 'var(--color-ink-3)', lineHeight: 1.5, minHeight: 34 }}
            >
              <strong style={{ color: 'var(--color-ink-2)', fontWeight: 600 }}>
                {ESTADOS[paso].t}.
              </strong>{' '}
              {ESTADOS[paso].d}
            </p>

            <div
              className="flex items-center justify-center gap-2 mt-1"
              style={{
                height: 42, borderRadius: 12,
                background: guardada ? 'var(--color-verde-tint)' : 'var(--color-verde)',
                color: guardada ? 'var(--color-verde-deep)' : '#ffffff',
                fontSize: 14, fontWeight: 600,
                transition: 'background .4s ease, color .4s ease',
              }}
            >
              {guardada
                ? <><Check className="h-4 w-4" aria-hidden /> Guardada</>
                : <><Camera className="h-4 w-4" aria-hidden /> Confirmar lectura</>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
