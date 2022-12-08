import axios from "axios";

export default function handler(req, res) {
  if (req.method === 'GET') {
    let { types, bl_latitude, tr_latitude, bl_longitude, tr_longitude } = req.query;
    const options = {
      method: 'GET',
      url: `https://travel-advisor.p.rapidapi.com/${types}/list-in-boundary`,
      params: {
        bl_latitude: bl_latitude,
        tr_latitude: tr_latitude,
        bl_longitude: bl_longitude,
        tr_longitude: tr_longitude,
        limit: '8',
      },
      headers: {
        'X-RapidAPI-Key': '4d72f977a4msh84e019d97fe9773p1a1817jsn9aae2affa6ee',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };

    axios.request(options).then(function (response) {
      const { data } = response.data;
      console.log("data", data);
      res.status(200).json({ message: "Success!", placesData: data });
    }).catch(function (error) {
      console.error(error);
      res.status(500).json({message: "Something went wrong", error})
    });
  }
}
