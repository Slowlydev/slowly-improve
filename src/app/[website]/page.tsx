"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";

export default function Feedback({ params }: { params: { website: string } }) {
	const router = useRouter();

	const { website } = params;

	const [feature, setFeature] = useState<string>("");
	const [feedback, setFeedback] = useState<string>("");
	const [loading, setLoading] = useState<boolean>(false);

	const label = "opacity-70 font-medium mt-4";

	useEffect(() => {
		router.prefetch("/thanks");
	}, [router]);

	const submitFeedback = async (e: FormEvent) => {
		e.preventDefault();

		if (loading) return;
		if (!feedback || !feature) return;

		setLoading(true);

		await fetch("/api", {
			method: "POST",
			body: JSON.stringify({
				website,
				feature,
				feedback,
			}),
		});

		router.push("/thanks");
	};

	return (
		<main className="flex h-screen w-full flex-col justify-center items-center">
			<form className="w-80" onSubmit={submitFeedback}>
				<h1 className="text-2xl font-bold leading-none">Feedback</h1>
				<h2 className="text-xl font-normal leading-none">for {website}</h2>

				<p className={label}>About what (Feature/Thing)</p>
				<input
					placeholder="What..."
					value={feature}
					onChange={(e) => setFeature(e.target.value)}
					type="text"
					className="w-full h-10 rounded-lg bg-zinc-900 p-2 px-4 outline-blue-600 ring-blue-600"
					disabled={loading}
				/>

				<p className={label}>Feedback</p>
				<textarea
					placeholder="Your Feedback here..."
					value={feedback}
					onChange={(e) => setFeedback(e.target.value)}
					className="w-full h-32 rounded-lg bg-zinc-900 p-2 px-4 resize-none"
					disabled={loading}
				/>

				<button className="w-full rounded-lg bg-blue-600 h-10 mt-4 font-medium" disabled={loading}>
					{loading ? "Loading..." : "Submit"}
				</button>
			</form>
		</main>
	);
}
