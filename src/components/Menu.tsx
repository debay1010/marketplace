import { menuList } from "@/constants";
import React from "react";
import MenuList from "./Menu-list";

export default function Menu() {
	console.log(menuList);
	return (
		<div className="bg-white w-full">
			<div className="">
				{menuList.map((menuItem) => (
					<div className="">
						<MenuList
							logo={menuItem.logo}
							href={menuItem.href}
							title={menuItem.title}
							keyword={menuItem.keyword}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
