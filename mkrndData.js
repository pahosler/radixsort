function makeData(seed={length: 10, numItems: 5}){
  var data = {
    alpha: function(){
      let alpha = ['A','a','B','b','C','c','D','d','E','e','F','f'];
      let alphaArr = [];
      let str = '';
      let items = seed.numItems;
      console.log('building data');
      while(items > 0) {
        for(let i=seed.length; i >0; --i){
          str += alpha[Math.floor(Math.random()*(alpha.length-1))];
        }
        alphaArr.push(str);
        str='';
        --items;
      }
      return alphaArr;
    },
    numeric: function(){
      let numeric = ['0','1','2','3','4','5','6','7','8','9'];
      let numericArr = [];
      let str = '';
      let items = seed.numItems;
      console.log('building data');
      while(items > 0) {
        for(let i=seed.length; i > 0; --i){
          str += numeric[Math.floor(Math.random()*numeric.length)];
        }
        numericArr.push(str);
        str='';
        --items;
      }
      return numericArr;
    },
    alpha_numeric: function(){
      let alpha_numeric = 
        ['0','1','2','3','4','5','6','7','8','9','0',
         'A','B','C','D','E','F','a','b','c','d','e','f'];
      let alpha_numericArr = [];
      let str = '';
      let items = seed.numItems;
      console.log('building data');
      while(items > 0) {
        for(let i=seed.length; i > 0; --i){
          str += alpha_numeric[Math.floor(Math.random()*(alpha_numeric.length-1))];
        }
        alpha_numericArr.push(str);
        str='';
        --items;
      }
      return alpha_numericArr;
    },
    cards: function(){
        let suit = ['H','D','C','S'];
        let suitChoice = {H: 13,D: 13,C: 13,S: 13};
        let cards=['A','K','Q','J','10','9','8','7','6','5','4','3','2'];
        let cardChoice = {
            
        };
        let deck = [];
        let str = '';
        let items = seed.items;
        
    }
  };
  return {
    Alpha: data.alpha,
    Numeric: data.numeric,
    AlphaNumeric: data.alpha_numeric,
    Cards: data.cards,
  };
}
module.exports = makeData;
