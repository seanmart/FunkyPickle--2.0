export default{
	container:(h)=>`relative section ${h && 'flex flex-col m:items-start m:flex-row m:odd:flex-row-reverse'}`,
	header:{
		container:'sticky m:w-1/3 z-5 select-none top-nav-y t:top-0 transition-[top] duration-300',
		wrapper:'bg-fp-lime bordered border-outline h-4 m:h-7 flex-center',
		label:'font-header text-2'
	},
	content:(h)=>`relative ${h && 'm:w-2/3'}`
}