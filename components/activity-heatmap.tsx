"use client"

import { Card } from "@/components/ui/card"

interface HeatmapProps {
  data: { date: string; count: number }[]
}

export function ActivityHeatmap({ data }: HeatmapProps) {
  const months = ["Aug", "Sep", "Oct", "Nov", "Dec", "Feb"]

  // Generate grid of cells with different intensities based on count
  const getIntensity = (count: number) => {
    if (count === 0) return "bg-gray-800"
    if (count < 2) return "bg-emerald-900"
    if (count < 4) return "bg-emerald-700"
    return "bg-emerald-500"
  }

  return (
    <Card className="p-4 bg-gray-950">
      <div className="flex gap-1">
        {months.map((month) => (
          <div key={month} className="flex flex-col gap-1">
            <div className="text-xs text-gray-400 mb-1">{month}</div>
            {Array.from({ length: 7 }).map((_, i) => (
              <div key={i} className={`w-3 h-3 rounded-sm ${getIntensity(Math.random() * 5)}`} />
            ))}
          </div>
        ))}
      </div>
    </Card>
  )
}

