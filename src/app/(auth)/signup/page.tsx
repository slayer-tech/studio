import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SignupPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>Присоединяйтесь к CodeVerse</CardTitle>
        <CardDescription>Создайте свой аккаунт, чтобы начать делиться и учиться</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Имя</Label>
            <Input id="name" type="text" placeholder="Ваше имя" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Электронная почта</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Пароль</Label>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Создать аккаунт
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Уже есть аккаунт?{' '}
          <Link href="/login" className="underline">
            Войти
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
