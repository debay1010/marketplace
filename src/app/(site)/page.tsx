import AllAds from "@/components/AllAds";
import Header from "@/components/Header";
import Menu from "@/components/Menu";
import Slider from "@/components/Slider";
import { fetchAllAds } from "@/lib/FetchData";

export default async function Home() {
	const allAds = await fetchAllAds();
	return (
		<main className="">
			<div className=" bg-gradient-to-r from-green-500 to-green-700">
				<Header />
			</div>

			<div className=" flex max-w-6xl mx-auto mt-5 ">
				<div className="hidden lg:inline mr-5">
					<Menu />
				</div>
				<div className="flex-1">
					<div className="hidden lg:inline">
						<Slider />
					</div>
					<AllAds ads={allAds} />
				</div>
			</div>
		</main>
	);
}
