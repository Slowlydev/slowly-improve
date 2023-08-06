import { env } from "@/env.mjs";
import { FeedbackType } from "./feedback";

const headers = {
	"Content-Type": "application/json",
	Prefer: "return=minimal",
	apikey: env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
	Authorization: `Bearer ${env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
} as HeadersInit | undefined;

export const fetcher = async (method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH", route: string, body: any): Promise<any> => {
	const response = await fetch(`${env.NEXT_PUBLIC_SUPABASE_URL}/rest/v1/${route}`, {
		headers,
		method,
		body: JSON.stringify(body),
	});

	try {
		const data = await response.json();
		return data;
	} catch {
		return void 0;
	}
};

export const createFeedback = async (feedback: FeedbackType) => {
	return fetcher("POST", "feedbacks", feedback);
};
