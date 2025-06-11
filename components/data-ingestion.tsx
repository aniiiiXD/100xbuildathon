"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building, Users, DollarSign, Clock } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { type FormData } from "@/types/data"

interface DataIngestionProps {
  onIngestionComplete?: (data: FormData) => void
}

export default function DataIngestion({ onIngestionComplete }: DataIngestionProps) {
  const [formData, setFormData] = useState<FormData>({
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
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    if (name.startsWith("currentCosts.")) {
      const costKey = name.split(".")[1] as keyof typeof formData.currentCosts
      setFormData(prev => ({
        ...prev,
        currentCosts: {
          ...prev.currentCosts,
          [costKey]: Number(value) || 0
        }
      }))
    } else if (name === 'businessTypeOther') {
      setFormData(prev => ({ ...prev, businessTypeOther: value }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }
  
  const handleRadioChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const totalCurrentCosts = 
    formData.currentCosts.labor + 
    formData.currentCosts.tools + 
    formData.currentCosts.infrastructure + 
    formData.currentCosts.other

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Business Profile</CardTitle>
        <CardDescription>Help us understand your business to provide AI recommendations</CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-8">
          <section>
            <h3 className="text-lg font-medium">Company Information</h3>
              
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="businessType">What type of business do you operate?</Label>
                <RadioGroup 
                  value={formData.businessType} 
                  onValueChange={(value) => handleRadioChange("businessType", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
                >
                  {["E-commerce", "SaaS / Technology", "Retail / Physical Store", 
                    "Manufacturing", "Professional Services", "Other"].map(type => {
                    const value = type.toLowerCase().replace(/\s+\/\s+/g, "-").replace(/\s+/g, "-")
                    return (
                      <div key={value} className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                        <RadioGroupItem value={value} id={value} />
                        <Label htmlFor={value} className="cursor-pointer">{type}</Label>
                      </div>
                    )
                  })}
                </RadioGroup>
              </div>

              {formData.businessType === "other" && (
                <div className="space-y-2">
                  <Label htmlFor="businessTypeOther">Please specify your business type:</Label>
                  <Input 
                    id="businessTypeOther"
                    name="businessTypeOther"
                    placeholder="Please describe your business type"
                    value={formData.businessTypeOther || ""}
                    onChange={handleInputChange}
                  />
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="employeeCount">How many employees does your business have?</Label>
                <RadioGroup 
                  value={formData.employeeCount} 
                  onValueChange={(value) => handleRadioChange("employeeCount", value)}
                  className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2"
                >
                  {["1-10", "11-50", "51-200", "201-500", "501-1000", "1000+"].map(range => (
                    <div key={range} className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value={range} id={`employees-${range}`} />
                      <Label htmlFor={`employees-${range}`} className="cursor-pointer">{range}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </section>

          {/* Current Challenges */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium">Current Challenges</h3>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="painPoints">What are your business's biggest pain points or time-consuming processes?</Label>
                <Textarea 
                  id="painPoints"
                  name="painPoints"
                  placeholder="E.g., Customer support tickets, data entry, inventory management..."
                  value={formData.painPoints}
                  onChange={handleInputChange}
                  className="min-h-24"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="timeSpent">Approximately how much time do your employees spend on these tasks?</Label>
                <RadioGroup 
                  value={formData.timeSpent} 
                  onValueChange={(value) => handleRadioChange("timeSpent", value)}
                  className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-2"
                >
                  {[
                    {value: "less-than-10", label: "Less than 10% of work time"},
                    {value: "10-25", label: "10-25% of work time"},
                    {value: "25-50", label: "25-50% of work time"},
                    {value: "more-than-50", label: "More than 50% of work time"}
                  ].map(option => (
                    <div key={option.value} className="flex items-center space-x-2 border rounded-md p-3 cursor-pointer hover:bg-gray-50">
                      <RadioGroupItem value={option.value} id={`time-${option.value}`} />
                      <Label htmlFor={`time-${option.value}`} className="cursor-pointer">{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>
          </section>

          {/* Financial Information */} 
          <section className="space-y-4">
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-medium">Financial Information</h3>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h4 className="font-medium">Current Cost Breakdown</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    {id: "labor", label: "Labor Costs ($/month)"},
                    {id: "tools", label: "Current Tools & Software ($/month)"},
                    {id: "infrastructure", label: "Infrastructure Costs ($/month)"},
                    {id: "other", label: "Other Costs ($/month)"}
                  ].map(item => (
                    <div key={item.id}>
                      <Label htmlFor={`currentCosts.${item.id}`}>{item.label}</Label>
                      <Input
                        type="number"
                        id={`currentCosts.${item.id}`}
                        name={`currentCosts.${item.id}`}
                        value={formData.currentCosts[item.id as keyof typeof formData.currentCosts]}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="bg-gray-50 p-4 rounded-md">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Total Current Monthly Costs</span>
                    <span className="text-xl font-bold">${totalCurrentCosts.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-medium">AI Implementation Planning</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="monthlyBudget">Monthly AI Budget ($)</Label>
                    <Input
                      type="number"
                      id="monthlyBudget"
                      name="monthlyBudget"
                      value={formData.monthlyBudget}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="implementationTimeline">Implementation Timeline</Label>
                    <select
                      id="implementationTimeline"
                      name="implementationTimeline"
                      value={formData.implementationTimeline}
                      onChange={handleInputChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
                    >
                      <option value="">Select timeline...</option>
                      <option value="1-3">1-3 months</option>
                      <option value="3-6">3-6 months</option>
                      <option value="6-12">6-12 months</option>
                      <option value="12+">More than 12 months</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="costSavingsGoal">Target Cost Savings ($/month)</Label>
                    <Input
                      type="number"
                      id="costSavingsGoal"
                      name="costSavingsGoal"
                      value={formData.costSavingsGoal}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="expectedROI">Expected ROI (%)</Label>
                    <Input
                      type="number"
                      id="expectedROI"
                      name="expectedROI"
                      value={formData.expectedROI}
                      onChange={handleInputChange}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Goals Section */}
          <section className="space-y-4">
            <h3 className="text-lg font-medium">Goals & Priorities</h3>
            <div className="space-y-2">
              <Label htmlFor="priorities">What are your priorities for AI implementation? What would you like to achieve?</Label>
              <Textarea 
                id="priorities"
                name="priorities"
                placeholder="E.g., Reduce customer response time, automate data entry, improve inventory forecasting..."
                value={formData.priorities}
                onChange={handleInputChange}
                className="min-h-24"
              />
            </div>
          </section>
        </div>
      </CardContent>
    </Card>
  )
}