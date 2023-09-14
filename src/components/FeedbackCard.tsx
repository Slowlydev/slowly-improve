import { FeedbackType } from "@/lib/feedback";

type Props = {
	feedback: FeedbackType;
};

export default function FeedbackCard({ feedback }: Props) {
	return (
		<div className="p-4 w-80 flex flex-col gap-1 rounded-md backdrop-blur-lg bg-gray-500 bg-opacity-20">
			<p className="text-sm text-gray-300 leading-none">{feedback.website}</p>
			<p className="text-lg font-semibold leading-none mb-1">{feedback.feature}</p>
			<p className="text-sm whitespace-pre-wrap">{feedback.feedback}</p>
		</div>
	);
}
