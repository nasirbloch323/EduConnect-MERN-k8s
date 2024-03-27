import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { deletContact } from "@/redux/contactUsRelated/contactHandler"
import { useDispatch } from "react-redux"

export default function CardStyle({
	name,
	email,
	address,
	description,
	phoneNo,
	_id,
}) {
	const dispatch = useDispatch()
	return (
		<Card>
			<CardHeader>
				<div className='text-sm'>Your information is safe with us.</div>
			</CardHeader>
			<CardContent className='grid gap-4 text-sm'>
				<div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
					<div className='grid gap-1'>
						<div className='font-medium'>Name</div>
						<div>{name}</div>
					</div>
					<div className='grid gap-1'>
						<div className='font-medium'>Email</div>
						<div>{email}</div>
					</div>
					<div className='grid gap-1'>
						<div className='font-medium'>Address</div>
						<div>{address}</div>
					</div>
					<div className='grid gap-1'>
						<div className='font-medium'>Phone</div>
						<div>{phoneNo}</div>
					</div>
				</div>
				<div className='grid gap-1'>
					<div className='font-medium'>Description</div>
					<div>{description}</div>
				</div>
			</CardContent>
			<CardFooter>
				<div className='flex gap-2'>
					<Button
						variant='outline'
						onClick={() => {
							dispatch(deletContact(_id))
						}}
					>
						Delet
					</Button>
					<Button variant='outline'>Solved</Button>
				</div>
			</CardFooter>
		</Card>
	)
}
