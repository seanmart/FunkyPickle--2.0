export const carousel ={
	container:'flex flex-col m:flex-row bordered border-outline',
	images:{
		container:'flex-none m:w-1/2 bg-slate-100 h-22',
		track:'h-full',
		slide:'h-full flex-center relative select-none',
		media:'absolute inset-0',
		logo:'h-auto w-auto max-w-3/4 max-h-3/5 relative z-1'
	},
	info:{
		container: 'flex-auto flex flex-col bg-white',
		track:'flex-auto',
		slide:'splide__content flex-middle'
	}
}

export const list = {
	container:'flex flex-row bordered border-outline bg-white',
	image:{
		container:'flex-none relative flex-center w-1/3 m:w-1/3 p-1',
		media:'absolute inset-0',
		logo:'h-auto w-auto max-w-full max-h-3/4 relative z-1'
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

export const text = {
	h5:'font-label text-0.8 select-none text-slate-400',
	h2:'font-header text-2.5 t:text-2.75 d:text-3 select-none my-1',
	link:'btn bg-fp-pink text-white font-header font-normal'
}