import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Code, ArrowRight } from 'lucide-react';
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
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-4000"></div>
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
            Welcome to CodeVerse
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
            The next-generation IT forum for developers, designers, and creators. Share your knowledge, ask questions, and connect with the community.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/posts">
                Enter the Forum <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/signup">
                Join Now
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
