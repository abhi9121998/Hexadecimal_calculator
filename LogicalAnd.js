var final_result='';

function binaryString(x)
{
    var bin_string="";
    switch(x)
    {
        case '0' : bin_string='0000';break;
        case '1' : bin_string='0001';break;
        case '2' : bin_string='0010';break;
        case '3' : bin_string='0011';break;
        case '4' : bin_string='0100';break;
        case '5' : bin_string='0101';break;
        case '6' : bin_string='0110';break;
        case '7' : bin_string='0111';break;
        case '8' : bin_string='1000';break;
        case '9' : bin_string='1001';break;
        case 'A' : bin_string='1010';break;
        case 'B' : bin_string='1011';break;
        case 'C' : bin_string='1100';break;
        case 'D' : bin_string='1101';break;
        case 'E' : bin_string='1110';break;
        case 'F' : bin_string='1111';break;
    }
    return bin_string;
}

function binToHax(x)
{
    var temp="";
    switch(x)
    {
        case '0000' : temp='0';break;
        case '0001' : temp='1';break;
        case '0010' : temp='2';break;
        case '0011' : temp='3';break;
        case '0100' : temp='4';break;
        case '0101' : temp='5';break;
        case '0110' : temp='6';break;
        case '0111' : temp='7';break;
        case '1000' : temp='8';break;
        case '1001' : temp='9';break;
        case '1010' : temp='A';break;
        case '1011' : temp='B';break;
        case '1100' : temp='C';break;
        case '1101' : temp='D';break;
        case '1110' : temp='E';break;
        case '1111' : temp='F';break;
    }
    return temp;
}

function binCompute(a, b)
{
    var c="";
    for(var i=3; i>=0; i--)
    {
        if((a[i]==='0' && b[i]==='0') || (a[i]==='0' && b[i]==='1') || (a[i]==='1' && b[i]==='0'))
        {
            var temp='0';
            c=temp+c;
        }
        else if(a[i]==='1' && b[i]==='1')
        {
            var temp='1';
            c=temp+c;
        }
    }
    c=binToHax(c);
    return c;
}
function digitWiseAnd(a, b)
{
    var bin_a=binaryString(a);
    var bin_b=binaryString(b);
    
    //alert('bin_a : '+bin_a+"   "+'bin_b : '+bin_b);
    
    var result=binCompute(bin_a, bin_b);
    
    return result;
}

function logicalAnd(input_array)
{
    var a=input_array[0], b=input_array[1];
    var i,j;
    for(i=a.length-1, j=b.length-1; i>=0 && j>=0; i--, j--)
    {
        var result=digitWiseAnd(a[i],b[j]);
        //alert('result : '+result);
        final_result=result+final_result;
        //alert('final_result : '+final_result);
    }
    if(i>=0 || j>=0)
    {
        var diff=a.length-b.length;
        if(diff<0)
            diff=diff*(-1);
        for(var k=0; k<diff; k++)
        {
            final_result='0'+final_result;
        }
    }
    document.getElementById("input_tape").value=input_array[0]+' AND '+input_array[1]+' = '+final_result;
}

