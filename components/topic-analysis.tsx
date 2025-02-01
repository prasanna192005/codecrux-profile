"use client"

import { Bar, BarChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { Card } from "@/components/ui/card"

const data = [
  { topic: "Arrays", count: 147 },
  { topic: "DP", count: 83 },
  { topic: "String", count: 51 },
  { topic: "HashMaps", count: 45 },
  { topic: "DFS", count: 39 },
  { topic: "Binary Search", count: 33 },
]

export function TopicAnalysis() {
  return (
    <Card className="p-4 bg-gray-950">
      <h3 className="text-lg font-semibold mb-4">DSA Topic Analysis</h3>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical">
            <XAxis type="number" stroke="#666" />
            <YAxis dataKey="topic" type="category" stroke="#666" width={100} />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1a1a1a",
                border: "none",
                borderRadius: "8px",
              }}
            />
            <Bar dataKey="count" fill="#3b82f6" radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

