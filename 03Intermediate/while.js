let i=0;

var fruit=["apple","mango","kivi",322,"banana",101];

while (i<fruit.length) 
{
    if (typeof fruit[i] !== "string") 
    {
        console.log(fruit[i]);
    }
    i++
}