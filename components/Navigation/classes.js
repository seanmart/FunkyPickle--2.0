export const nav = {
	container: 'overflow-hidden fixed z-10 top-0 left-0 h-nav-y w-full t:h-full t:w-nav-x bg-white flex flex-col items-center t:items-start border-outline border-b t:border-b-none t:border-r',
	wrapper: 'flex-auto w-full overflow-auto'
}

export const button = 'fixed h-nav-y w-nav-y top-0 left-0 t:hidden'

export const logo = {
	container: 'h-nav-y p-0.5 t:p-2 t:h-auto t:w-full flex-none',
	wrapper: 'h-full t:w-full t:h-auto'
}

export const links = {
	links:{
		container:'pt-2 t:px-2 t:first:pt-0 max-w-40 mx-auto text-center t:text-left',
		label:'font-label text-slate-400 text-0.8',
		wrapper:`mt-0.5 relative text-2 t:text-1.6`
	},
	link:{
		wrapper: 'font-header w-full h-3 t:h-2.3 select-none flex items-center px-0.5',
		label: 'text-ellipsis whitespace-nowrap flex-auto overflow-hidden'
	},
	highlight:{
		container:'top-0 absolute h-3 t:h-2.3 left-0 right-0 -z-1 t:transition-transform duration-100 t:duration-300',
		wrapper:'h-full w-full origin-center t:rounded-sm'
	}
}
