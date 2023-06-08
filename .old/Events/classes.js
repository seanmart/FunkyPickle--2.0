export const text = {
	h2:'font-header text-2.5 leading-0.9 font-bold select-none mb-2',
	h5:'block font-label text-0.8 t:text-0.6 select-none text-slate-400',
}

export const carousel ={
	container:'flex flex-col m:flex-row h-20',
	images:{
		container:'flex-none m:w-1/2 bg-slate-100 bordered border-outline',
		track:'h-full',
		slide:'h-full flex-center relative select-none p-2',
		media:'inset-0',
		logo:'h-auto w-20 max-w-full max-h-full relative z-1'
	},
	info:{
		container: 'flex-none m:w-1/2 bg-white bordered border-outline',
		track: 'h-full',
		slide:'p-3 text-center m:text-left h-full flex flex-col justify-center'
	}
}

export const list = {
	container:'flex flex-col m:flex-row bordered border-outline bg-white',
	image:{
		container:'flex-none relative flex-center w-full h-15 m:h-auto m:w-1/3 p-2',
		media:'inset-0',
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