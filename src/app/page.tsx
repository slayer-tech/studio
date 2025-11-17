import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Icons } from '@/components/icons';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center">
        <Link href="/" className="flex items-center gap-2">
          <Icons.logo className="h-8 w-8 text-primary" />
          <span className="text-2xl font-bold">CodeVerse</span>
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight">
            Добро пожаловать в CodeVerse
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            IT-форум нового поколения для разработчиков, дизайнеров и создателей. Делитесь знаниями, задавайте вопросы и общайтесь с сообществом.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/posts">
                Войти на форум <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/signup">
                Присоединиться
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
