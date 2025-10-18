import Link from "next/link"
import { ArrowRight, Code2, Database, Lock, Palette, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { createClient } from "@/lib/supabase/server"

export default async function Home() {
  const supabase = await createClient()
  const { data: { user } } = await supabase.auth.getUser()

  const features = [
    {
      icon: Zap,
      title: "Next.js 15 + React 19",
      description: "Built with the latest Next.js App Router and React 19 features for optimal performance.",
    },
    {
      icon: Database,
      title: "Supabase Integration",
      description: "Pre-configured authentication and database client with SSR support.",
    },
    {
      icon: Palette,
      title: "shadcn/ui Components",
      description: "Beautiful, accessible UI components with Tailwind CSS 4 and dark mode support.",
    },
    {
      icon: Lock,
      title: "Auth Ready",
      description: "Complete authentication flow with login, signup, and protected routes.",
    },
    {
      icon: Code2,
      title: "TypeScript",
      description: "Fully typed codebase with strict TypeScript configuration for safety.",
    },
    {
      icon: Zap,
      title: "Turbopack",
      description: "Lightning-fast development builds with Turbopack bundler.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Code2 className="h-6 w-6" />
            <span className="font-bold text-xl">My Stack Template</span>
          </div>
          <nav className="flex items-center gap-4">
            {user ? (
              <>
                <Link href="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <form action="/auth/signout" method="post">
                  <Button variant="outline" type="submit">Sign out</Button>
                </form>
              </>
            ) : (
              <>
                <Link href="/login">
                  <Button variant="ghost">Sign in</Button>
                </Link>
                <Link href="/signup">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1">
        <section className="container px-4 py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Build faster with a{" "}
                <span className="text-primary">modern stack</span>
              </h1>
              <p className="text-xl text-muted-foreground md:text-2xl max-w-2xl mx-auto">
                A production-ready Next.js template with authentication, database, and beautiful UI components.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {user ? (
                <Link href="/dashboard">
                  <Button size="lg" className="text-lg">
                    Go to Dashboard
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <>
                  <Link href="/signup">
                    <Button size="lg" className="text-lg">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="https://github.com/ajstafford/my-stack-template" target="_blank">
                    <Button size="lg" variant="outline" className="text-lg">
                      View on GitHub
                    </Button>
                  </Link>
                </>
              )}
            </div>

            {/* Tech Stack Pills */}
            <div className="flex flex-wrap justify-center gap-2 pt-8">
              {["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Supabase", "shadcn/ui"].map((tech) => (
                <div
                  key={tech}
                  className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-16 md:py-24 bg-muted/50">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Everything you need
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Start building immediately with a complete, modern development stack
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 pt-8">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <Card key={feature.title}>
                    <CardHeader>
                      <Icon className="h-10 w-10 mb-2 text-primary" />
                      <CardTitle>{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="container px-4 py-16 md:py-24">
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="text-center space-y-4">
              <CardTitle className="text-3xl">Ready to build?</CardTitle>
              <CardDescription className="text-lg">
                Get started in minutes with authentication, database, and UI components ready to go.
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col sm:flex-row gap-4 justify-center">
              {!user && (
                <Link href="/signup">
                  <Button size="lg">
                    Create an Account
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              )}
              <Link href="https://github.com/ajstafford/my-stack-template#readme" target="_blank">
                <Button size="lg" variant="outline">
                  Read the Docs
                </Button>
              </Link>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-5 w-5" />
              <span className="text-sm text-muted-foreground">
                Built with Next.js, Supabase, and shadcn/ui
              </span>
            </div>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="https://github.com/ajstafford/my-stack-template" className="hover:text-foreground">
                GitHub
              </Link>
              <Link href="https://nextjs.org/docs" className="hover:text-foreground">
                Next.js Docs
              </Link>
              <Link href="https://supabase.com/docs" className="hover:text-foreground">
                Supabase Docs
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
