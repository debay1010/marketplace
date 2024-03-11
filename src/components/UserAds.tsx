"use client";
import { FormData, OutputData } from "@/lib/types";
import { Button } from "@mui/material";
import Link from "next/link";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRouter } from "next/navigation";
import { NGnaira } from "@/constants";
import { deleteAdById } from "@/lib/deleteAd";

export default function UserAds(data: OutputData) {
	const router = useRouter();
	console.log(data);

	const ad = data.data;

	const deleteAd = async () => {
		const result = await deleteAdById(ad.id);
		if (result.error) {
			alert("Error deleting Ad");
		} else {
			alert(result.message);
			router.refresh();
		}
	};

	return (
		<div className=" p-3 flex border-solid border-[1px] m-4 border-gray-400 bg-white rounded-lg hover:scale-105 transition hover: cursor-pointer hover:shadow-lg ">
			<div className="w-[25%] ">
				<img
					src={ad.imageUrl[0]}
					alt="ad-image"
					className="w-full h-full rounded-lg"
				/>
			</div>
			<div className="flex-1 p-2">
				<Link
					href={`/adverts/${ad.id}`}
					className="font-bold line-clamp-2 hover:underline text-xl"
				>
					{ad.title}
				</Link>
				<p className="font-bold text-green-600">
					{NGnaira.format(ad.price)}
					{ad.negotiable && (
						<span className=" text-sm">, negotiable</span>
					)}
				</p>

				<small className="">Open</small>
				<div className="my-2">
					<span className="p-3 mr-5 text-[10px] bg-[#ebf2f7]">
						{Math.floor(Math.random() * 100)} view
					</span>

					<Button
						variant="outlined"
						color="error"
						startIcon={<DeleteIcon />}
						size="small"
						className=""
						onClick={deleteAd}
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
}
