import type { TopicStats, ContestPerformance } from "../types/stats"

export const mockTopicStats: TopicStats[] = [
  { name: "Arrays", solved: 147, accuracy: 75, averageTime: 25 },
  { name: "Dynamic Programming", solved: 83, accuracy: 68, averageTime: 45 },
  { name: "String", solved: 51, accuracy: 82, averageTime: 20 },
  { name: "HashMaps", solved: 45, accuracy: 90, averageTime: 15 },
  { name: "DFS/BFS", solved: 39, accuracy: 65, averageTime: 30 },
  { name: "Binary Search", solved: 33, accuracy: 78, averageTime: 22 },
  { name: "Matrix", solved: 30, accuracy: 70, averageTime: 28 },
  { name: "Sorting", solved: 25, accuracy: 85, averageTime: 18 },
]

export const contestHistory: ContestPerformance[] = [
  { date: "2024-01", rank: 1200, rating: 1500, solved: 2, total: 4 },
  { date: "2024-02", rank: 800, rating: 1550, solved: 3, total: 4 },
  { date: "2024-03", rank: 500, rating: 1600, solved: 4, total: 4 },
  { date: "2024-04", rank: 400, rating: 1569, solved: 3, total: 4 },
]

export const activityData = Array.from({ length: 180 }, (_, i) => ({
  date: new Date(Date.now() - (180 - i) * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
  count: Math.floor(Math.random() * 5),
}))

