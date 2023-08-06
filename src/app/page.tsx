import Image from "next/image";

export default function Home() {
	const website = "f1-dash";

	return (
		<main className="flex h-screen w-full flex-col justify-center items-center">
			<h1 className="text-2xl font-bold leading-none mb-1">Feedback Site</h1>

			<h2 className="text-xl font-normal leading-none opacity-70 mb-1">
				This is a website where I collect <br /> feedback, nothing else, just that.
			</h2>

			<p className="opacity-60">
				Made by{" "}
				<a className="cursor-pointer" href="https://slowlydev.vercel.app/">
					Slowlydev
				</a>
			</p>
		</main>
	);
}
