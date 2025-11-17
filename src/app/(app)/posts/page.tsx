import Link from 'next/link';
import { getPosts } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { PostCard } from '@/components/post-card';
import { PlusCircle, ArrowUpDown, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Посты</h1>
          <p className="text-muted-foreground">
            Просматривайте последние новости, открытия и обсуждения от сообщества.
          </p>
        </div>
        <Button asChild>
          <Link href="/posts/create">
            <PlusCircle className="mr-2 h-4 w-4" />
            Создать пост
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Поиск по тегу..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Сортировать по: Новые
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Новые</DropdownMenuItem>
            <DropdownMenuItem>Популярности</DropdownMenuItem>
            <DropdownMenuItem>Самым лайкаемым</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
