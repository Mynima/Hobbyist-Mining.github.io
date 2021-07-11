// Called on form's 'onsubmit' to store values
function tosubmit() {

    //Inputvalues
    //Section1 Scores
    let num1 = section_score(1, 5, "Hodl");
    let num2 = section_score(1, 5, "Unclear");
    let num3 = section_score(1, 5, "Sell/Consolidate");
    
    //Section2 Scores
    let num4 = section_score(2, 5, "Hodl");
    let num5 = section_score(2, 5, "Unclear");
    let num6 = section_score(2, 5, "Sell/Consolidate");

    //Section3 Scores
    let num7 = section_score(3, 5, "Hodl");
    let num8 = section_score(3, 5, "Unclear");
    let num9 = section_score(3, 5, "Sell/Consolidate");

    //Section4 Scores
    let num10 = section_score(4, 4, "Hodl");
    let num11 = section_score(4, 4, "Unclear");
    let num12 = section_score(4, 4, "Sell/Consolidate");

    // Storing the value above into localStorage
    localStorage.setItem("Num1", num1);
    localStorage.setItem("Num2", num2);
    localStorage.setItem("Num3", num3);
    localStorage.setItem("Num4", num4);
    localStorage.setItem("Num5", num5);
    localStorage.setItem("Num6", num6);
    localStorage.setItem("Num7", num7);
    localStorage.setItem("Num8", num8);
    localStorage.setItem("Num9", num9);
    localStorage.setItem("Num10", num10);
    localStorage.setItem("Num11", num11);
    localStorage.setItem("Num12", num12);

    window.open("/hsc_page2/")
    return true;
}

// Called on body's `onload` event
function init() {
    // Retrieving the text input's value which was stored into localStorage
    var num1 = localStorage.getItem("Num1");
    var num2 = localStorage.getItem("Num2");
    var num3 = localStorage.getItem("Num3");
    var num4 = localStorage.getItem("Num4");
    var num5 = localStorage.getItem("Num5");
    var num6 = localStorage.getItem("Num6");
    var num7 = localStorage.getItem("Num7");
    var num8 = localStorage.getItem("Num8");
    var num9 = localStorage.getItem("Num9");
    var num10 = localStorage.getItem("Num10");
    var num11 = localStorage.getItem("Num11");
    var num12 = localStorage.getItem("Num12");

    //Apply to relevant fields
    document.getElementById("Title_1").innerHTML = "Community/Development: "
    document.getElementById("hodl_1_score").innerHTML = (Number(num1)/(Number(num1)+Number(num2)+Number(num3))*100).toFixed(2);
    document.getElementById("unclear_1_score").innerHTML = (Number(num2)/(Number(num1)+Number(num2)+Number(num3))*100).toFixed(2);
    document.getElementById("sell_1_score").innerHTML = (Number(num3)/(Number(num1)+Number(num2)+Number(num3))*100).toFixed(2);
    document.getElementById("Title_2").innerHTML = "Track Record: "
    document.getElementById("hodl_2_score").innerHTML = (Number(num4)/(Number(num4)+Number(num5)+Number(num6))*100).toFixed(2);
    document.getElementById("unclear_2_score").innerHTML = (Number(num5)/(Number(num4)+Number(num5)+Number(num6))*100).toFixed(2);
    document.getElementById("sell_2_score").innerHTML = (Number(num6)/(Number(num4)+Number(num5)+Number(num6))*100).toFixed(2);
    document.getElementById("Title_3").innerHTML = "Cost/Value: "
    document.getElementById("hodl_3_score").innerHTML = (Number(num7)/(Number(num7)+Number(num8)+Number(num9))*100).toFixed(2);
    document.getElementById("unclear_3_score").innerHTML = (Number(num8)/(Number(num7)+Number(num8)+Number(num9))*100).toFixed(2);
    document.getElementById("sell_3_score").innerHTML = (Number(num9)/(Number(num7)+Number(num8)+Number(num9))*100).toFixed(2);
    document.getElementById("Title_4").innerHTML = "Active Participation: "
    document.getElementById("hodl_4_score").innerHTML = (Number(num10)/(Number(num10)+Number(num11)+Number(num12))*100).toFixed(2);
    document.getElementById("unclear_4_score").innerHTML = (Number(num11)/(Number(num10)+Number(num11)+Number(num12))*100).toFixed(2);
    document.getElementById("sell_4_score").innerHTML = (Number(num12)/(Number(num10)+Number(num11)+Number(num12))*100).toFixed(2);
}

// Put plot scores into an array
let plot_scores = (numA, numB, numC) => {
    let totA = localStorage.getItem(numA);
    let totB = localStorage.getItem(numB);
    let totC = localStorage.getItem(numC);

    let perA = (Number(totA)/(Number(totA)+Number(totB)+Number(totC))*100);
    let perB = (Number(totB)/(Number(totA)+Number(totB)+Number(totC))*100);
    let perC = (Number(totC)/(Number(totA)+Number(totB)+Number(totC))*100);

    var data = [
        {x: "Hodl", value:  Number(perA).toFixed(2)},
        {x: "Unclear", value:  Number(perB).toFixed(2)},
        {x: "Sell/Consolidate", value: Number(perC).toFixed(2)},
    ];
    return data;
}

//While Loops with input value
let while_loop = (start, end) => {
    var i;
    let tot = 0;
    i = start;
    while (i <= end){
        Nval = "Num" + i;
        tot = tot + Number(localStorage.getItem(Nval));
        i = i + 3;
    };
    return tot;
}

// Put plot scores into an array
let all_scores = () => {
    let totA = while_loop(1, 10);
    let totB = while_loop(2, 11);
    let totC = while_loop(3, 12);

    let perA = (Number(totA)/(Number(totA)+Number(totB)+Number(totC))*100);
    let perB = (Number(totB)/(Number(totA)+Number(totB)+Number(totC))*100);
    let perC = (Number(totC)/(Number(totA)+Number(totB)+Number(totC))*100);

    var data = [
        {x: "Hodl", value:  Number(perA).toFixed(2)},
        {x: "Unclear", value:  Number(perB).toFixed(2)},
        {x: "Sell/Consolidate", value: Number(perC).toFixed(2)},
    ];
    return data;
}

//Get the Combined Scores
let section_score = (sectionN, contribN, type) =>{
    var i;
    var totscore = 0;
    for (i = 1; i <= contribN; i++) {
        let scoreval = hsc_score(hsc_cat(rateit(sectionN, i)), weight_rate(rateit(sectionN, i)), type);
        totscore = totscore + Number(scoreval);
    }
    return totscore
}

//Score to rating
let score_rate = (score_num, low_high) => {
    let score_rate_val = "";
    if (low_high==2) {
        if (score_num==1) {
            score_rate_val = "High Sell/Consolidate";
        } else if (score_num==2) {
            score_rate_val = "Sell/Consolidate";
        } else if (score_num==3) {
            score_rate_val = "Unclear";
        } else if (score_num==4) {
            score_rate_val = "Hodl";
        } else if (score_num==5) {
            score_rate_val = "High Hodl";
        }
    } else if (low_high==1) {
        if (score_num==5) {
            score_rate_val = "High Sell/Consolidate";
        } else if (score_num==4) {
            score_rate_val = "Sell/Consolidate";
        } else if (score_num==3) {
            score_rate_val = "Unclear";
        } else if (score_num==2) {
            score_rate_val = "Hodl";
        } else if (score_num==1) {
            score_rate_val = "High Hodl";
        }
    }
    return score_rate_val;
}

//Weighted Score to rating
let weight_rate = (rate_val) => {
    if (rate_val=="High Sell/Consolidate" || rate_val=="High Hodl") {
        weighted_score = 2
    } else if(rate_val != "") {
        weighted_score = 1
    } else {
        weighted_score = 0
    }
    return weighted_score;
}

//Hodl/Sell/Unclear
let hsc_cat = (rate_val) => {
    let cat = "";
    if (rate_val=="Hodl" || rate_val=="High Hodl") {
        cat = "Hodl"
    } else if (rate_val=="Unclear") {
        cat = "Unclear"
    } else  {
        cat = "Sell/Consolidate"
    }
    return cat;
}

let hsc_score = (cat_val, score_num, spec_cat) => {
    if (cat_val == spec_cat){
        score = score_num;
    }   else {
        score = 0;
    }
    return score
}


//Rating of scores with weighting
let rateit = (section_num, part_num) => {
    //Get field scores
    let hsc_1_1 = field1_1.value;
    let hsc_1_2 = field1_2.value;
    let hsc_1_3 = field1_3.value;
    let hsc_1_4 = field1_4.value;
    let hsc_1_5 = field1_5.value;
    let hsc_2_1 = field2_1.value;
    let hsc_2_2 = field2_2.value;
    let hsc_2_3 = field2_3.value;
    let hsc_2_4 = field2_4.value;
    let hsc_2_5 = field2_5.value;
    let hsc_3_1 = field3_1.value;
    let hsc_3_2 = field3_2.value;
    let hsc_3_3 = field3_3.value;
    let hsc_3_4 = field3_4.value;
    let hsc_3_5 = field3_5.value;
    let hsc_4_1 = field4_1.value;
    let hsc_4_2 = field4_2.value;
    let hsc_4_3 = field4_3.value;
    let hsc_4_4 = field4_4.value;

    //Add to an array
    let scoreArr = [];
    scoreArr[0] = hsc_1_1;
    scoreArr[1] = hsc_1_2;
    scoreArr[2] = hsc_1_3;
    scoreArr[3] = hsc_1_4;
    scoreArr[4] = hsc_1_5;
    scoreArr[5] = hsc_2_1;
    scoreArr[6] = hsc_2_2;
    scoreArr[7] = hsc_2_3;
    scoreArr[8] = hsc_2_4;
    scoreArr[9] = hsc_2_5;
    scoreArr[10] = hsc_3_1;
    scoreArr[11] = hsc_3_2;
    scoreArr[12] = hsc_3_3;
    scoreArr[13] = hsc_3_4;
    scoreArr[14] = hsc_3_5;
    scoreArr[15] = hsc_4_1;
    scoreArr[16] = hsc_4_2;
    scoreArr[17] = hsc_4_3;
    scoreArr[18] = hsc_4_4;

    //Assign a Character value for items
    if (section_num==1){
        if (part_num==1){
            let score1_1 = score_rate(scoreArr[0], 2);
            return score1_1;
        } else if (part_num==2) {
            let score1_2 = score_rate(scoreArr[1], 2);
            return score1_2;
        } else if (part_num==3) {
            let score1_3 = score_rate(scoreArr[2], 2);
            return score1_3;
        } else if (part_num==4) {
            let score1_4 = score_rate(scoreArr[3], 2);
            return score1_4;
        } else if (part_num==5) {
            let score1_5 = score_rate(scoreArr[4], 2);
            return score1_5;
        }
        
    } else if (section_num==2) {
        if (part_num==1){
            let score2_1 = score_rate(scoreArr[5], 2);
            return score2_1;
        } else if (part_num==2) {
            let score2_2 = score_rate(scoreArr[6], 2);
            return score2_2;
        } else if (part_num==3) {
            let score2_3 = score_rate(scoreArr[7], 2);
            return score2_3;
        } else if (part_num==4) {
            let score2_4 = score_rate(scoreArr[8], 2);
            return score2_4;
        } else if (part_num==5) {
            let score2_5 = score_rate(scoreArr[9], 2);
            return score2_5;
        }

    } else if (section_num==3) {
        if (part_num==1){
            let score3_1 = score_rate(scoreArr[10], 2);
            return score3_1;
        } else if (part_num==2) {
            let score3_2 = score_rate(scoreArr[11], 1);
            return score3_2;
        } else if (part_num==3) {
            let score3_3 = score_rate(scoreArr[12], 1);
            return score3_3;
        } else if (part_num==4) {
            let score3_4 = score_rate(scoreArr[13], 1);
            return score3_4;
        } else if (part_num==5) {
            let score3_5 = score_rate(scoreArr[14], 2);
            return score3_5;
        }

    } else if (section_num==4) {
        if (part_num==1){
            let score4_1 = score_rate(scoreArr[15], 2);
            return score4_1;
        } else if (part_num==2) {
            let score4_2 = score_rate(scoreArr[16], 2);
            return score4_2;
        } else if (part_num==3) {
            let score4_3 = score_rate(scoreArr[17], 2);
            return score4_3;
        } else if (part_num==4) {
            let score4_4 = score_rate(scoreArr[18], 2);
            return score4_4;
        } 
    }

}
