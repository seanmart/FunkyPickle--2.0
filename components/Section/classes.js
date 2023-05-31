export default{
	container:(h)=>`relative section ${h ? 'flex flex-col m:items-start m:flex-row m:odd:flex-row-reverse' : ''}`,
	header:{
		container:'flex-none sticky m:w-1/3 w:w-1/4 z-5 select-none top-nav-y t:top-0 transition-[top] duration-300',
		wrapper:'bg-fp-lime bordered border-outline h-3 m:h-6 flex-center px-1 text-center',
		label:'font-header leading-0.9 font-bold text-2 m:text-1.8'
	},
	content:(h)=>`relative ${h ? 'flex-auto w-full m:w-2/3 w:3/4' : ''}`
}