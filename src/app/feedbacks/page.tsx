import { getFeedbacks } from "../../lib/database";
import { FeedbackType } from "../../lib/feedback";

export default async function Feedbacks() {
	const feedbacks = await getFeedbacks();

	return (
		<main className="flex h-screen w-full flex-col justify-center items-center">
			<div className="flex flex-col gap-2 w-80">
				{feedbacks.map((feedback) => (
					<Feedback key={feedback.id} feedback={feedback} />
				))}
			</div>
		</main>
	);
}

type FeedbackProps = {
	feedback: FeedbackType;
};

const Feedback = ({ feedback }: FeedbackProps) => {
	return (
		<div className="flex flex-col gap-1">
			<p className="text-lg font-semibold">
				{feedback.website} {feedback.feature}
			</p>
			<p className="text-sm whitespace-pre-wrap">{feedback.feedback}</p>
		</div>
	);
};
