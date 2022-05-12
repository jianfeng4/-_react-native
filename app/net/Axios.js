import axios from 'axios'



export function getFoodPos(longitude,latitude){
    console.log(longitude,latitude,'---')
 return  axios.get('https://restapi.amap.com/v3/place/around',{
        params:{
            key:'8dd9bdf75cd2a286d21d43aad2b585d1',
            location:longitude+','+latitude,
            keywords:'美食',
            radius:10000,
            offset:1000 ,
            page:1,
            extensions:'all',
            sortrule:'distance'
        }
    })
}

