document.writeln("<script type='text/javascript' src='LogicalAnd.js'></script>");

function binComputeNot(a)
{
    var c="";
    for(var i=3; i>=0; i--)
    {
        if(a[i]==='0')
        {
            var temp='1';
            c=temp+c;
        }
        else if(a[i]==='1')
        {
            var temp='0';
            c=temp+c;
        }
    }
    c=binToHax(c);
    return c;
}

function digitWiseNot(a)
{
    var bin_a=binaryString(a);
    
    //alert('bin_a : '+bin_a);
    
    var result=binComputeNot(bin_a);
    
    return result;
}

function logicalNot(input_ele)
{
    var a=input_ele;
    for(i=a.length-1; i>=0 ; i--)
    {
        var result=digitWiseNot(a[i]);
        //alert('result : '+result);
        final_result=result+final_result;
        //alert('final_result : '+final_result);
    }
    document.getElementById("input_tape").value=' ~'+input_ele+' = '+final_result;
}