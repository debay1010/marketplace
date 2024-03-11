import UserAds from "@/components/UserAds";
import { fetchUserAds } from "@/lib/FetchData";
import { OutputData } from "@/lib/types";
import React from "react";

export default async function page({
	params,
}: {
	params: { userEmail: string };
}) {
	const userEmail = decodeURIComponent(params.userEmail);

	const ads = await fetchUserAds(userEmail);

	console.log(ads);

	return (
		<div className="max-w-6xl mx-auto">
			{ads?.map((ad) => (
				<div key={ad.id} className="">
					<UserAds data={ad} />
				</div>
			))}
		</div>
	);
}
