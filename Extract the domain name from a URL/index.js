let address;

function domainName(url){
    let a;
    
  if(url.indexOf('http')==-1){
    a = url.split('.');
     getElem(a)
  }else{
    a=url.split('//');
    let x = a[1].split('.')

        if(x.length>2){
             getElem(x)
   }else{
    console.log(x[0])
    return x[0]
   }   
  }
   console.log(address);
   return address;
  };
  domainName('https://coiq7m.tv/index.php')

  function getElem(arr){
    arr.forEach(el=>{
      if(el.length>4&&el.indexOf('/')==-1){
         address=el     
        }
      }
    )
  }