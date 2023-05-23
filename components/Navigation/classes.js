export default{
	nav:{
		container: 'overflow-hidden fixed z-10 top-0 left-0 h-nav-y w-full m:h-full m:w-nav-x bg-white flex flex-col items-center m:items-start border-outline border-b m:border-b-none m:border-r',
		wrapper: 'flex-auto w-full overflow-auto'
	},
	button:{
		container: 'fixed h-nav-y w-nav-y top-0 left-0 m:hidden'
	},
	logo:{
		container: 'h-nav-y p-10px m:p-20px m:h-auto flex-none',
		wrapper: 'h-full m:w-full m:h-auto'
	},
	links:{
		links:{
			container:'py-20px m:px-20px w-full m:w-auto',
			label:'font-label text-slate-400 text-16px text-center m:text-left',
			wrapper:'mt-10px relative'
		},
		link:{
			wrapper: 'font-header font-normal w-full text-35px m:text-30px h-50px m:h-40px select-none flex justify-center items-center m:justify-start px-10px',
			label: 'text-ellipsis whitespace-nowrap flex-auto overflow-hidden'
		},
		highlight:{
			container:'top-0 absolute h-50px m:h-40px left-0 right-0 -z-1 m:transition-transform m:duration-300',
			wrapper:'h-full w-full origin-center m:rounded-sm'
		}
	}
}