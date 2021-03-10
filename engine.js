// Track position in quiz
let position = 1;

// Check if options are selected
let optionsSelected = 0;

// Arrays to store links based on selection
let qOne = []
let qTwo = []
let qThree = []

// Objects to store information on each selection - Question one
const dryLink1 = {
    text: "Products to help dry scalp",
    links: [{
        link: "https://truahair.ie/product/system-professional-balance-shampoo/",
        text: "System Profesisonal Balance Shampoo"
    }, {
        link: "https://truahair.ie/product/scalp-genesis-soothing-shampoo/",
        text: "Scalp Genesis Soothing Shampoo"
    }],
}


const oilyLink1 = {
    text: "Products to help oily scalp",
    links: [{
        link: "https://truahair.ie/product/scalp-genesis-purifying-shampoo/",
        text: "Scalp Genesis Purifying Shampoo"
    }, {
        link: "https://truahair.ie/product/wella-invigo-balance-aqua-pure-shampoo/",
        text: "Wella Balance Aqua Pure Shampoo"
    }],
}

const dandruffLink1 = {
    text: "Products to help with Dandruff",
    links: [{
        link: "https://truahair.ie/product/system-professional-purify-shampoo/",
        text: "System Professional Purify Shampoo"
    }, {
        link: "https://truahair.ie/product/scalp-genesis-anti-dandruff-shampoo/",
        text: "Scalp Genesis Anti Dandruff Shampoo"
    }],
}

const thinningLink1 = {
    text: "Products to help with thinning scalp",
    links: [{
        link: "https://truahair.ie/product/scalp-genesis-root-activating-shampoo/",
        text: "Scalp Genesis Root Activating Shampoo"
    }, {
        link: "https://truahair.ie/?s=NIOXIN",
        text: "Nioxin Products"
    }],
}

const normalLink1 = {
    text: 'Products for a normal scalp',
    links: [{
        link: "https://truahair.ie/product/wella-luminous-reveal-shampoo/",
        text: "Wella Luminous Reveal Shampoo"
    }, {
        link: "https://truahair.ie/product/system-professional-hydrate-shampoo/",
        text: "System Professional Hydrate Shampoo"
    }],
}


// Objects to store information on each selection - Question two
const dryLink2 = {
    text: "Products to help dry hair",
    links: [{
        link: "https://truahair.ie/product/wella-invigo-nutri-enrich-conditioner/",
        text: "Wella Nutri Enrich Conditioner"
    }, {
        link: "https://truahair.ie/product/system-professional-hydrate-conditioner/",
        text: "System Professional Hydrate Conditioner"
    }],
}

const stressedLink2 = {
    text: "Products to help stressed hair",
    links: [{
        link: "https://truahair.ie/product/system-professional-smoothen-conditioner/",
        text: "System Professional Smoothen Conditioner"
    }, {
        link: "https://truahair.ie/product/wella-invigo-nutri-enrich-conditioner/",
        text: "Wella Nutri Enrich Conditioner"
    }],
}

const damagedLink2 = {
    text: "Products to help damaged hair",
    links: [{
        link: "https://truahair.ie/product/wella-fusion-conditioner/",
        text: "Wella Fusion Conditioner"
    }, {
        link: "https://truahair.ie/product/wella-system-professional-repair-conditioner/",
        text: "System Professional Repair Conditioner"
    }],
}

const limpLink2 = {
    text: "Products to help limp hair",
    links: [{
        link: "https://truahair.ie/product/wella-invigo-volume-boost-mask/",
        text: "Wella Volume Boost Mask"
    }, {
        link: "https://truahair.ie/product/system-professional-volumize-mask/",
        text: "System Professional Volume Mask"
    }],
}

const thinningLink2 = {
    text: "Products to help thinning hair",
    links: [{
        link: "https://truahair.ie/product/wella-invigo-anti-hair-loss-serum/",
        text: "Wella Anti Hair Loss Serum"
    }, {
        link: "https://truahair.ie/product/nioxin-leave-in-treatment/",
        text: "Nixion Leave In Treatment"
    }],
}

const lackingshineLink2 = {
    text: "Products to help hair lacking shine",
    links: [{
        link: "https://truahair.ie/product/wella-luminous-smoothing-oil/",
        text: "Wella Luminous Smoothing Oil"
    }, {
        link: "https://truahair.ie/product/system-professional-color-save-shimmering-spray/",
        text: "System Professional Color Save Spray"
    }],
}

const curlyLink2 = {
    text: "Products to help curly hair",
    links: [{
        link: "https://truahair.ie/product/wella-eimi-nutricurls-fresh-up/",
        text: "Wella Eimi Nutricurls Fresh Up"
    }, {
        link: "https://truahair.ie/product/wella-nutricurls-mask/",
        text: "Wella Nutricurls Mask"
    }],
}



// Objects to store information on each selection - Question three 

const hottoolsLink3 = {
    text: "I use hot tools regularly!",
    links: [{
        link: "https://truahair.ie/product/wella-eimi-thermal-image/",
        text: "Wella Eimi Thermal Image"
    }],
}

const increaseshineLink3 = {
    text: "I want to increase shine!",
    links: [{
        link: "https://truahair.ie/product/wella-luminous-reboost-mask/",
        text: "Wella Luminous Reboost Mask"
    }],
}


const deeprepairLink3 = {
    text: "My hair needs deep repair!",
    links: [{
        link: "https://truahair.ie/product/nioxin-deep-repair-hair-mask/",
        text: "Nixion Deep Repair Hair Mask"
    }],
}

const volumerootLink3 = {
    text: "I want volume from the root!",
    links: [{
        link: "https://truahair.ie/product/wella-invigo-volume-boost-uplifting-care-spray/",
        text: "Wella Volume Boost Spray"
    }],
}

const shreddingLink3 = {
    text: "My hair is prone to shredding!",
    links: [{
        link: "https://truahair.ie/product/nioxin-night-density-rescue/",
        text: "Nixion Night Density Rescue"
    }],
}

const knottyLink3 = {
    text: "My hair is knotty!",
    links: [{
        link: "https://truahair.ie/product/wella-fusion-mask/",
        text: "Wella Fusion Mask"
    }],
}

const dryshampooLink3 = {
    text: "I use dry shampoo regularly!",
    links: [{
        link: "https://truahair.ie/product/martinsson-king-invisible-cleanse-dry-shampoo/",
        text: "Martinsson King Invisible Cleanse Dry Shampoo"
    }],
}



// When an option is selected 
$('.contain-quiz').on("click", ".select-option", function () {
    $(this).toggleClass("selected");
    if ($(this).hasClass("selected")) {
        optionsSelected++;
    } else {
        optionsSelected--;
    }
    if (optionsSelected > 0) {
        // Reveal continue btn
        $('.continue-btn').removeClass("d-none");
    } else {
        $('.continue-btn').addClass("d-none");
    }

});


// When continue is clicked 
$('.contain-quiz').on("click", ".continue-btn", function () {
    console.log("Position: " + position)
    // Hide Current Question 
    $('.position' + position).addClass("d-none");
    position++;
    // Clear options selected
    $('.continue-btn').addClass("d-none");


    if (position == 5) {

        // Results for Q1
        for (i = 0; i < qOne.length; i++) {

            document.getElementById("results").innerHTML += '<div class="contain-text-2 shadow mx-auto">' + qOne[i].text;

            for (j = 0; j < qOne[i].links.length; j++) {
                document.getElementById("results").innerHTML += '<a target="_blank" href="' + qOne[i].links[j].link + '"><div class="product-links">' + qOne[i].links[j].text + '</div></a>';
            }

            document.getElementById("results").innerHTML += '</div>'
        }
        // Results for Q2
        for (i = 0; i < qTwo.length; i++) {

            document.getElementById("results").innerHTML += '<div class="contain-text-2 shadow mx-auto mt-3">' + qTwo[i].text;

            for (j = 0; j < qTwo[i].links.length; j++) {
                document.getElementById("results").innerHTML += '<a target="_blank" href="' + qTwo[i].links[j].link + '"><div class="product-links">' + qTwo[i].links[j].text + '</div></a>';
            }

            document.getElementById("results").innerHTML += '</div>'
        }


        // Results for Q3
        for (i = 0; i < qThree.length; i++) {

            document.getElementById("results").innerHTML += '<div class="contain-text-2 shadow mx-auto mt-3">' + qThree[i].text;

            for (j = 0; j < qThree[i].links.length; j++) {
                document.getElementById("results").innerHTML += '<a target="_blank" href="' + qThree[i].links[j].link + '"><div class="product-links">' + qThree[i].links[j].text + '</div></a>';
            }

            document.getElementById("results").innerHTML += '</div>'
        }
        

    }


    optionsSelected = 0;
    $('.position' + position).removeClass("d-none");




});


// Question1 Clicks 
$('.contain-quiz').on("click", ".selected-dry-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(dryLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(dryLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


$('.contain-quiz').on("click", ".selected-oily-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(oilyLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(oilyLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


$('.contain-quiz').on("click", ".selected-dandruff-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(dandruffLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(dandruffLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});

$('.contain-quiz').on("click", ".selected-thinning-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(thinningLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(thinningLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


$('.contain-quiz').on("click", ".selected-normal-q1", function () {
    if ($(this).hasClass("selected")) {
        qOne.push(normalLink1);
        console.log("Added to array");
        console.log(qOne);
    } else {
        const index = qOne.indexOf(normalLink1);
        if (index > -1) {
            qOne.splice(index, 1);
        }
        console.log(qOne);
    }
});


// Question2 Clicks 
$('.contain-quiz').on("click", ".selected-dry-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(dryLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(dryLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-stressed-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(stressedLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(stressedLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-damaged-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(damagedLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(damagedLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});

$('.contain-quiz').on("click", ".selected-limp-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(limpLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(limpLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-thinning-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(thinningLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(thinningLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


$('.contain-quiz').on("click", ".selected-lackingShine-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(lackingshineLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(lackingshineLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});

$('.contain-quiz').on("click", ".selected-curly-q2", function () {
    if ($(this).hasClass("selected")) {
        qTwo.push(curlyLink2);
        console.log("Added to array");
        console.log(qTwo);
    } else {
        const index = qTwo.indexOf(curlyLink2);
        if (index > -1) {
            qTwo.splice(index, 1);
        }
        console.log(qTwo);
    }
});


// Question3 Clicks 


$('.contain-quiz').on("click", ".selected-hottools-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(hottoolsLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(hottoolsLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});



$('.contain-quiz').on("click", ".selected-increate-shine-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(increaseshineLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(increaseshineLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});


$('.contain-quiz').on("click", ".selected-deep-repair-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(deeprepairLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(deeprepairLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});



$('.contain-quiz').on("click", ".selected-volume-root-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(volumerootLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(volumerootLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});


$('.contain-quiz').on("click", ".selected-shredding-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(shreddingLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(shreddingLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});


$('.contain-quiz').on("click", ".selected-knotty-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(knottyLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(knottyLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});




$('.contain-quiz').on("click", ".selected-dry-shampoo-q3", function () {
    if ($(this).hasClass("selected")) {
        qThree.push(dryshampooLink3);
        console.log("Added to array");
        console.log(qThree);
    } else {
        const index = qThree.indexOf(dryshampooLink3);
        if (index > -1) {
            qThree.splice(index, 1);
        }
        console.log(qThree);
    }
});