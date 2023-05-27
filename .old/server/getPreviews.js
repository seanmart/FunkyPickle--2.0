import { useStore } from '@/stores'

export default async function(client){
	
	const orderings = ['event.start']
	const fetch = ['event.logo','event.background','event.name','event.start','event.end']
	const res = await client.getAllByType('event',{fetch, orderings})
	const previews = []
	
	if (res){
		res.forEach(event => {
			previews.push({
				...event.data,
				route:`/events/${event.uid}`,
				uid:event.uid
			})
		})
	}
	
	return previews
}