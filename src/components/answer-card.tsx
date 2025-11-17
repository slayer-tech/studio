import type { Answer } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

interface AnswerCardProps {
  answer: Answer;
}

export function AnswerCard({ answer }: AnswerCardProps) {
  return (
    <Card>
        <CardHeader className="flex-row items-center gap-4">
            <Avatar className="h-10 w-10">
                <AvatarImage src={answer.author.avatarUrl} alt={answer.author.name} />
                <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold">{answer.author.name}</p>
                <p className="text-sm text-muted-foreground">Ответил {answer.createdAt}</p>
            </div>
        </CardHeader>
        <CardContent>
            <div className="prose prose-sm max-w-none text-foreground/90">
                <p>{answer.content}</p>
            </div>
        </CardContent>
        <CardFooter className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                    <ThumbsUp className="h-4 w-4" />
                    <span>{answer.votes}</span>
                </Button>
                <Button variant="ghost" size="sm">
                    <ThumbsDown className="h-4 w-4" />
                </Button>
            </div>
        </CardFooter>
    </Card>
  );
}
