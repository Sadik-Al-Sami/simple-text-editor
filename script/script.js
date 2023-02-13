const boldBtn = document.getElementById("boldBtn");
const italicBtn = document.getElementById("italicBtn");
const underlineBtn = document.getElementById("underlineBtn");
const colorPicker = document.getElementById("colorPicker");
const leftAlignBtn = document.getElementById("leftAlign");
const rightAlignBtn = document.getElementById("rightAlign");
const centerAlignBtn = document.getElementById("centerAlign");
const justifyAlignBtn = document.getElementById("justifyAlign");
const fontSizeInput = document.getElementById("fontSize");
const myPara = document.getElementById("myPara");
const boldIcon = document.getElementById("boldIcon");
const italicIcon = document.getElementById("italicIcon");
const underlineIcon = document.getElementById("underlineIcon");

boldBtn.addEventListener("click", function () {
    if (myPara.style.fontWeight === "bold") {
        myPara.style.fontWeight = "normal";
        boldBtn.classList.remove("bg-white");
        boldIcon.classList.remove("text-blue-400");
    }
    else {
        myPara.style.fontWeight = "bold";
        boldBtn.classList.add("bg-white");
        boldIcon.classList.add("text-blue-400")
    }
});
italicBtn.addEventListener("click", function () {
    if (myPara.style.fontStyle === "italic") {
        myPara.style.fontStyle = "normal";
        italicBtn.classList.remove("bg-white");
        italicIcon.classList.remove("text-blue-400");
    }
    else {
        myPara.style.fontStyle = "italic";
        italicBtn.classList.add("bg-white");
        italicIcon.classList.add("text-blue-400");
    }
});
underlineBtn.addEventListener("click", function () {
    if (myPara.style.textDecoration === "underline") {
        myPara.style.textDecoration = "none";
        underlineBtn.classList.remove("bg-white");
        underlineIcon.classList.remove("text-blue-400");
    }
    else {
        myPara.style.textDecoration = "underline"
        underlineBtn.classList.add("bg-white");
        underlineIcon.classList.add("text-blue-400");
    }
})
justifyAlignBtn.addEventListener("click", function () {
    if (myPara.style.textAlign === "justify") {
        myPara.style.textAlign = "normal";
    }
    else {
        myPara.style.textAlign = "justify"
    }
})
colorPicker.addEventListener("change", function () {
    myPara.style.color = colorPicker.value;
});

leftAlignBtn.addEventListener("click", function () {
    myPara.style.textAlign = "left";
});

centerAlignBtn.addEventListener("click", function () {
    myPara.style.textAlign = "center";
});

rightAlignBtn.addEventListener("click", function () {
    myPara.style.textAlign = "right";
});

justifyAlignBtn.addEventListener("click", function () {
    myPara.style.textAlign = "justify";
})

fontSizeInput.addEventListener("change", function () {
    myPara.style.fontSize = parseFloat(fontSizeInput.value) + "px"
});

// copy paste issue solution from web
myPara.addEventListener("paste", function (event) {
    event.preventDefault(); // prevent default paste behavior
    var text = event.clipboardData.getData("text/plain"); // get the plain text from the user
    document.execCommand("insertHTML", false, "<span>" + text + "</span>"); // insert text as unformatted
    myPara.normalize(); // merge adjacent text nodes
    myPara.style.lineHeight = "1.2"; // set a fixed line height to prevent spacing issues
});
