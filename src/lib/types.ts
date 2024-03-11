export type FormData = {
	category: string;
	location: string;
	youtube: string;
	title: string;
	description: string;
	price: number | null;
	contactNumber: number | null;
	negotiable: boolean;
	userEmail: string;
	images: Array<string>;
};
export type OutputData = {
	data: {
		id: string;
		category: string;
		location: string;
		youtube: string;
		title: string;
		description: string;
		price: number;
		contactNumber: number;
		negotiable: boolean;
		userEmail: string;
		imageUrl: Array<string>;
	};
};

export type FormData2 = {
	category: string;
	location: string;
	title: string;
	description: string;
	price: number | null;
	contactNumber: number | null;
	images: Array<string>;
};
