// dimond drawing function n "*" dicreased one from each side bigest star n 
function drowdimend(n){
    if(n%2==0){
        var aCount =2;
    }else{
        var aCount=1;
    } 
    var rCount=Math.ceil(n/2);
    var spaceCount =rCount-1;
    for(let i=0; i<rCount; i++){
        if(i==rCount-1){
            console.log("*".repeat(n));
        }else{
            console.log(" ".repeat(spaceCount)+"*".repeat(aCount));
            spaceCount --;
            aCount +=2;

        }
    }
    for(let i=0; i<rCount-1; i++){
        aCount -=2;
        spaceCount++;
        console.log(" ".repeat(spaceCount)+ "*".repeat(aCount))
    }
}
drowdimend(9);