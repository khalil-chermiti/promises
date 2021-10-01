let api = "https://api.wheretheiss.at/v1/satellites/25544";

let htmlLat = document.querySelector("#lat");
let htmlLong = document.querySelector("#long");

async function fetchIss(url) {
  let resp = await fetch(url);
  let data = await resp.json();

  console.log(data);

  let { latitude, longitude } = data;

  htmlLat.innerText = "latitude : " + latitude;
  htmlLong.innerText = "longitude : " + longitude;

}
fetchIss(api);
