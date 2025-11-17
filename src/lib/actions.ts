"use server";

import { suggestRelevantTags } from "@/ai/flows/suggest-relevant-tags";
import { z } from "zod";

const SuggestTagsSchema = z.object({
  postContent: z.string().min(10, "Содержание поста слишком короткое."),
});

type FormState = {
  success: boolean;
  message: string;
  tags?: string[];
};

export async function getAiTagSuggestions(
  postContent: string
): Promise<FormState> {
  const validation = SuggestTagsSchema.safeParse({ postContent });

  if (!validation.success) {
    return {
      success: false,
      message: validation.error.errors.map((e) => e.message).join(", "),
    };
  }

  try {
    const result = await suggestRelevantTags({
      postContent: validation.data.postContent,
    });
    
    if (result && result.tags) {
        return { success: true, message: "Теги предложены.", tags: result.tags };
    } else {
        return { success: false, message: "ИИ не смог предложить теги." };
    }

  } catch (error) {
    console.error("Error suggesting tags:", error);
    return {
      success: false,
      message: "Произошла непредвиденная ошибка при предложении тегов.",
    };
  }
}
