let fieldHeight = 'h-2.5'
let labelMargin = 'mb-0.2'

let field = {
	outer: `col-span-1` ,
	label: `text-0.8 block ${labelMargin} font-semibold text-slate-400`,
	input: `block px-0.5 ${fieldHeight} w-full border border-slate-300 bg-slate-50 rounded-sm outline-slate-400`}

export default{
	container:'bordered border-outline bg-fp-lime p-0.5',
	wrapper: 'bg-white',
	content:'px-1.5 py-3 m:px-2 max-w-40 mx-auto',
	description:'mb-2 text-center max-w-35 mx-auto',
	form:`grid gap-0.8 m:grid-cols-2 mb-2`,
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