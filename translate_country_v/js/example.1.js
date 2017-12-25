function getType(variable) {
  let type = toString.call(variable).slice(8, -1); // [object Array] => Array
  return type === 'Number' && isNaN(variable) ? 'NaN' : type;
}

let renderKey = {
  flag: (url) => {
    return '<div class="value flag">' +
      `<img src="${url}"/>` +
    '</div>';
  }
};

function renderArray(arrayData) {
  return arrayData
    .map((val) => {
      return renderVal(val);
    })
    .join(', ');
}

function renderObject(objectData) {
  return Object.keys(objectData)
    .map((key) => {
      return renderVal(objectData[key]);
    })
    .join(', ');
}

function renderVal(val) {
  switch (getType(val)) {
    case 'Array':
      return renderArray(val);
    case 'Object':
      return renderObject(val);
    default:
      return val;
  }
}

let newOrder = [
  'name', 'flag', 'capital'
];

let maps = [];

let translate = {
  name: 'Название',
  topLevelDomain: 'Домен верхнего уровня',
  alpha2Code: 'Альфа2код',
  alpha3Code: 'Альфа3код',
  callingCodes: 'Телефонный код',
  capital: 'Столица',
  altSpellings: 'Именование',
  region: 'Регион',
  subregion: 'Подрегион',
  population: 'Население',
  latlng: 'Широта, Долгота',
  demonym: 'Этнохороним',
  area: 'Площадь',
  timezones: 'Часовые пояса',
  borders: 'Граничит',
  nativeName: 'Самоназвание',
  numericCode: 'Трехзначный код страны',
  currencies: 'Валюта',
  languages: 'Языки',
  flag: 'Флаг',
  regionalBlocs: 'Региональные группы'
};

function getInformation(name) {
  if (!`${name}`.length) {
    return;
  }
  $.ajax({
    method: 'GET',
    url: "https://restcountries.eu/rest/v2/name/" + name,
    success: renderCountrys,
    error: function (status) {
      alert('error ' + status.responseJSON.status)
    }
  });
}

$('#show').on('click', function () {
  getInformation($('#country-name').val());
});

