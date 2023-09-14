import type { ReactNode } from "react";
import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "slowly-improve",
	description: "Feedback website",
};

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} flex flex-col justify-center items-center`}>
				<div className="absolute z-[-10] h-screen w-full flex flex-col items-center content-center">
					<div className="blur-3xl flex h-screen items-center content-center">
						<div className="bg-orange-500 w-[20rem] h-[20rem] rounded-full" />
						<div className="bg-rose-600 w-[20rem] h-[20rem] rounded-full -ml-48" />
					</div>
				</div>

				{children}
			</body>
		</html>
	);
}
