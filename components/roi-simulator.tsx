"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, DollarSign, Clock, Zap, AlertTriangle, CheckCircle, BarChart3 } from "lucide-react"

export default function ROISimulator() {
  const [implementationCost, setImplementationCost] = useState([50000])
  const [timeToImplement, setTimeToImplement] = useState([6])
  const [efficiencyGain, setEfficiencyGain] = useState([40])

  // Calculate ROI based on sliders
  const monthlySavings = (efficiencyGain[0] / 100) * 25000 // Base monthly operational cost
  const annualSavings = monthlySavings * 12
  const roi = ((annualSavings - implementationCost[0]) / implementationCost[0]) * 100
  const paybackPeriod = implementationCost[0] / monthlySavings

  const recommendations = [
    {
      id: 1,
      title: "Customer Query Classification",
      description: "Automatically categorize incoming support tickets",
      confidence: 94,
      impact: "High",
      risk: "Low",
      costReduction: "$3,200/month",
      implementation: "GPT-4 + Custom Training",
    },
    {
      id: 2,
      title: "Response Generation",
      description: "Generate initial responses for common queries",
      confidence: 87,
      impact: "High",
      risk: "Medium",
      costReduction: "$5,800/month",
      implementation: "Claude-3 + RAG System",
    },
    {
      id: 3,
      title: "Sentiment Analysis",
      description: "Detect customer sentiment for priority routing",
      confidence: 91,
      impact: "Medium",
      risk: "Low",
      costReduction: "$1,500/month",
      implementation: "Specialized NLP Model",
    },
  ]

  return (
    <div className="space-y-6">
      {/* ROI Simulation Dashboard */}
     
      {/* AI Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            AI Recommendations
          </CardTitle>
          <CardDescription>Specific AI implementations ranked by impact and feasibility</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendations.map((rec) => (
              <div key={rec.id} className="p-4 border rounded-lg hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{rec.title}</h3>
                    <p className="text-slate-600 text-sm mb-2">{rec.description}</p>
                    <p className="text-xs text-slate-500">{rec.implementation}</p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className="bg-green-500">{rec.confidence}% Confidence</Badge>
                    <Badge variant="outline" className="text-green-600">
                      {rec.costReduction}
                    </Badge>
                  </div> 
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4 text-blue-500" />
                      <span className="text-sm">Impact: {rec.impact}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {rec.risk === "Low" ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : (
                        <AlertTriangle className="w-4 h-4 text-yellow-500" />
                      )}
                      <span className="text-sm">Risk: {rec.risk}</span>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
