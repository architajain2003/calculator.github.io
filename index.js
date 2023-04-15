document.addEventListener("keypress",function(event)
{
   if(event.key === "1")
   {
    event.preventDefault();
    document.getElementById("one").click();
   } 
   else if(event.key === "2")
   {
    event.preventDefault();
    document.getElementById("two").click();
   } 
   else if(event.key === "3")
   {
    event.preventDefault();
    document.getElementById("three").click();
   } 
   else if(event.key === "4")
   {
    event.preventDefault();
    document.getElementById("four").click();
   } 
   else if(event.key === "5")
   {
    event.preventDefault();
    document.getElementById("five").click();
   } 
   else if(event.key === "6")
   {
    event.preventDefault();
    document.getElementById("six").click();
   } 
   else if(event.key === "7")
   {
    event.preventDefault();
    document.getElementById("seven").click();
   } 
   else if(event.key === "8")
   {
    event.preventDefault();
    document.getElementById("eight").click();
   } 
   else if(event.key === "9")
   {
    event.preventDefault();
    document.getElementById("nine").click();
   } 
   else if(event.key === "0")
   {
    event.preventDefault();
    document.getElementById("zero").click();
   } 
   else if(event.key === "00")
   {
    event.preventDefault();
    document.getElementById("doublezero").click();
    document.getElementById("doublezero").click();
   } 
   else if(event.key === ".")
   {
    event.preventDefault();
    document.getElementById("dot").click();
   } 
   else if(event.key === "Enter")
   {
    event.preventDefault();
    document.getElementById("equals").click();
   } 
   else if(event.key === "+")
   {
    event.preventDefault();
    document.getElementById("add").click();
   } 
   else if(event.key === "-")
   {
    event.preventDefault();
    document.getElementById("subtract").click();
   } 
   else if(event.key === "*")
   {
    event.preventDefault();
    document.getElementById("multiply").click();
   } 
   else if(event.key === "/")
   {
    event.preventDefault();
    document.getElementById("divide").click();
   } 
   else if(event.key === "%")
   {
    event.preventDefault();
    document.getElementById("percentage").click();
   } 
//    if(event.key === "backspace")
//    {
//     event.preventDefault();
//     document.getElementById("del").click();
//    } 
//    if(event.key === "1")
//    {
//     event.preventDefault();
//     document.getElementById("one").click();
//    } 
});
// document.addEventListener("keypress",function(event)
// {
//         buttonanimation(event.key);
//         // console.log(event.key);
    
// });
// function buttonanimation(currentkey)
// {
//     var activebutton=document.querySelector(currentkey);
//     activebutton.classList.add("pressed");
//     setTimeout(function()
//     {
//         activebutton.classList.remove("pressed");
//     },100);
// }
