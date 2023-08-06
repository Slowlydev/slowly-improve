import { z } from "zod";

export const feedbackSchema = z.object({
	website: z.string(),
	feature: z.string(),
	feedback: z.string(),
});

export type FeedbackType = z.infer<typeof feedbackSchema>;
