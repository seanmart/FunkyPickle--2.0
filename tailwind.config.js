import {loop,round} from './helpers'

let px = {} 
let rem = {} 
let zIndex = {}
let leading = {}
let vw = {}
let vh = {}
let screens = {}
let flexfractions = {}
let border = {DEFAULT:'1px'}

loop(11,100,(i)=>rem[i] = `${i}rem`)
loop(1,99,(i)=>px[`${i}px`] = `${i}px`)
loop(1,18,(i)=>px[`${100 + (i * 50)}px`] = `${100 + (i * 50)}px`)
loop(1,99,(i)=>vw[`${i}vw`] = `${i}vw`)
loop(1,99,(i)=>vh[`${i}vh`] = `${i}vh`)
loop(2,30,(i)=>border[`${i}`] = `${i}px`)
loop(1,10,(i)=>zIndex[i] = i)
loop(0,100,(i)=> {
    let num = round(i * .1,10)
    rem[`${num}`] = `${num}rem`
})
loop(1,20,(i)=>{
    let num = round((i + .5) * .1,10)
    leading[`${num}`] = num
})

let auto = 'auto'
let gutters = '5vw'
let nav = {
    'nav-x':'300px',
    'nav-y':'70px'
}
let fractions = {
    '1/12': '8.333%',
    '1/8': '12.5%',
    '1/6':  '16.666%',
    '1/5': '20%',
    '1/4':'25%',
    '1/3': '33.333%',
    '2/5':'40%',
    '1/2':'50%',
    '3/5': '60%',
    '2/3': '66.666%',
    '3/4': '75%',
    '4/5': '80%',
    '5/6': '83.333%',
    '7/8': '87.5%',
    'full': '100%'
}

let screenUnits = {
    m:700,
    t:1000,
    l:1200,
    d:1400,
    w:1800
}
Object.keys(screenUnits).forEach(k => {
    screens[`${k}`] = `${screenUnits[k]}px`
    screens[`${k}-max`] = `${screenUnits[k] - 1}px`
    screens[`${k}-unit`] = `${screenUnits[k]}`
})

Object.keys(fractions).forEach(key => {
    flexfractions[key] = `0 0 ${fractions[key]}`
})

export default{
    content:[
      './app.vue',
      './error.vue',
      './pages/**/*.vue',
      './components/**/*.{js,vue}',
      './slices/**/*.{js,vue}',
    ],
    theme:{
        screens:{...screens},
        lineHeight:{...leading},
        zIndex:{...zIndex},
        borderWidth:{...border},
        outlineWidth:{...border},
        fontSize:{...rem,...px,...vw},
        spacing:{...rem,...px,...vw,...fractions,...nav,gutters},
        width:{...rem,...px,...vw,...fractions, ...nav,gutters,auto,screen:'100vw'},
        height:{...rem,...px,...vw,...vh,...fractions,...nav,gutters,auto,screen:'100vh'},
        minWidth:{...rem,...px,...vw,...fractions,auto,screen:'100vw',},
        minHeight:{...rem,...px,...vw,...fractions,auto,screen:'100vh'},
        maxWidth:{...rem,...px,...vw,...fractions,auto,screen:'100vw'},
        maxHeight:{...rem,...px,...vw,...fractions,auto,screen:'100vh'},
        extend:{
            gradientColorStopPositions:{...fractions},
            fill: ({theme})=>({...theme('colors')}),
            flex:{...flexfractions},
            colors:{
                'fp-lime':'#DFFF2F',
                'fp-green':'#479F35',
                'fp-pink': '#FF0093',
                'fp-blue': '#00C8F8',
                'fp-turq': '#2BCCA7',
                'outline': '#e2e8f0',
                'fp-pink-dark':'#B00C4B',
                'fp-lime-dark':'#BAEF09'
            }
        }
    }
}