export default{
	container:(h)=>`relative section ${h ? 'flex flex-col m:items-start m:flex-row m:odd:flex-row-reverse' : ''}`,
	header:{
		container:'flex-none sticky m:w-1/3 w:w-1/4 z-5 select-none top-nav-y t:top-0 transition-[top] duration-300',
		wrapper:'bg-gradient-to-br from-fp-lime to-fp-lime-dark bordered border-outline h-3 m:h-7 flex-center',
		label:'font-header text-2'
	},
	content:(h)=>`relative ${h ? 'flex-auto w-full m:w-2/3 w:3/4' : ''}`
}