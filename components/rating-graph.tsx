"use client"

import { Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { date: "Jan", rating: 1500 },
  { date: "Feb", rating: 1520 },
  { date: "Mar", rating: 1540 },
  { date: "Apr", rating: 1569 },
]

export function RatingGraph() {
  return (
    <Card className="p-4 bg-gray-950">
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="date" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "none",
                borderRadius: "8px",
              }}
            />
            <Line type="monotone" dataKey="rating" stroke="#f97316" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

