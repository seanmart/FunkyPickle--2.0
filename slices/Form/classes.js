let fieldPadding = 'py-0.5 px-1'
let fieldHeight = 'h-2.5'
let labelMargin = 'mb-0.2'

let field = {
	outer: `col-span-1` ,
	label: `text-0.9 block ${labelMargin} font-semibold text-slate-400`,
	input: `px-1 ${fieldHeight} w-full border border-outline bg-slate-50 rounded-sm outline-8 outline-outline`}

export default{
	container:'bg-white bordered border-outline',
	description:{
		container:'px-1 m:px-3 mb-2.5',
		wrapper:'border-b border-outline flex-center text-center min-h-7'
	},
	content:'p-1 m:p-3',
	form:`grid gap-0.5 l:grid-cols-2 mb-2`,
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
	submit:'btn bg-fp-green text-white'
}