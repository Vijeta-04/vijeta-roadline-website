'use client'

import { motion } from 'motion/react'
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Line,
} from 'react-simple-maps'
import { Reveal } from './reveal'

const INDIA_TOPO =
  'https://cdn.jsdelivr.net/gh/udit-001/india-maps-data@master/topojson/india.json'

const HUBS: { name: string; coords: [number, number] }[] = [
  { name: 'Rajasthan', coords: [74.2179, 27.0238] },
  { name: 'Punjab', coords: [75.3412, 31.1471] },
  { name: 'Haryana', coords: [76.0856, 29.0588] },
  { name: 'Chandigarh', coords: [76.7794, 30.7333] },
]

// Connect Rajasthan hub to the others
const ROUTES: [[number, number], [number, number]][] = [
  [HUBS[0].coords, HUBS[1].coords],
  [HUBS[0].coords, HUBS[2].coords],
  [HUBS[0].coords, HUBS[3].coords],
  [HUBS[1].coords, HUBS[3].coords],
]

export function Coverage() {
  return (
    <section id="coverage" className="relative overflow-hidden bg-navy-deep py-24 lg:py-32">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Reveal>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-orange">
                Service Coverage
              </span>
              <h2 className="mt-3 font-heading text-4xl font-bold leading-tight tracking-tight text-white text-balance lg:text-5xl">
                Connecting North India, route by route
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-white/65 text-pretty">
                Our network spans the key industrial corridors of Rajasthan,
                Punjab, Haryana and Chandigarh — with dependable transit times
                and full visibility from pickup to delivery.
              </p>
            </Reveal>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {HUBS.map((hub, i) => (
                <Reveal key={hub.name} delay={i}>
                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange/60" />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-orange" />
                    </span>
                    <span className="text-sm font-medium text-white">
                      {hub.name}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-navy/40">
              <ComposableMap
                projection="geoMercator"
                projectionConfig={{ scale: 1100, center: [82, 22] }}
                className="h-auto w-full"
              >
                <Geographies geography={INDIA_TOPO}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const name: string =
                        geo.properties.st_nm || geo.properties.NAME_1 || ''
                      const active = [
                        'Rajasthan',
                        'Punjab',
                        'Haryana',
                        'Chandigarh',
                      ].includes(name)
                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          style={{
                            default: {
                              fill: active
                                ? 'rgba(255,107,0,0.28)'
                                : 'rgba(255,255,255,0.05)',
                              stroke: active
                                ? '#ff6b00'
                                : 'rgba(255,255,255,0.12)',
                              strokeWidth: active ? 1 : 0.5,
                              outline: 'none',
                            },
                            hover: {
                              fill: active
                                ? 'rgba(255,107,0,0.45)'
                                : 'rgba(255,255,255,0.08)',
                              outline: 'none',
                            },
                            pressed: { outline: 'none' },
                          }}
                        />
                      )
                    })
                  }
                </Geographies>

                {ROUTES.map((route, i) => (
                  <Line
                    key={i}
                    from={route[0]}
                    to={route[1]}
                    stroke="#ff8a33"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeDasharray="4 4"
                  />
                ))}

                {HUBS.map((hub) => (
                  <Marker key={hub.name} coordinates={hub.coords}>
                    <circle r={4} fill="#ff6b00" stroke="#fff" strokeWidth={1.5} />
                    <text
                      textAnchor="middle"
                      y={-10}
                      className="fill-white text-[9px] font-medium"
                    >
                      {hub.name}
                    </text>
                  </Marker>
                ))}
              </ComposableMap>
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  background:
                    'radial-gradient(circle at 35% 35%, rgba(255,107,0,0.12), transparent 60%)',
                }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
