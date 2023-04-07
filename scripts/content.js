document.title = "My awesome title!" 


const article = document.querySelector("#skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___RpcfM > div:nth-child(4) > span > div > div.style__content___3pUVU.style__gradient___pCCEs > div > div > div");

if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;

  /*
  var lines = myText.split("\n");
  var numLines = lines.length;
  var i;
  var currentSection;
  var sections = Array();
  var phrases = Array();

  // parse phrases
  for (i = 0; i < numLines; i++) {
    var line = lines[i];
    if (line.indexOf('@') == 1) {
      // start of e.g. time section, handled in nex loop
      break;
    } else {
      // phrase
      phrase.push(line);
    }
  }

  // parse sections
  for ( ; i < numLines; i++) {
    var line = lines[i];
    if (line.indexOf('@') == 1) {
      // start of next section, handled in nex loop
      currentSection = line;
      sections[currentSection] = new Array();
    } else {
      // add section entry
      sections[currentSection].push(line);
    }
  }
  */
}

//const article = document.querySelector("article");
/*
// `document.querySelector` may return null if the selector doesn't match anything.
if (article) {
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g; // Regular expression
  const words = text.matchAll(wordMatchRegExp);
  // matchAll returns an iterator, convert to array to get word count
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");
  // Use the same styling as the publish information in an article's header
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}#main-content > div.display-flex.gap-top-300.lg\:gap-top-400 > div > article
*/

//cheat: #skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___bvruv > div.style__preferences___SVKod