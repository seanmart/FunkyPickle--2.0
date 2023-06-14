<template>
  <nav ref="nav" id="navbar" :class="classes.container">
    <div :class="classes.wrapper">
        <template v-for="section,i in data">
          
          <a 
            ref="items"  
            :class="[classes.link,headingClasses.small]" 
            :href="section.id" 
            @click="handleClick($event,i)"
          >{{section.label}}</a>
          
        </template>
        <i ref="bar" :class="classes.bar"/>
    </div>
  </nav>
</template>

<script setup>
  import {headingClasses} from '@/globalClasses'
  import {useStore} from '@/stores'
  import {storeToRefs} from 'pinia'
  import classes from './classes'
  
  const {path} = useRoute()
  const props = defineProps(['data'])
  const store = useStore()
  const {loaded} = storeToRefs(store)
  const items = ref(null)
  const bar = ref(null)
  const nav = ref(null)
  const active = ref(0)

  watch(loaded,initNavbar)
  watch(active,updateBar)
  onUnmounted(destroyNavbar)
  
  // FUNCTIONS 
  
  let triggers = []
  let scrolling = false
  
  function destroyNavbar(){
    if(!props.data.length) return 
    triggers.length && triggers.forEach(t => t.kill())
    window.removeEventListener('resize',setBar)
  }
  
  function initNavbar(){
    if(!props.data.length) return
    window.addEventListener('resize',setBar)
    gsap.set(bar.value,{left:items.value[active.value].offsetLeft})
    initTriggers()
    updateBar()
  }
  
  function initTriggers(){ 
    props.data.forEach((section,i) => {
      triggers.push(ScrollTrigger.create({
        trigger: section.id,
        start: 'top 50%',
        end: 'bottom 50%',
        onToggle:({isActive})=> isActive && !scrolling && (active.value = i)
      }))
    })
  }
  
  function updateBar(){
    gsap.to(bar.value,{
      duration:.25,
      width: items.value[active.value].offsetWidth, 
      left:items.value[active.value].offsetLeft 
    })
  }
  
  function setBar(){
    gsap.set(bar.value,{
      width: items.value[active.value].offsetWidth, 
      left:items.value[active.value].offsetLeft 
    })
  }
  
  function handleClick(e,i){
    e.preventDefault()
    scrolling = true 
    active.value = i
    
    let y = props.data[i].id
    let offsetY = nav.value.offsetHeight * .4
    if(window.innerWidth < store.units.tablet) offsetY += store.units.navY

    gsap.to(window,{
      duration:1,
      ease:'power3.inOut',
      scrollTo:{y,offsetY},
      onComplete:()=> (scrolling = false)
    })
  }
  
</script>

<style>
  #navbar{
    top: calc(theme('spacing.nav-y') - 1rem);
    padding: 0px;
  }
  
  @media screen and (min-width: theme('screens.t')){
    #navbar{
      top: -2rem;
    }
  }
</style>