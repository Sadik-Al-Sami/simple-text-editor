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
