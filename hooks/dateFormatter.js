
    export function convertDate(d, f){
       
        const utcDate = new Date(d)
        if(f === 'date'){
          const options = {  weekday: 'short',  month: 'short', day: 'numeric' };
          const otherDateItem = utcDate.toLocaleDateString("en-US", options)
          return otherDateItem
        }else if(f === 'time'){
            let hoursFull = utcDate.getHours()
            let twelveConversion = hoursFull > 12 ? hoursFull - 12 : hoursFull === 0 ? 12 : hoursFull
            let ampm = hoursFull > 11 ? "pm" : "am"
            let postTime = twelveConversion + ':' + (utcDate.getMinutes() < 10 ? '0': '') + utcDate.getMinutes() + " " + ampm;
        //   const options = {weekday: null,  month: null, day: null, hour: '2-digit', minute: '2-digit', hour12: true };
        //   const otherTimeItem = utcDate.toLocaleDateString("en-US", options)
          return postTime
        }else if(f === 'datetime'){
            const options = {  weekday: 'short',  month: 'short', day: 'numeric',hour: '2-digit', minute: '2-digit', hour12: true };
          const fullDate = utcDate.toLocaleDateString("en-US", options)
          return fullDate
        }
    }

    
