let fieldHeight = 'h-2.5'
let labelMargin = 'mb-0.2'

let field = {
	outer: `col-span-1` ,
	label: `text-0.8 block ${labelMargin} font-semibold text-slate-400`,
	input: `block px-0.5 ${fieldHeight} w-full border border-slate-300 bg-slate-50 rounded-sm outline-slate-400`}

export default{
	container:'bg-white bordered border-outline',
	description:'px-1 pt-3 m:px-3 border-t-10 border-fp-green flex items-center justify-center m:justify-start',
	content:'py-3 px-1 m:px-3',
	form:`grid gap-1 l:grid-cols-2 mb-3`,
	text:field,
	email:field,
	tel:field,
	select:field,
	textarea:{
		...field,outer:`col-span-full`,
		input: field.input.replace(fieldHeight,'h-5')
	},
	checkbox:{
		outer:`col-span-full mt-0.5`,
		options:'block leading-0.7',
		option:'block leading-0.7',
		wrapper:`inline-flex items-center`,
		input:`h-1.2 w-1.2 block accent-fp-turq`,
		label: 'ml-1'
	},
	submit:'btn bg-fp-pink text-white'
}