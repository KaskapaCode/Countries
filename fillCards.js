function makeCards(country) {
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
      let name = res[country].name;
      let population = numberWithCommas(res[country].population);
      let capital = res[country].capital;
      let region = res[country].region;
      let svg = res[country].flags.svg;

      let card = document.createElement("div");
      card.id = country;
      card.addEventListener('click', function handleClick(event){
        sendMe();
      });

      let svgTag = document.createElement("img");
      svgTag.src = svg;
      card.append(svgTag);

      let nametag = document.createElement("h3");
      let nameText = document.createTextNode(name);
      nametag.appendChild(nameText);
      card.append(nametag);

      let populationtag = document.createElement("p");
      let strongPop = document.createElement("strong");
      let strongPopText = document.createTextNode("Population: ");
      strongPop.append(strongPopText);
      populationtag.append(strongPop);
      let populationText = document.createTextNode(population + "");
      populationtag.appendChild(populationText);
      card.append(populationtag);

      let regionTag = document.createElement("p");
      let strongReg = document.createElement("strong");
      let strongRegText = document.createTextNode("Region: ");
      strongReg.append(strongRegText);
      regionTag.append(strongReg);
      let regionText = document.createTextNode(region);
      regionTag.appendChild(regionText);
      card.append(regionTag);

      let capitalTag = document.createElement("p");
      let strongCap = document.createElement("strong");
      let strongCapText = document.createTextNode("Capital: ");
      strongCap.append(strongCapText);
      capitalTag.append(strongCap);

      let capitalText = document.createTextNode(capital);
      capitalTag.appendChild(capitalText);
      card.append(capitalTag);

      document.querySelector(".countries").append(card);
    });
}
function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

for (let i = 1; i < 250; i++) {
  makeCards(i);
}

document.querySelector(".dropdown").onclick = function () {
  if (document.querySelector(".dropdown-content").style.display === "block") {
    document.querySelector(".dropdown-content").style.display = "";
  } else {
    document.querySelector(".dropdown-content").style.display = "block";
  }
};

let darkMode = false;
document.querySelector(".mode").onclick = function () {
  let r = document.querySelector(":root");

  if (darkMode) {
    darkMode = false;
  } else {
    darkMode = true;
  }

  if (darkMode) {
    r.style.setProperty("--elements", "hsl(209, 23%, 22%)");
    r.style.setProperty("--background", "hsl(207, 26%, 17%)");
    r.style.setProperty("--input", "hsl(0, 0%, 100%)");
    r.style.setProperty("--text", "hsl(0, 0%, 100%)");
  } else {
    r.style.setProperty("--elements", "hsl(0, 0%, 100%)");
    r.style.setProperty("--background", "hsl(0, 0%, 98%)");
    r.style.setProperty("--input", "hsl(0, 0%, 52%)");
    r.style.setProperty("--text", "hsl(200, 15%, 8%)");
  }
};

function region(vieta) {
  document.querySelector(".countries").innerHTML = "";
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
      let countries = res.map((d) => d.region);

      for (let i = 0; i < countries.length; i++) {
        if (countries[i] === vieta) {
          makeCards(i);
        }
      }
    });
}
document.querySelector(".search").addEventListener("keydown", (event) => {
  if(alphaOnly(event)){
    country(document.querySelector(".search").value + event.key);
    console.log(document.querySelector(".search").value + event.key);
  }else if(backspace(event)){
    country(document.querySelector(".search").value.substring(0, document.querySelector(".search").value.length - 1));
    console.log(document.querySelector(".search").value.substring(0, document.querySelector(".search").value.length - 1));
  }
});
function country(key) {
  document.querySelector(".countries").innerHTML = "";
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
      let countries = res.map((d) => d.name);

      for (let i = 0; i < countries.length; i++) {
        if (countries[i].toLowerCase().includes(key.toLowerCase())) {
          makeCards(i);
        }
      }
    });
}
function alphaOnly(event) {
  var key = event.keyCode;
  return ((key >= 65 && key <= 90));
};
function backspace(event){
  var key = event.keyCode;
  return (key == 8);
}
function sendMe(){
  console.log("Different")
  document.querySelector('.countries ')
}