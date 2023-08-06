import Image from "next/image";

import thumbUp from "@/assets/thumbs-up.svg";

export default function Thanks() {
	return (
		<main className="flex h-screen w-full flex-col justify-center items-center">
			<Image src={thumbUp} alt="thumbs up" className="w-20 h-20 opacity-70" />

			<h1 className="mt-5 text-2xl font-bold leading-none">Thanks for your feedback</h1>
		</main>
	);
}
