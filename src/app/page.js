"use client"

import { useState, useEffect, useRef } from "react"
import {
  ArrowRight,
  Users,
  Bot,
  TrendingUp,
  Sparkles,
  BarChart3,
  Shield,
  Zap,
  Play,
  CheckCircle,
  Star,
  Menu,
  X,
  Eye,
  Target,
  Lightbulb,
  Award,
  Lock,
  Globe,
  Phone,
  Mail,
  MapPin,
  AlertTriangle,
  FileWarning,
  Search,
  Bell,
  

  DollarSign,
  Clock,
  Activity,

  FileText,


} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ThemeToggle } from "@/components/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import DashboardPreview from "@/components/InteractiveDash.jsx";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const heroRef = useRef(null)

  useEffect(() => {
    setIsVisible(true)

    // Smooth scrolling observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 },
    )

    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setMobileMenuOpen(false)
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-teal-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-950 overflow-hidden">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-teal-100 dark:border-teal-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img src="logo.png" className='h-10' />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {["About"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium ${activeSection === item.toLowerCase() ? "text-teal-600 dark:text-teal-400" : ""
                    }`}
                >
                  {item}
                </button>
              ))}
              <ThemeToggle />
              <Button
                variant="outline"
                className="border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 bg-transparent"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-4">
              <ThemeToggle />
              <Button variant="ghost" size="sm" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-teal-100 dark:border-teal-800">
              <div className="flex flex-col gap-4 pt-4">
                {["About"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="text-left text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
                <div className="flex flex-col gap-2 pt-2">
                  <Button variant="outline" className="w-full bg-transparent">
                    Sign In
                  </Button>
                  <Button className="w-full bg-gradient-to-r from-teal-600 to-emerald-600">Get Started</Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>


      

     {/* Enhanced Hero Section */}
<section id="hero" ref={heroRef} className="pt-22 pb-20">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-16 items-center">

      {/* Left: Content */}
      <div
        className={`transition-all duration-1000 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-gray-900 dark:text-white mb-6">
          Your Revenue Retention{" "}
          <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 dark:from-teal-400 dark:via-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
            Copilot for Customer Success
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Agentic AI that empowers CS teams to detect risks early, retain more revenue, and drive better customer outcomes in complex B2B operations.
        </p>

        {/* Key Benefits */}
        <div className="flex flex-wrap gap-3 mb-10">
          {["95% Customer Retention", "60% Faster Risk Detection", "40% Revenue Growth"].map((benefit, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-md rounded-full px-4 py-2 border border-teal-100 dark:border-teal-800 shadow-sm"
            >
              <CheckCircle className="w-4 h-4 text-teal-600 dark:text-teal-400" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <Button
            size="lg"
            className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 dark:from-teal-500 dark:to-emerald-500 dark:hover:from-teal-600 dark:hover:to-emerald-600 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Join Waitlist
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-teal-200 dark:border-teal-700 text-teal-700 dark:text-teal-300 hover:bg-teal-50 dark:hover:bg-teal-900/20 px-8 py-4 text-lg font-semibold transition-all duration-300 bg-transparent group"
          >
            <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Book a Demo
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-wrap gap-6 text-sm text-gray-500 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-teal-600" />
            <span>Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-teal-600" />
            <span>SOC 2 Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-teal-600" />
            <span>99.9% Uptime</span>
          </div>
        </div>
      </div>

      <div
        className={`hidden lg:block transition-all duration-1000 delay-400 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <DashboardPreview />
      </div>

    </div>
  </div>
</section>


      {/* Problem/Solution Section */}
      <section id="solutions" className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400">The Problem</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Customer Success is Broken{" "}
              <span className="bg-gradient-to-r from-red-500 via-orange-600 to-red-800 dark:from-red-400 dark:via-red-500 dark:to-red-600 bg-clip-text text-transparent">
                in Complex Ops
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              B2B companies lose 25% of their revenue annually due to preventable churn. Traditional CS tools are
              reactive, not predictive.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: AlertTriangle, // from lucide-react
                title: "Signals buried in silos",
                description: "Critical data scattered across CRM, ticketing, and billing systems",
                stat: "67% of risk signals go undetected",
              },
              {
                icon: X, // from lucide-react
                title: "No visibility into billing issues",
                description: "Risk-prone accounts and overdue collections go unnoticed",
                stat: "55% of accounts flagged too late",
              },
              {
                icon: FileWarning, // from lucide-react
                title: "Spreadsheets & firefighting",
                description: "Manual processes lead to retention roulette and reactive responses",
                stat: "48% slower resolution time",
              }
              ,
            ].map((problem, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-red-100 dark:border-red-800 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <problem.icon className="w-8 h-8 text-red-600 dark:text-red-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{problem.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{problem.description}</p>
                  <div className="text-2xl font-bold text-red-600 dark:text-red-400">{problem.stat}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Solution */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">
              The Solution
            </Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              From Guesswork to{" "}
              <span className="bg-gradient-to-r from-teal-600 via-emerald-600 to-teal-700 dark:from-teal-400 dark:via-emerald-400 dark:to-teal-500 bg-clip-text text-transparent">
                Guided Action
              </span>
            </h2>

            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              StratSync brings agentic AI into your customer success stack to surface signals and suggest actions—before revenue slips away.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Signal Engine",
                description: "Detect early churn, billing anomalies, and SLA breaks before they impact revenue",
                benefit: "60% faster detection",
              },
              {
                icon: Bot,
                title: "Agentic Playbooks",
                description: "CS agents prioritize the right actions automatically with AI-driven workflows",
                benefit: "80% less manual work",
              },
              {
                icon: Zap,
                title: "System Integrator",
                description: "Seamlessly connects CRM, billing, ticketing, and ops into one intelligence layer",
                benefit: "40% more revenue retained",
              },
            ].map((solution, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-teal-100 dark:border-teal-800 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{solution.description}</p>
                  <div className="text-lg font-bold text-teal-600 dark:text-teal-400">{solution.benefit}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section id="features" className="py-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400">Use Cases</Badge>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Real-World Use Cases{" "}

            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              See how StratSync transforms customer success operations across logistics, trading, and complex B2B industries
            </p>
          </div>



          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: "Churn Risk Detection",
                tag: "Trading Platform",
                description:
                  "A commodities trading client shows declining API usage and missed SLA thresholds. StratSync alerts the CS team 30 days before contract renewal with specific retention actions.",
                success: "✓ 85% success rate in retaining at-risk accounts",
              },
              {
                icon: DollarSign,
                title: "Billing Anomaly Recovery",
                tag: "Logistics Provider",
                description:
                  "Freight invoices with 60+ day delays trigger automated workflows. StratSync coordinates between collections, ops, and CS to resolve disputes and recover $2M+ in overdue revenue.",
                success: "✓ 40% faster collections resolution",
              },
              {
                icon: Clock,
                title: "SLA Breach Prevention",
                tag: "Supply Chain Operations",
                description:
                  "Critical shipment delays detected across multiple accounts. StratSync prioritizes CS interventions and proactive client communication before SLA penalties kick in.",
                success: "✓ 70% reduction in SLA breach incidents",
              },
              {
                icon: Activity,
                title: "Account Health Scoring",
                tag: "B2B Services",
                description:
                  "AI combines usage data, payment history, and support tickets to identify accounts sliding toward churn. CS teams get weekly action plans prioritized by revenue impact.",
                success: "✓ 25% improvement in retention rates",
              },
              {
                icon: Users,
                title: "Cross-sell Opportunities",
                tag: "Multi-Service Provider",
                description:
                  "High-performing accounts using only basic services get flagged for expansion. StratSync suggests optimal timing and approach based on account health and engagement patterns.",
                success: "✓ 30% increase in expansion revenue",
              },
              {
                icon: FileText,
                title: "Contract Renewal Intelligence",
                tag: "Project-Based Services",
                description:
                  "90 days before contract expiration, StratSync analyzes project performance, billing accuracy, and relationship health to guide renewal strategy and pricing discussions.",
                success: "✓ 92% renewal rate for managed accounts",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-teal-100 dark:border-teal-800 hover:shadow-xl transition-all duration-300 hover:scale-105 p-6 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-100 to-emerald-100 dark:from-teal-900/50 dark:to-emerald-900/50 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>

                  {/* Title + Tag */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {feature.title}
                    </h3>
                    <span className="inline-block bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300 text-xs px-3 py-1 rounded-full mt-1 font-medium">
                      {feature.tag}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mt-4 text-sm">
                  {feature.description}
                </p>

                {/* Success Badge */}
                <div className="mt-4 bg-teal-50 dark:bg-teal-900/30 text-teal-800 dark:text-teal-300 text-sm px-4 py-2 rounded-md font-medium flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  {feature.success}
                </div>
              </Card>
            ))}

          </div>
          <div className="text-sm flex items-center flex-col gap-4 text-gray-600 dark:text-gray-300 max-w-3xl mx-auto w-full content-center text-center pt-5">
            Ready to see how StratSync can transform your customer success operations?
            <Button
              size="lg"
              className="bg-gradient-to-r w-fit text-sm from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 dark:from-teal-500 dark:to-emerald-500 dark:hover:from-teal-600 dark:hover:to-emerald-600 text-white px-8 py-4  font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Explore your use case
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>

          </div>
        </div>
      </section>


      {/* what you can expect  */}
       <div className="text-center mb-12 ">
  <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
    What You Can Expect
  </h2>
  <p className="text-sm text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    Real results from CS teams using StratSync AI
  </p>
</div>
<div className="flex flex-wrap justify-center gap-6 px-10">
  {[
    {
      icon: TrendingUp,
      title: "Higher retention",
      description: "of at-risk accounts through early intervention",
      benefit: "20%",
    },
    {
      icon: Clock,
      title: "Faster CS response",
      description: "on critical tickets and customer issues",
      benefit: "40%",
    },
    {
      icon: DollarSign,
      title: "Revenue alignment",
      description: "between collections, ops & customer success",
      benefit: "Better",
    },
    {
      icon: Bell,
      title: "Proactive alerts",
      description: "not post-mortems and reactive firefighting",
      benefit: "Real-time",
    },
  ].map((solution, index) => (
    <Card
      key={index}
      className="bg-white/80 w-full sm:w-60 md:w-56 lg:w-64 dark:bg-slate-800/80 backdrop-blur-sm border border-teal-200 dark:border-teal-800 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 rounded-2xl"
    >
      <CardContent className="p-0 flex flex-col items-center text-center space-y-3">
        {/* Icon */}
        <div className="w-12 h-12 bg-gradient-to-br from-teal-300 to-emerald-400 dark:from-teal-700 dark:to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
          <solution.icon className="w-8 h-8 text-white dark:text-teal-100" />
        </div>

        {/* Benefit */}
        <div className="text-xl font-extrabold text-gray-900 dark:text-white">
          {solution.benefit}
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-gray-800 dark:text-gray-200">
          {solution.title}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 w-40 dark:text-gray-400 max-w-xs">
          {solution.description}
        </p>
      </CardContent>
    </Card>
  ))}
</div>



      {/* Social Proof Section */}
      <section className="py-20 bg-white/50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          {/* Customer Logos */}
          <div className="text-center mb-16 ">
            <p className="text-gray-500 dark:text-gray-400 mb-8">Works with What You Already Use</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60 dark:opacity-40">
              {["Slack", "Salesforce", "HubSpot", "ZenDisk", "Xero", "NetSuite","Zoho","MicrosoftTeams"].map((company, index) => (
                <div
                  key={index}
                  className="bg-gray-200 dark:bg-gray-700 rounded-lg px-6 py-3 text-gray-600 dark:text-gray-300 font-semibold"
                >
                  {company}
                </div>
              ))}
            </div>
          <p className="text-gray-500 text-sm dark:text-gray-400 mb-8 pt-5 text-center">
  Don’t see your stack?{" "}
  <span className="text-teal-600 dark:text-teal-500  hover:underline cursor-pointer">
    Talk to us
  </span>{" "}
  about custom integrations.
</p>

          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Sarah Chen",
                role: "VP of Customer Success",
                company: "TechCorp",
                avatar: "/placeholder.svg?height=40&width=40",
                rating: 5,
                quote:
                  "StratSync helped us reduce churn by 45% in just 6 months. The AI predictions are incredibly accurate.",
              },
              {
                name: "Michael Rodriguez",
                role: "Head of CS Operations",
                company: "DataFlow",
                avatar: "/placeholder.svg?height=40&width=40",
                rating: 5,
                quote:
                  "Finally, a tool that's proactive instead of reactive. Our team can now focus on strategic growth instead of firefighting.",
              },
              {
                name: "Emily Watson",
                role: "Customer Success Director",
                company: "CloudSync",
                avatar: "/placeholder.svg?height=40&width=40",
                rating: 5,
                quote:
                  "The ROI was immediate. We identified $2M in at-risk revenue in the first month and saved 80% of it.",
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-teal-100 dark:border-teal-800 hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

      
        </div>
      </section>

     

      {/* CTA Section */}
      <section className="py-10 bg-gradient-to-r from-teal-500 to-emerald-500 dark:from-teal-600 dark:to-emerald-600">
        <div className="container mx-auto px-4 text-center">
           <Badge className="mb-4 bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400"><Sparkles size={24} />Limited Early Access</Badge>
          <h2 className="text-4xl font-bold text-white mb-6">We're Live with Select Customers</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            We're onboarding high-growth CS teams in logistics, trading, and project-led industries. Want to be next?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Book Early Access Demo
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
           
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="about" className="bg-slate-900 dark:bg-slate-950 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-500 to-emerald-500 flex items-center justify-center">
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="text-xl font-bold">StratSync</span>
              </div>
              <p className="text-gray-400 mb-6">AI-powered revenue retention platform for Customer Success teams.</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>SOC 2 Compliant</span>
                </div>
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Signal Engine
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Agentic Playbooks
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-teal-400 transition-colors">
                    Blog
                  </a>
                </li>

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>hello@stratsync.ai</span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 StratSync. All rights reserved.</p>
            <div className="flex items-center gap-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
