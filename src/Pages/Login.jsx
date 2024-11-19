
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Label } from "@/components/ui/label"

  import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

  
export function Login(){
    return(
        <Card className="w-[350px]" >
  <CardHeader>
    <CardTitle className="flex justify-center text-3xl">😇 Login 👇</CardTitle>
    <CardDescription className="pt-2 text-[18px]">Welcome Me login page  </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="grid w-full gap-4">
  <div className="flex flex-col items-start space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="flex flex-col items-start space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="password" />
        </div>
        </div>
  </CardContent>
  <CardFooter>
  <Button className="w-full">Create account</Button>
  </CardFooter>
</Card>


    )
}