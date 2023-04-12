function displayPercentage() {
    if (percentage && !document.getElementById("match-percent")) {
        //console.log("add");
        const newDiv = document.createElement("h2");
        const percent = document.createTextNode("This is a " + (percentage * 100).toFixed(2) + "% match!");
        newDiv.id = "match-percent";
        newDiv.percentage = percentage;
        newDiv.style.fontSize = "20px";
        newDiv.style.color = "red";
        newDiv.appendChild(percent);
        const element = document.querySelector("#skip-to-content > div:nth-child(3) > div > div:nth-child(1) > div > form > div:nth-child(2) > div > div > div.job-preview.style__details___paBkq > div.style__details-padding___hw3R3 > div:nth-child(1)");
        element.appendChild(newDiv);
    }
    else if (document.getElementById("match-percent").percentage != percentage) {
        //console.log("update");
        const div = document.getElementById("match-percent");
        div.innerHTML = "This is a " + (percentage * 100).toFixed(2) + "% match!";
        document.getElementById("match-percent").percentage = percentage;
    }
}

setInterval(displayPercentage, 500);