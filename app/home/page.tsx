"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { 
  Motion, 
  AnimatePresence, 
  motion 
} from "framer-motion"
import { 
  ArrowRight, 
  Brain, 
  BarChart3, 
  Zap, 
  Check,
  ChevronRight,
  Menu,
  X
} from "lucide-react"

export default function LandingPage() {
  const router = useRouter()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Detect scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Redirect to main app
  const handleGetStarted = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navbar */}
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "py-3 bg-black/80 backdrop-blur-md shadow-lg" 
            : "py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-[#3E8E7E]" />
            <span className="text-xl font-bold">Aetherius</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#benefits" className="text-gray-300 hover:text-white transition-colors">
              Benefits
            </Link>
            <Link href="#testimonials" className="text-gray-300 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <button 
              onClick={handleGetStarted}
              className="px-5 py-2 bg-[#3E8E7E] hover:bg-[#2D6E5E] rounded-md transition-colors"
            >
              Get Started
            </button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-gray-800 py-4">
            <div className="container mx-auto px-6 flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#benefits" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefits
              </Link>
              <Link 
                href="#testimonials" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="#pricing" 
                className="text-gray-300 hover:text-white transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Pricing
              </Link>
              <button 
                onClick={handleGetStarted}
                className="px-5 py-2 bg-[#3E8E7E] hover:bg-[#2D6E5E] rounded-md transition-colors text-left"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3E8E7E]/20 blur-[120px] -top-[250px] -left-[100px]"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full bg-[#3E8E7E]/10 blur-[120px] top-[30%] -right-[200px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Supercharge Your Workflow with <span className="text-[#3E8E7E]">AI Intelligence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-10 leading-relaxed">
              Aetherius transforms your business processes with intelligent automation, 
              cutting costs and boosting productivity by up to 80%.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={handleGetStarted}
                className="px-8 py-4 bg-[#3E8E7E] hover:bg-[#2D6E5E] rounded-lg text-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                Get Started Free
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="px-8 py-4 bg-white/10 hover:bg-white/20 rounded-lg text-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
            
            <div className="mt-16 flex items-center justify-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800"></div>
                ))}
              </div>
              <p className="ml-4 text-gray-400">
                <span className="font-bold text-white">500+</span> companies already using Aetherius
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Streamline Your <span className="text-[#3E8E7E]">Entire Workflow</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our AI-powered platform analyzes your processes and implements intelligent automation where it matters most.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#3E8E7E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3E8E7E]/10 group">
              <div className="h-14 w-14 rounded-full bg-[#3E8E7E]/20 flex items-center justify-center mb-6 group-hover:bg-[#3E8E7E]/30 transition-colors">
                <Brain className="h-7 w-7 text-[#3E8E7E]" />
              </div>
              <h3 className="text-xl font-bold mb-3">AI Process Analysis</h3>
              <p className="text-gray-400 mb-6">
                Our intelligent algorithms map your workflows and identify optimization opportunities with incredible precision.
              </p>
              <a href="#" className="inline-flex items-center text-[#3E8E7E] hover:text-[#2D6E5E] transition-colors">
                Learn more
                <ChevronRight className="h-5 w-5 ml-1" />
              </a>
            </div>
            
            {/* Feature Card 2 */}
            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#3E8E7E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3E8E7E]/10 group">
              <div className="h-14 w-14 rounded-full bg-[#3E8E7E]/20 flex items-center justify-center mb-6 group-hover:bg-[#3E8E7E]/30 transition-colors">
                <BarChart3 className="h-7 w-7 text-[#3E8E7E]" />
              </div>
              <h3 className="text-xl font-bold mb-3">ROI Prediction</h3>
              <p className="text-gray-400 mb-6">
                Get accurate forecasts of cost savings and productivity gains before implementing any changes.
              </p>
              <a href="#" className="inline-flex items-center text-[#3E8E7E] hover:text-[#2D6E5E] transition-colors">
                Learn more
                <ChevronRight className="h-5 w-5 ml-1" />
              </a>
            </div>
            
            {/* Feature Card 3 */}
            <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-[#3E8E7E]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#3E8E7E]/10 group">
              <div className="h-14 w-14 rounded-full bg-[#3E8E7E]/20 flex items-center justify-center mb-6 group-hover:bg-[#3E8E7E]/30 transition-colors">
                <Zap className="h-7 w-7 text-[#3E8E7E]" /> 
              </div>
              <h3 className="text-xl font-bold mb-3">One-Click Implementation</h3>
              <p className="text-gray-400 mb-6">
                Deploy AI-powered solutions with a single click, no coding or complex setup required.
              </p>
              <a href="#" className="inline-flex items-center text-[#3E8E7E] hover:text-[#2D6E5E] transition-colors">
                Learn more
                <ChevronRight className="h-5 w-5 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Transform Your Business with <span className="text-[#3E8E7E]">Intelligent Automation</span>
              </h2>
              <p className="text-xl text-gray-400 mb-8">
                Companies using Aetherius have seen dramatic improvements in efficiency, 
                accuracy, and employee satisfaction.
              </p>
              
              <div className="space-y-6">
                {/* Benefit 1 */}
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#3E8E7E]/20 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-[#3E8E7E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Reduce operational costs by 40-60%</h3>
                    <p className="text-gray-400">
                      Eliminate repetitive tasks and streamline complex processes to significantly cut expenses.
                    </p>
                  </div>
                </div>
                
                {/* Benefit 2 */}
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#3E8E7E]/20 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-[#3E8E7E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Boost productivity by up to 80%</h3>
                    <p className="text-gray-400">
                      Free your team from mundane tasks so they can focus on high-value strategic work.
                    </p>
                  </div>
                </div>
                
                {/* Benefit 3 */}
                <div className="flex items-start gap-4">
                  <div className="h-6 w-6 rounded-full bg-[#3E8E7E]/20 flex items-center justify-center mt-1">
                    <Check className="h-4 w-4 text-[#3E8E7E]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Enhance accuracy by 95%</h3>
                    <p className="text-gray-400">
                      Eliminate human error with precise AI-powered process execution and validation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800">
                <div className="text-4xl md:text-5xl font-bold text-[#3E8E7E] mb-2">60%</div>
                <p className="text-gray-400">Average cost reduction</p>
              </div>
              
              <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800">
                <div className="text-4xl md:text-5xl font-bold text-[#3E8E7E] mb-2">3.5x</div>
                <p className="text-gray-400">Faster processing time</p>
              </div>
              
              <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800">
                <div className="text-4xl md:text-5xl font-bold text-[#3E8E7E] mb-2">95%</div>
                <p className="text-gray-400">Error reduction rate</p>
              </div>
              
              <div className="bg-gradient-to-br from-black to-gray-900 p-8 rounded-2xl border border-gray-800">
                <div className="text-4xl md:text-5xl font-bold text-[#3E8E7E] mb-2">4.2x</div>
                <p className="text-gray-400">ROI in first year</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3E8E7E]/10">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Workflow?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
            Join hundreds of forward-thinking companies that have already 
            revolutionized their operations with Aetherius.
          </p>
          
          <button 
            onClick={handleGetStarted}
            className="px-8 py-4 bg-[#3E8E7E] hover:bg-[#2D6E5E] rounded-lg text-lg font-semibold transition-colors"
          >
            Get Started Today
          </button>
          
          <p className="mt-6 text-gray-400">
            No credit card required. Free 14-day trial.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-6 md:mb-0">
              <Brain className="h-8 w-8 text-[#3E8E7E]" />
              <span className="text-xl font-bold">Aetherius</span>
            </div>
            
            <div className="flex gap-8 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© 2023 Aetherius. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}