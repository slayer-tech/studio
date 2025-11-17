import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getPostById } from '@/lib/data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Heart, MessageSquare, Eye } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPostById(params.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-4xl mx-auto py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{post.title}</h1>
        <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
                <AvatarImage src={post.author.avatarUrl} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.createdAt}</p>
            </div>
        </div>
        <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{post.topic.name}</Badge>
            {post.tags.map((tag) => (
                <Badge key={tag.id} variant="outline" className="font-normal">
                #{tag.name}
                </Badge>
            ))}
        </div>
      </div>
      
      {post.imageUrl && (
        <div className="my-8 aspect-video relative overflow-hidden rounded-lg">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover"
            data-ai-hint={post.imageHint}
          />
        </div>
      )}

      <div className="prose prose-lg max-w-none mt-8 text-foreground/90">
        <p>{post.content}</p>
      </div>

      <Separator className="my-8" />

      <div className="flex items-center gap-8 text-muted-foreground">
        <div className="flex items-center gap-2">
          <Heart className="h-5 w-5" />
          <span>{post.stats.likes}</span>
        </div>
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5" />
          <span>{post.stats.comments}</span>
        </div>
        <div className="flex items-center gap-2">
          <Eye className="h-5 w-5" />
          <span>{post.stats.views}</span>
        </div>
      </div>
    </article>
  );
}
