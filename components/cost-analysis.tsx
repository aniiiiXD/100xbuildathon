"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, TrendingDown, BarChart3, PieChart, Download, CheckCircle, Plus, Minus, AlertTriangle } from "lucide-react"

export default function CostAnalysis() {
  // SWOT Analysis data
  const swotAnalysis = {
    "strengths": [
      "Deep expertise in machine learning algorithms and automation technologies",
      "Proven track record of reducing operational costs by 30-50% for clients",
      "Strong technical team with AI/ML certifications and industry experience",
      "Proprietary workflow analysis tools and methodologies",
      "Established partnerships with major cloud providers (AWS, Azure, GCP)"
    ],
    "weaknesses": [
      "High upfront implementation costs may deter small businesses",
      "Limited brand recognition compared to established consulting firms",
      "Dependency on skilled technical talent in competitive job market",
      "Long sales cycles due to complexity of AI integration projects",
      "Limited industry-specific domain expertise in certain verticals"
    ],
    "opportunities": [
      "Growing demand for AI automation across all industries post-2024",
      "Expansion into emerging markets with digital transformation initiatives",
      "Development of industry-specific AI workflow templates",
      "Strategic acquisitions of complementary technology companies",
      "Government incentives for businesses adopting AI technologies"
    ],
    "threats": [
      "Large tech companies (Microsoft, Google, IBM) expanding into workflow optimization",
      "Economic downturn reducing enterprise technology budgets",
      "Rapid changes in AI technology making current solutions obsolete",
      "Increasing data privacy regulations affecting AI implementation",
      "Client concerns about job displacement from automation"
    ]
  }

  const costBreakdown = [
    { category: "GPT-4 API Calls", monthly: 2400, percentage: 35, trend: "up" },
    { category: "Claude-3 Processing", monthly: 1800, percentage: 26, trend: "stable" },
    { category: "Custom Model Training", monthly: 1200, percentage: 17, trend: "down" },
    { category: "Vector Database", monthly: 800, percentage: 12, trend: "up" },
    { category: "Infrastructure", monthly: 700, percentage: 10, trend: "stable" },
  ]

  const totalMonthlyCost = costBreakdown.reduce((sum, item) => sum + item.monthly, 0)
  const projectedAnnualCost = totalMonthlyCost * 12
  const currentOperationalCost = 25000 // Monthly
  const projectedSavings = (currentOperationalCost - totalMonthlyCost) * 12
                                            
  const qualityMetrics = [
    { metric: "Response Accuracy", current: 87, projected: 94, improvement: 7 },
    { metric: "Processing Speed", current: 45, projected: 78, improvement: 33 },
    { metric: "Customer Satisfaction", current: 82, projected: 91, improvement: 9 },
    { metric: "Error Rate", current: 12, projected: 4, improvement: -8 },
  ]

  return (
    <div className="space-y-6">
      {/* SWOT Analysis - Stretched Box Format */}
      <Card className="w-full mb-6">
        <CardHeader>
          <CardTitle>SWOT Analysis</CardTitle>
          <CardDescription>Strategic evaluation of the AI implementation project</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-6">
              {/* Strengths */}
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="flex items-center gap-2 font-bold text-lg mb-2">
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  Strengths
                </h3>
                <ul className="space-y-2">
                  {swotAnalysis.strengths.map((strength, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-green-500 flex-shrink-0">•</span>
                      <span className="text-sm">{strength}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Opportunities */}
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="flex items-center gap-2 font-bold text-lg mb-2">
                  <Plus className="w-5 h-5 text-blue-500" />
                  Opportunities
                </h3>
                <ul className="space-y-2">
                  {swotAnalysis.opportunities.map((opportunity, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-blue-500 flex-shrink-0">•</span>
                      <span className="text-sm">{opportunity}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Weaknesses */}
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="flex items-center gap-2 font-bold text-lg mb-2">
                  <Minus className="w-5 h-5 text-red-500" />
                  Weaknesses
                </h3>
                <ul className="space-y-2">
                  {swotAnalysis.weaknesses.map((weakness, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-red-500 flex-shrink-0">•</span>
                      <span className="text-sm">{weakness}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Threats */}
              <div className="border-l-4 border-amber-500 pl-4">
                <h3 className="flex items-center gap-2 font-bold text-lg mb-2">
                  <AlertTriangle className="w-5 h-5 text-amber-500" />
                  Threats
                </h3>
                <ul className="space-y-2">
                  {swotAnalysis.threats.map((threat, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 text-amber-500 flex-shrink-0">•</span>
                      <span className="text-sm">{threat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Master Plan View */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-blue-500" />
              Current State
            </CardTitle>
            <CardDescription>Your existing workflow performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Monthly Operational Cost</span>
                  <Badge variant="destructive">${currentOperationalCost.toLocaleString()}</Badge>
                </div>
                <div className="text-sm text-slate-600">High manual processing overhead</div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Manual Processing</span>
                  <div className="flex items-center gap-2">
                    <Progress value={75} className="w-20" />
                    <span className="text-sm text-red-600">75%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <div className="flex items-center gap-2">
                    <Progress value={45} className="w-20" />
                    <span className="text-sm text-red-600">45%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Accuracy</span>
                  <div className="flex items-center gap-2">
                    <Progress value={87} className="w-20" />
                    <span className="text-sm text-yellow-600">87%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Optimized State
            </CardTitle>
            <CardDescription>Projected performance with AI integration</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium">Monthly AI Cost</span>
                  <Badge className="bg-green-500">${totalMonthlyCost.toLocaleString()}</Badge>
                </div>
                <div className="text-sm text-slate-600">
                  {((1 - totalMonthlyCost / currentOperationalCost) * 100).toFixed(1)}% cost reduction
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Automated Processing</span>
                  <div className="flex items-center gap-2">
                    <Progress value={85} className="w-20" />
                    <span className="text-sm text-green-600">85%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Response Time</span>
                  <div className="flex items-center gap-2">
                    <Progress value={92} className="w-20" />
                    <span className="text-sm text-green-600">92%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Accuracy</span>
                  <div className="flex items-center gap-2">
                    <Progress value={94} className="w-20" />
                    <span className="text-sm text-green-600">94%</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Cost Analysis */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-500" />
                Detailed Cost Breakdown
              </CardTitle>
              <CardDescription>Monthly AI operational costs by category</CardDescription>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-slate-900">${totalMonthlyCost.toLocaleString()}/mo</div>
              <div className="text-sm text-slate-600">${projectedAnnualCost.toLocaleString()}/year</div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {costBreakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full bg-blue-500"
                    style={{
                      backgroundColor: `hsl(${index * 60}, 70%, 50%)`,
                    }}
                  ></div>
                  <span className="font-medium">{item.category}</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="font-semibold">${item.monthly.toLocaleString()}</div>
                    <div className="text-xs text-slate-500">{item.percentage}% of total</div>
                  </div>
                  <div className="flex items-center gap-1">
                    {item.trend === "up" && <TrendingUp className="w-4 h-4 text-red-500" />}
                    {item.trend === "down" && <TrendingDown className="w-4 h-4 text-green-500" />}
                    {item.trend === "stable" && <div className="w-4 h-4 bg-slate-400 rounded-full"></div>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Cost vs Quality Trade-off */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            Cost vs. Quality Analysis
          </CardTitle>
          <CardDescription>How AI integration affects both costs and quality metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-4">Financial Impact</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
                  <span>Annual Cost Savings</span>
                  <Badge className="bg-green-500">${projectedSavings.toLocaleString()}</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                  <span>Implementation Investment</span>
                  <Badge variant="outline">$75,000</Badge>
                </div>
                <div className="flex justify-between items-center p-3 bg-purple-50 rounded-lg">
                  <span>Break-even Period</span>
                  <Badge variant="secondary">4.2 months</Badge>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quality Improvements</h4>
              <div className="space-y-3">
                {qualityMetrics.map((metric, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm">{metric.metric}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-slate-500">{metric.current}%</span>
                      <span className="text-xs">→</span>
                      <span className="text-xs font-semibold">{metric.projected}%</span>
                      <Badge variant={metric.improvement > 0 ? "default" : "destructive"} className="text-xs">
                        {metric.improvement > 0 ? "+" : ""}
                        {metric.improvement}%
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}