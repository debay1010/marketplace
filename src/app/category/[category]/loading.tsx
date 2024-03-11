import { Skeleton } from "@mui/material";
import React from "react";

export default function Loading() {
	return (
		<div className="max-w-5xl mx-auto m-4 flex space-x-2 ">
			<span className="">
				<Skeleton
					variant="rectangular"
					width={150}
					height={150}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
				<Skeleton
					variant="rectangular"
					width={150}
					height={20}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
			</span>
			<span className="">
				<Skeleton
					variant="rectangular"
					width={150}
					height={150}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
				<Skeleton
					variant="rectangular"
					width={150}
					height={20}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
			</span>
			<span className="">
				<Skeleton
					variant="rectangular"
					width={150}
					height={150}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
				<Skeleton
					variant="rectangular"
					width={150}
					height={20}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
			</span>
			<span className="">
				<Skeleton
					variant="rectangular"
					width={150}
					height={150}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
				<Skeleton
					variant="rectangular"
					width={150}
					height={20}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
			</span>
			<span className="">
				<Skeleton
					variant="rectangular"
					width={150}
					height={150}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
				<Skeleton
					variant="rectangular"
					width={150}
					height={20}
					animation="wave"
					sx={{ margin: "5px" }}
					className=""
				/>
			</span>
		</div>
	);
}
