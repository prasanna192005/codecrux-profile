"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

// Generate mock data for 6 months
const generateActivityData = () => {
  const data = []
  const today = new Date()
  for (let i = 180; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    data.push({
      date: date.toISOString().split("T")[0],
      count: Math.floor(Math.random() * 5),
    })
  }
  return data
}

const activityData = generateActivityData()

export function ActivityCalendar() {
  const getColor = (count: number) => {
    if (count === 0) return "bg-gray-800"
    if (count === 1) return "bg-emerald-900"
    if (count === 2) return "bg-emerald-700"
    if (count === 3) return "bg-emerald-500"
    return "bg-emerald-300"
  }

  const months = Array.from(
    new Set(activityData.map((d) => new Date(d.date).toLocaleString("default", { month: "short" }))),
  )

  const weeks = Array.from({ length: Math.ceil(activityData.length / 7) })

  return (
    <Card className="p-6 bg-gray-950 border-gray-800">
      <h3 className="text-lg font-semibold mb-4">Activity Calendar</h3>
      <div className="overflow-x-auto">
        <div className="inline-flex gap-1 min-w-max">
          {weeks.map((_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {weekIndex === 0 && (
                <div className="text-xs text-gray-400 h-6">{months[Math.floor((weekIndex * 7) / 30)]}</div>
              )}
              {Array.from({ length: 7 }).map((_, dayIndex) => {
                const dataIndex = weekIndex * 7 + dayIndex
                const data = activityData[dataIndex]
                return (
                  <motion.div
                    key={dayIndex}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: dataIndex * 0.001,
                      duration: 0.2,
                    }}
                  >
                    <div
                      className={`w-3 h-3 rounded-sm ${getColor(data?.count || 0)}`}
                      title={data ? `${data.date}: ${data.count} contributions` : ""}
                    />
                  </motion.div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </Card>
  )
}

