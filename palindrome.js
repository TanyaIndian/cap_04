

let name = "naman";
let bag = ""; 
for(let i = name.length - 1; i >=0; i--)
{
    bag += name[i]
}

if(name == bag)
{
    console.log("Panlindrome");
}
else{
    console.log("Not palindrome");
}

