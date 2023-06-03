export default{
	container:'flex flex-wrap',
	box:{
		container:(nh)=>`w-1/2 ${nh ? 'm:w-1/3' : null} bordered border-outline bg-white`,
		wrapper:'pb-full m:pb-3/5 relative'
	},
	logo:{
		wrapper:'absolute inset-0 flex-center p-2',
		image:'max-w-8 h-auto w-full'
	}
}