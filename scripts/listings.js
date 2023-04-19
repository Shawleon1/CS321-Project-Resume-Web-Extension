var jobs;
var jobPercent;
var resumeText;
var interval;

function getResume() {
    chrome.storage.sync.get(['myResume'], function (result) {
        resumeText = result.myResume;
    });
}

function checker() {
    var joblist = document.querySelector("#skip-to-content > div:nth-child(3) > div > div:nth-child(1) > div > form > div:nth-child(2) > div > div > div.style__results___MoVc6.style__resultsWithSidebar___GfH\\+1 > div.style__jobs___QnmrN").lastChild.firstChild;
    if (joblist) {
        jobs = joblist.children;
        for (var i = 0; i < jobs.length; i += 2) {
            /* get listing url */
            var href = jobs[i].querySelector('a').getAttribute('href');
            /* if text hasn't already been grabbed, get job description */
            if (jobs[i].getAttribute("text") == "" || jobs[i].getAttribute("text") == null) {
                pullListing(jobs[i], href);
            }
            /* if already grabbed set percentage and color */
            getjobPercent(jobs[i]);
            jobs[i].setAttribute("percentage", jobPercent);
            if (jobs[i].getAttribute("text") && jobs[i].getAttribute("percentage")) {
                jobs[i].style.backgroundColor = colorListings(jobs[i].getAttribute("percentage"));
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

function colorListings(perm) {
    if (perm > 0 && perm <= .33) {
        return "#ffcfcf";
    }
    else if (perm > .33 && perm <= .50) {
        return "#fffdbd";
    }
    else if (perm > .50) {
        return "#c9ffbd";
    }
    else {
        return "#bfa2db";
    }
}

function getjobPercent(job) {
    var text = new String(job.getAttribute("text"));
    jobPercent = stringSimilarity.compareTwoStrings(text, resumeText);
}

getResume();
interval = setInterval(checker, 1000);