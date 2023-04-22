function listingPercentage() {
    if (percentage && !document.getElementById("match-percent")) {
        console.log("add");
        const element = document.getElementsByClassName("style__container___RpcfM")[0];
        const outer = document.createElement("div");

        /*leftside*/
        const textDiv = document.createElement("div");
        textDiv.className = "textDiv";
        const percentageDiv = document.createElement("div");
        percentageDiv.className = "percentage"
        percentageDiv.innerHTML = (percentage * 100).toFixed(2) + "%";
        percentageDiv.id = "percentageField"
        const subTextDiv = document.createElement("div");
        subTextDiv.innerHTML = "compatible!";
        const logoText = document.createElement("div");
        logoText.innerHTML = "Fistbump for Handshake";

        textDiv.appendChild(logoText);
        textDiv.appendChild(percentageDiv);
        textDiv.appendChild(subTextDiv);

        textDiv.style.cssText = "width: 300px; text-align: center; display: inline-block; margin-left: 0px; position: relative; line-height: 0.8; vertical-align: middle;"
        percentageDiv.style.cssText = "width: 300px;font-size: 60px;text-align: center;font-weight: 700; color: #4CAF70";
        subTextDiv.style.cssText = "width: 300px;font-size: 20px;text-align: center;color:#a1a1a1;";
        logoText.style.cssText = "width: 300px;font-size: 10px;text-align: center; color:#a1a1a1; padding-bottom: 10px";

        /*rightside*/
        imgDiv = document.createElement("div");
        const image = document.createElement("img");
        image.src = chrome.runtime.getURL("images/icon-128-transparent.png");
        imgDiv.appendChild(image);

        imgDiv.style.cssText = "width: 150px; display: inline-block; position: relative; margin-left: 10px; vertical-align: middle;"
        outer.style.cssText = "background-color: #ffffff;border-radius: 10px;display: flex;flex: 1;align-items: center;margin:20px;vertical-align: middle;justify-content: space-around;width: 450px;animation: fadeIn 0.5s;border: 1px solid #e0e0e0;"

        outer.appendChild(textDiv);
        outer.appendChild(imgDiv);
        outer.id = "match-percent";

        if (element) {
            element.prepend(outer);
        }
    }
    else if (document.getElementById("match-percent") && document.getElementById("percentageField").innerHTML.slice(0, -1) != (percentage * 100).toFixed(2)) {
        console.log("update: percentageFIeld is " + document.getElementById("percentageField").innerHTML + " when it should be " + (percentage * 100).toFixed(2));
        const div = document.getElementById("percentageField");
        if (div) {
            div.innerHTML = (percentage * 100).toFixed(2) + "%";
        }
    }
}


setInterval(listingPercentage, 1000);