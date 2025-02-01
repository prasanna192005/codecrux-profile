export interface ProfileStats {
  totalQuestions: number
  activeDays: number
  currentStreak: number
  maxStreak: number
  rating: number
  rank: number
  contests: number
}

export interface ProblemStats {
  easy: { solved: number; total: number }
  medium: { solved: number; total: number }
  hard: { solved: number; total: number }
}

export interface TopicStats {
  name: string
  solved: number
  accuracy: number
  averageTime: number
}

export interface ContestPerformance {
  date: string
  rank: number
  rating: number
  solved: number
  total: number
}

