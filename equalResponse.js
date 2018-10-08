document.writeln("<script type='text/javascript' src='addition.js'></script>");
document.writeln("<script type='text/javascript' src='subtraction.js'></script>");
document.writeln("<script type='text/javascript' src='multiply.js'></script>");
document.writeln("<script type='text/javascript' src='LogicalAnd.js'></script>");
document.writeln("<script type='text/javascript' src='LogicalOr.js'></script>");
document.writeln("<script type='text/javascript' src='LogicalXor.js'></script>");
document.writeln("<script type='text/javascript' src='LogicalNot.js'></script>");

function getInputTape(input_tape)
{
    var input_array;
    if(input_tape.includes('+'))
    {
        input_array=input_tape.split('+');
        //alert(input_array[0]+" , "+input_array[1]);
        add(input_array);
    }
    else if(input_tape.includes('-'))
    {
        input_array=input_tape.split('-');
        //alert(input_array[0]+" , "+input_array[1]);
        sub(input_array);
    }
    else if(input_tape.includes('*'))
    {
        input_array=input_tape.split('*');
        alert(input_array[0]+" , "+input_array[1]);
        multiplication(input_array);
    }
    else if(input_tape.includes(' AND '))
    {
        input_array=input_tape.split(' AND ');
        //alert(input_array[0]+" , "+input_array[1]);
        logicalAnd(input_array);
    }
    else if(input_tape.includes(' OR '))
    {
        input_array=input_tape.split(' OR ');
        //alert(input_array[0]+" , "+input_array[1]);
        logicalOr(input_array);
    }
    else if(input_tape.includes(' XOR '))
    {
        input_array=input_tape.split(' XOR ');
        //alert(input_array[0]+" , "+input_array[1]);
        logicalXor(input_array);
    }
    else if(input_tape.includes(' NOT '))
    {
        input_array=input_tape.split(' NOT ');
        //alert(input_array[0]);
        logicalNot(input_array[0]);
    }
}
