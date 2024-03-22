import { Container } from "@mui/material"
import {
	CardTitle,
	CardDescription,
	CardHeader,
	CardContent,
	Card,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
// import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"
import { Button } from "@/components/ui/button"

export default function UpdateAdmin() {
	return (
		<>
			<Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
				<Card>
					<CardHeader>
						<CardTitle>Update Admin Info</CardTitle>
						<CardDescription>Update admin details below</CardDescription>
					</CardHeader>
					<CardContent className='grid gap-4'>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='update-admin-name'>Name</Label>
							<Input id='update-admin-name' placeholder='Enter name' />
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='update-admin-email'>Email</Label>
							<Input
								id='update-admin-email'
								placeholder='Enter email'
								type='email'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='update-admin-password'>Password</Label>
							<Input
								id='update-admin-password'
								placeholder='Enter password'
								type='password'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='update-admin-department'>Department</Label>
							<Input
								id='update-admin-department'
								placeholder='Enter department'
							/>
						</div>
						<div className='flex flex-col gap-2'>
							<Label htmlFor='update-admin-phone'>Phone Number</Label>
							<Input
								id='update-admin-phone'
								placeholder='Enter phone number'
								type='tel'
							/>
						</div>
						<Button>Update Info</Button>
					</CardContent>
				</Card>
			</Container>
		</>
	)
}
