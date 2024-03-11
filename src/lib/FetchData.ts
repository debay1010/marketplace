import { db } from "@/firebase";
import {
	collection,
	query,
	where,
	getDoc,
	orderBy,
	getDocs,
} from "firebase/firestore";
import { Result } from "postcss";

const adsRef = collection(db, "ads");

export const fetchUserAds = async (userEmail: string) => {
	const q = query(adsRef, where("userEmail", "==", userEmail));
	const querySnapshot = await getDocs(q);
	const results = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));

	return results;
};

export const fetchAllAds = async () => {
	const q = query(adsRef);
	const querySnapshot = await getDocs(q);
	const results = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));

	return results;
};

export const fetchAd = async (id: string) => {
	const data = await fetchAllAds();

	const results = data.filter((ad) => ad.id == id);

	// const results = data.filter((ad) => {
	// 	return ad.id == id;
	// });
	console.log(results);

	return results[0];
};

export const fetchAdsByCategory = async (category: string) => {
	const q = query(adsRef, where("category", "==", category));
	const querySnapshot = await getDocs(q);
	const results = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));

	return results;
};

export const searchAdsByTitle = async (title: string) => {
	const q = query(adsRef, where("title", "<=", title));
	const querySnapshot = await getDocs(q);
	const results = querySnapshot.docs.map((doc) => ({
		...doc.data(),
		id: doc.id,
	}));

	return results;
};
