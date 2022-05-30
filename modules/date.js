import { DateTime } from '../luxon.js';
class date{
    static dates (){
    const time = DateTime.now().toLocaleString({
    })
      const getDate=  document.querySelector('.date');
      getDate.innerHTML = time;
    }
}
date.dates();