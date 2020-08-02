
let h = prompt("Enter hours");
let m = prompt("Enter mins");
let s = prompt("Enter seconds");

function pad2(num)
{
    return(num < 10?'0':' ')+num;
}

function stopwatch()
{
    if(h>=0)
    {
        if(m>=0)
        {
            if(s>0)
            {
                s--;
            }
                        
        }
                    
    }
    dispH = pad2(h);
    dispM = pad2(m);
    dispS = pad2(s);
    document.getElementById("txt").innerHTML = dispH +" : "+dispM+" : "+dispS;

    if(s==0 && m!=0)
    {
        s = 60;
        m--;
    }
    if(m==0 && h!=0)
    {
        m = 60;
        h--;
    }
}
