import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default async function DashboardPage() {
  const supabase = await createClient()
  
  const { data: { user }, error } = await supabase.auth.getUser()

  if (error || !user) {
    redirect('/login')
  }

  return (
    <div className="container mx-auto p-8">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Dashboard</CardTitle>
          <CardDescription>
            Welcome to your protected dashboard
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-lg border p-4">
            <h3 className="font-semibold mb-2">User Information</h3>
            <dl className="space-y-1 text-sm">
              <div>
                <dt className="inline font-medium">Email:</dt>
                <dd className="inline ml-2 text-muted-foreground">{user.email}</dd>
              </div>
              <div>
                <dt className="inline font-medium">User ID:</dt>
                <dd className="inline ml-2 text-muted-foreground font-mono text-xs">{user.id}</dd>
              </div>
            </dl>
          </div>

          <div className="flex gap-2">
            <form action="/auth/signout" method="post">
              <Button type="submit" variant="outline">
                Sign out
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
