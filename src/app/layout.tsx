import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "slowly-improve",
	description: "Feedback website",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex h-screen w-full flex-col justify-center items-center`}>
				<div className="z-[-10] blur-3xl flex absolute">
					<div className="bg-orange-500 w-[20rem] h-[20rem] rounded-full" />
					<div className="bg-rose-600 w-[20rem] h-[20rem] rounded-full -ml-48" />
				</div>

				{children}
			</body>
		</html>
	);
}
