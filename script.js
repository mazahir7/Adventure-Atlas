"use strict";

const formBtn = document.querySelector(".form-btn");

formBtn.addEventListener("click", () => {
  formBtn.classList.toggle("active");
});

setTimeout(() => {
  const popupContent = document.querySelectorAll(".leaflet-popup-content");
  // console.log(popupContent);
  if (popupContent.offsetWidth < popupContent.scrollWidth) {
    // popupContent.style.overflowX = "scroll";
    popupContent.style.animation = "scrollLeftRight 3s linear infinite alternate";
  }
}, 6000);

const renderMap = function (location) {
  const latitude = location.coords.latitude;
  const longitude = location.coords.longitude;

  //   const coords = [latitude, longitude];
  const coords = [24.6149158, 73.6842195];

  const map = L.map("map", {
    center: coords,
    zoom: 16,
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}", {
    foo: "bar",
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  L.marker(coords)
    .addTo(map)
    .bindPopup(
      L.popup({
        // content: '<p>Hello world!<br />This is a nice popup.</p>',
        maxWidth: 200,
        minWidth: 100,
        autoClose: false,
        closeOnClick: false,
        className: "destination-popup",
      })
    )
    .setPopupContent("home sweet home!!!")
    .openPopup();
};

const locationError = function (err) {
  console.log(err.message);
};

navigator.geolocation.getCurrentPosition(renderMap, locationError);
