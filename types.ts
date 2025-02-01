export interface PlatformStats {
  platform: string
  verified: boolean
}

export interface TopicAnalysis {
  topic: string
  count: number
}

export interface ProblemStats {
  easy: number
  medium: number
  hard: number
  total: number
}

export interface ProfileData {
  name: string
  username: string
  totalQuestions: number
  activeDays: number
  rating: number
  lastContest: string
  problemStats: ProblemStats
  topics: TopicAnalysis[]
}

