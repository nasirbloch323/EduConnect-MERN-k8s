import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { createEvent } from "@/redux/event/eventHandle"
import { useDispatch } from "react-redux"
import { Label } from "@/components/ui/label"

export default function CreateEvent() {
	const dispatch = useDispatch()
	const [fields, setFields] = useState({})
	const handleChange = (e) => {
		setFields((pre) => ({
			...pre,
			[e.target.name]: e.target.value,
		}))
		// console.log(fields)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		dispatch(createEvent(fields))
	}
	return (
		<>
			<div className='space-y-2'>
				<h1 className='text-3xl font-bold'>Manage Events</h1>
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
								name='title'
								placeholder='Enter the title'
								type='text'
								onChange={handleChange}
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
								name='description'
								placeholder='Enter the description'
								onChange={handleChange}
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
                name="date"
                type="date" // Set type as date for date input
				onChange={handleChange}
              />
            </div>
            {/* <div className="flex flex-col p-6 space-y-4 md:space-y-2">
              <Label
                className="inline-block text-sm font-semibold"
                htmlFor="image"
              >
                Image
              </Label>
              <Input
                className="flex-1 w-full text-base"
                name="image"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div> */}
					<div className='flex justify-end gap-2 p-6'>
						<Button size='sm' variant='outline'>
							Cancel
						</Button>
						<Button type='submit' size='sm'>
							Save
						</Button>
					</div>
				</form>
			</div>
		</>
	)
}
