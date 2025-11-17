import Link from 'next/link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { Question } from '@/lib/types';
import { Eye, MessageCircle, ThumbsUp } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
}

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <Card className="flex flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl leading-snug">
          <Link href={`/questions/${question.id}`} className="hover:text-primary transition-colors">
            {question.title}
          </Link>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
         <div className="flex items-center gap-3 mb-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src={question.author.avatarUrl} alt={question.author.name} />
            <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold">{question.author.name}</p>
            <p className="text-sm text-muted-foreground">{question.createdAt}</p>
          </div>
        </div>
        <p className="text-muted-foreground line-clamp-2">{question.content}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-4">
        <div className="flex flex-wrap gap-2">
          {question.tags.map((tag) => (
            <Badge key={tag.id} variant="outline" className="font-normal">
              #{tag.name}
            </Badge>
          ))}
        </div>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1.5">
            <ThumbsUp className="h-4 w-4" />
            <span>{question.stats.votes} Votes</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="h-4 w-4" />
            <span>{question.stats.answers} Answers</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" />
            <span>{question.stats.views} Views</span>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
