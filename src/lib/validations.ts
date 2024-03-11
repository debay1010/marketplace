import { FormData2 } from "./types";
import { FormData } from "./types";

export const formValidate = ({
	category,
	location,
	youtube,
	title,
	description,
	price,
	contactNumber,
	negotiable,
	images,
}: FormData) => {
	if (
		!category ||
		!location ||
		!title ||
		!description ||
		!price ||
		!contactNumber ||
		images.length < 2
	) {
		return { error: true, message: "Incomplete form, please recheck" };
	}

	if (title.length < 10) {
		return {
			error: true,
			message: "The title must be at least 10 characters",
		};
	}

	if (description.length < 30) {
		return {
			error: true,
			message: "The description must be at least 30 characters",
		};
	}

	if (isNaN(price)) {
		return { error: true, message: "Price must be a number" };
	}
	if (isNaN(contactNumber)) {
		return { error: true, message: "Contact Number must be a  number" };
	}

	return { error: false, message: "Validation went through successully" };
};
