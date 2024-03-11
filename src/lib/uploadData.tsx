import { FormData } from "./types";
import { db, storage } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";
import { ImagesearchRoller } from "@mui/icons-material";

// interface ImageInfo {
// 	id: string;
// 	lastModified: Date;
// 	lastModifiedDate: Date;
// 	name: string;
// 	size: number;
// 	type: string;
// 	data: Blob;
// 	webkitRelativePath: string;
// }

export const createAd = async ({
	category,
	location,
	youtube,
	title,
	description,
	price,
	negotiable,
	userEmail,
	contactNumber,
	images,
}: FormData) => {
	let imageUrl: string[] = [];

	for (let i = 0; i < images.length; i++) {
		// put the images in /userEmail/title/images
		const imageRef = ref(
			storage,
			`${userEmail}/${title}/${images[i].name}`
		);

		const status = await uploadBytes(imageRef, images[i])
			.then((snapshot) => {
				return snapshot;
			})
			.catch((error) => {
				return false;
			});

		if (status) {
			const uploadImgUrl = await getDownloadURL(status.ref).then(
				(url) => {
					return url;
				}
			);
			imageUrl.push(uploadImgUrl);
		}
	}
	// submit Data
	const adsCollectionRef = collection(db, "ads");
	try {
		await addDoc(adsCollectionRef, {
			category,
			location,
			youtube,
			title,
			description,
			price,
			userEmail,
			contactNumber,
			negotiable,
			imageUrl,
		});
	} catch (error) {
		return { error: true, message: "Unable to submit ads" };
	}

	return { error: false, message: "Ad Successfully Submitted  " };
};
