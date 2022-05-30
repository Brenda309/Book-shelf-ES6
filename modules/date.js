import { DateTime } from '../luxon.js';
console.log("hi")
class date{
    static dates (){
    const time = DateTime.now().toLocaleString({
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
    })
      const getDate=  document.querySelector('.date');
      getDate.innerHTML = time;
    }
}
date.dates();