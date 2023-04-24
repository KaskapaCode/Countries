function fillPage(){
  fetch("data.json")
    .then((res) => res.json())
    .then((res) => {
      let id = localStorage.getItem("coutnry");
      let country = res[id].name;
      let nativeName = res[id].nativeName;
      let population = res[id].population;

      population = numberWithCommas(population);
    
      let region = res[id].region;
      let subRegion = res[id].subregion;
      let capital = res[id].capital;

      let topLevelDomain = "";

      for(let i = 0; i < res[id].topLevelDomain.length; i++){
        topLevelDomain += res[id].topLevelDomain[i] + ", ";
      }

      topLevelDomain = topLevelDomain.substring(0, topLevelDomain.length-2);

      let currencies = "";
      for(let i = 0; i < res[id].currencies.length; i++){
        currencies += res[id].currencies[i].name + ", ";
      }
      
      currencies = currencies.substring(0, currencies.length-2);

      let language = "";
      for(let i = 0; i < res[id].languages.length; i++){
        language += res[id].languages[i].name + ", ";
      }

      language = language.substring(0, language.length-2);

      let svg = res[id].flags.svg;

      console.log(res[id]);
      console.log(country + " " + nativeName + " " + population + " " + region + " " + subRegion + " " + capital + " " + topLevelDomain + " " + currencies + " " + language)
    
      let svgTag = document.createElement("img");
      svgTag.src = svg;
      document.querySelector(".info").append(svgTag);
      
      text = document.createElement("div");
      text.classList.add("text");

      
      let nametag = document.createElement("h1");
      let nameText = document.createTextNode(country);
      nametag.appendChild(nameText);
      text.append(nametag);

      block = document.createElement("div");
      block.classList.add("blocks");

      first = document.createElement("div");
      first.classList.add("first");

      let nativeNametag = document.createElement("p");
      let strongNativeName = document.createElement("strong");
      let strongNativeNameText = document.createTextNode("Native Name: ");
      strongNativeName.append(strongNativeNameText);
      nativeNametag.append(strongNativeName);
      let nativeNameText = document.createTextNode(nativeName + "");
      nativeNametag.appendChild(nativeNameText);
      first.append(nativeNametag);

      let populationtag = document.createElement("p");
      let strongPop = document.createElement("strong");
      let strongPopText = document.createTextNode("Population: ");
      strongPop.append(strongPopText);
      populationtag.append(strongPop);
      let populationText = document.createTextNode(population + "");
      populationtag.appendChild(populationText);
      first.append(populationtag);

      let regionTag = document.createElement("p");
      let strongReg = document.createElement("strong");
      let strongRegText = document.createTextNode("Region: ");
      strongReg.append(strongRegText);
      regionTag.append(strongReg);
      let regionText = document.createTextNode(region);
      regionTag.appendChild(regionText);
      first.append(regionTag);

      let subregionTag = document.createElement("p");
      let substrongReg = document.createElement("strong");
      let substrongRegText = document.createTextNode("Subregion: ");
      substrongReg.append(substrongRegText);
      subregionTag.append(substrongReg);
      let subregionText = document.createTextNode(subRegion);
      subregionTag.appendChild(subregionText);
      first.append(subregionTag);

      let capitalTag = document.createElement("p");
      let strongCap = document.createElement("strong");
      let strongCapText = document.createTextNode("Capital: ");
      strongCap.append(strongCapText);
      capitalTag.append(strongCap);
      let capitalText = document.createTextNode(capital);
      capitalTag.appendChild(capitalText);
      first.append(capitalTag);
      
      block.append(first);

      second = document.createElement("div");
      second.classList.add("second");

      let TLDTag = document.createElement("p");
      let strongTLD = document.createElement("strong");
      let strongTLDText = document.createTextNode("Top Level Domain: ");
      strongTLD.append(strongTLDText);
      TLDTag.append(strongTLD);
      let TLDText = document.createTextNode(topLevelDomain);
      TLDTag.appendChild(TLDText);
      second.append(TLDTag);

      let currenciesTag = document.createElement("p");
      let strongcurrencies = document.createElement("strong");
      let strongcurrenciesText = document.createTextNode("Currencies: ");
      strongcurrencies.append(strongcurrenciesText);
      currenciesTag.append(strongcurrencies);
      let currenciesText = document.createTextNode(currencies);
      currenciesTag.appendChild(currenciesText);
      second.append(currenciesTag);

      let languegesTag = document.createElement("p");
      let stronglangueges = document.createElement("strong");
      let stronglanguegesText = document.createTextNode("Languages: ");
      stronglangueges.append(stronglanguegesText);
      languegesTag.append(stronglangueges);
      let languegesText = document.createTextNode(language);
      languegesTag.appendChild(languegesText);
      second.append(languegesTag);

      block.append(second);
      text.append(block);
      document.querySelector(".info").append(text);
    })
}

fillPage();

function numberWithCommas(x) {
  x = x.toString();
  var pattern = /(-?\d+)(\d{3})/;
  while (pattern.test(x)) x = x.replace(pattern, "$1,$2");
  return x;
}

let darkMode = localStorage.getItem("mode");

change(darkMode);

document.querySelector(".mode").onclick = function () {
  if (darkMode) {
    darkMode = false;
    localStorage.setItem("mode", false);
  } else {
    darkMode = true;
    localStorage.setItem("mode", true);
  }

  change(darkMode);
};
function change(color){
  let r = document.querySelector(":root");
  if (color) {
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
  console.log(color);
}