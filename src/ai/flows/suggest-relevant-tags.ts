'use server';

/**
 * @fileOverview A flow that suggests relevant tags for a post based on its content.
 *
 * - suggestRelevantTags - A function that suggests relevant tags for a given post.
 * - SuggestRelevantTagsInput - The input type for the suggestRelevantTags function.
 * - SuggestRelevantTagsOutput - The return type for the suggestRelevantTags function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestRelevantTagsInputSchema = z.object({
  postContent: z.string().describe('The content of the post to suggest tags for.'),
});
export type SuggestRelevantTagsInput = z.infer<typeof SuggestRelevantTagsInputSchema>;

const SuggestRelevantTagsOutputSchema = z.object({
  tags: z.array(z.string()).describe('An array of suggested tags for the post.'),
});
export type SuggestRelevantTagsOutput = z.infer<typeof SuggestRelevantTagsOutputSchema>;

export async function suggestRelevantTags(input: SuggestRelevantTagsInput): Promise<SuggestRelevantTagsOutput> {
  return suggestRelevantTagsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestRelevantTagsPrompt',
  input: {schema: SuggestRelevantTagsInputSchema},
  output: {schema: SuggestRelevantTagsOutputSchema},
  prompt: `Вы — услужливый помощник, который предлагает релевантные теги для определенной публикации.

  Учитывая следующее содержание публикации, предложите 5 релевантных тегов, которые можно использовать для классификации публикации.

  Содержание публикации: {{{postContent}}}
  
  Убедитесь, что теги соответствуют содержанию и являются достаточно общими, чтобы их можно было использовать для категоризации.
  Верните теги в виде массива строк JSON.
  `,
});

const suggestRelevantTagsFlow = ai.defineFlow(
  {
    name: 'suggestRelevantTagsFlow',
    inputSchema: SuggestRelevantTagsInputSchema,
    outputSchema: SuggestRelevantTagsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
