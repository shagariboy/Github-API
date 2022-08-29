fetch("https://api.adviceslip.com/advice")
    .then((response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("NETWORK RESPONSE ERROR");
        }
    })
    .then(data => {
        console.log(data);
        displayAd(data)
    })
    .catch((error) => console.error("FETCH ERROR:", error));

function displayAd(data) {
    const ad = data.slip;
    const adviceDiv = document.getElementById("ad");
    const adviceName = ad.advice;
    const heading = document.createElement("h1");
    heading.innerHTML = adviceName;
    adviceDiv.appendChild(heading);

}  