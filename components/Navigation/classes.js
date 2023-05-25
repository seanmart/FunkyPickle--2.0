export const nav = {
	container: 'overflow-hidden fixed z-10 top-0 left-0 h-nav-y w-full t:h-full t:w-nav-x bg-white flex flex-col items-center t:items-start border-outline border-b t:border-b-none t:border-r',
	wrapper: 'flex-auto w-full overflow-auto'
}

export const button = 'fixed h-nav-y w-nav-y top-0 left-0 t:hidden'

export const logo = {
	container: 'h-nav-y p-10px t:p-20px t:h-auto flex-none',
	wrapper: 'h-full t:w-full t:h-auto'
}

export const links = {
	links:{
		container:'py-20px t:px-20px max-w-500px mx-auto text-center t:text-left',
		label:'font-label text-slate-400 text-16px',
		wrapper:`mt-10px relative text-30px`
	},
	link:{
		wrapper: 'font-header font-normal w-full h-45px m:h-40px select-none flex items-center px-10px',
		label: 'text-ellipsis whitespace-nowrap flex-auto overflow-hidden'
	},
	highlight:{
		container:'top-0 absolute h-45px m:h-40px left-0 right-0 -z-1 t:transition-transform t:duration-300',
		wrapper:'h-full w-full origin-center t:rounded-sm'
	}
}
