const apis = [
  {
    name: 'Geocoding',
    endpoint: '/api/geocode',
    method: 'GET',
    fields: [
      { name: 'address', label: 'Address', type: 'text' },
      { name: 'city', label: 'City (optional)', type: 'text' },
    ],
  },
  {
    name: 'Reverse Geocoding',
    endpoint: '/api/regeocode',
    method: 'GET',
    fields: [
      { name: 'location', label: 'Location (lng,lat)', type: 'text' },
    ],
  },
  {
    name: 'IP Location',
    endpoint: '/api/ip-location',
    method: 'GET',
    fields: [
      { name: 'ip', label: 'IP Address', type: 'text' },
    ],
  },
  {
    name: 'POI Text Search',
    endpoint: '/api/poi-text-search',
    method: 'GET',
    fields: [
      { name: 'keywords', label: 'Keywords', type: 'text' },
      { name: 'city', label: 'City (optional)', type: 'text' },
    ],
  },
  {
    name: 'POI Around Search',
    endpoint: '/api/poi-around-search',
    method: 'GET',
    fields: [
      { name: 'keywords', label: 'Keywords', type: 'text' },
      { name: 'location', label: 'Location (lng,lat)', type: 'text' },
      { name: 'radius', label: 'Radius (meters)', type: 'number' },
    ],
  },
  {
    name: 'POI Detail',
    endpoint: '/api/poi-detail',
    method: 'GET',
    fields: [
      { name: 'id', label: 'POI ID', type: 'text' },
    ],
  },
  {
    name: 'Weather Query',
    endpoint: '/api/weather',
    method: 'GET',
    fields: [
      { name: 'city', label: 'City', type: 'text' },
    ],
  },
  {
    name: 'Distance Calculation',
    endpoint: '/api/distance',
    method: 'GET',
    fields: [
      { name: 'origins', label: 'Origins (lng,lat|lng,lat)', type: 'text' },
      { name: 'destination', label: 'Destination (lng,lat)', type: 'text' },
      { name: 'type', label: 'Type (1=driving, 0=straight, 3=walking)', type: 'number' },
    ],
  },
  {
    name: 'Route Planning - Driving',
    endpoint: '/api/direction-driving',
    method: 'GET',
    fields: [
      { name: 'origin', label: 'Origin (lng,lat)', type: 'text' },
      { name: 'destination', label: 'Destination (lng,lat)', type: 'text' },
    ],
  },
  {
    name: 'Route Planning - Walking',
    endpoint: '/api/direction-walking',
    method: 'GET',
    fields: [
      { name: 'origin', label: 'Origin (lng,lat)', type: 'text' },
      { name: 'destination', label: 'Destination (lng,lat)', type: 'text' },
    ],
  },
  {
    name: 'Route Planning - Cycling',
    endpoint: '/api/direction-bicycling',
    method: 'GET',
    fields: [
      { name: 'origin', label: 'Origin (lng,lat)', type: 'text' },
      { name: 'destination', label: 'Destination (lng,lat)', type: 'text' },
    ],
  },
  {
    name: 'Route Planning - Transit',
    endpoint: '/api/direction-transit',
    method: 'GET',
    fields: [
      { name: 'origin', label: 'Origin (lng,lat)', type: 'text' },
      { name: 'destination', label: 'Destination (lng,lat)', type: 'text' },
      { name: 'city', label: 'Origin City', type: 'text' },
      { name: 'cityd', label: 'Destination City', type: 'text' },
    ],
  },
  {
    name: 'Schema - Navigation',
    endpoint: '/api/schema-navi',
    method: 'GET',
    fields: [
      { name: 'lon', label: 'Longitude', type: 'text' },
      { name: 'lat', label: 'Latitude', type: 'text' },
    ],
  },
  {
    name: 'Schema - Take Taxi',
    endpoint: '/api/schema-take-taxi',
    method: 'GET',
    fields: [
      { name: 'dlon', label: 'Dest Longitude', type: 'text' },
      { name: 'dlat', label: 'Dest Latitude', type: 'text' },
      { name: 'dname', label: 'Dest Name', type: 'text' },
      { name: 'slon', label: 'Start Longitude', type: 'text' },
      { name: 'slat', label: 'Start Latitude', type: 'text' },
      { name: 'sname', label: 'Start Name', type: 'text' },
    ],
  },
  {
    name: 'Personal Map',
    endpoint: '/api/personal-map',
    method: 'POST',
    fields: [
      { name: 'lineList', label: 'Line List (JSON array)', type: 'textarea' },
    ],
  },
];

function createForm(api) {
  const form = document.createElement('form');
  form.innerHTML = `<h2>${api.name}</h2>`;
  api.fields.forEach(field => {
    form.innerHTML += `<label>${field.label}<br><${field.type === 'textarea' ? 'textarea' : 'input'} name="${field.name}" type="${field.type !== 'textarea' ? field.type : ''}"></${field.type === 'textarea' ? 'textarea' : 'input'}></label>`;
  });
  form.innerHTML += '<button type="submit">Submit</button>';
  const resultDiv = document.createElement('div');
  resultDiv.className = 'result';
  form.appendChild(resultDiv);
  form.onsubmit = async (e) => {
    e.preventDefault();
    resultDiv.textContent = 'Loading...';
    let data = {};
    api.fields.forEach(field => {
      data[field.name] = form.elements[field.name].value;
    });
    try {
      let res;
      if (api.method === 'GET') {
        const params = new URLSearchParams(data).toString();
        res = await fetch(`${api.endpoint}?${params}`);
      } else {
        res = await fetch(api.endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      }
      const json = await res.json();
      resultDiv.textContent = JSON.stringify(json, null, 2);
    } catch (err) {
      resultDiv.textContent = 'Error: ' + err.message;
    }
  };
  return form;
}

document.addEventListener('DOMContentLoaded', () => {
  const formsDiv = document.getElementById('forms');
  apis.forEach(api => {
    formsDiv.appendChild(createForm(api));
  });
});