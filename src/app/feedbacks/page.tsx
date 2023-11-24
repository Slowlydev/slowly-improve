import FeedbackCard from "@/components/FeedbackCard";

import { getFeedbacks } from "../../lib/database";

export const dynamic = "force-dynamic";

export default async function Feedbacks() {
	const feedbacks = await getFeedbacks();

	return (
		<main className="flex flex-col gap-2 items-center m-2">
			<h1 className="text-2xl font-bold leading-none my-4">Feedback Site</h1>

			<div className="flex flex-row gap-2 flex-wrap justify-center">
				{feedbacks
					.sort((fa, fb) => new Date(fa.created_at).getMilliseconds() - new Date(fb.created_at).getMilliseconds())
					.sort((fa, fb) => (fa.done === fb.done ? 0 : fa.done ? -1 : 1))
					.map((feedback) => (
						<FeedbackCard key={feedback.id} feedback={feedback} />
					))}
			</div>
		</main>
	);
}
