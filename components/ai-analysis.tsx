"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface AIAnalysisProps {
  data: any[]
  onAnalysisComplete?: () => void
}

interface AIAnalysisResponse {
  opportunity_score: {
    description: string
    areas: Array<{
      name: string
      score: number
      unit: string
    }>
  }
  ai_recommendations: {
    description: string
    implementations: Array<{
      name: string
      description: string
      technology: string
      confidence: number
      cost_per_month: number
      currency: string
      impact: string
      risk: string
      priority: number
    }>
  }
  risk_assessment: {
    description: string
    risks: Array<{
      severity: string
      name: string
      details: string
    }>
  }
  metadata: {
    generated_date: string
    version: string
    total_recommendations: number
    total_monthly_cost: number
    currency: string
  }
}

export default function AIAnalysis({ data, onAnalysisComplete }: AIAnalysisProps) {
  const [analysisResults, setAnalysisResults] = useState<AIAnalysisResponse | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleAnalyze = async () => {
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('https://agent-prod.studio.lyzr.ai/v3/inference/chat/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'sk-default-H0RDPuvT95RpWUepisEbn0NVZEs0hBEf',
        },
        body: JSON.stringify({
          user_id: "katewamukul@gmail.com",
          agent_id: "6846d65762d8a0cca7618622",
          session_id: "6846d65762d8a0cca7618622-sgaixxg164",
          message: JSON.stringify(data)
        }),
      })
      
      if (!response.ok) {
        throw new Error('Failed to fetch analysis data')
      }

      const result = await response.json()
      setAnalysisResults(result.ai_opportunity_assessment)
      if (onAnalysisComplete) {
        onAnalysisComplete()
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch analysis data')
      console.error('Error analyzing data:', err)
    } finally {
      setIsLoading(false)
      recommendations: [
        "Optimize workflow X for 30% cost reduction",
        "Implement automation in process Y for 40% efficiency gain"
      ]
    }
  }

  return (
    <Card className="w-full">
      <CardContent>
        {error && (
          <div className="p-4 bg-red-50 rounded-lg border-red-200 mb-4">
            <p className="text-red-700">{error}</p>
          </div>
        )}

        <Tabs defaultValue="overview">
         

        

          <TabsContent value="recommendations">
            <div className="space-y-4">
              <h3 className="font-medium">AI Implementation Recommendations</h3>
              {analysisResults?.ai_recommendations?.implementations?.map((rec, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold">{rec.name}</h4>
                      <p className="text-sm text-muted-foreground">{rec.description}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={rec.risk === "Low" ? "secondary" : "destructive"}>
                        {rec.risk}
                      </Badge>
                      <Badge variant="outline">Priority {rec.priority}</Badge>
                    </div>
                  </div>
                  <div className="mt-2 flex items-center gap-4">
                    <div>
                      <span className="text-sm">Monthly Cost:</span>
                      <span className="font-medium">${rec.cost_per_month}</span>
                    </div>
                    <div>
                      <span className="text-sm">Confidence:</span>
                      <span className="font-medium">{rec.confidence}%</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="risks">
            <div className="space-y-4">
              <h3 className="font-medium">Risk Assessment</h3>
              {analysisResults?.risk_assessment?.risks?.map((risk, index) => (
                <div key={index} className="p-4 rounded-lg border">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant={risk.severity === "High" ? "destructive" : "secondary"}>
                      {risk.severity}
                    </Badge>
                    <h4 className="font-medium">{risk.name}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">{risk.details}</p>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        
      </CardContent>
    </Card>
  )
}
