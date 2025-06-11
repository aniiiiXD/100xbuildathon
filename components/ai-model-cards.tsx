"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, CheckCircle, Check } from "lucide-react"

export default function AnalysisComplete() {
  // Handle export
  const handleExport = (type) => {
    console.log(`Exporting ${type}...`)
    // Implement export functionality
  }

  // Sample recommended models from analysis
  const recommendedModels = [
    {
      name: "GPT-4 Turbo",
      provider: "OpenAI",
      useCase: "Primary customer service AI assistant",
      costPer1M: 30,
      strengths: ["Excellent reasoning", "Broad knowledge", "Context handling"]
    },
    {
      name: "Claude-3 Sonnet",
      provider: "Anthropic",
      useCase: "Content moderation and safety",
      costPer1M: 15,
      strengths: ["Safety-focused", "Good analysis", "Cost-effective"]
    },
    {
      name: "BERT-Large",
      provider: "Google",
      useCase: "Customer query classification",
      costPer1M: 2,
      strengths: ["Very fast", "Cost-effective", "Specialized for classification"]
    }
  ]

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Completion Header */}
      <div className="text-center py-8">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2">Analysis Complete</h1>
        <p className="text-gray-600 text-lg">
          Your AI model analysis has been completed successfully. Below are your recommended models.
        </p>
      </div>

      {/* Recommended Models Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Check className="w-5 h-5 text-green-500" />
            Recommended AI Models
          </CardTitle>
          <CardDescription>
            Based on your requirements, these models are recommended for implementation
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recommendedModels.map((model, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
              >
                <div className="space-y-2 mb-3 md:mb-0">
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{model.name}</h3>
                    <Badge variant="outline">{model.provider}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{model.useCase}</p>
                  <div className="flex flex-wrap gap-1">
                    {model.strengths.map((strength, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {strength}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">${model.costPer1M}/1M tokens</span>
                  <Button variant="outline" size="sm">View Details</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Download Reports Card */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5 text-blue-500" />
            Download Your Reports
          </CardTitle>
          <CardDescription>
            Access your comprehensive analysis reports in various formats
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border p-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <h3 className="font-medium">Executive Summary</h3>
                <p className="text-sm text-gray-600">
                  A high-level overview of findings and recommendations for stakeholders.
                </p>
                <Button onClick={() => handleExport("Executive Summary")} className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Executive Summary (PDF)
                </Button>
              </div>
            </Card>

            <Card className="border p-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <h3 className="font-medium">Technical Implementation</h3>
                <p className="text-sm text-gray-600">
                  Detailed technical specifications and integration guidelines.
                </p>
                <Button onClick={() => handleExport("Technical Implementation")} variant="outline" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Technical Report (PDF)
                </Button>
              </div>
            </Card>

            <Card className="border p-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <h3 className="font-medium">Cost Analysis</h3>
                <p className="text-sm text-gray-600">
                  Projected costs, ROI estimates, and budget considerations.
                </p>
                <Button onClick={() => handleExport("Cost Analysis")} variant="outline" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Cost Analysis (Excel)
                </Button>
              </div>
            </Card>

            <Card className="border p-4 hover:shadow-md transition-shadow">
              <div className="space-y-2">
                <h3 className="font-medium">Presentation Deck</h3>
                <p className="text-sm text-gray-600">
                  Ready-to-present slides summarizing the analysis and recommendations.
                </p>
                <Button onClick={() => handleExport("Presentation")} variant="outline" className="w-full gap-2">
                  <Download className="w-4 h-4" />
                  Presentation (PowerPoint)
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-6 bg-gray-50 p-4 rounded-lg border">
            <h3 className="font-medium mb-2">All Reports Bundle</h3>
            <p className="text-sm text-gray-600 mb-3">
              Download all reports and supporting documents in a single compressed file.
            </p>
            <Button onClick={() => handleExport("All Reports")} className="gap-2">
              <Download className="w-4 h-4" />
              Download All Reports (ZIP)
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* What's Next Card */}
      <Card>
        <CardHeader>
          <CardTitle>What's Next?</CardTitle>
          <CardDescription>Continue your AI implementation journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              Ready to implement the recommended AI models in your workflow?
            </p>
            <div className="flex justify-center gap-4">
              <Button>View Implementation Guide</Button>
              <Button variant="outline">Schedule a Consultation</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}