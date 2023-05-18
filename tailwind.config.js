let px = {} 
let rem = {} 
let zIndex = {}
let leading = {}
let vw = {}
let vh = {}
let loop = (s,e,f)=> {for(let i = s;i <= e;i++){f(i)}}
let round = (n)=>Math.round(n * 10) / 10

loop(0,100,(i)=> rem[`${round(i * .1)}`] = `${round(i*.1)}rem`)
loop(11,100,(i)=>rem[i] = `${i}rem`)
loop(1,500,(i)=>px[`${i}px`] = `${i}px`)
loop(1,99,(i)=>vw[`${i}vw`] = `${i}vw`)
loop(1,99,(i)=>vh[`${i}vh`] = `${i}vh`)
loop(1,10,(i)=>zIndex[i] = i)
loop(1,20,(i)=>leading[`${round((i + .5) * .1)}`] = round((i + .5) * .1))

let gutters = '5vw'
let nav = {
    'nav-x':'275px',
    'nav-y':'70px'
}
let percents = {
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

let flexPercents = {}
Object.keys(percents).forEach(key => {
    flexPercents[key] = `0 0 ${percents[key]}`
})

export default{
    content:[
      './pages/**/*.vue',
      './components/**/*.vue',
      './slices/**/*.vue',
    ],
    theme:{
        fontSize:{...rem,...px,...vw},
        fontFamily:{header:['Saira Extra Condensed', 'sans-serif']},
        spacing:{...rem,...px,...vw,...percents,...nav,gutters},
        width:{...rem,...px,...vw,...percents, ...nav, screen:'100vw',gutters},
        height:{...rem,...px,...vw,...vh,...percents, ...nav, screen:'100vh',gutters},
        minWidth:{...rem,...px,...vw,...percents, screen:'100vw'},
        minHeight:{...rem,...px,...vw,...percents, screen:'100vh'},
        maxWidth:{...rem,...px,...vw,...percents, screen:'100vw'},
        maxHeight:{...rem,...px,...vw,...percents, screen:'100vh'},
        lineHeight:leading,
        zIndex:{...zIndex},
        screens:{
            'm':'800px',
            's':`1100px`,
            'd':'1400px',
            'm-max':'799px',
            's-max':`1099px`,
            'd-max':'1399px'
        },
        extend:{
            colors:{
                'fp-lime':'#DFFF2F',
                'fp-green':'#479F35',
                'fp-pink': '#FF0093',
                'fp-blue': '#00C8F8',
                'fp-turq': '#2BCCA7',
                'outline': '#f0f2f5',
                'fp-pink-dark':'#E00081'
            },
            fill: ({theme})=>({...theme('colors')}),
            flex:{...flexPercents}
        }
    }
}