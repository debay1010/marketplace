import { Waves } from "@mui/icons-material";
import { Skeleton } from "@mui/material";
export default function Loading() {
	return (
		<div className="max-w-5xl m-4 mx-auto">
			<Skeleton
				variant="rectangular"
				width="100%"
				height={150}
				animation="wave"
				sx={{ borderRadius: "20px", margin: "5px" }}
				className=""
			/>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={150}
				animation="wave"
				sx={{ borderRadius: "20px", margin: "5px" }}
				className=""
			/>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={150}
				animation="wave"
				sx={{ borderRadius: "20px", margin: "5px" }}
				className=""
			/>
			<Skeleton
				variant="rectangular"
				width="100%"
				height={150}
				animation="wave"
				sx={{ borderRadius: "20px", margin: "5px" }}
				className=""
			/>
		</div>
	);
}
