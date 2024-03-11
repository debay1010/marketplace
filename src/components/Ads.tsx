"use client";
import { FormData, OutputData } from "@/lib/types";
import { Span } from "next/dist/trace";
import { Space_Mono } from "next/font/google";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Ads(ad: FormData) {
	// export default function Ads(data: OutputData) {
	// const ad = data.data;
	return (
		<>
			<div className="lg:flex lg:space-x-5 m-10">
				<div className="lg:flex-1 bg-white border-t-8 border-green-600 pb-10 ">
					<img
						src={ad.imageUrl[0]}
						alt={ad.title}
						className=" h-[70%] w-[70%] p-3"
					/>
					<div className="m-5">
						<p className="text-2xl font-bold">{ad.title}</p>
						{ad.negotiable && (
							<span className=" text-green-500">
								{ad.negotiable}
							</span>
						)}
						<p className="text-gray-400">
							<LocationOnIcon /> {ad.location} ={" "}
							{ad.contactNumber}
						</p>

						{ad.youtube.length != 0 && (
							<a href={ad.youtube} className="mt-5">
								<YouTubeIcon /> Open on Youtube
							</a>
						)}

						<div className="divider"></div>

						<div className="my-5">{ad.description}</div>
						<div className="divider"></div>
						<div className="flex space-x-5">
							{ad.imageUrl.map((image: string, index: number) => (
								<span key={index} className="">
									<img
										src={image}
										className="h-[100px] w-[100px]"
										alt="Ad Image"
									/>
								</span>
							))}
						</div>
					</div>
				</div>

				<div className="lg:w-[30%] hidden lg:inline">
					<div className="bg-white p-5 text-sm">
						<div className="font-bold text-center">
							{" "}
							Safety Tips{" "}
						</div>
						<ol className=" list-disc  space-y-2">
							<li>
								Don't pay in advance, including for delivery
							</li>
							<li>Meet the seller at a safe public place</li>
							<li>
								Inspect the item and ensure it is exactly what
								you have requested for
							</li>
							<li>Only pay when you are satisfied</li>
						</ol>
					</div>
				</div>
			</div>
		</>
	);
}
