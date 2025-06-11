import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { User, HelpCircle } from "lucide-react"

export default function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Aetherius</h1>
              <p className="text-xs text-slate-500">Intelligent Workflow Architect</p>
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            Enterprise Plan
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="gap-2">
            <HelpCircle className="w-4 h-4" />
            Help
          </Button>
          <Button variant="ghost" size="sm">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  )
}
