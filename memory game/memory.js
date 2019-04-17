//array with memory text
var memoryText =[
    "memo",
    "ry",
    "memory",
    "memo",
    "memory",
    "ry",
    "text",
    "css",
    "text",
    "css",
]
memoryText.toString();
var cardToPlay = document.querySelectorAll(".card");

//for loop in which all Array elements are in divs
for(var i=0; i<memoryText.length; i++)
{
    cardToPlay[i].innerHTML= memoryText[i];
}
//add event listiner in which I use toggle to change div class
for(var j=0; j<cardToPlay.length; j++)
{
    cardToPlay[j].addEventListener('click', function()
    {
       if(this.style.backgroundColor==='grey')
       {
           this.style.backgroundColor='';
       }
       else
       {
            this.style.backgroundColor='grey';
       }
    });
}


//if condition in which I check array elements are the same
function idenctial(arrayElement)
{
    for(var k=0; k<memoryText.length; k++)
    {
        if (memoryText[k]!==memoryText[k+1])
        {
            return false
        }
        else
        {
            cardToPlay.style.backgroundColor = 'white';
        }
    }
} 