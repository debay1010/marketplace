"use client";
import Image from "next/image";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { LocationCity } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Header() {
	const router = useRouter();
	const [search, setSearch] = useState<string>();
	return (
		<div className="flex mx-auto justify-center items-center space-x-6 max-w-6xl ">
			{/* // Left side  */}
			<div className="">
				<Image
					src="/man-rider.png"
					alt="Electric bike"
					width={300}
					height={300}
					className="hidden md:inline"
				/>
			</div>
			{/* Middle  */}
			<div className="mx-auto md:my-auto py-10 md:py-0 w-[70%] md:w-[55%] text-center ">
				<div className="mb-10 text-white">
					Search Anything in
					<span className="rounded-md bg-black text-white p-1 ">
						<LocationOnIcon />
						All Nigeria
					</span>
				</div>
				<form action={`/search/${search}`}>
					<div className="flex bg-white p-2 rounded-sm w-full mx-auto">
						<SearchIcon />
						<input
							type="text"
							value={search}
							className="flex-1 bg-transparent outline-none "
							onChange={(e) => setSearch(e.target.value)}
						/>
						{/* <SearchIcon /> */}
						<ExpandMoreIcon />
					</div>
				</form>
			</div>

			{/* Right */}
			<div className="">
				<Image
					src="/girl-rider.png"
					alt="Girl rider"
					width={300}
					height={300}
					className="hidden md:inline"
				/>
			</div>
		</div>
	);
}
