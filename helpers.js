export function loop(s,e,f){
  for(let i = s;i <= e;i++){
    f(i)
  }
}

export function round(n,u){
  return Math.round(n * u) / u
}

export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

export function getSlices(data){
  let slices = []
  if(data) data.forEach(slice => {
  if(slice.primary.hide) return
  slice.id = slice.primary.label ? slice.primary.label.replace(/\s+/g, '-').toLowerCase() : slice.id
  slices.push(slice)
  })
  return slices 
}

export function has(obj,key){
  return obj.hasOwnProperty(key)
}

export function getLink(link){
  if(link.url) return link.url
  if(link.uid) return link.uid == 'home' ? '/' : `/${link.uid}`
}

export function matchLinkToRoute(link,route){
  if (route == '/' || link == '/') return route == link
  return route.includes(link)
}

export function isVideo(media){
  return ['.mp4','.mov'].some((i)=> media.includes(i))
}

export function isImage(media){
  return ['.jpg','.svg','.gif','.png'].some((i)=> media.includes(i))
}

export function isDate(d){
  return d instanceof Date
}

export function toDate(d) {
  if (d.indexOf("T") > 0) d = d.split("T")[0];
  return new Date(`${d}T00:00:00-07:00`);
}

export function getDay(d) {
  if (!isDate(d)) d = toDate(d)
  return new Intl.DateTimeFormat("en-US", { day: 'numeric' }).format(d).padStart(2,0);
}

export function getWeekDay(d,f="long") {
  if (!isDate(d)) d = toDate(d)
  return new Intl.DateTimeFormat("en-US", { weekday: f }).format(d);
}

export function getMonth(d, f = "long") {
  if (!isDate(d)) d = toDate(d)
  return new Intl.DateTimeFormat("en-US", { month: f }).format(d);
}

export function getYear(d) {
  if (!isDate(d)) d = toDate(d)
  return d.getFullYear();
}

export function formatDate(date,format = "mmm dd, yyyy") {
  if (!date) return;
  if (!isDate(date)) date = toDate(date)

  format = format.replace('mmmm',getMonth(date, "long"))
  format = format.replace('mmm',getMonth(date, "short"))
  format = format.replace('mm',getMonth(date, "numeric"))
  format = format.replace('dddd',getWeekDay(date,"long"))
  format = format.replace('ddd',getWeekDay(date,"short"))
  format = format.replace('dd',getDay(date,'numeric'))
  format = format.replace('yyyy',getYear(date))

  return format
}

export function checkClipPath(){
    var base = 'clipPath',
        prefixes = [ 'webkit', 'moz', 'ms', 'o' ],
        properties = [ base ],
        testElement = document.createElement( 'testelement' ),
        attribute = 'polygon(50% 0%, 0% 100%, 100% 100%)';
    for ( var i = 0, l = prefixes.length; i < l; i++ ) {
        var prefixedProperty = prefixes[i] + base.charAt( 0 ).toUpperCase() + base.slice( 1 );
        properties.push( prefixedProperty );
    }
    for ( var i = 0, l = properties.length; i < l; i++ ) {
        var property = properties[i];
        if ( testElement.style[property] === '' ) {
            testElement.style[property] = attribute;
            if ( testElement.style[property] !== '' ) {
                return true;
            }
        }
    }
    return false;
}