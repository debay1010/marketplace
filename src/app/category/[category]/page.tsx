"use client";
import AllAds from "@/components/AllAds";
import { fetchAdsByCategory } from "@/lib/FetchData";
import Link from "next/link";
import React from "react";

export default async function page({
	params,
}: {
	params: { category: string };
}) {
	const cat = params.category;

	const ads = await fetchAdsByCategory(cat);
	console.log(cat);
	console.log(ads);
	return (
		<div className="max-w-6xl mx-auto">
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<a href="/">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="w-4 h-4 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
								></path>
							</svg>
							Home
						</a>
					</li>

					<li>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							className="w-4 h-4 stroke-current"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
							></path>
						</svg>
						ADS
					</li>

					<li>
						<span className="inline-flex gap-2 items-center">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								className="w-4 h-4 stroke-current"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
								></path>
							</svg>
							{params.category}
						</span>
					</li>
				</ul>
			</div>

			<AllAds ads={ads} />
		</div>
	);
}
