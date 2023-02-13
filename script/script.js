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

boldBtn.addEventListener("click", function () {
    if (myPara.style.fontWeight === "bold") {
        myPara.style.fontWeight = "normal";
    }
    else {
        myPara.style.fontWeight = "bold";
    }
});
italicBtn.addEventListener("click", function () {
    if (myPara.style.fontStyle === "italic") {
        myPara.style.fontStyle = "normal";
    } 
    else {
        myPara.style.fontStyle = "italic";
    }
});
underlineBtn.addEventListener("click", function () {
    if (myPara.style.textDecoration === "underline") {
        myPara.style.textDecoration = "none";
    }
    else {
        myPara.style.textDecoration = "underline"
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
