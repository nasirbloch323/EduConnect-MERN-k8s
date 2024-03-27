import { Loader2 } from "lucide-react"
import React from "react"

const LoaderCom = () => {
	return (
		<div className='flex items-center justify-center py-2 gap-x-2'>
			<Loader2 className='w-6 h-6 animate-spin a-titles' />
			<h2 className='animate-pulse'>Loading...</h2>
		</div>
	)
}

export default LoaderCom
