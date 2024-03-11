"use client";
import { NGnaira } from "@/constants";
import { FormData, OutputData } from "@/lib/types";
import Link from "next/link";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useEffect } from "react";

// export default function AllAds({ ads }: FormData) {
export default function AllAds({ ads }: FormData) {
	console.log(ads);
	const handleError = () => {
		if (ads.length == 0) {
			throw new Error();
		}
	};

	useEffect(() => {
		handleError();
	}, []);
	return (
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
			<div className="">
				{ads.map((ad) => (
					<>
						<div className="bg-white rounded-lg m-3 p-2">
							<img
								src={ad.imageUrl[0]}
								alt="Ad image"
								className="p-3 w-full h-[150px] lg:h-[120px]"
							/>
							<p className="m-2">
								<Link
									href={`/adverts/${ad.id}`}
									className="font-semibold hover:underline line-clamp-2"
								>
									{ad.title}
								</Link>
								<br />
								<span className=" m-1 text-sm text-green-700">
									{NGnaira.format(ad.price)}
								</span>
							</p>

							<div className="ml-3 text-gray-500">
								<MyLocationIcon /> {ad.location}
							</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
}
