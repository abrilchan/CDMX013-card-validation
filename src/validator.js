const validator = {
  // ...
  isValid:function(numeros){
    let cardNumbArray = [];
    let sum = 0;
    for (var i=0; i<numeros.length; i++){
      cardNumbArray.push(parseInt(numeros.split('')[i]));
  }

  let revCardNum = cardNumbArray.reverse();

  function multiplyNum(numbers) {
      return numbers.map(function(number, index) {
        return index % 2 ? number * 2 : number;
      });
    }

  let doubleRevCardNum = multiplyNum(revCardNum);

  let allDigToSumCardNum = doubleRevCardNum.join('');
  let toSum = [];

  for (var j=0; j<allDigToSumCardNum.length; j++){
    toSum.push(parseInt(allDigToSumCardNum.split('')[j]));
}

  for (let i = 0; i < toSum.length; i++) {
      sum += toSum[i];
  }

  let revCardNumMod = sum%10

  if (revCardNumMod === 0)
    {return true}
  else
    {return false;}
  
  },


maskify:function(card){

  function cardHide(card) {
    let hideNum = [];
    for(let i = 0; i < card.length; i++){
      if(i < card.length-4){
        hideNum.push("#")
      }else{
        hideNum.push(card[i])
      }
    }
    return hideNum.join("");

  }

  return cardHide(card);

}


};

export default validator;
