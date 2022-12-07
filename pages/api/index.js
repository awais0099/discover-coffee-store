// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

export function getPlacesData() {
  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary',
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
      limit: '30',
    },
    headers: {
      'X-RapidAPI-Key': '4d72f977a4msh84e019d97fe9773p1a1817jsn9aae2affa6ee',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      return response.data;
  }).catch(function (error) {
      console.error(error);
  });
}
