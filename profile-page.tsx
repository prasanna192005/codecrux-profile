"use client"

import { motion } from "framer-motion"
import { Mail, Github, Twitter, Globe } from "lucide-react"
import { TopicRadarChart } from "./components/radar-chart"
import { ContestPerformance } from "./components/contest-performance"
import { ProblemStats } from "./components/problem-stats"
import { ActivityCalendar } from "./components/activity-calendar"
import { PlatformStats } from "./components/platform-stats"

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-6"
        >
          <div className="relative">
            <motion.img
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-i8JLX1EXc9n60ITMaN8HCfBgoLOvGK.png"
              alt="Profile"
              width={96}
              height={96}
              className="rounded-full ring-2 ring-purple-500"
            />
            <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-black" />
          </div>
          <div>
            <h1 className="text-2xl font-bold">Aakash Mokani</h1>
            <p className="text-gray-400">@mokanicharani</p>
            <div className="flex gap-3 mt-3">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Mail className="w-5 h-5 text-cyan-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Github className="w-5 h-5 text-purple-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Twitter className="w-5 h-5 text-blue-400" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <Globe className="w-5 h-5 text-green-400" />
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Platform Stats */}
        <PlatformStats />

        {/* Activity Calendar */}
        <ActivityCalendar />

        {/* Charts Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          <TopicRadarChart />
          <ProblemStats />
        </div>

        {/* Contest Performance */}
        <ContestPerformance />
      </div>
    </div>
  )
}

