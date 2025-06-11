"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnalysisComplete from "@/components/ai-model-cards"
import {
  Brain,
  BarChart3,
  BookOpen,
  ArrowRight, 
  Shield, 
  TrendingUp,
  Users,
} from "lucide-react"
import { type FormData } from "@/types/data"
import DataIngestion from "@/components/data-ingestion"
import AIAnalysis from "@/components/ai-analysis"
import ROISimulator from "@/components/roi-simulator"
import CostAnalysis from "@/components/cost-analysis"
import Header from "@/components/header"

export default function AetheriusDashboard() {
  const [currentPhase, setCurrentPhase] = useState(1)
  const [completedPhases, setCompletedPhases] = useState<number[]>([])
  const [businessData, setBusinessData] = useState<FormData | null>(null)
  const initialFormData: FormData = {
    businessType: "",
    employeeCount: "",
    painPoints: "",
    timeSpent: "",
    priorities: "",
    monthlyBudget: "",
    expectedROI: "",
    currentCosts: {
      labor: 0,
      tools: 0,
      infrastructure: 0,
      other: 0
    },
    costSavingsGoal: 0,
    implementationTimeline: ""
  }

  const phases = [
    {
      id: 1,
      title: "Workflow Ingestion",
      description: "Visualize and map your current processes",
      icon: Brain,
      color: "bg-blue-500",
    },
    {
      id: 2,
      title: "AI Analysis",
      description: "Get intelligent recommendations and insights",
      icon: Brain,
      color: "bg-purple-500",
    },
    {
      id: 3,
      title: "Cost & ROI Planning",
      description: "Analyze costs and projected returns",
      icon: BarChart3,
      color: "bg-green-500",
    },
    {
      id: 4,
      title: "Conclusion and Reports",
      description: "Explore AI models and implementation guides",
      icon: BookOpen,
      color: "bg-orange-500",
    },
  ]
  
  // Function to handle moving to next phase
  const handleNextPhase = () => {
    if (currentPhase < 4) {
      setCurrentPhase(currentPhase + 1)
      if (!completedPhases.includes(currentPhase)) {
        setCompletedPhases([...completedPhases, currentPhase])
      }
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-4xl font-bold text-slate-900 mb-2">Welcome to Aetherius</h1>
              <p className="text-xl text-slate-600">Your Intelligent Workflow Architect</p>
            </div>
          </div>

          {/* Progress Overview - Progress bar removed but card kept */}
          <Card className="mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-lg">Project Progress</CardTitle>
                  <CardDescription>Complete all phases to get your comprehensive AI integration plan</CardDescription>
                </div>
                
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-4">
                {phases.map((phase) => {
                  const Icon = phase.icon
                  const isCompleted = completedPhases.includes(phase.id)
                  const isCurrent = currentPhase === phase.id

                  return (
                    <div
                      key={phase.id}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                        isCurrent
                          ? "border-blue-500 bg-blue-50"
                          : isCompleted
                            ? "border-green-500 bg-green-50"
                            : "border-slate-200 hover:border-slate-300"
                      }`}
                      onClick={() => setCurrentPhase(phase.id)}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg ${phase.color} text-white`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-sm">{phase.title}</h3>
                        </div>
                        {isCompleted && (
                          <Badge variant="secondary" className="text-xs">
                            ✓
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-slate-600">{phase.description}</p>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Phase Content */}
        <Tabs value={currentPhase.toString()} onValueChange={(value) => setCurrentPhase(Number.parseInt(value))}>
          <TabsList className="grid w-full grid-cols-4 mb-8">
            {phases.map((phase) => {
              const Icon = phase.icon
              return (
                <TabsTrigger key={phase.id} value={phase.id.toString()} className="gap-2">
                  <Icon className="w-4 h-4" />
                  {phase.title}
                </TabsTrigger>
              )
            })}
          </TabsList>

          <TabsContent value="1" className="space-y-6">
            <DataIngestion onIngestionComplete={(data) => {
              setBusinessData(data)
              setCompletedPhases([...completedPhases, 1])
              setCurrentPhase(2)
            }} />
          </TabsContent>

          <TabsContent value="2" className="space-y-6">
            <AIAnalysis data={businessData || initialFormData} onAnalysisComplete={() => {
              setCompletedPhases([...completedPhases, 2])
              setCurrentPhase(3)
            }} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-500" />
                    AI Opportunity Score
                  </CardTitle>
                  <CardDescription>Potential impact areas identified in your workflow</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Customer Query Processing</span>
                      <div className="flex items-center gap-2">
                        <Progress value={92} className="w-20" />
                        <Badge className="bg-green-500">92%</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Document Classification</span>
                      <div className="flex items-center gap-2">
                        <Progress value={87} className="w-20" />
                        <Badge className="bg-green-500">87%</Badge>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Data Entry Automation</span>
                      <div className="flex items-center gap-2">
                        <Progress value={74} className="w-20" />
                        <Badge className="bg-yellow-500">74%</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-orange-500" />
                    Risk Assessment
                  </CardTitle>
                  <CardDescription>Potential risks and mitigation strategies</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="text-yellow-700">
                          Medium Risk
                        </Badge>
                        <span className="text-sm font-medium">API Dependency</span>
                      </div>
                      <p className="text-xs text-slate-600">External API reliability may impact performance</p>
                    </div>
                    <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="destructive">High Risk</Badge>
                        <span className="text-sm font-medium">Data Privacy</span>
                      </div>
                      <p className="text-xs text-slate-600">PII processing requires enhanced security measures</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <ROISimulator />
          </TabsContent>

          <TabsContent value="3" className="space-y-6">
            <CostAnalysis />
          </TabsContent>

          <TabsContent value="4" className="space-y-6">
            <AnalysisComplete />
          </TabsContent>
        </Tabs>

        {/* Action Buttons - Conditionally rendered based on phase */}
        {currentPhase !== 4 ? (
          <div className="flex justify-between items-center mt-8 pt-6 border-t">
            <Button
              variant="outline"
              disabled={currentPhase === 1}
              onClick={() => setCurrentPhase(Math.max(1, currentPhase - 1))}
            >
              Previous Phase
            </Button>

            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <Users className="w-4 h-4" />
                Share with Team
              </Button>
              <Button
                onClick={handleNextPhase}
                className="gap-2" 
              >
                Next Phase
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        ) : (
          // For the final phase, only show completion message
          <div className="flex justify-center items-center mt-8 pt-6 border-t">
            <div className="text-center">
              <Badge className="mb-2 bg-green-500">Analysis Complete</Badge>
              <p className="text-gray-600">Your AI model recommendations are ready. Download your reports above.</p>
            </div>
          </div>
        )}
      </main>
    </div>
  )
} 