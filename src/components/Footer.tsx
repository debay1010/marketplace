import { aboutUsLinks, resourcesLinks, supportLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<div className="mx-auto max-w-6xl p-5">
			<div className="flex">
				<div className="flex-1">
					<p className="mb-3 font-semibold ">About Us</p>
					<ul className="space-y-4">
						{aboutUsLinks.map((item) => (
							<li
								key={item.title}
								className="text-green-600 md:text-white transition-colors hover:text-green-200 hover:cursor-pointer"
							>
								{" "}
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className="flex-1">
					<p className="mb-3 font-semibold ">Support</p>
					<ul className="space-y-4">
						{supportLinks.map((item) => (
							<li
								key={item.title}
								className="text-green-600 md:text-white transition-colors hover:text-green-200 hover:cursor-pointer"
							>
								{" "}
								{item.title}
							</li>
						))}
					</ul>
				</div>
				<div className="flex-1">
					<p className="mb-3 font-semibold ">Our Apps</p>
					<ul className="space-y-4">
						<li className="text-green-600 md:text-white transition-colors hover:text-green-200 hover:cursor-pointer">
							<Link href="#">
								<Image
									src="/apps-store-logo.png"
									alt="Apps Store Logo"
									width={100}
									height={100}
								/>
							</Link>
						</li>
						<li className="text-green-600 md:text-white transition-colors hover:text-green-200 hover:cursor-pointer">
							<Link href="#">
								<Image
									src="/google-play-logo.png"
									alt="google Play Logo"
									width={100}
									height={100}
								/>
							</Link>
						</li>
					</ul>
				</div>

				<div className="flex-1">
					<p className="mb-3 font-semibold ">Our Resources</p>
					<ul className="space-y-4">
						{resourcesLinks.map((item) => (
							<li
								key={item.title}
								className="text-green-600 md:text-white transition-colors hover:text-green-200 hover:cursor-pointer"
							>
								{" "}
								{item.title}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
