import Image from "next/image";

import { FeedbackType } from "@/lib/feedback";

type Props = {
	feedback: FeedbackType;
};

export default function FeedbackCard({ feedback }: Props) {
	return (
		<div className={`flex w-80 flex-col gap-1 rounded-md bg-gray-500 bg-opacity-20 p-4 backdrop-blur-lg ${feedback.done ? "opacity-70" : ""}`}>
			<div className="flex items-center gap-2">
				{feedback.done && (
					<div className="text-green-500">
						<CheckmarkIcon />
					</div>
				)}

				<div className="flex flex-col justify-start">
					<p className="text-sm leading-none text-gray-300">{feedback.website}</p>
					<p className="mb-1 text-lg font-semibold leading-none">{feedback.feature}</p>
				</div>
			</div>

			<p className="whitespace-pre-wrap text-sm">{feedback.feedback}</p>
		</div>
	);
}

const CheckmarkIcon = () => {
	return (
		<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20.2832" height="19.9316">
			<g>
				<rect height="19.9316" opacity="0" width="20.2832" x="0" y="0" />
				<path
					d="M19.9219 9.96094C19.9219 15.4004 15.4102 19.9219 9.96094 19.9219C4.52148 19.9219 0 15.4004 0 9.96094C0 4.51172 4.51172 0 9.95117 0C15.4004 0 19.9219 4.51172 19.9219 9.96094ZM12.998 6.08398L8.82812 12.7832L6.8457 10.2246C6.60156 9.90234 6.38672 9.81445 6.10352 9.81445C5.66406 9.81445 5.32227 10.1758 5.32227 10.6152C5.32227 10.8398 5.41016 11.0547 5.55664 11.25L8.00781 14.2578C8.26172 14.5996 8.53516 14.7363 8.86719 14.7363C9.19922 14.7363 9.48242 14.5801 9.6875 14.2578L14.2773 7.03125C14.3945 6.82617 14.5215 6.60156 14.5215 6.38672C14.5215 5.92773 14.1211 5.63477 13.6914 5.63477C13.4375 5.63477 13.1836 5.79102 12.998 6.08398Z"
					fill="currentColor"
					fill-opacity="0.85"
				/>
			</g>
		</svg>
	);
};
