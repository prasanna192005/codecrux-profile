"use client"

import { Card } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"

const data = [
  { name: "Easy", value: 74, color: "#22c55e" },
  { name: "Medium", value: 179, color: "#eab308" },
  { name: "Hard", value: 29, color: "#ef4444" },
]

export function ProblemStats() {
  return (
    <Card className="p-6 bg-gray-950 border-gray-800">
      <h3 className="text-lg font-semibold mb-4 text-white">Problems Solved</h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend wrapperStyle={{ color: "white" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}
