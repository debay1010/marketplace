"use client";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ReportOffIcon from "@mui/icons-material/ReportOff";
export default function Error() {
	return (
		<div className="mx-auto max-w-5xl p-10 text-center">
			<p className="font-bold text-2xl">uh...</p>

			<p className="">
				The page you are looking for may have been moved or never
				existed
			</p>
			<ReportOffIcon fontSize="large" />

			<h6 className="m10" style={{ fontSize: "100px" }}>
				404
			</h6>

			<div className="hover:underline hover:cursor-pointer">
				<ArrowCircleLeftIcon />
				<a href="/">Back to Homepage</a>
			</div>
		</div>
	);
}
