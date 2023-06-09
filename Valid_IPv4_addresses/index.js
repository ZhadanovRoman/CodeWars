function isValidIP(str) {
  let a;
  let marker = false;
  a = str.split('.');
  if(a.length==4){
   a.forEach((el)=>{
   
    let i=/[^\d-]/g;
   if(i.test(el)==true){
   
    marker=true}
   let x = Number(el);
   if(x>256||x<0||isNaN(x)===true){
     marker=true;  
   }
  })
  if(marker==true){
    console.log(false)
   return false
 }else{
  console.log(true)
   return true}
  }else{
    console.log(false)
    return false}
}
isValidIP('123.14.20.0')


