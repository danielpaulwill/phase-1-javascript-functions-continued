function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(visualFlair = '*') {
    return function inner1(singlePara = "special") {
        return `You are ${visualFlair}${singlePara}${visualFlair}!`
    }
}

wrapAdjective("%")("a dedicated programmer")