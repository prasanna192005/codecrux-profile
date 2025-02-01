"use client"

import { Card } from "@/components/ui/card"

interface DifficultyChartProps {
  easy: number
  medium: number
  hard: number
  total: number
}

export function DifficultyChart({ easy, medium, hard, total }: DifficultyChartProps) {
  return (
    <Card className="p-6 bg-gray-950">
      <h3 className="text-lg font-semibold mb-4">Problems Solved</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[180px]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-emerald-400">Easy</span>
              <span className="text-sm text-gray-400">{easy}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full">
              <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${(easy / total) * 100}%` }} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[180px]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-yellow-400">Medium</span>
              <span className="text-sm text-gray-400">{medium}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full">
              <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${(medium / total) * 100}%` }} />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full max-w-[180px]">
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm text-red-400">Hard</span>
              <span className="text-sm text-gray-400">{hard}</span>
            </div>
            <div className="h-2 bg-gray-800 rounded-full">
              <div className="h-full bg-red-500 rounded-full" style={{ width: `${(hard / total) * 100}%` }} />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

