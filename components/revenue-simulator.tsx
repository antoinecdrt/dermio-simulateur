"use client"

import { useState, useMemo } from "react"
import { Users, Calendar, Sparkles, TrendingUp } from "lucide-react"

export function RevenueSimulator() {
  const [budget, setBudget] = useState(150)

  const calculations = useMemo(() => {
    const prospects = Math.round(budget * 0.4)
    const appointments = Math.round(budget * 0.1)
    const cures = Math.round(budget * 0.0200 * 100) / 100
    const revenueAppointments = appointments * 80
    const revenueCures = cures * 500
    const totalRevenue = revenueAppointments + revenueCures

    return {
      prospects,
      appointments,
      cures: Math.round(cures),
      revenueAppointments,
      revenueCures,
      totalRevenue: Math.round(totalRevenue),
    }
  }, [budget])

  return (
    <div className="w-full">
      {/* Budget Slider */}
      <div className="bg-card rounded-xl p-4 shadow-sm border border-border mb-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-muted-foreground font-medium">Budget publicitaire</span>
          <span className="text-xl font-bold bg-gradient-to-r from-[oklch(0.65_0.2_330)] to-[oklch(0.7_0.15_290)] bg-clip-text text-transparent">
            {budget} €
          </span>
        </div>
        
        <div className="relative">
          <input
            type="range"
            min={150}
            max={450}
            step={10}
            value={budget}
            onChange={(e) => setBudget(Number(e.target.value))}
            className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gradient-to-r from-[oklch(0.65_0.2_330)] to-[oklch(0.7_0.15_290)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-card [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[oklch(0.65_0.2_330)] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110 [&::-moz-range-thumb]:w-5 [&::-moz-range-thumb]:h-5 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-card [&::-moz-range-thumb]:shadow-lg [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-[oklch(0.65_0.2_330)] [&::-moz-range-thumb]:cursor-pointer"
          />
          <div className="flex justify-between mt-2 text-xs text-muted-foreground">
            <span>150 €</span>
            <span>450 €</span>
          </div>
        </div>
      </div>

      {/* KPIs Row - Horizontal compact layout */}
      <div className="flex flex-col gap-3 mb-4 md:flex-row">
        <div className="flex-1 bg-card rounded-xl px-4 py-3 shadow-sm border border-border flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[oklch(0.95_0.05_330)] flex items-center justify-center shrink-0">
            <Users className="w-4 h-4 text-[oklch(0.65_0.2_330)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Prospects</p>
            <p className="text-xl font-bold text-foreground">{calculations.prospects}</p>
          </div>
        </div>

        <div className="flex-1 bg-card rounded-xl px-4 py-3 shadow-sm border border-border flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[oklch(0.92_0.05_290)] flex items-center justify-center shrink-0">
            <Calendar className="w-4 h-4 text-[oklch(0.7_0.15_290)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Rendez-vous</p>
            <p className="text-xl font-bold text-foreground">{calculations.appointments}</p>
          </div>
        </div>

        <div className="flex-1 bg-card rounded-xl px-4 py-3 shadow-sm border border-border flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-[oklch(0.92_0.06_350)] flex items-center justify-center shrink-0">
            <Sparkles className="w-4 h-4 text-[oklch(0.6_0.18_350)]" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Cures</p>
            <p className="text-xl font-bold text-foreground">{calculations.cures}</p>
          </div>
        </div>
      </div>

      {/* Total Revenue Card - Compact */}
      <div className="bg-[#ffd5e7] rounded-xl p-4 shadow-lg mb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/40 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-black" />
            </div>
            <div>
              <span className="text-black text-sm font-medium">
                Chiffre d{"'"}affaires estimé
              </span>
              <div className="flex flex-col gap-1 md:flex-row md:gap-4 text-black/70 text-xs mt-0.5">
                <span>RDV: {calculations.revenueAppointments.toLocaleString("fr-FR")} €</span>
                <span>Cures: {Math.round(calculations.revenueCures).toLocaleString("fr-FR")} €</span>
              </div>
            </div>
          </div>
          <p className="text-2xl md:text-[32px] font-bold text-black">
            {calculations.totalRevenue.toLocaleString("fr-FR")} €
          </p>
        </div>
      </div>

    </div>
  )
}
