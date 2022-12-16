const sliderInputElement = document.getElementById("sliderinput");
const thermometerMercury = document.getElementById('mercury');
const thermometerPolygon = document.getElementById('polygon');


sliderInputElement.addEventListener('change', function () {
    const sliderVal = sliderInputElement.value;
    const rangeValueThermometerFill = 236 + (sliderInputElement.value * -1);
    thermometerMercury.setAttribute('height', rangeValueThermometerFill);
    console.log('thermometerMercury position: ' + JSON.stringify(rangeValueThermometerFill) + ' (range: 236-0)')

    const polygonPosition = "translate(0 "
      + (((sliderVal) * -(236 / 241)) + 41) +
      ")";
    console.log('polygon position: ' + JSON.stringify(polygonPosition))
    thermometerPolygon.setAttribute('transform', polygonPosition);
  }
)
