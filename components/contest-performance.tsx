"use client"

import { Card } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts"

const contestHistory = [
  { date: "2024-01", rank: 1200, rating: 1500, solved: 2, total: 4 },
  { date: "2024-02", rank: 800, rating: 1550, solved: 3, total: 4 },
  { date: "2024-03", rank: 500, rating: 1600, solved: 4, total: 4 },
  { date: "2024-04", rank: 400, rating: 1569, solved: 3, total: 4 },
]

export function ContestPerformance() {
  const maxRating = Math.max(...contestHistory.map((c) => c.rating))

  return (
    <Card className="p-6 bg-gray-950 border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Contest Performance</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={contestHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#333" />
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "none",
                borderRadius: "8px",
              }}
            />
            <ReferenceLine
              y={maxRating}
              stroke="#22c55e"
              strokeDasharray="3 3"
              label={{ value: "Max Rating", fill: "#22c55e" }}
            />
            <Line type="monotone" dataKey="rating" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: "#8b5cf6" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

