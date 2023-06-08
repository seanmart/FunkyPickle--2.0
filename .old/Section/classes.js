export default{
	container:(h)=>`relative px-1 t:px-3 pt-3 last:pb-3 ${ h ? '[&>div]:m:odd:flex-row' : null}`,
	wrapper:(h)=>`max-w-45 mx-auto ${h ? 'flex flex-col m:flex-row-reverse m:items-start' : ''}`,
	header:{
		container:'flex-none sticky m:w-1/3 z-2 select-none top-nav-y t:top-0',
		wrapper:'py-0.5 m:py-2 px-1 text-center bg-fp-lime bordered border-outline',
		label:'font-header leading-0.9 font-bold text-2 m:text-1.8'
	},
	content:(h)=>`${h ? 'flex-none m:w-2/3' : ''}`
}