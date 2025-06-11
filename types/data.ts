export interface FormData {
  businessType: string
  businessTypeOther?: string
  employeeCount: string
  painPoints: string
  timeSpent: string
  priorities: string
  monthlyBudget: string
  expectedROI: string
  currentCosts: {
    labor: number
    tools: number
    infrastructure: number
    other: number
  }
  costSavingsGoal: number
  implementationTimeline: string
}
