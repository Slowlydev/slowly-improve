import { z } from "zod";

export const createFeedbackSchema = z.object({
  website: z.string(),
  feature: z.string(),
  feedback: z.string(),
});

export const feedbackSchema = z.object({
  id: z.number(),
  created_at: z.string(),
  website: z.string(),
  feature: z.string(),
  feedback: z.string(),
  done: z.boolean(),
});

export type CreateFeedbackType = z.infer<typeof createFeedbackSchema>;
export type FeedbackType = z.infer<typeof feedbackSchema>;
