export const text = {
	h5:'font-label text-0.8 select-none text-slate-400',
	h2:'font-header font-bold leading-0.9 text-2.5 t:text-2.5 d:text-3 select-none mt-0.5',
	link:'mt-2 btn bg-fp-pink outline-fp-pink/25 text-white'
}

export const carousel ={
	container:'flex flex-col m:flex-row bordered border-outline',
	images:{
		container:'flex-none m:w-1/2 bg-slate-100',
		track:'h-full',
		slide:'h-full flex-center relative select-none p-3 m:p-2',
		media:'absolute inset-0',
		logo:'h-auto w-20 max-w-full max-h-full relative z-1'
	},
	info:{
		container: 'flex-none m:w-1/2 bg-white',
		track:'',
		slide:'py-3 m:py-4 px-2'
	}
}

export const list = {
	container:'flex flex-col m:flex-row bordered border-outline bg-white',
	image:{
		container:'flex-none relative flex-center w-full h-15 m:h-auto m:w-1/2 d:w-1/3 p-2',
		media:'absolute inset-0',
		logo:'h-auto w-auto max-w-full max-h-8 relative z-1'
	},
	info:{
		container:'flex-auto flex-middle p-2'
	}
}

export const empty = {
	container: 'border-outline bordered bg-white relative flex-center flex-col p-2 text-center z-1 h-80vh m:h-24',
	wrapper:'overflow-hidden absolute inset-0',
	text: 'relative z-1',
	ball: 'h-5 w-5 absolute -z-1 fill-fp-lime'
}