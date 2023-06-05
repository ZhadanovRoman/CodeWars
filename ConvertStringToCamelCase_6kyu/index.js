function toCamelCase(str){
   
    
    let arr=[]
    if(str.indexOf('_')!=-1&&str.indexOf('-')!=-1){
    let str1= str.split('_');
        arr.push(str1[0])
        for( let i =1; i<str1.length;i++){
          arr.push(str1[i].charAt(0).toUpperCase()+ str1[i].slice(1))
        }
    let str2 = arr.join('').split('-');
    console.log(str2)
    arr=[];
        arr.push(str2[0]);
        
        for( let i =1; i<str2.length;i++){
            arr.push(str2[i].charAt(0).toUpperCase()+ str2[i].slice(1))
    } 
 console.log(arr.join(''))
     return arr.join('');
       
    }else if(str.indexOf('_')!=-1){
        let str1= str.split('_');
        arr.push(str1[0])
        for( let i =1; i<str1.length;i++){
          arr.push(str1[i].charAt(0).toUpperCase()+ str1[i].slice(1))
        }
    }else{
        let str2 = str.split('-');
        arr.push(str2[0])
        for( let i =1; i<str2.length;i++){
            arr.push(str2[i].charAt(0).toUpperCase()+ str2[i].slice(1))
    }
   
     
    }
    console.log(arr.join(''))
    
    return arr.join('')
}
    toCamelCase('a-pippi-was-cute');
    
    /*function toCamelCase(str){

   let x = /\*|-|_|\$/g;
     console.log(str.replace(x,''))   
    }toCamelCase("the_stealth_warrior")
   */