document.addEventListener("DOMContentLoaded", function(event) {
    this.getElementById("advice-text").innerHTML = "Click in the button to get a new advice";
    const button = this.getElementById("advice-button");
    button.onclick = (event)=>{
        event.preventDefault;
        fetch("https://api.adviceslip.com/advice").then((response)=>response.json()).then((json)=>{
            if (json === undefined) ;
            else {
                let advice = json["slip"]["advice"];
                let adviceId = json["slip"]["id"];
                this.getElementById("advice-text").innerHTML = "";
                this.getElementById("advice-text").innerHTML = '"' + advice + '"';
                this.getElementById("advice-title").innerHTML = "";
                this.getElementById("advice-title").innerHTML = "ADVICE #" + adviceId;
            }
        });
    };
});

//# sourceMappingURL=index.2b1cadf2.js.map
