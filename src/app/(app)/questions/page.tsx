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
          <h1 className="text-3xl font-bold tracking-tight">Questions</h1>
          <p className="text-muted-foreground">
            Ask the community or share your expertise by answering questions.
          </p>
        </div>
        <Button asChild>
          <Link href="/questions/ask">
            <PlusCircle className="mr-2 h-4 w-4" />
            Ask Question
          </Link>
        </Button>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="relative w-full md:max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by tag..." className="pl-8" />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="w-full md:w-auto">
              <ArrowUpDown className="mr-2 h-4 w-4" />
              Sort by: Newest
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Most Voted</DropdownMenuItem>
            <DropdownMenuItem>Unanswered</DropdownMenuItem>
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
