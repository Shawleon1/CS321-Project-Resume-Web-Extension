document.title = "My awesome title!" 
//#skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___RpcfM > div:nth-child(4)
//#skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___RpcfM > div:nth-child(4) > span
const article = document.querySelector("#skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___RpcfM > div:nth-child(4)");
console.log("doot");

if (article) {
  const text = article.textContent;
  console.log(text);
}

//const article = document.querySelector("article");


//cheat: #skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___bvruv > div.style__preferences___SVKod