"use client";
import { FormData } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { categories, location } from "@/constants";
import { InputAdornment, MenuItem, formControlClasses } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { setTimeout } from "timers/promises";
import { v4 as uuidv4 } from "uuid";
import { useSession } from "next-auth/react";

import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { CheckBox } from "@mui/icons-material";
import { useSelectedLayoutSegment } from "next/navigation";
import { createAd } from "@/lib/uploadData";
import { formValidate } from "@/lib/validations";

interface validateInfo {
	error: boolean;
	message: string;
}

const initialState = {
	category: "mountain",
	location: "",
	title: "",
	description: "",
	youtube: "",
	price: 0,
	userEmail: "",
	contactNumber: null,
	negotiable: true,
	images: [],
};
export default function CreateAdsForm() {
	const [formData, setFormData] = useState<FormData>(initialState);
	const [error, setError] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string>("");
	const [success, setSuccess] = useState<boolean | string>(false);
	const [loading, setLoading] = useState<boolean>(false);
	const filePickerRef = useRef<HTMLInputElement>(null);
	const { data: session } = useSession();

	const addImageToPost = (files: any[]) => {
		try {
			if (files.length > 6) {
				setErrorMessage("Please upload maximum of 6 files");
				return;
			}

			let updatedGallary = [];
			for (let i = 0; i < files.length; i++) {
				const newImage = files[i];

				// Use uuid.v4() to generate a unique identifier
				const uniqueId = uuidv4();

				// Assign the unique identifier to the "id" property
				newImage["id"] = uniqueId;

				// newImage["id"] = Math.random();    //old solution

				if (
					!files[i].name.match(/\.(jpg|jpeg|png|gif|webp)$/) ||
					files[i].size > 5000000
				) {
					setError(true);
					setErrorMessage(
						"Image File not Supported, Please ReUpload"
					);
				} else {
					setError(false);
					setErrorMessage("");
					updatedGallary.push(newImage);
				}
			}
			setFormData({ ...formData, images: updatedGallary });
		} catch (error: any) {
			console.log(error);
			setErrorMessage(error);
		} finally {
			return;
		}
	};

	const submitData = async () => {
		setError(false);
		setSuccess(false);
		const userEmail = session?.user?.email;

		// // // Ensure userEmail is not undefined or null
		// if (userEmail !== undefined && userEmail !== null) {
		// 	setFormData({ ...formData, userEmail: userEmail });
		// } else {
		// 	// Handle the case where userEmail is undefined or null
		// 	// For example, you could set it to an empty string or some default value
		// 	setFormData({ ...formData, userEmail: "" });
		// }

		// validation

		const validateResult: validateInfo = formValidate({ ...formData });

		console.log(validateResult);
		console.log(formData);

		if (validateResult.error) {
			setError(true);
			setErrorMessage(validateResult.message);
			return;
		}
		// start a loading spinner
		setLoading(true);

		// Submit data to database

		// const submittionResult = await createAd({ ...formData, userEmail });
		const submittionResult = await createAd({
			...formData,
			userEmail: userEmail,
		});
		if (submittionResult.error) {
			setError(true);
			setErrorMessage(submittionResult.message);
			return;
		}

		setLoading(false);
		setError(false);
		setSuccess(submittionResult.message);
		setFormData(initialState);
	};

	// useEffect(() => {
	//  setTimeout(() => {
	// 	setSuccess(false)

	//  }, 10000
	//  );
	// }, [])

	return (
		<div className="max-w-6-xl mx-auto mt-5">
			{/* <div className="w-[90%] md:w-[57%] lg:w-[60%] mx-auto "> */}
			<div className="w-[90%] md:w-[57%] lg:w-[70%] mx-auto ">
				<div className="p-3 bg-white mx-auto rounded-md relative text-center">
					Post ad
					<span
						onClick={() => setFormData(initialState)}
						className="absolute right-3 text-gray-600 text-sm hover:cursor-pointer"
					>
						Clear
					</span>
				</div>
				{/* <div className="  my-5 py-7 p-3 bg-white rounded-xl mx-auto text-center space-y-5 relative "> */}
				<div className=" flex flex-col justify-center items-center my-5 py-7 p-3 bg-white rounded-xl mx-auto text-center space-y-5 relative ">
					{/* Start of the form */}

					<TextField
						id="Outlined-select-category"
						select
						label="Category"
						value={formData.category}
						sx={{ width: "350px" }}
						// size="small"
						onChange={(e) =>
							setFormData({
								...formData,
								category: e.target.value,
							})
						}
					>
						{categories.map((option) => (
							<MenuItem
								key={option.value}
								value={option.value}
								className=""
							>
								{option.label}
							</MenuItem>
						))}
					</TextField>
					<TextField
						id="Outlined-select-category"
						select
						label="Select Location"
						value={formData.location}
						sx={{ width: "350px", marginTop: "15px" }}
						// size="small"
						onChange={(e) =>
							setFormData({
								...formData,
								location: e.target.value,
							})
						}
					>
						{location.map((option) => (
							<MenuItem
								key={option.name}
								value={option.name}
								className=""
							>
								{option.name}
							</MenuItem>
						))}
					</TextField>

					{/* Image upload */}

					<div className="mx-auto text-left text-sm w-[350px]">
						<div className="font-semibold">Add Photo</div>
						<div className="">
							<small className="text-[#464b4f]">
								Add at least 2 photos for this category
							</small>
							<br />
							<small className="text-[#464b4f]">
								First photo- is the title photo
							</small>
							<br />
							<small className="text-[#464b4f]">
								Please, select all the files at once
							</small>

							<span
								className="py-2 flex space-x-3 hover:cursor-pointer"
								onClick={() => filePickerRef.current?.click()}
							>
								<input
									type="file"
									hidden
									multiple
									ref={filePickerRef}
									// onClick={(e: any) =>
									// 	addImageToPost(e.target.files)
									// }
									onClick={() => {
										filePickerRef.current?.click();
										filePickerRef.current?.addEventListener(
											"change",
											(e: any) =>
												addImageToPost(e?.target?.files)
										);
									}}
								/>

								<AddAPhotoIcon />

								{formData.images?.map((image: any) => (
									<span key={image.id}>
										<img
											src={URL.createObjectURL(image)}
											className="h-12 w-12"
											alt="adImage"
										/>
									</span>
								))}
							</span>
						</div>

						<TextField
							id="Outlined-password-input"
							label="Link to Youtube video"
							type="text"
							// size="small"
							value={formData.youtube}
							onChange={(e) =>
								setFormData({
									...formData,
									youtube: e.target.value,
								})
							}
							sx={{ width: "350px", marginBottom: "15px" }}
							className=""
						/>
						<TextField
							id="Outlined-password-input"
							label="Title"
							type="text"
							// size="small"
							value={formData.title}
							onChange={(e) =>
								setFormData({
									...formData,
									title: e.target.value,
								})
							}
							sx={{ width: "350px", marginBottom: "15px" }}
							className=""
						/>
						<TextField
							id="Outlined-password-input"
							label="Description"
							type="text"
							multiline
							// size="small"
							value={formData.description}
							onChange={(e) =>
								setFormData({
									...formData,
									description: e.target.value,
								})
							}
							sx={{ width: "350px", marginBottom: "15px" }}
							className=""
						/>

						<FormControl
							sx={{ width: "350px", marginBottom: "15px" }}
							className=""
						>
							<InputLabel htmlFor="Outlined-adornment-amount">
								Price
							</InputLabel>
							<OutlinedInput
								id="Outlined-adornment-amount"
								startAdornment={
									<InputAdornment position="start">
										NGN
									</InputAdornment>
								}
								label="Price"
								type="number"
								value={formData.price}
								onChange={(e) =>
									setFormData({
										...formData,
										price: Number(e.target.value),
									})
								}
							/>
						</FormControl>

						<FormControl
							sx={{ width: "350px", marginBottom: "15px" }}
							className=""
						>
							<InputLabel htmlFor="Outlined-adornment-amount">
								Contact Number
							</InputLabel>
							<OutlinedInput
								id="Outlined-adornment-amount"
								startAdornment={
									<InputAdornment position="start">
										Tel
									</InputAdornment>
								}
								label="Contact Number"
								type="number"
								value={formData.contactNumber}
								onChange={(e) =>
									setFormData({
										...formData,
										contactNumber: Number(e.target.value),
									})
								}
							/>
						</FormControl>

						<br />
						<div className=" w-full">
							<FormControlLabel
								control={
									<Checkbox
										checked={formData.negotiable}
										onChange={() =>
											setFormData({
												...formData,
												negotiable:
													!formData.negotiable,
											})
										}
									/>
								}
								label="Negotiable"
							/>
						</div>

						{error && (
							<div role="alert" className="alert alert-error">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
								<span>{errorMessage}</span>
							</div>
						)}
						{success && (
							<div role="alert" className="alert alert-success">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="stroke-current shrink-0 h-6 w-6"
									fill="none"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>

								<span>{success}</span>
							</div>
						)}
						<br />
						<button
							onClick={submitData}
							className="btn w-[350px] btn-accent "
						>
							<span
								className={`${
									loading ? "loading-spinner loading" : ""
								}`}
							></span>
							CREATE AD
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
