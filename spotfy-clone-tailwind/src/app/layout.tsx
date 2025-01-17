import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "spotfy",
	description: "creat clone spotfy whith tailwindcss",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="bg-zinc-900 text-zinc-50">{children}</body>
		</html>
	);
}
