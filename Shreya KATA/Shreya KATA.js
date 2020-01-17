//Sum of Triangular Numbers
//https://www.codewars.com/kata/580878d5d27b84b64c000b51/train/javascript

function sumTriangularNumbers(n) {
  var num=0,sum=0;
  for(let i=0;i<=n;i++)
  {
    num+=i*1
    sum+=num
  }
  return sum
}

//Growing Plant
//https://www.codewars.com/kata/58941fec8afa3618c9000184/train/javascript

function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let currentHeight=0;
  for(var i=1;;i++){
    if(currentHeight < desiredHeight)
    {
      currentHeight+=upSpeed;
    }
      
    else if(currentHeight>=desiredHeight)
    {
        break;
    }
    else
    {
        currentHeight-=downSpeed;
    }}
  
  return i-1;
  
}

//Get Nth Even Number
//https://www.codewars.com/kata/5933a1f8552bc2750a0000ed/train/javascript

function nthEven(n)
{
  return n*2-2;
}


//Do i get a bonus?   
//https://www.codewars.com/kata/56f6ad906b88de513f000d96/train/javascript
function bonusTime(salary, bonus) {
if(bonus)
  {
    return `£${10 * salary}`;
  }
  else
  {
    return  `£${salary}`;
  }
 }
