import { Button } from "@/components/ui/button"
import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card"
import { deletAnn, updateAnn } from "@/redux/announcements/annHandle"
import { Loader2 } from "lucide-react"
import { CardFooter } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
	DialogTitle,
	DialogDescription,
	DialogHeader,
	DialogContent,
	Dialog,
	DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
export default function AllAnn() {
	const dispatch = useDispatch()
	const { annList } = useSelector((state) => state.ann)
	return (
		<>
			<div className='grid items-start max-w-sm gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
				{annList && annList.length > 0 ? (
					annList.map((ann, i) => {
						return (
							<Card key={i} className={"min-h-52"}>
								<CardHeader>
									<CardTitle>{ann.title}</CardTitle>
								</CardHeader>
								<CardContent>{ann.description}</CardContent>
								<CardFooter className='px-2'>
									<div className='flex justify-end gap-2'>
										<EditAnn ann={ann} />
										<Button
											onClick={() => {
												dispatch(deletAnn(ann._id))
											}}
											size='sm'
											variant='outline'
										>
											Delete
										</Button>
									</div>
								</CardFooter>
							</Card>
						)
					})
				) : (
					<div className='flex items-center justify-center py-2 gap-x-2'>
						<Loader2 className='w-6 h-6 animate-spin a-titles' />
						<h2 className='animate-pulse'>Loading...</h2>
					</div>
				)}
			</div>
		</>
	)
}

const EditAnn = ({ ann }) => {
	const dispatch = useDispatch()
	const [fields, setFields] = useState({
		title: ann.title,
		description: ann.description,
	})
	const handleChange = (e) => {
		setFields((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}))
		// console.log(fields)
	}
	const handleSubmit = (e, id) => {
		e.preventDefault()
		dispatch(updateAnn(fields, ann._id))
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size='sm' variant='outline' className='a-titles'>
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Edit Announcement</DialogTitle>
					<DialogDescription>
						Make changes to your Post here. Click save when you're done.
					</DialogDescription>
				</DialogHeader>
				<form onSubmit={handleSubmit} className='grid gap-4 py-4'>
					<div className='space-y-2'>
						<Label htmlFor='new-title'>New Title</Label>
						<Input
							value={fields.title}
							name='title'
							placeholder='Enter the title'
							type='text'
							onChange={handleChange}
							id='new-title'
						/>
					</div>
					<div className='space-y-2'>
						<Label htmlFor='new-description'>New Description</Label>
						<Textarea
							value={fields.description}
							className='min-h-[100px]'
							id='new-description'
							name='description'
							placeholder='Enter the description'
							onChange={handleChange}
						/>
					</div>
					<div className='space-y-2'>
						<Button type='submit'>Save Changes</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
