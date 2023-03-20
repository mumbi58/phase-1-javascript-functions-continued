// code your solution here
function saturdayFun(two="roller-skate"){
    return `This Saturday, I want to ${two}!`;
  }
  saturdayFun("bathe my dog");
  function mondayWork(one="go to the office"){
    return `This Monday, I will ${one}.`;}
  function wrapAdjective(adjective="*"){
  const innerF= function(three="special"){
    return `You are ${adjective}${three}${adjective}!`;
  }
  return innerF;
  }
