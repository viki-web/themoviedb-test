// import moment from "moment/moment";

export const isJson = (item)=> {
    if(typeof item == "string")
        return false;
    else return typeof item == "object";
}

export const getIntervals = (interval=0.25,  max = 20, min) =>{
    min = min?min:interval;
    let items = [];
    for (let x=min; x<=max; x+=interval){
        items.push(x);
    }
    return items;
}

// export const getTimeFormat = (time, format, utc_offset_in_minutes=0, parseFormat="YYYY-MM-DD HH:mm:ss") =>{
//     let m =  moment.utc(time,parseFormat , true)
//     if(utc_offset_in_minutes){
//         m =  m.utcOffset(utc_offset_in_minutes, false);
//     }
//     return m.format(format);
// }

export const dataURItoBlob = (dataURI) => {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(',')[0].indexOf('base64') >= 0)
        byteString = atob(dataURI.split(',')[1]);
    else
        byteString = unescape(dataURI.split(',')[1]);

    // separate out the mime component
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], {type:mimeString});
}

// export const enumerateDaysBetweenDates = (startDate, endDate)=>{
//     let date = []
//     while(moment(startDate) <= moment(endDate)){
//         date.push(startDate);
//         startDate = moment(startDate).add(1, 'days').format("YYYY-MM-DD HH:mm:ss");
//     }
//     return date;
// }

export const collapsePagination =(c, m)=>{
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}

export const randomString = (length=8) =>{
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() *
            charactersLength));
    }
    return result;
}

export const randomPassword = (length=8)=>{
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = 12;
    var password = "";
    for (var i = 0; i <= passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber +1);
    }
    return password;
}

export const generateGroupOptions = (groups={}) =>{
    return Object.keys(groups).map(group_name => {
        return {
            label: group_name,
            options: groups[group_name].map(ob => {
                return {
                    label: ob.name,
                    value: ob.id
                }
            })
        };
    });
};

export const generateOptions = (options={}, label_key="name", value_key="id") =>{
    return options.map(ob => {
        return {
            label: ob[label_key],
            value: ob[value_key]
        }
    });
};

export const combineOptions = (options=[], values=[], customs=[]) =>{
    values = values.map(val=>{
        let option = options.find(x=>x.id==val);
        if(option){
            return {
                label :option.name,
                value: option.id
            }
        } else {
            return null;
        }

    });
    customs = customs.map(cus=>{
        return {
            label : cus,
            value: cus,
            __isNew__: true
        }
    });
    let res =   [...values, ...customs];
    return res;
}

export const findOb = (arr, val, key="id") =>{
    return arr.find(ob=>ob[key]===val);
}
