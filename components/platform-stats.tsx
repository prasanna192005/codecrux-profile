"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Trophy, Code2, Target, Award, Star } from "lucide-react"

const platforms = [
  {
    name: "LeetCode",
    stats: [
      { label: "Problems", value: "283", icon: Code2 },
      { label: "Contest Rating", value: "1569", icon: Trophy },
      { label: "Global Rank", value: "#12,354", icon: Target },
    ],
  },
  {
    name: "CodeForces",
    stats: [
      { label: "Problems", value: "145", icon: Code2 },
      { label: "Max Rating", value: "1342", icon: Award },
      { label: "Contests", value: "15", icon: Star },
    ],
  },
]

export function PlatformStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {platforms.map((platform, i) => (
        <Card key={platform.name} className="p-6 bg-gray-950 border-gray-800">
          <motion.div
            initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-4 text-white">{platform.name}</h3>
            <div className="grid gap-4">
              {platform.stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-gray-900"
                  >
                    <div className="p-2 rounded-lg bg-gray-800">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <p className="text-sm text-white">{stat.label}</p>
                      <p className="text-lg font-semibold text-white">{stat.value}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </Card>
      ))}
    </div>
  )
}
