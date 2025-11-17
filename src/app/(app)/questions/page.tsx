import Link from 'next/link';
import { getQuestions } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { QuestionCard } from '@/components/question-card';
import { PlusCircle, ArrowUpDown, Search } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';

export default async function QuestionsPage() {
  const questions = await getQuestions();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Вопросы</h1>
          <p className="text-muted-foreground">
            Спросите сообщество или поделитесь своим опытом, отвечая на вопросы.
          </p>
        </div>
        <Button asChild>
          <Link href="/questions/ask">
            <PlusCircle className="mr-2 h-4 w-4" />
            Задать вопрос
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
            <DropdownMenuItem>Самые голосуемые</DropdownMenuItem>
            <DropdownMenuItem>Без ответа</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator />

      <div className="space-y-6">
        {questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}
