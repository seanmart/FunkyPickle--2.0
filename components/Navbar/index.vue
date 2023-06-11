<template>
  <nav ref="nav" id="navbar" class="bg-secondary dark:bg-slate-700 dark:text-slate-50 navbar sticky z-8">
    <div class="relative margins gutters-x flex pt-1 t:pt-2 overflow-auto no-scrollbar scroll-smooth">
        <template v-for="section,i in data">
          <a ref="items"  :class="headingClasses.small" class="flex-none mr-3 py-1" :href="section.id" @click="handleClick($event,i)">{{section.label}}</a>
        </template>
        <i ref="bar" class="absolute bottom-0 left-0 h-0.3 w-0 bg-primary dark:bg-secondary"/>
    </div>
  </nav>
</template>

<script setup>
  import {headingClasses} from '@/globalClasses'
  import {useStore} from '@/stores'
  import {storeToRefs} from 'pinia'
  
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