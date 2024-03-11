"use client";
interface UserSession {
	user?: {
		image?: string;
	};
}

import Image from "next/image";
import Link from "next/link";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MessageIcon from "@mui/icons-material/Message";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import DiamondIcon from "@mui/icons-material/Diamond";
import ViewListIcon from "@mui/icons-material/ViewList";
import { redirect, usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Navbar() {
	const pathname = usePathname();
	const router = useRouter();

	const { data: session } = useSession({
		required: true,
		onUnauthenticated() {
			redirect(`/api/auth/signin?callbackUrl=${pathname}`);
		},
	});

	return (
		<div className="flex items-center max-w-6xl py-2 space-x-3 mx-auto">
			<div className="flex-1 my-auto">
				<Link href="/">
					<Image
						src="/logo.png"
						alt="logo"
						className="w-8 h-auto hover:cursor-pointer ml-5"
						height={100}
						width={100}
					/>
				</Link>
			</div>
			<div
				className="p-[3px] bg-white rounded-full h-8 w-8 tooltip tooltip-bottom"
				data-tip="bookmark"
			>
				<BookmarkIcon />
			</div>
			<div
				className="p-[3px] bg-white rounded-full h-8 w-8  tooltip tooltip-bottom"
				data-tip="messages"
			>
				<MessageIcon />
			</div>
			<div
				className="p-[3px] bg-white rounded-full h-8 w-8  tooltip tooltip-bottom"
				data-tip="Notification"
			>
				<NotificationsActiveIcon />
			</div>
			<div
				className="p-[3px] bg-white rounded-full h-8 w-8  tooltip tooltip-bottom"
				data-tip="Premium Services"
			>
				<DiamondIcon />
			</div>

			<div
				className="p-[3px] bg-white rounded-full h-8 w-8  tooltip tooltip-bottom"
				data-tip="My Adverts"
				onClick={() =>
					router.push(`/my-adverts/${session?.user?.email}`)
				}
			>
				<ViewListIcon />
			</div>

			{/* <div className=" dropdown my-auto dropdown-hover dropdown-bottom dropdown-end">
				<img
					src={session?.user?.image}
					className="rounded-full w-8 "
					alt="User Image"
				/>
			</div> */}
			<div className="dropdown my-auto dropdown-hover dropdown-bottom dropdown-end">
				<img
					src={session?.user?.image || "default-user-image.png"} // Provide a default image
					className="rounded-full w-8 h-auto"
					alt="User Image"
				/>

				<ul
					tabIndex={0}
					className="dropdown-content z-[1] menu shadow bg-base-100 rounded-sm w-40 "
				>
					<li className="">
						<a>My Shop</a>{" "}
					</li>
					<li className="">
						<a>My Client</a>
					</li>
					<li className="">
						<a>Feedback</a>
					</li>
					<li className="">
						<button onClick={() => signOut()}>Log Out</button>
					</li>
				</ul>
			</div>
			<button
				onClick={() => router.push("/create")}
				className=" btn btn-warning my-auto mr-10"
			>
				Sell
			</button>
		</div>
	);
}
