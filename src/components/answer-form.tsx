"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "./ui/card";

const answerFormSchema = z.object({
  content: z
    .string()
    .min(20, "Ответ должен содержать не менее 20 символов."),
});

type AnswerFormValues = z.infer<typeof answerFormSchema>;

export function AnswerForm() {
  const { toast } = useToast();

  const form = useForm<AnswerFormValues>({
    resolver: zodResolver(answerFormSchema),
    defaultValues: {
      content: "",
    },
  });

  function onSubmit(data: AnswerFormValues) {
    console.log(data);
    toast({
        title: "Ответ отправлен!",
        description: "Ваш ответ был успешно добавлен.",
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
            <CardContent className="pt-6">
                <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel className="sr-only">Ваш ответ</FormLabel>
                    <FormControl>
                        <Textarea
                        placeholder="Поделитесь своим решением или мыслями..."
                        className="min-h-[150px]"
                        {...field}
                        />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </CardContent>
        </Card>

        <div className="flex justify-start">
          <Button type="submit">Опубликовать ответ</Button>
        </div>
      </form>
    </Form>
  );
}
