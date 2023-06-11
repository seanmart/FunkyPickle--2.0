export default{
	container: 'overflow-hidden fixed z-10 top-0 left-0 h-nav-y w-full flex flex-col items-center t:items-stretch t:h-full t:w-nav-x bg-white dark:bg-slate-900',
	wrapper: 'flex-auto w-full overflow-auto',
	button: 'fixed h-nav-y w-nav-y top-0 left-0 t:hidden',
	logo:{
		container: 'flex-none block h-nav-y mx-auto t:h-auto p-0.5 t:p-2 t:w-full',
		wrapper: 'h-full t:w-full t:h-auto'
	},
	pages:{
		container:'flex-auto w-full px-2 mt-15vh t:mt-0 max-w-60',
		wrapper:'relative',
		page:'font-header uppercase flex justify-center items-center h-4 w-full text-2.5 px-1 t:justify-start t:h-2.7 t:text-1.8',
		highlight:{
			container:'absolute top-0 left-0 right-0 -z-1 transition-transform duration-200',
			wrapper:'bg-secondary dark:bg-slate-700 m:rounded h-4 t:h-2.7'
		}
	}
}
