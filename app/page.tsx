import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  Building2,
  Users,
  Star,
  Filter,
  Bookmark,
  TrendingUp,
  Award,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Component() {
  const featuredJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      logo: "/placeholder.svg?height=40&width=40",
      tags: ["React", "TypeScript", "Next.js"],
      posted: "2 days ago",
      applicants: 45,
      featured: true,
      remote: false,
    },
    {
      id: 2,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      logo: "/placeholder.svg?height=40&width=40",
      tags: ["Product Strategy", "Analytics", "Agile"],
      posted: "1 day ago",
      applicants: 32,
      featured: true,
      remote: true,
    },
    {
      id: 3,
      title: "UX Designer",
      company: "DesignStudio",
      location: "New York, NY",
      type: "Contract",
      salary: "$80k - $100k",
      logo: "/placeholder.svg?height=40&width=40",
      tags: ["Figma", "User Research", "Prototyping"],
      posted: "3 days ago",
      applicants: 28,
      featured: false,
      remote: false,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $150k",
      logo: "/placeholder.svg?height=40&width=40",
      tags: ["AWS", "Docker", "Kubernetes"],
      posted: "4 days ago",
      applicants: 19,
      featured: false,
      remote: false,
    },
    {
      id: 5,
      title: "Data Scientist",
      company: "DataCorp",
      location: "Boston, MA",
      type: "Full-time",
      salary: "$130k - $170k",
      logo: "/placeholder.svg?height=40&width=40",
      tags: ["Python", "Machine Learning", "SQL"],
      posted: "5 days ago",
      applicants: 67,
      featured: true,
      remote: true,
    },
    {
      id: 6,
      title: "Mobile Developer",
      company: "AppStudio",
      location: "Seattle, WA",
      type: "Part-time",
      salary: "$105k - $135k",
      logo: "/placeholder.svg?height=40&width=40",
      tags: ["React Native", "iOS", "Android"],
      posted: "1 week ago",
      applicants: 41,
      featured: false,
      remote: false,
    },
  ]

  const categories = [
    { name: "Technology", count: 1234, icon: "💻", growth: "+12%" },
    { name: "Design", count: 567, icon: "🎨", growth: "+8%" },
    { name: "Marketing", count: 890, icon: "📈", growth: "+15%" },
    { name: "Sales", count: 432, icon: "💼", growth: "+5%" },
    { name: "Finance", count: 321, icon: "💰", growth: "+10%" },
    { name: "Healthcare", count: 654, icon: "🏥", growth: "+18%" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content:
        "XGODO helped me land my dream job at Google. The platform is intuitive and the job recommendations were spot-on!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Meta",
      content:
        "The quality of job listings on XGODO is exceptional. I found multiple opportunities that matched my skills perfectly.",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer at Airbnb",
      content:
        "As a designer, I appreciated the clean interface and detailed job descriptions. Found my current role within 2 weeks!",
      avatar: "/placeholder.svg?height=60&width=60",
      rating: 5,
    },
  ]

  const companyLogos = [
    { name: "Google", logo: "/placeholder.svg?height=40&width=120&text=Google" },
    { name: "Microsoft", logo: "/placeholder.svg?height=40&width=120&text=Microsoft" },
    { name: "Apple", logo: "/placeholder.svg?height=40&width=120&text=Apple" },
    { name: "Amazon", logo: "/placeholder.svg?height=40&width=120&text=Amazon" },
    { name: "Meta", logo: "/placeholder.svg?height=40&width=120&text=Meta" },
    { name: "Netflix", logo: "/placeholder.svg?height=40&width=120&text=Netflix" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">X</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  XGODO
                </span>
              </div>
              <nav className="hidden md:flex items-center space-x-6">
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Jobs
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Companies
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Salary
                </a>
                <a href="#" className="text-gray-700 hover:text-purple-600 font-medium transition-colors">
                  Resources
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="text-gray-700 hover:text-purple-600 transition-colors">
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all">
                Post a Job
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Zap className="w-4 h-4" />
            <span>New: AI-powered job matching now available!</span>
          </div>

          <h1 className="text-6xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent leading-tight">
            Find Your Dream Job
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover thousands of job opportunities from top companies worldwide. Your next career move starts here.
          </p>

          {/* Search Bar */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="flex flex-col lg:flex-row gap-4 p-3 bg-white rounded-2xl shadow-xl border">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-12 border-0 text-lg h-16 focus-visible:ring-0 bg-transparent"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="City, state, or remote"
                  className="pl-12 border-0 text-lg h-16 focus-visible:ring-0 bg-transparent"
                />
              </div>
              <Button
                size="lg"
                className="h-16 px-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all text-lg font-semibold"
              >
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-purple-600 mb-2">10,000+</div>
              <div className="text-gray-600 text-lg">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600 text-lg">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">50,000+</div>
              <div className="text-gray-600 text-lg">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Logos */}
      <section className="py-12 px-4 bg-white/50">
        <div className="container mx-auto">
          <p className="text-center text-gray-600 mb-12 text-lg">Trusted by leading companies worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {companyLogos.map((company, index) => (
              <img
                key={index}
                src={company.logo || "/placeholder.svg"}
                alt={company.name}
                className="h-10 grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Browse by Category</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore opportunities across diverse industries and find the perfect match for your skills
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm group"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold mb-2 text-lg">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{category.count.toLocaleString()} jobs</p>
                  <div className="flex items-center justify-center space-x-1 text-xs text-green-600 font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{category.growth}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Opportunities</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hand-picked positions from top companies looking for exceptional talent
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredJobs.map((job) => (
              <Card
                key={job.id}
                className="hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-0 bg-white/80 backdrop-blur-sm relative overflow-hidden group"
              >
                {job.featured && (
                  <div className="absolute top-6 right-6 z-10">
                    <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                )}

                <div className="absolute top-6 left-6 z-10">
                  <Button size="sm" variant="ghost" className="h-10 w-10 p-0 bg-white/80 hover:bg-white rounded-full">
                    <Bookmark className="w-4 h-4 text-gray-600" />
                  </Button>
                </div>

                <CardHeader className="pb-4 pt-16">
                  <div className="flex items-start space-x-4">
                    <Avatar className="w-14 h-14 group-hover:scale-110 transition-transform duration-300">
                      <AvatarImage src={job.logo || "/placeholder.svg"} alt={job.company} />
                      <AvatarFallback className="text-lg font-semibold">{job.company[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="flex items-center space-x-2 text-base">
                        <Building2 className="w-4 h-4" />
                        <span>{job.company}</span>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                      {job.remote && (
                        <Badge variant="outline" className="text-xs ml-2 border-green-200 text-green-700">
                          Remote
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 text-green-600 font-semibold text-lg">
                    <DollarSign className="w-5 h-5" />
                    <span>{job.salary}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((tag, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-xs hover:bg-purple-100 transition-colors px-3 py-1"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Users className="w-4 h-4" />
                      <span>{job.applicants} applicants</span>
                    </div>
                    <span className="text-sm text-gray-500">{job.posted}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg hover:bg-purple-50 hover:border-purple-300 transition-all bg-transparent"
            >
              <Filter className="w-5 h-5 mr-2" />
              View All Jobs
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of professionals who found their dream careers through XGODO
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="border-0 bg-white/80 backdrop-blur-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="text-lg font-semibold">{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-lg">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center text-white relative z-10">
          <div className="inline-flex items-center space-x-2 bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium mb-8">
            <Award className="w-5 h-5" />
            <span>Join 50,000+ successful job seekers</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Ready to Find Your Next Opportunity?</h2>
          <p className="text-xl md:text-2xl mb-12 opacity-90 max-w-3xl mx-auto">
            Join thousands of professionals who found their dream jobs through XGODO
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-purple-600 hover:bg-gray-100 transform hover:scale-105 transition-all px-8 py-4 text-lg font-semibold"
            >
              Browse All Jobs
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 bg-transparent transform hover:scale-105 transition-all px-8 py-4 text-lg font-semibold"
            >
              Post a Job
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">X</span>
                </div>
                <span className="text-2xl font-bold">XGODO</span>
              </div>
              <p className="text-gray-400 mb-6 text-lg leading-relaxed">
                Connecting talent with opportunity worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">in</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">Quick Links</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">For Job Seekers</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Browse Jobs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Career Advice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Resume Builder
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Salary Guide
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-6 text-lg">For Employers</h3>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Post a Job
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Browse Resumes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors text-base">
                    Employer Resources
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p className="text-base">&copy; 2024 XGODO. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
