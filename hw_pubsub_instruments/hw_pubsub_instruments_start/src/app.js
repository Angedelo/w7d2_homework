const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InfoView = require('./views/info_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');
  const selectElement = document.querySelector('select#instrument-families');
  const musicalDropdown = new SelectView(selectElement);
  musicalDropdown.bindEvents();
});
