// https://nuxt.com/docs/api/configuration/nuxt-config
const Prismic = require("@prismicio/client");

export default defineNuxtConfig({
    app:{
        head:{
            htmlAttrs: {
                  class: 'bg-slate-50 text-primary dark:bg-slate-800 dark:text-slate-50'
            },
            script:[
                {src:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/gsap.min.js'},
                {src:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollTrigger.min.js'},
                {src:'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.5/ScrollToPlugin.min.js'},
                // {src:'https://static.cdn.prismic.io/prismic.js?new=true&repo=funky-pickle--v02',defer:true, async:true}
            ]
        }
    },
    modules: [
        '@nuxtjs/prismic',
        '@pinia/nuxt',
        '@formkit/nuxt'
    ],
    css:[
        '@/css/tailwind.css',
        '@/css/animation.css',
        '@/css/global.css',
        '@/css/column.css',
        '@/css/font.css',
        '@/css/carousel.css',
        '@/css/button.css',
    ],
    runtimeConfig: {
        public: {
          baseURL: process.env.BASE_URL,
        }
     },
    prismic: {
        preview: false,
        endpoint: process.env.PRISMIC_ENDPOINT 
    },
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        }
    }
})




    // generate:{
//     async routes(){
//         let routes = []
//         let client = Prismic.client('funky-pickle--v02')
//         
//         let pages = await client.query(Prismic.Predicates.at("document.type", "page"));
//           pages.results.forEach((data) => routes.push({ route: `/${data.uid == 'home' ? '' : data.uid}`, payload: data }));
//         
//         let events = await client.query(Prismic.Predicates.at("document.type", "event"));
//         events.results.forEach((data) => routes.push({ route: `/event/${data.uid}`, payload: data }));
//         
//         return routes;
//     }
// },