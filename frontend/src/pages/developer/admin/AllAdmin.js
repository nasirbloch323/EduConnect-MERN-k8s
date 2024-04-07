import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	CardFooter,
	Card,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import {
	TableHead,
	TableRow,
	TableHeader,
	TableCell,
	TableBody,
	Table,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Container } from "@mui/material"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { getAllAdmins } from "@/redux/adminRelated/adminHandler"
import LoaderCom from "@/components/component/LoaderCom"

export default function AllAdmin() {
	const dispatch = useDispatch()
	const { adminDetails } = useSelector((state) => state.admin)
	useEffect(() => {
		dispatch(getAllAdmins())
	}, [dispatch])
	return (
		<>
			<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
				<Card>
					<CardHeader>
						<CardTitle>Admins</CardTitle>
						<CardDescription>Manage your team of admins</CardDescription>
					</CardHeader>
					<CardContent className='flex flex-col gap-4'>
						<div className='flex flex-col gap-1'>
							<Label className='sr-only' htmlFor='search'>
								Search
							</Label>
							<Input id='search' placeholder='Search...' />
						</div>
						<div className='border rounded-lg'>
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead className='min-w-[200px]'>Name</TableHead>
										<TableHead className='min-w-[250px]'>Email</TableHead>
										<TableHead>Role</TableHead>
										<TableHead className='w-[100px]'>Actions</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{adminDetails ? (
										adminDetails.map((admin, i) => {
											return (
												<TableRow key={i}>
													<TableCell className='font-medium'>
														{admin.name}
													</TableCell>
													<TableCell>{admin.email}</TableCell>
													<TableCell>{admin.role}</TableCell>
													<TableCell className='flex gap-2'>
														<Link to='/Developer/update-admin'>
															<Button
																className='w-6 h-6'
																size='icon'
																variant='ghost'
															>
																<FileEditIcon className='w-4 h-4' />
																<span className='sr-only'>Edit</span>
															</Button>
														</Link>
														<Button
															className='w-6 h-6'
															size='icon'
															variant='ghost'
														>
															<TrashIcon className='w-4 h-4' />
															<span className='sr-only'>Delete</span>
														</Button>
													</TableCell>
												</TableRow>
											)
										})
									) : (
										<LoaderCom />
									)}

								</TableBody>
							</Table>
						</div>
					</CardContent>
					<CardFooter>
						<Link to='/Developer/add-admin'>
							<Button className='ml-auto'>Add new admin</Button>
						</Link>
					</CardFooter>
				</Card>
			</Container>
		</>
	)
}

function FileEditIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M4 13.5V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-5.5' />
			<polyline points='14 2 14 8 20 8' />
			<path d='M10.42 12.61a2.1 2.1 0 1 1 2.97 2.97L7.95 21 4 22l.99-3.95 5.43-5.44Z' />
		</svg>
	)
}

function TrashIcon(props) {
	return (
		<svg
			{...props}
			xmlns='http://www.w3.org/2000/svg'
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			strokeWidth='2'
			strokeLinecap='round'
			strokeLinejoin='round'
		>
			<path d='M3 6h18' />
			<path d='M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6' />
			<path d='M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2' />
		</svg>
	)
}
