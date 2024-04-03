import { Button } from "@/components/ui/button"
import {
	CardTitle,
	CardHeader,
	CardContent,
	Card,
	CardDescription,
} from "@/components/ui/card"
import { deletResearch, updateResearch } from "@/redux/researchs/researchHandle"
import { Loader2 } from "lucide-react"
import { CardFooter } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import {
	DialogTitle,
	DialogHeader,
	DialogContent,
	Dialog,
	DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import moment from "moment"
export default function AllResearchs() {
	const dispatch = useDispatch()
	const { researchsList } = useSelector((state) => state.research)
	const [selectedEvent, setSelectedEvent] = useState(null)

	const handleReadMore = (event) => {
		setSelectedEvent(event)
	}

	return (
		<>
			<div className='grid items-start max-w-sm gap-8 mx-auto sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3'>
				{researchsList && researchsList.length > 0 ? (
					researchsList.map((research, i) => {
						// const truncatedDescription =
						// 	research.description.split(" ").slice(0, 20).join(" ") + "...";
						return (
							<Card key={i} className={"min-h-52 pb-2"}>
								<CardHeader>
									<CardDescription>
										<img
											src={research.image?.url}
											alt={research.name}
											className='w-full h-full'
										/>
									</CardDescription>
									<CardTitle className='flex items-center justify-between w-full'>
										{research.title}
										<p className='text-xs font-normal'>{research.autherName}</p>
									</CardTitle>
								</CardHeader>

								<CardContent className='pt-0 m-0 text-sm truncate'>
									{research.desc}
								</CardContent>

								<CardFooter className='px-2'>
									<div className='flex justify-end gap-2'>
										<EditResearch research={research} />
										<Button
											onClick={() => {
												dispatch(deletResearch(research._id))
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

const EditResearch = ({ research }) => {
	const dispatch = useDispatch()
	const [fields, setFields] = useState({
		title: research.title,
		autherName: research.autherName,
		desc: research.desc,
		image: research.image,
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
		dispatch(updateResearch(fields, research._id))
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button size='sm' variant='outline' className='a-titles'>
					Edit
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[500px] z-50  overflow-y-scroll'>
				<DialogHeader>
					<DialogTitle>Edit Research</DialogTitle>
				</DialogHeader>
				<form onSubmit={handleSubmit} className='grid gap-1 py-4'>
					<div className=''>
						<Label htmlFor='title'>New Title</Label>
						<Input
							value={fields.title}
							name='title'
							placeholder='Enter the title'
							type='text'
							onChange={handleChange}
							id='new-title'
						/>
					</div>
					<div>
						<Label className='text-sm new-title' htmlFor='autherName'>
							Auther Name
						</Label>
						<Input
							className='flex-1 w-full text-base'
							type='text'
							name='autherName'
							value={fields.autherName}
							placeholder='autherName'
							onChange={handleChange}
							required
						/>
					</div>
					<div>
						<Label htmlFor='desc'>New Description</Label>
						<Textarea
							value={fields.desc}
							className='min-h-[100px]'
							id='new-description'
							name='desc'
							placeholder='Enter the description'
							onChange={handleChange}
						/>
					</div>
					<div className='pt-1'>
						<Button type='submit'>Save Changes</Button>
					</div>
				</form>
			</DialogContent>
		</Dialog>
	)
}
