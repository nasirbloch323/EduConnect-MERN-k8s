import {
	BlurCircularRounded,
	Cloud,
	FileCopyOutlined,
} from "@mui/icons-material"
import {
	Box,
	Button,
	Dialog,
	DialogContent,
	LinearProgress,
} from "@mui/material"
import React, { useState } from "react"
import Dropzone from "react-dropzone"
import axios from "axios"
import { toast } from "react-toastify"
const UploadDropzone = ({ setOpen }) => {
	// const router = useRouter()
	const [isuploading, setIsuploading] = useState(false)
	const [uploadingProgress, setUploadingProgress] = useState(0)
	const simulatedProgress = () => {
		setUploadingProgress(0)
		const interval = setInterval(() => {
			setUploadingProgress((preProgress) => {
				if (preProgress >= 95) {
					clearInterval(interval)
					return preProgress
				} else {
					console.log(preProgress)
					return preProgress + 5
				}
			})
		}, 500)
		// console.log({ interval })
		return interval
	}
	// const { startUpload } = useUploadThing("pdfUploader")
	// const { mutate: startPolling } = trpc.getFile.useMutation({
	// 	onSuccess: (file) => {
	// 		router.push(`/dashboard/${file.id}`)
	// 	},
	// 	retry: true,
	// 	retryDelay: 500,
	// })
	return (
		<Dropzone
			multiple={false}
			accept={{ "application/pdf": [".pdf"] }}
			onDrop={async (acceptedFile) => {
				// console.log(acceptedFile);
				setIsuploading(true)

				const progressInterval = simulatedProgress()
				console.log(acceptedFile[0])
				const file = acceptedFile[0]
				const res = await axios.post(
					`${process.env.REACT_APP_BASE_URL}/upload-files`,
					{ file },
					{
						headers: { "Content-Type": "multipart/form-data" },
					}
				)
				console.log(res)
				if (!res) {
					return toast.error("Uh oh! Something went wrong.")
				}
				if (res.data.status === "ok") {
					toast.success("uploaded")
					setOpen(false)
				}
				clearInterval(progressInterval)
				setUploadingProgress(100)
			}}
		>
			{({ getInputProps, getRootProps, acceptedFiles, fileRejections }) => (
				<div
					// {...getRootProps()}
					className='h-64 m-4 overflow-hidden border border-dashed rounded-lg border-zinc-200 '
				>
					<div className='flex items-center justify-center w-full h-full'>
						<label
							{...getRootProps()}
							htmlFor='dropzone-file'
							className='flex flex-col items-center justify-center w-full h-full rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 '
						>
							<div className='flex flex-col items-center justify-center pt-5 pb-6'>
								<Cloud className='w-6 h-6 mb-2 text-zinc-500' />
								<p className='mb-2 text-sm text-zinc-700'>
									<span className='font-semibold'>Click to upload </span> or
									drag and drop
								</p>
								<p className='text-xs text-zinc-500'>PDF (up to 4MB)</p>
							</div>
							{fileRejections && fileRejections[0] ? (
								<h4>
									Invalid File type only{" "}
									<span className='font-bold text-blue-400 tex-2xl'>
										.pdf and .docs{" "}
									</span>{" "}
									are accepted Files
								</h4>
							) : null}
							{acceptedFiles && acceptedFiles[0] ? (
								<div className='max-w-xs bg-white flex rounded-md outline outline-[1px] outline-zinc-200 divide-x divide-zinc-200 items-center overflow-hidden'>
									<div className='grid h-full px-3 py-2 place-items-center'>
										<FileCopyOutlined className='w-4 h-4 text-blue-500' />
									</div>
									<p className='h-full px-3 py-2 text-sm truncate'>
										{acceptedFiles[0].name}
									</p>
								</div>
							) : null}
							{isuploading ? (
								<div className='w-full max-w-xs mx-auto mt-4'>
									<Box sx={{ width: "100%", mr: 1 }}>
										<LinearProgress
											variant='determinate'
											value={uploadingProgress}
										/>
									</Box>
									{uploadingProgress === 100 ? (
										<div className='flex items-center justify-center gap-1 pt-2 text-sm text-center to-zinc-700'>
											<BlurCircularRounded className='w-3 h-3 text-blue-400 animate-spin' />
											<p>Redirecting...</p>
										</div>
									) : null}
								</div>
							) : null}
							<input
								{...getInputProps}
								type='file'
								id='dropzone-file'
								className='hidden'
							/>
						</label>
					</div>
				</div>
			)}
		</Dropzone>
	)
}

const SubmitBTN = () => {
	// const { onClose, selectedValue, open } = props;
	const [open, setOpen] = useState(false)
	const handleDialog = () => {
		setOpen(!open)
	}

	return (
		<>
			<Button size='medium' variant='outlined' onClick={handleDialog}>
				Submit
			</Button>
			<Dialog fullWidth onClose={handleDialog} open={open}>
				<DialogContent className='grainy'>
					<UploadDropzone setOpen={setOpen} />
				</DialogContent>
			</Dialog>
		</>
	)
}

export default SubmitBTN
