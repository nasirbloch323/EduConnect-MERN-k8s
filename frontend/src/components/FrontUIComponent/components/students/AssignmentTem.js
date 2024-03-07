import { Assignment } from "@mui/icons-material"
import { Card, CardActions, CardContent } from "@mui/material"
import Button from "@mui/material/Button"
import React from "react"
import SubmitBTN from "./SubmitBTN"

const AssignmentTem = ({ submited, decline }) => {
	return (
		<Card className='flex flex-col justify-between sm:items-center sm:flex-row'>
			<CardContent className='flex flex-col gap-4 sm:items-center sm:flex-row '>
				<Assignment className='w-8 h-8' />
				<div className='grid flex-1 gap-1 text-sm'>
					<span className='font-semibold'>Essay on the French Revolution</span>
					<span className='text-sm text-gray-500 dark:text-gray-400'>
						Due Date: 15th March 2024
					</span>
				</div>
			</CardContent>
			<CardActions>
				{submited ? (
					<Button size='medium' variant='outlined' color='success'>
						Submited
					</Button>
				) : decline ? (
					<Button size='medium' variant='outlined' color='error'>
						Declined
					</Button>
				) : (
					<SubmitBTN />
				)}
			</CardActions>
		</Card>
	)
}

export default AssignmentTem
