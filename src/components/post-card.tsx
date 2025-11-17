import Image from 'next/image';
import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Post } from '@/lib/types';
import { Eye, Heart, MessageSquare } from 'lucide-react';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-lg">
      {post.imageUrl && (
        <Link href={`/posts/${post.id}`} className="block">
          <div className="aspect-video relative overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={post.imageHint}
            />
          </div>
        </Link>
      )}
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Avatar className="h-10 w-10">
            <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
            <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{post.author.name}</p>
            <p className="text-sm text-muted-foreground">{post.createdAt}</p>
          </div>
        </div>
        <CardTitle className="text-xl leading-snug">
          <Link href={`/posts/${post.id}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </CardTitle>
        <Badge variant="secondary" className="w-fit">{post.topic.name}</Badge>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-muted-foreground line-clamp-3">{post.content}</p>
      </CardContent>
      <CardFooter className="flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag.id} variant="outline" className="font-normal">
              #{tag.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <Heart className="h-4 w-4" />
            <span>{post.stats.likes}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageSquare className="h-4 w-4" />
            <span>{post.stats.comments}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" />
            <span>{post.stats.views}</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
