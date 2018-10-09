document.writeln("<script type='text/javascript' src='addition.js'></script>");
var final_result="";
var carry=0;
function mul(a,b)
{
    var x=parseInt(getValue1(a));
    var y=parseInt(getValue1(b));
    //alert('carry : '+carry);
    var value=x*y+carry;
    //alert('value : '+value);
    if(value>15)
    {
        carry=Math.floor(value/16);
        value=value%16;
    }
    else
        carry=0;
    value=check(value);
    return value;
}

function multiplication(input_array)
{
    var a='',b='';
    var i,j;
    if(input_array[0].length>=input_array[1].length)
    {
        a=input_array[0];
        b=input_array[1];
        i=a.length-1;
        j=b.length-1;
    }
    else
    {
        a=input_array[1];
        b=input_array[0];
        i=a.length-1;
        j=b.length-1;
    }
    var result=new Array(j+1);
    result.fill('0');
    var index=0;
    for(j ; j>=0; j--)
    {
        var temp=i;
        for(i ; i>=0; i--)
        {
            result[index]=mul(a[i],b[j])+result[index];
        }
        if(carry!==0)
        {
            result[index]=carry+result[index];
        }
        for(var k=0; k<index; k++)
        {
            result[index]=result[index]+'0';
        }
        result[index]=result[index].slice(0,result[index].length-1);
        //alert(result[index]);
        i=temp;
        index++;
        carry=0;
    }
    for(var i=0; i<result.length; i++)
    {
        alert(result[k]);
    }
}