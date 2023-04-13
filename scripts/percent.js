function listingPercentage() {
    if (percentage && !document.getElementById("match-percent")) {
        //console.log("add");
        const newDiv = document.createElement("h2");
        const percent = document.createTextNode("This is a " + (percentage * 100).toFixed(2) + "% match!");
        newDiv.id = "match-percent";
        newDiv.percentage = percentage;
        newDiv.style.fontSize = "20px";
        newDiv.style.color = "red";
        newDiv.appendChild(percent);
        const element = document.getElementsByClassName("style__container___RpcfM")[0];
        if (element) {
            element.prepend(newDiv);
        }
    }
    else if (document.getElementById("match-percent") && document.getElementById("match-percent").percentage != percentage) {
        //console.log("update");
        const div = document.getElementById("match-percent");
        div.innerHTML = "This is a " + (percentage * 100).toFixed(2) + "% match!";
        document.getElementById("match-percent").percentage = percentage;
    }
}

setInterval(listingPercentage, 500);