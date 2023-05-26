<template>
    <section :class="classes.container">
        <div :class="classes.content.container" ref="container">
            <div class="c-marquee-element" :class="classes.content.wrapper" ref="text">
                <slot/>
            </div>
        </div>
    </section>
</template>

<script setup>
    import classes from './classes'
    
    const text = ref(null)
    const container = ref(null)
    let anim = null
    
    function handleResize(){
        gsap.set(container.value,{height:text.value.offsetHeight})
    }

    onMounted(()=>{

        let elements = []
        let count = Math.ceil(3000 / text.value.offsetWidth) - 1

        elements.push(text.value)

        for(let i = 0; i <= count; i++){
            let el = text.value.cloneNode(true)
            container.value.appendChild(el)
            elements.push(el)
        }

        let limit = elements.length * 100

        gsap.set(elements,{x:(i)=> `${i * 100}%`,y:'100%'})

        anim = gsap.to(elements, {
            duration: elements.length * 15,
            paused:true,
            ease: "none",
            x: `+=${limit}%`,
            modifiers: {x: gsap.utils.unitize(x => (parseFloat(x) % limit) - 100, "%")},
            repeat: -1,
            scrollTrigger:{
                trigger:container.value,
                start:'top bottom',
                end:'bottom top',
                toggleActions:'play pause play none'
            }
        });

        window.addEventListener('resize', handleResize)
        handleResize()

        gsap.to(elements,.5,{y:0,stagger: .1})
    })
</script>

<style lang="css">
    .c-marquee-element > *{
        white-space: nowrap;
    }
</style>
