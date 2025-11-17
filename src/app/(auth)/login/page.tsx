import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function LoginPage() {
  return (
    <Card>
      <CardHeader className="text-center">
        <CardTitle>С возвращением</CardTitle>
        <CardDescription>Войдите в свой аккаунт CodeVerse</CardDescription>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email">Электронная почта</Label>
            <Input id="email" type="email" placeholder="m@example.com" required />
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
                <Label htmlFor="password">Пароль</Label>
                <Link href="#" className="ml-auto inline-block text-sm underline">
                    Забыли пароль?
                </Link>
            </div>
            <Input id="password" type="password" required />
          </div>
          <Button type="submit" className="w-full">
            Войти
          </Button>
        </form>
        <div className="mt-4 text-center text-sm">
          Нет аккаунта?{' '}
          <Link href="/signup" className="underline">
            Зарегистрироваться
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
