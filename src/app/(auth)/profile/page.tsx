import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function ProfilePage() {
  // Mock user data
  const user = {
    name: 'Alex Doe',
    email: 'alex.doe@example.com',
    title: 'Full Stack Developer',
    avatarUrl: 'https://picsum.photos/seed/1/100/100',
    joined: 'January 2023',
  };

  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-center">My Profile</h1>
      <Card>
        <CardHeader>
          <div className="flex flex-col items-center gap-4 text-center">
            <Avatar className="h-24 w-24">
              <AvatarImage src={user.avatarUrl} alt={user.name} />
              <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl">{user.name}</CardTitle>
              <CardDescription>{user.title}</CardDescription>
            </div>
            <Button>Edit Profile</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Separator className="my-4" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Email:</span>
              <span className="font-medium text-foreground">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span>Joined:</span>
              <span className="font-medium text-foreground">{user.joined}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle>My Activity</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Your posts and questions will appear here.</p>
        </CardContent>
      </Card>
    </div>
  );
}
