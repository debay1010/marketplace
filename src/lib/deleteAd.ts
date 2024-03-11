import { db } from "@/firebase";
import {
	collection,
	query,
	where,
	getDoc,
	orderBy,
	getDocs,
	doc,
	deleteDoc,
} from "firebase/firestore";

export const adsRef = collection(db, "ads");

export const deleteAdById = async (id: string) => {
	const adsDoc = doc(db, "ads", id);

	try {
		await deleteDoc(adsDoc);
	} catch (error: any) {
		return { error: true, message: error.message };
	}

	return { error: false, message: "Ad deleted successfully" };
};
