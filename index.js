// code your solution here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
saturdayFun("bathe my dog");

const mondayWork = function (duty = "go to the office"){
    return `This Monday, I will ${duty}.`;
}
mondayWork();
mondayWork("work from home");

function wrapAdjective(symbol){
    return function(adjective){
        return `You are ${symbol}${adjective}${symbol}!`;
    };
}
const asterisk = wrapAdjective('*');
const doublePipe = wrapAdjective('||');