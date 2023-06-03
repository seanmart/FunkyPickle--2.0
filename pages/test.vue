<template>
	<main class="min-h-screen py-3">
		<Section header="test section">
			<div class="bg-white bordered border-outline p-2">
				<h3 class="text-1.6 font-bold leading-1.35">
					Pickleball is much more than a sport. For many, it’s a lifestyle. 
				</h3>
				<p class="mt-2 text-0.9">
					Pickleball's common doubles format drives a social dynamic, unlike any other competitive sport. 
					The game’s nature allows for just about anyone, from any athletic background or level of experience, 
					to join together on a court and play. It’s a special formula for creating a diverse and eclectic 
					community of people. There’s a reason pickleball is the fastest growing sport in the USA since 2019 
					with nearly five million active players!
				</p>
			</div>
		</Section>
	</main>
</template>

<script setup> 
	const fontSize = ref(0)
	
	function getFontSize(){
		fontSize.value = window.getComputedStyle(document.body).getPropertyValue('font-size');
	}
	
	onMounted(()=>{
		window.addEventListener('resize',getFontSize)
		getFontSize()
	})

</script>

<style>
	
</style>