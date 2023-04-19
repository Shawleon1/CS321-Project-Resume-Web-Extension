//document.title = "My awesome title!" 
//#skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___RpcfM > div:nth-child(4)
//#skip-to-content > div:nth-child(3) > div > div:nth-child(1) > div > form > div:nth-child(2) > div > div > div.job-preview.style__details___paBkq > div.style__details-padding___hw3R3 > div.style__container___RpcfM > div:nth-child(4)
var text;
var percentage;

function inbox()
{
  const fromInbox = document.querySelector("#skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___RpcfM > div:nth-child(4)");
  if (fromInbox) {
    text = fromInbox.textContent.slice(16,-21);;
    chrome.storage.sync.get(['myResume'], function(result) { 
      percentage = stringSimilarity.compareTwoStrings(text, result.myResume);
      console.log(percentage);
    });
    console.log(text);
  }
}

function postings()
{
  const fromPostings = document.querySelector("#skip-to-content > div:nth-child(3) > div > div:nth-child(1) > div > form > div:nth-child(2) > div > div > div.job-preview.style__details___paBkq > div.style__details-padding___hw3R3 > div.style__container___RpcfM");
  if (fromPostings)
  {
    text = fromPostings.lastChild.textContent.slice(16,-21);
    chrome.storage.sync.get(['myResume'], function(result) { 
      percentage = stringSimilarity.compareTwoStrings(text, result.myResume);
      console.log(percentage);
    });
    console.log(text);
  }
}

console.log("doot");

inbox();

setInterval(postings, 1000);

//cheat: #skip-to-content > div:nth-child(2) > div > div:nth-child(1) > div > div > div > div.style__container___bvruv > div.style__preferences___SVKod