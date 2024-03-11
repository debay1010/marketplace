import { ChevronRightSharp } from "@mui/icons-material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ChevronRight } from "lucide";
import Link from "next/link";

interface MenuListProps {
	logo: string;
	href: string;
	title: string;
	keyword: string;
}

export default function MenuList({
	logo,
	href,
	title,
	keyword,
}: MenuListProps) {
	return (
		<div>
			<div className="flex items-center p-1 hover:bg-[#ebf2f7] hover:cursor-pointer hover: ">
				<span className="">
					<img src={logo} alt="Mountain Bike" className="w-8 p-1" />
				</span>
				<span className="flex-1 text-sm hover:underline">
					<Link href={href} className="">
						<b className="">{title}</b>
					</Link>
				</span>
				<span className=" text-right my-aut">
					{/* <ArrowForwardIosIcon /> */}
					<ChevronRightSharp />
				</span>
			</div>
		</div>
	);
}
