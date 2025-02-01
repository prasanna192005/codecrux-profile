import { Card, CardContent } from "@/components/ui/card"
import type React from "react"

interface StatsCardProps {
  title: string
  value: number | string
  icon?: React.ReactNode
}

export function StatsCard({ title, value, icon }: StatsCardProps) {
  return (
    <Card className="bg-gray-950">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-400">{title}</p>
            <p className="text-2xl font-bold">{value}</p>
          </div>
          {icon && <div className="text-gray-400">{icon}</div>}
        </div>
      </CardContent>
    </Card>
  )
}

