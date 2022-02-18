
let variableDecleration_int = 0
let variableDecleration_str = "some string"
let variableDecleration_float=0.0
const variableDecleration_pi = 3.141592653589793
const variableDecleration_array=new Array(8).fill('X');

function functionName( arr) 
{ 
//insert code here  
for(let i=0;i<arr.length;i++)
{
    console.log(arr[i]);
}
}
function functionNameMultippleArgs() 
{ 
//insert code here  
for(let i=0;i<arr.length;i++)
{
    console.log(arguments);
}
}
functionName(variableDecleration_array)
functionNameMultippleArgs(1,2,3,4,5,6,7,8,8)

// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
  
  console.log(square(2)) // 4
  
  const square = n => {
    return n * n
  }
  
  console.log(square(2))  // -> 4