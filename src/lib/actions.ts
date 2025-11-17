"use server";

import { suggestRelevantTags } from "@/ai/flows/suggest-relevant-tags";
import { z } from "zod";

const SuggestTagsSchema = z.object({
  postContent: z.string().min(10, "Post content is too short."),
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
        return { success: true, message: "Tags suggested.", tags: result.tags };
    } else {
        return { success: false, message: "AI could not suggest any tags." };
    }

  } catch (error) {
    console.error("Error suggesting tags:", error);
    return {
      success: false,
      message: "An unexpected error occurred while suggesting tags.",
    };
  }
}
