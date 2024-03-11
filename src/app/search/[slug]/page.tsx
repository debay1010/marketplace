import AllAds from "@/components/AllAds";
import { searchAdsByTitle } from "@/lib/FetchData";
import React from "react";

export default async function page({ params }: { params: { slug: string } }) {
	const searchWord = params.slug;
	const ads = await searchAdsByTitle(searchWord);
	console.log(searchWord);
	console.log(ads);
	return (
		<div className="">
			<div className="">
				<AllAds ads={ads} />
			</div>
		</div>
	);
}
