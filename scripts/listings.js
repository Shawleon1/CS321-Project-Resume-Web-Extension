/*var jobs;
var percentage;

function checker() {
    var joblist = document.querySelector("#skip-to-content > div:nth-child(3) > div > div:nth-child(1) > div > form > div:nth-child(2) > div > div > div.style__results___MoVc6.style__resultsWithSidebar___GfH\\+1 > div.style__jobs___QnmrN > div > div:nth-child(1)");
    if (joblist) {
        jobs = joblist.children;
        for (var i = 0; i < jobs.length; i += 2) {
            var href = jobs[i].querySelector('a').getAttribute('href');
            if (jobs[i].getAttribute("text") == "" || jobs[i].getAttribute("text") == null) {
                pullListing(jobs[i], href);
            }
            if (jobs[i].getAttribute("percentage") == "" || jobs[i].getAttribute("percentage") == null || jobs[i].getAttribute("percentage") == undefined) {
                getPercentage(jobs[i]);
                console.log(percentage);
                //jobs[i].setAttribute("percentage", percentage);
                //colorListings(jobs[i]);
            }

        }
    }

}

async function pullListing(job, url) {
    const response = await fetch(url);
    const jsonData = await response.text();

    //console.log(jsonData);
    var parser = new DOMParser();
    var doc = parser.parseFromString(jsonData, 'text/html');
    const divElement = doc.querySelector('div[data-react-class="JobsShowRoot"]');
    if (divElement) {
        var test = divElement.getAttribute("data-react-props");
        //console.log(test);
        var testing = JSON.parse(test);

        var ar = document.createElement("div");
        ar.innerHTML = testing.entities.jobs.description;
        var text = ar.textContent;
        job.setAttribute("text", text);
    }
}

function colorListings(job) {
    var perm = job.getAttribute("percentage");
    if (perm > 0 && pemr <= .33) {
        job.children[0].style.backgroundColor = "pink";
    }
    else if (pemr > .33 && perm <= .50) {
        job.children[0].style.backgroundColor = "yellow";
    }
    else if (perm > .50) {
        job.children[0].style.backgroundColor = "#abdba2";
    }
    else {
        job.children[0].style.backgroundColor = "purple";
    }
}

function getPercentage(job) {
    text = job.getAttribute("text");
    chrome.storage.sync.get(['myResume'], function (result) {
        percentage = stringSimilarity.compareTwoStrings(text, result.myResume);
        console.log("inside minifunc"+percentage);
    });
}

setInterval(checker, 2000);*/