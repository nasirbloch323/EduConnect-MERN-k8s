import React, { useState } from "react"
import { StyledTableCell, StyledTableRow } from "./styles"
import {
	Table,
	TableBody,
	TableContainer,
	TableHead,
	TablePagination,
	TextField,
	Typography,
} from "@mui/material"

const TableTemplate = ({ buttonHaver: ButtonHaver, columns, rows }) => {
	const [page, setPage] = useState(0)
	const [rowsPerPage, setRowsPerPage] = useState(5)
	const [searchQuery, setSearchQuery] = useState("")

	const filteredRows = rows.filter((row) =>
		Object.values(row).some((value) =>
			value.toString().toLowerCase().includes(searchQuery.toLowerCase())
		)
	)
	// console.log({ filteredRows })
	return (
		<>
			<TableContainer>
				<TextField
					label='Search'
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					margin='normal'
					size='small'
				/>
				<Table stickyHeader aria-label='sticky table'>
					<TableHead>
						<StyledTableRow>
							{columns.map((column) => (
								<StyledTableCell
									key={column.id}
									align={column.align}
									style={{ minWidth: column.minWidth }}
								>
									{column.label}
								</StyledTableCell>
							))}
							<StyledTableCell align='center'>Actions</StyledTableCell>
						</StyledTableRow>
					</TableHead>
					<TableBody>
						{filteredRows.length === 0 ? (
							<Typography
								variant='body1'
								align='center'
								style={{ marginTop: "20px" }}
							>
								No data found.
							</Typography>
						) : (
							filteredRows
								.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
								.map((row) => {
									return (
										<StyledTableRow
											hover
											role='checkbox'
											tabIndex={-1}
											key={row.id}
										>
											{columns.map((column) => {
												const value = row[column.id]
												return (
													<StyledTableCell key={column.id} align={column.align}>
														{column.format && typeof value === "number"
															? column.format(value)
															: value}
													</StyledTableCell>
												)
											})}
											<StyledTableCell align='center'>
												<ButtonHaver row={row} />
											</StyledTableCell>
										</StyledTableRow>
									)
								})
						)}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				rowsPerPageOptions={[5, 10, 25, 100]}
				component='div'
				count={rows.length}
				rowsPerPage={rowsPerPage}
				page={page}
				onPageChange={(event, newPage) => setPage(newPage)}
				onRowsPerPageChange={(event) => {
					setRowsPerPage(parseInt(event.target.value, 5))
					setPage(0)
				}}
			/>
		</>
	)
}

export default TableTemplate
