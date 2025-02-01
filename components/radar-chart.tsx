"use client"

import { Card } from "@/components/ui/card"
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from "recharts"

const mockTopicStats = [
  { name: "Arrays", solved: 147, accuracy: 75, averageTime: 25 },
  { name: "DP", solved: 83, accuracy: 68, averageTime: 45 },
  { name: "String", solved: 51, accuracy: 82, averageTime: 20 },
  { name: "HashMaps", solved: 45, accuracy: 90, averageTime: 15 },
  { name: "DFS/BFS", solved: 39, accuracy: 65, averageTime: 30 },
  { name: "Binary", solved: 33, accuracy: 78, averageTime: 22 },
]

const normalizedData = mockTopicStats.map((topic) => ({
  topic: topic.name,
  accuracy: topic.accuracy,
  solved: (topic.solved / Math.max(...mockTopicStats.map((t) => t.solved))) * 100,
  time: (1 - topic.averageTime / Math.max(...mockTopicStats.map((t) => t.averageTime))) * 100,
}))

export function TopicRadarChart() {
  return (
    <Card className="p-6 bg-gray-950 border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Topic Analysis</h3>
      <div style={{ width: "100%", height: 400 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={normalizedData}>
            <PolarGrid stroke="#333" />
            <PolarAngleAxis dataKey="topic" tick={{ fill: "#888", fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#888" }} />
            <Radar name="Accuracy" dataKey="accuracy" stroke="#22d3ee" fill="#22d3ee" fillOpacity={0.3} />
            <Radar name="Solved %" dataKey="solved" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} />
            <Radar name="Speed" dataKey="time" stroke="#f43f5e" fill="#f43f5e" fillOpacity={0.3} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

