function showTime(){ // create function
    var date = new Date() // current date format 
    var h = date.getHours() // current hours only
    var m = date.getMinutes()  // current minutes only
    var s =date.getSeconds() // current seconds only
    var session = "AM"

    if(h == 0){
        h = 12 // 12 hour format , when hour = 00,display - hour will be 12
    }
    if(h>12){
        h = h-12 // eg ; when hour = 13 , display - time will be 13-12 = 1 
        session = "PM"
    }

    // if(h<10){
    //     h="0"+h
    // }
    // if(m<10){
    //     m="0"+m
    // }
    // if(s<10){
    //     s="0"+s
    // }

    // Another Method (ternary)
    
    /*  The conditional (ternary) operator is the only JavaScript operator that takes three operands:
        a condition followed by a question mark (?), 
        then an expression to execute if the condition is truthy followed by a colon (:),
        and finally the expression to execute if the condition is falsy. 
        This operator is frequently used as a shortcut for the if statement. */

    h = (h<10)?"0"+h:h
    m = (m<10)?"0"+m:m
    s = (s<10)?"0"+s:s

 

    document.getElementById("digitalClock").innerHTML = h + ":" + m + ":" + s +" "+session

    setTimeout(showTime,1000) // function, milliseconds => 1000 millis = 1 second
}
showTime() // function  call