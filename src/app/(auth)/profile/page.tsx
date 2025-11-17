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
    joined: 'Январь 2023',
  };

  return (
    <div className="space-y-6">
        <h1 className="text-3xl font-bold tracking-tight text-center">Мой профиль</h1>
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
            <Button>Редактировать профиль</Button>
          </div>
        </CardHeader>
        <CardContent>
          <Separator className="my-4" />
          <div className="space-y-2 text-sm text-muted-foreground">
            <div className="flex justify-between">
              <span>Электронная почта:</span>
              <span className="font-medium text-foreground">{user.email}</span>
            </div>
            <div className="flex justify-between">
              <span>Присоединился:</span>
              <span className="font-medium text-foreground">{user.joined}</span>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
            <CardTitle>Моя активность</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">Ваши посты и вопросы появятся здесь.</p>
        </CardContent>
      </Card>
    </div>
  );
}
