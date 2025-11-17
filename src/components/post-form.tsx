"use client";

import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TOPICS } from "@/lib/constants";
import { getAiTagSuggestions } from "@/lib/actions";
import { Sparkles, Loader2, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const postFormSchema = z.object({
  title: z.string().min(5, "Заголовок должен содержать не менее 5 символов.").max(100),
  content: z
    .string()
    .min(20, "Содержание должно содержать не менее 20 символов.")
    .max(5000),
  topic: z.string().nonempty("Пожалуйста, выберите тему."),
  tags: z.array(z.string()).max(5, "Вы можете добавить до 5 тегов."),
});

type PostFormValues = z.infer<typeof postFormSchema>;

export function PostForm() {
  const [isPending, startTransition] = useTransition();
  const [suggestedTags, setSuggestedTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const { toast } = useToast();

  const form = useForm<PostFormValues>({
    resolver: zodResolver(postFormSchema),
    defaultValues: {
      title: "",
      content: "",
      topic: "",
      tags: [],
    },
  });

  function onSubmit(data: PostFormValues) {
    console.log(data);
    toast({
        title: "Пост отправлен!",
        description: "Ваш пост был успешно отправлен на проверку.",
    })
  }

  function handleAiSuggest() {
    const content = form.getValues("content");
    if (content.length < 20) {
      toast({
        variant: "destructive",
        title: "Слишком короткое содержание",
        description: "Пожалуйста, напишите не менее 20 символов, чтобы получить предложения от ИИ.",
      });
      return;
    }
    startTransition(async () => {
      const result = await getAiTagSuggestions(content);
      if (result.success && result.tags) {
        setSuggestedTags(result.tags);
      } else {
        toast({
          variant: "destructive",
          title: "Ошибка предложения ИИ",
          description: result.message,
        });
      }
    });
  }

  function addTag(tag: string) {
    const cleanedTag = tag.trim().toLowerCase();
    if (cleanedTag && !form.getValues("tags").includes(cleanedTag)) {
        const currentTags = form.getValues("tags");
        if (currentTags.length < 5) {
            form.setValue("tags", [...currentTags, cleanedTag]);
        }
    }
  }

  function handleTagKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter' || e.key === ',') {
        e.preventDefault();
        addTag(tagInput);
        setTagInput("");
    }
  }

  function removeTag(tagToRemove: string) {
    form.setValue("tags", form.getValues("tags").filter(tag => tag !== tagToRemove));
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Создать новый пост</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Заголовок</FormLabel>
                  <FormControl>
                    <Input placeholder="Будущее..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Содержание</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Поделитесь своими мыслями, открытиями или новостями..."
                      className="min-h-[200px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Тема</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {TOPICS.map((topic) => (
                          <SelectItem key={topic.id} value={topic.slug}>
                            {topic.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="tags"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Теги</FormLabel>
                    <FormControl>
                        <div>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {field.value.map(tag => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                        <button type="button" onClick={() => removeTag(tag)} className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2">
                                            <X className="h-3 w-3" />
                                        </button>
                                    </Badge>
                                ))}
                            </div>
                            <Input 
                                placeholder="Добавьте до 5 тегов..."
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                                disabled={field.value.length >= 5}
                            />
                        </div>
                    </FormControl>
                    <FormDescription>
                        Нажмите Enter или запятую, чтобы добавить тег.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <div>
              <Button type="button" variant="outline" onClick={handleAiSuggest} disabled={isPending}>
                {isPending ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Sparkles className="mr-2 h-4 w-4" />
                )}
                Предложить теги с помощью ИИ
              </Button>
              {suggestedTags.length > 0 && (
                <div className="mt-4 space-y-2">
                    <p className="text-sm text-muted-foreground">Нажмите, чтобы добавить предложенный тег:</p>
                    <div className="flex flex-wrap gap-2">
                        {suggestedTags.map((tag) => (
                            <Badge key={tag} variant="outline" className="cursor-pointer" onClick={() => {addTag(tag); setSuggestedTags(suggestedTags.filter(t => t !== tag))}}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>
              )}
            </div>

          </CardContent>
        </Card>

        <div className="flex justify-end">
          <Button type="submit">Отправить пост</Button>
        </div>
      </form>
    </Form>
  );
}
