import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "./context/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "MarketPlace",
	description: "Buy anything, sell anything",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<AuthProvider>
					<nav className="bg-[#00b53f]">
						<Navbar />
					</nav>
					{children}

					<footer className="  md:bg-[#00b53f]">
						<Footer />
					</footer>
				</AuthProvider>
			</body>
		</html>
	);
}
