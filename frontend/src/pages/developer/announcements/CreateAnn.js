import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { useDispatch, useSelector } from "react-redux";
import { productsCreate } from "../../../redux/announcements/annHandle";

export default function CreateAnn() {
	const dispatch = useDispatch();
	const { createStatus } = useSelector((state) => state.products);

	const [productImg, setProductImg] = useState("");
	const [name, setName] = useState("");
	const [date, setDate] = useState("");
	const [desc, setDesc] = useState("");

	const handleProductImageUpload = (e) => {
		const file = e.target.files[0];

		TransformFileData(file);
	};

	const TransformFileData = (file) => {
		const reader = new FileReader();

		if (file) {
			reader.readAsDataURL(file);
			reader.onloadend = () => {
				setProductImg(reader.result);
			};
		} else {
			setProductImg("");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		dispatch(
			productsCreate({
				name,
				date,
				desc,
				image: productImg,
			})
		);
	};

	return (
		<>
			<div className='space-y-2'>
				<h1 className='text-3xl font-bold'>Manage Posts</h1>
				<p className='max-w-[600px] text-gray-500 md:text-base/relaxed dark:text-gray-400'>
					Add a new post or edit an existing one.
				</p>
			</div>
			<div className='w-full mt-6'>
				<form
					onSubmit={handleSubmit}
					className='border border-gray-200 divide-y rounded-lg bg-gray-50 dark:border-gray-800 dark:bg-gray-950'
				>
					<div className='grid grid-cols-1 '>
						<div className='flex flex-col p-6 space-y-4 md:space-y-2'>
							<Label
								className='inline-block text-sm font-semibold'
								htmlFor='title'
							>
								Title
							</Label>
							<Input
								className='flex-1 w-full text-base'
								type="text"
								placeholder="Name"
								onChange={(e) => setName(e.target.value)}
								required
							/>
						</div>
						<div className='flex flex-col p-6 space-y-4 md:space-y-2'>
							<Label
								className='inline-block text-sm font-semibold'
								htmlFor='description'
							>
								Description
							</Label>
							<Textarea
								className='flex-1 w-full text-base'
								type="text"
								placeholder="Short Description"
								onChange={(e) => setDesc(e.target.value)}
								required
							/>
						</div>
					</div>
					<div className="flex flex-col p-6 space-y-4 md:space-y-2">
						<Label
							className="inline-block text-sm font-semibold"
							htmlFor="date"
						>
							Date
						</Label>
						<Input
							className="flex-1 w-full text-base"
							type="date"
							placeholder="date"
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</div>

					<div className="flex flex-col p-6 space-y-4 md:space-y-2">
						<Label
							className="inline-block text-sm font-semibold"
							htmlFor="image"
						>
							Image
						</Label>
						<Input
							className="flex-1 w-full text-base"
							id="imgUpload"
							accept="image/*"
							type="file"
							onChange={handleProductImageUpload}
							required
						/>
					</div>
					{/* <div className=" ">
						{productImg ? (
							<>
								<img src={productImg} alt="error!" className="h-28" />
							</>
						) : (
							<p>Product image upload preview will appear here!</p>
						)}
					</div> */}

					<div className='flex justify-end gap-2 p-6'>
						<Button size='sm' variant='outline'>
							Cancel
						</Button>
						<Button type="submit" size='sm'>
							{createStatus === "pending" ? "Submitting" : "Submit"}
						</Button>

					</div>
				</form>
			</div>
		</>
	)
}
