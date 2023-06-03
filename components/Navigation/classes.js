export const nav = {
	container: 'overflow-hidden fixed z-10 top-0 left-0 h-nav-y w-full t:h-full t:w-nav-x bg-white flex flex-col items-center t:items-start border-outline border-b t:border-b-none t:border-r',
	wrapper: 'flex-auto w-full overflow-auto'
}

export const button = 'fixed h-nav-y w-nav-y top-0 left-0 t:hidden'

export const logo = {
	container: 'h-nav-y p-10px t:p-30px t:h-auto t:w-full flex-none',
	wrapper: 'h-full t:w-full t:h-auto'
}

export const links = {
	links:{
		container:'pt-20px t:px-30px t:first:pt-0 max-w-400px mx-auto text-center t:text-left',
		label:'font-label text-slate-400 text-15px',
		wrapper:`mt-10px relative text-30px t:text-25px`
	},
	link:{
		wrapper: 'font-header w-full h-40px t:h-35px select-none flex items-center px-10px',
		label: 'text-ellipsis whitespace-nowrap flex-auto overflow-hidden'
	},
	highlight:{
		container:'top-0 absolute h-40px t:h-35px left-0 right-0 -z-1 t:transition-transform duration-100 t:duration-300',
		wrapper:'h-full w-full origin-center t:rounded-sm'
	}
}
