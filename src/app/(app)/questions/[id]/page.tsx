import { getQuestionById, getAnswersByQuestionId } from '@/lib/data';
import { notFound } from 'next/navigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ThumbsUp, MessageCircle, Eye } from 'lucide-react';
import { AnswerCard } from '@/components/answer-card';
import { AnswerForm } from '@/components/answer-form';

export default async function QuestionPage({ params }: { params: { id: string } }) {
  const question = await getQuestionById(params.id);
  
  if (!question) {
    notFound();
  }

  const answers = await getAnswersByQuestionId(question.id);

  return (
    <div className="max-w-4xl mx-auto py-8">
      <article className="space-y-6">
        <div>
            <h1 className="text-3xl font-bold tracking-tight">{question.title}</h1>
            <p className="text-sm text-muted-foreground mt-2">
                Задан {question.createdAt}
            </p>
        </div>

        <div className="flex items-center gap-4">
            <Avatar className="h-10 w-10">
                <AvatarImage src={question.author.avatarUrl} alt={question.author.name} />
                <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
                <p className="font-semibold">{question.author.name}</p>
            </div>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90">
            <p>{question.content}</p>
        </div>

        <div className="flex flex-wrap gap-2">
            {question.tags.map((tag) => (
                <Badge key={tag.id} variant="outline" className="font-normal">
                #{tag.name}
                </Badge>
            ))}
        </div>
        
        <div className="flex items-center gap-8 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
            <ThumbsUp className="h-4 w-4" />
            <span>{question.stats.votes} голосов</span>
            </div>
            <div className="flex items-center gap-2">
            <MessageCircle className="h-4 w-4" />
            <span>{question.stats.answers} ответов</span>
            </div>
            <div className="flex items-center gap-2">
            <Eye className="h-4 w-4" />
            <span>{question.stats.views} просмотров</span>
            </div>
        </div>
      </article>

      <Separator className="my-10" />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">{answers.length} ответов</h2>
        <div className="space-y-6">
            {answers.map(answer => (
                <AnswerCard key={answer.id} answer={answer} />
            ))}
        </div>
      </section>

      <Separator className="my-10" />

      <section>
        <h2 className="text-2xl font-bold mb-4">Ваш ответ</h2>
        <AnswerForm />
      </section>

    </div>
  );
}
