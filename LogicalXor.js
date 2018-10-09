document.writeln("<script type='text/javascript' src='LogicalAnd.js'></script>");

function binComputeXor(a, b)
{
    var c="";
    for(var i=3; i>=0; i--)
    {
        if((a[i]==='0' && b[i]==='0') || (a[i]==='1' && b[i]==='1'))
        {
            var temp='0';
            c=temp+c;
        }
        else if(a[i]==='0' && b[i]==='1' || (a[i]==='1' && b[i]==='0'))
        {
            var temp='1';
            c=temp+c;
        }
    }
    c=binToHax(c);
    return c;
}

function digitWiseXor(a, b)
{
    var bin_a=binaryString(a);
    var bin_b=binaryString(b);
    
    //alert('bin_a : '+bin_a+"   "+'bin_b : '+bin_b);
    
    var result=binComputeXor(bin_a, bin_b);
    
    return result;
}


function logicalXor(input_array)
{
    var a=input_array[0], b=input_array[1];
    for(i=a.length-1, j=b.length-1; i>=0 && j>=0; i--, j--)
    {
        var result=digitWiseXor(a[i],b[j]);
        //alert('result : '+result);
        final_result=result+final_result;
        //alert('final_result : '+final_result);
    }
    if(i>=0 || j>=0)
    {
        var diff=a.length-b.length;
        var copy_var='a';
        if(diff<0)
        {
            diff=diff*(-1);
            copy_var='b';
        }
        for(var k=i; k>-1; k--)
        {
            if(copy_var==='a')
            {
                final_result=a[k]+final_result;
            }
            else if(copy_var==='b')
            {
                final_result=b[k]+final_result;
            }
        }
    }
    document.getElementById("input_tape").value=input_array[0]+' XOR '+input_array[1]+' = '+final_result;
}