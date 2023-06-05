
function spinWords(string){
  let arr = string.split(' ');
  let arrDone = []
  
arr.forEach((el)=>{
  if(el.length<4){
   arrDone.push(el)
  console.log(arrDone)
  }else{
    let rev = el.split('').reverse().join('');
    arrDone.push(rev);
    
  }
})

return arrDone.join(' ')
}


spinWords("Hey fellow warriors")


