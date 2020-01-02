var count1 = 0;
var count2 = 0;
var count3 = 0;
var cashh=0 , tipp=0, tott=0;

var num=0;
var turn=1;
console.log("okk");
window.$ = window.jQuery = require('jquery');
// $(document).ready(function() {
//
// var x = sessionStorage.getItem("test1");
// $("#output").val($("#output").val()+ x );
// $("#output").val($("#output").val()+ x );
// console.log($("#output").val($("#output").val()+ y ));
// var y = sessionStorage.getItem("test2");
// $("#output2").val($("#output2").val()+ y );
// console.log("***")
// console.log($("#output2").val($("#output2").val()+ y ));


// });

function func0(){
         console.log("turn 1 tips");
         turn=1;
     }
function func1(){
    console.log("turn 3");
              turn=3;
}
function func2(){
         console.log("turn 2");
         turn=2;
     }
// $('.cash').html(shoppingCart.totalCart());

$(document).ready(function() {
    // $('#btnn').click(function(){
    var x = sessionStorage.getItem("test1");
    $("#output").val($("#output").val()+ x );
    $("#output2").val($("#output2").val()+ x );

    console.log("yess");
var num= $("#output2").val();
var n = num.toString();
document.getElementById("abc_total").innerHTML = n;
        // document.getElementById("abc_total").innerHTML = n;
   //  var tip= $("#tips").val();
   //  console.log(tip);
   //  var cash= $("#output").val();
   //  console.log(cash);
   //  console.log(parseFloat(tip)+parseFloat(cash));
   //  var x = parseFloat(tip)+parseFloat(cash);
   //
   // $("#output2").val(x);
   //   $("#output2").append('');

// });
});
function myFunction50() {
       num=50;
         if(turn==3) { myFunctionclearall(); $("#output").val($("#output").val()+"50");   count3+=2}
          else if (turn==2) { myFunctionclearall(); $("#output2").val($("#output2").val()+"50");  count2+=2;}
          else if (turn==1) { myFunctionclearall(); $("#tips").val($("#tips").val()+"50");   count1+=2;}

          var tip= $("#tips").val();
          console.log(tip);
          var cash= $("#output").val();
          console.log(cash);
          console.log(parseFloat(tip)+parseFloat(cash));
          var x = parseFloat(tip)+parseFloat(cash);

         $("#output2").val(x);

         var num= $("#output2").val();
         var n = num.toString();
         document.getElementById("abc_total").innerHTML = n;
console.log(num);
}
function myFunction100() {
       num=100;
       if(turn==3) { myFunctionclearall(); $("#output").val($("#output").val()+"100");   count3+=3}
        else if (turn==2) { myFunctionclearall(); $("#output2").val($("#output2").val()+"100");  count2+=3;}
        else if (turn==1) { myFunctionclearall(); $("#tips").val($("#tips").val()+"100");   count1+=3;}
        var tip= $("#tips").val();
        console.log(tip);
        var cash= $("#output").val();
        console.log(cash);
        console.log(parseFloat(tip)+parseFloat(cash));
        var x = parseFloat(tip)+parseFloat(cash);

       $("#output2").val(x);

       var num= $("#output2").val();
       var n = num.toString();
       document.getElementById("abc_total").innerHTML = n;
console.log(num);
}

 function myFunction1() {

		  // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3) {   $("#output").val($("#output").val()+"1");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"1");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"1");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);

          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
console.log(num);



}
function myFunction2() {
	   num=2;

       if(turn==3) {   $("#output").val($("#output").val()+"2");   count3++;}
        else if (turn==2) {  $("#output2").val($("#output2").val()+"2");  count2++;}
        else if (turn==1) {   $("#tips").val($("#tips").val()+"2");   count1++;}
        var tip= $("#tips").val();
        console.log(tip);
        var cash= $("#output").val();
        console.log(cash);
        console.log(parseFloat(tip)+parseFloat(cash));
        var x = parseFloat(tip)+parseFloat(cash);

       $("#output2").val(x);
       var num= $("#output2").val();
       var n = num.toString();
       document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunction3() {
	   num=3;

       if(turn==3) {   $("#output").val($("#output").val()+"3");   count3++;}
        else if (turn==2) {  $("#output2").val($("#output2").val()+"3");  count2++;}
        else if (turn==1) {   $("#tips").val($("#tips").val()+"3");   count1++;}
        var tip= $("#tips").val();
        console.log(tip);
        var cash= $("#output").val();
        console.log(cash);
        console.log(parseFloat(tip)+parseFloat(cash));
        var x = parseFloat(tip)+parseFloat(cash);

       $("#output2").val(x);
       var num= $("#output2").val();
       var n = num.toString();
       document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunction4() {
	   num=4;

		 // $("#output").append('<span>' + num + '</span>');
         if(turn==3) {   $("#output").val($("#output").val()+"4");   count3++;}
          else if (turn==2) {  $("#output2").val($("#output2").val()+"4");  count2++;}
          else if (turn==1) {   $("#tips").val($("#tips").val()+"4");   count1++;}
          var tip= $("#tips").val();
          console.log(tip);
          var cash= $("#output").val();
          console.log(cash);
          console.log(parseFloat(tip)+parseFloat(cash));
          var x = parseFloat(tip)+parseFloat(cash);

         $("#output2").val(x);
         var num= $("#output2").val();
         var n = num.toString();
         document.getElementById("abc_total").innerHTML = n;
          // $("#output2").append('<span>' + num + '</span>');
	 console.log(num);



}
function myFunction5() {
	   num=5;

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3) {   $("#output").val($("#output").val()+"5");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"5");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"5");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunction6() {
	   num=6;

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3) {   $("#output").val($("#output").val()+"6");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"6");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"6");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunction7() {
	   num=7;

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          // if(turn==3) {$("#output").append('<span>' + num + '</span>');   count3++;}
          //  else if (turn==2) { $("#output2").append('<span>' + num + '</span>');   count2++;}
          //  else if (turn==1) { $("#tips").append('<span>' + num + '</span>');   count1++;}
          if(turn==3) {   $("#output").val($("#output").val()+"7");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"7");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"7");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunction8() {
	   num=8;

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3) {   $("#output").val($("#output").val()+"8");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"8");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"8");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}

function myFunction9() {
	   num=9;

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3) {   $("#output").val($("#output").val()+"9");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"9");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"9");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunction0() {
	   num=0;

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3) {   $("#output").val($("#output").val()+"0");   count3++;}
           else if (turn==2) {  $("#output2").val($("#output2").val()+"0");  count2++;}
           else if (turn==1) {   $("#tips").val($("#tips").val()+"0");   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}
function myFunctiondot() {
	   num='.';

		 // $("#output").append('<span>' + num + '</span>');
          // $("#output2").append('<span>' + num + '</span>');
          if(turn==3 && cashh==0) {   $("#output").val($("#output").val()+".");  cashh=1; count3++;}
           else if (turn==2 && tott==0) {  $("#output2").val($("#output2").val()+"."); tott=1 ; count2++;}
           else if (turn==1 && tipp==0) {   $("#tips").val($("#tips").val()+"."); tipp=1;   count1++;}
           var tip= $("#tips").val();
           console.log(tip);
           var cash= $("#output").val();
           console.log(cash);
           console.log(parseFloat(tip)+parseFloat(cash));
           var x = parseFloat(tip)+parseFloat(cash);

          $("#output2").val(x);
          var num= $("#output2").val();
          var n = num.toString();
          document.getElementById("abc_total").innerHTML = n;
	 console.log(num);



}

// function myFunctionclear()
//  {
//
//   if(turn==3) {  $('#output span:last-child').remove();   count3--;}
//    else if (turn==2) {   $('#output2 span:last-child').remove();   count2--;}
//    else if (turn==1) {   $('#tips span:last-child').remove();   count1--;}
//    // $('#output2 span:last-child').remove();
//
// }
function myFunctionclearall()
 {

     // if(turn==3) {   document.getElementById('output').value = ''; count3--;}
     //  else if (turn==2) {   while(count2>0) {  $('#output2 span:last-child').remove();  count2--;}}
     //  else if (turn==1) {  while(count1>0) {  $('#tips span:last-child').remove();  count1--;}}
     if(turn==3) {   document.getElementById('output').value = ''; count3=0; cashh=0;}
      else if (turn==2) {  document.getElementById('output2').value = ''; count2=0;  tott=0;}
      else if (turn==1) {
          var tt=document.getElementById('tips').value;
          var cc=document.getElementById('output2').value;
          var sub=cc-tt;
          var nn = sub.toString();
          document.getElementById("abc_total").innerHTML = nn;

          document.getElementById('tips').value = ''; count1=0;  tipp=0;
  }
      var num= $("#output2").val();
      var n = num.toString();
      document.getElementById("abc_total").innerHTML = n;


}

$(document).keydown(function(e){

        switch(e.which){

            case 96:num=0;
                // $("#output").append('<span>' + 0 + '</span>');
                // $("#output2").append('<span>' + 0 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"0");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"0");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"0");   count1++;}
                // number.append("0");
                var tip= $("#tips").val();
                console.log(tip);
                var cash= $("#output").val();
                console.log(cash);
                console.log(parseFloat(tip)+parseFloat(cash));
                var x = parseFloat(tip)+parseFloat(cash);

                $("#output2").val(x);
                var num= $("#output2").val();
                var n = num.toString();
                document.getElementById("abc_total").innerHTML = n;
                break;
                case 48:num=0;
                    // $("#output").append('<span>' + 0 + '</span>');
                    // $("#output2").append('<span>' + 0 + '</span>');
                    if(turn==3) {   $("#output").val($("#output").val()+"0");   count3++;}
                     else if (turn==2) {  $("#output2").val($("#output2").val()+"0");  count2++;}
                     else if (turn==1) {   $("#tips").val($("#tips").val()+"0");   count1++;}
                    // number.append("0");
                    var tip= $("#tips").val();
                    console.log(tip);
                    var cash= $("#output").val();
                    console.log(cash);
                    console.log(parseFloat(tip)+parseFloat(cash));
                    var x = parseFloat(tip)+parseFloat(cash);

                    $("#output2").val(x);
                    var num= $("#output2").val();
                    var n = num.toString();
                    document.getElementById("abc_total").innerHTML = n;
                    break;

            case 97:num=1;
                // $("#output").append('<span>' + 1 + '</span>');
                // $("#output2").append('<span>' + 1 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"1");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"1");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"1");   count1++;}
                // number.append("1");
                var tip= $("#tips").val();
                console.log(tip);
                var cash= $("#output").val();
                console.log(cash);
                console.log(parseFloat(tip)+parseFloat(cash));
                var x = parseFloat(tip)+parseFloat(cash);

               $("#output2").val(x);
               var num= $("#output2").val();
               var n = num.toString();
               document.getElementById("abc_total").innerHTML = n;
                break;
                case 49 :num=1;
                    // $("#output").append('<span>' + 1 + '</span>');
                    // $("#output2").append('<span>' + 1 + '</span>');
                    if(turn==3) {   $("#output").val($("#output").val()+"1");   count3++;}
                     else if (turn==2) {  $("#output2").val($("#output2").val()+"1");  count2++;}
                     else if (turn==1) {   $("#tips").val($("#tips").val()+"1");   count1++;}
                    // number.append("1");
                    var tip= $("#tips").val();
                    console.log(tip);
                    var cash= $("#output").val();
                    console.log(cash);
                    console.log(parseFloat(tip)+parseFloat(cash));
                    var x = parseFloat(tip)+parseFloat(cash);

                   $("#output2").val(x);
                   var num= $("#output2").val();
                   var n = num.toString();
                   document.getElementById("abc_total").innerHTML = n;
                    break;

            case 98:
                 // $("#output").append('<span>' + 2 + '</span>');
                 // $("#output2").append('<span>' + 2 + '</span>');
                 num=2;
                 if(turn==3) {   $("#output").val($("#output").val()+"2");   count3++;}
                  else if (turn==2) {  $("#output2").val($("#output2").val()+"2");  count2++;}
                  else if (turn==1) {   $("#tips").val($("#tips").val()+"2");   count1++;}
                  var tip= $("#tips").val();
                  console.log(tip);
                  var cash= $("#output").val();
                  console.log(cash);
                  console.log(parseFloat(tip)+parseFloat(cash));
                  var x = parseFloat(tip)+parseFloat(cash);

                  $("#output2").val(x);
                  var num= $("#output2").val();
                  var n = num.toString();
                  document.getElementById("abc_total").innerHTML = n;
                // number.append("2");
                break;
                case 50 :num=1;
                    // $("#output").append('<span>' + 1 + '</span>');
                    // $("#output2").append('<span>' + 1 + '</span>');
                    if(turn==3) {   $("#output").val($("#output").val()+"2");   count3++;}
                     else if (turn==2) {  $("#output2").val($("#output2").val()+"2");  count2++;}
                     else if (turn==1) {   $("#tips").val($("#tips").val()+"2");   count1++;}
                    // number.append("1");
                    var tip= $("#tips").val();
                    console.log(tip);
                    var cash= $("#output").val();
                    console.log(cash);
                    console.log(parseFloat(tip)+parseFloat(cash));
                    var x = parseFloat(tip)+parseFloat(cash);

                   $("#output2").val(x);
                   var num= $("#output2").val();
                   var n = num.toString();
                   document.getElementById("abc_total").innerHTML = n;
                    break;
            case 99:num=3;
            // $("#output").append('<span>' + 3 + '</span>');
            // $("#output2").append('<span>' + 3 + '</span>');
            if(turn==3) {   $("#output").val($("#output").val()+"3");   count3++;}
             else if (turn==2) {  $("#output2").val($("#output2").val()+"3");  count2++;}
             else if (turn==1) {   $("#tips").val($("#tips").val()+"3");   count1++;}
             var tip= $("#tips").val();
             console.log(tip);
             var cash= $("#output").val();
             console.log(cash);
             console.log(parseFloat(tip)+parseFloat(cash));
             var x = parseFloat(tip)+parseFloat(cash);

             $("#output2").val(x);
             var num= $("#output2").val();
             var n = num.toString();
             document.getElementById("abc_total").innerHTML = n;
                // number.append("3");
                break;
                case 51:num=3;
                // $("#output").append('<span>' + 3 + '</span>');
                // $("#output2").append('<span>' + 3 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"3");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"3");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"3");   count1++;}
                 var tip= $("#tips").val();
                 console.log(tip);
                 var cash= $("#output").val();
                 console.log(cash);
                 console.log(parseFloat(tip)+parseFloat(cash));
                 var x = parseFloat(tip)+parseFloat(cash);

                 $("#output2").val(x);
                 var num= $("#output2").val();
                 var n = num.toString();
                 document.getElementById("abc_total").innerHTML = n;
                    // number.append("3");
                    break;
            case 100:num=4;
            // $("#output").append('<span>' + 4 + '</span>');
            // $("#output2").append('<span>' + 4 + '</span>');
            if(turn==3) {   $("#output").val($("#output").val()+"4");   count3++;}
             else if (turn==2) {  $("#output2").val($("#output2").val()+"4");  count2++;}
             else if (turn==1) {   $("#tips").val($("#tips").val()+"4");   count1++;}
             var tip= $("#tips").val();
             console.log(tip);
             var cash= $("#output").val();
             console.log(cash);
             console.log(parseFloat(tip)+parseFloat(cash));
             var x = parseFloat(tip)+parseFloat(cash);

             $("#output2").val(x);
             var num= $("#output2").val();
             var n = num.toString();
             document.getElementById("abc_total").innerHTML = n;
                // number.append("4");
                break;
                case 52:num=4;
                // $("#output").append('<span>' + 4 + '</span>');
                // $("#output2").append('<span>' + 4 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"4");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"4");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"4");   count1++;}
                 var tip= $("#tips").val();
                 console.log(tip);
                 var cash= $("#output").val();
                 console.log(cash);
                 console.log(parseFloat(tip)+parseFloat(cash));
                 var x = parseFloat(tip)+parseFloat(cash);

                 $("#output2").val(x);
                 $("#output2").val(x);
                 var num= $("#output2").val();
                 var n = num.toString();
                 document.getElementById("abc_total").innerHTML = n;
                    // number.append("4");

                    break;

            case 101:num=5;
            // $("#output").append('<span>' + 5 + '</span>');
            // $("#output2").append('<span>' + 5 + '</span>');
            if(turn==3) {   $("#output").val($("#output").val()+"5");   count3++;}
             else if (turn==2) {  $("#output2").val($("#output2").val()+"5");  count2++;}
             else if (turn==1) {   $("#tips").val($("#tips").val()+"5");   count1++;}
             var tip= $("#tips").val();
             console.log(tip);
             var cash= $("#output").val();
             console.log(cash);
             console.log(parseFloat(tip)+parseFloat(cash));
             var x = parseFloat(tip)+parseFloat(cash);

             $("#output2").val(x);
             $("#output2").val(x);
             var num= $("#output2").val();
             var n = num.toString();
             document.getElementById("abc_total").innerHTML = n;
                // number.append("5");
                break;
                case 53:num=5;
                // $("#output").append('<span>' + 5 + '</span>');
                // $("#output2").append('<span>' + 5 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"5");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"5");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"5");   count1++;}
                 var tip= $("#tips").val();
                 console.log(tip);
                 var cash= $("#output").val();
                 console.log(cash);
                 console.log(parseFloat(tip)+parseFloat(cash));
                 var x = parseFloat(tip)+parseFloat(cash);

                 $("#output2").val(x);
                 $("#output2").val(x);
                 var num= $("#output2").val();
                 var n = num.toString();
                 document.getElementById("abc_total").innerHTML = n;
                    // number.append("5");
                    break;
            case 102:num=6;
            // $("#output").append('<span>' + 6 + '</span>');
            // $("#output2").append('<span>' + 6 + '</span>');
            if(turn==3) {   $("#output").val($("#output").val()+"6");   count3++;}
             else if (turn==2) {  $("#output2").val($("#output2").val()+"6");  count2++;}
             else if (turn==1) {   $("#tips").val($("#tips").val()+"6");   count1++;}
                // number.append("6");
                var tip= $("#tips").val();
                console.log(tip);
                var cash= $("#output").val();
                console.log(cash);
                console.log(parseFloat(tip)+parseFloat(cash));
                var x = parseFloat(tip)+parseFloat(cash);

               $("#output2").val(x);
               $("#output2").val(x);
               var num= $("#output2").val();
               var n = num.toString();
               document.getElementById("abc_total").innerHTML = n;
                break;
                case 54:num=6;
                // $("#output").append('<span>' + 6 + '</span>');
                // $("#output2").append('<span>' + 6 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"6");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"6");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"6");   count1++;}
                    // number.append("6");
                    var tip= $("#tips").val();
                    console.log(tip);
                    var cash= $("#output").val();
                    console.log(cash);
                    console.log(parseFloat(tip)+parseFloat(cash));
                    var x = parseFloat(tip)+parseFloat(cash);

                   $("#output2").val(x);
                   $("#output2").val(x);
                   var num= $("#output2").val();
                   var n = num.toString();
                   document.getElementById("abc_total").innerHTML = n;
                    break;

            case 103:num=7;
            // $("#output").append('<span>' + 7 + '</span>');
            // $("#output2").append('<span>' + 7 + '</span>');
            if(turn==3) {   $("#output").val($("#output").val()+"7");   count3++;}
             else if (turn==2) {  $("#output2").val($("#output2").val()+"7");  count2++;}
             else if (turn==1) {   $("#tips").val($("#tips").val()+"7");   count1++;}
             var tip= $("#tips").val();
             console.log(tip);
             var cash= $("#output").val();
             console.log(cash);
             console.log(parseFloat(tip)+parseFloat(cash));
             var x = parseFloat(tip)+parseFloat(cash);

             $("#output2").val(x);
             $("#output2").val(x);
             var num= $("#output2").val();
             var n = num.toString();
             document.getElementById("abc_total").innerHTML = n;
                // number.append("7");
                break;
                case 55:num=7;
                // $("#output").append('<span>' + 7 + '</span>');
                // $("#output2").append('<span>' + 7 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"7");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"7");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"7");   count1++;}
                 var tip= $("#tips").val();
                 console.log(tip);
                 var cash= $("#output").val();
                 console.log(cash);
                 console.log(parseFloat(tip)+parseFloat(cash));
                 var x = parseFloat(tip)+parseFloat(cash);

                 $("#output2").val(x);
                    // number.append("7");
                    $("#output2").val(x);
                    var num= $("#output2").val();
                    var n = num.toString();
                    document.getElementById("abc_total").innerHTML = n;
                    break;

            case 104:num=8;
            // $("#output").append('<span>' + 8 + '</span>');
            // $("#output2").append('<span>' + 8 + '</span>');
            if(turn==3) {   $("#output").val($("#output").val()+"8");   count3++;}
             else if (turn==2) {  $("#output2").val($("#output2").val()+"8");  count2++;}
             else if (turn==1) {   $("#tips").val($("#tips").val()+"8");   count1++;}
             var tip= $("#tips").val();
             console.log(tip);
             var cash= $("#output").val();
             console.log(cash);
             console.log(parseFloat(tip)+parseFloat(cash));
             var x = parseFloat(tip)+parseFloat(cash);

             $("#output2").val(x);
             $("#output2").val(x);
             var num= $("#output2").val();
             var n = num.toString();
             document.getElementById("abc_total").innerHTML = n;
                // number.append("8");
                break;
                case 56:num=8;
                // $("#output").append('<span>' + 8 + '</span>');
                // $("#output2").append('<span>' + 8 + '</span>');
                if(turn==3) {   $("#output").val($("#output").val()+"8");   count3++;}
                 else if (turn==2) {  $("#output2").val($("#output2").val()+"8");  count2++;}
                 else if (turn==1) {   $("#tips").val($("#tips").val()+"8");   count1++;}
                 var tip= $("#tips").val();
                 console.log(tip);
                 var cash= $("#output").val();
                 console.log(cash);
                 console.log(parseFloat(tip)+parseFloat(cash));
                 var x = parseFloat(tip)+parseFloat(cash);

                 $("#output2").val(x);
                 $("#output2").val(x);
                 var num= $("#output2").val();
                 var n = num.toString();
                 document.getElementById("abc_total").innerHTML = n;
                    // number.append("8");
                    break;
            case 105:num=9;
            // $("#output").append('<span>' + 9 + '</span>');
            // $("#output2").append('<span>' + 9 + '</span>');
            // if(turn==3) {$("#output").append('<span>' + num + '</span>'); count3++;}
            if(turn==3) {   $("#output").val($("#output").val()+"9");   count3++;}
              else if (turn==2) { $("#output2").val($("#output2").val()+"9");  count2++;}
             else if (turn==1) { $("#tips").val($("#tips").val()+"9");   count1++;}
             var tip= $("#tips").val();
             console.log(tip);
             var cash= $("#output").val();
             console.log(cash);
             console.log(parseFloat(tip)+parseFloat(cash));
             var x = parseFloat(tip)+parseFloat(cash);

             $("#output2").val(x);
             $("#output2").val(x);
             var num= $("#output2").val();
             var n = num.toString();
             document.getElementById("abc_total").innerHTML = n;
                // number.append("9");
                break;
                case 57:num=9;
                // $("#output").append('<span>' + 9 + '</span>');
                // $("#output2").append('<span>' + 9 + '</span>');
                // if(turn==3) {$("#output").append('<span>' + num + '</span>'); count3++;}
                if(turn==3) {   $("#output").val($("#output").val()+"9");   count3++;}
                  else if (turn==2) { $("#output2").val($("#output2").val()+"9");  count2++;}
                 else if (turn==1) { $("#tips").val($("#tips").val()+"9");   count1++;}
                 var tip= $("#tips").val();
                 console.log(tip);
                 var cash= $("#output").val();
                 console.log(cash);
                 console.log(parseFloat(tip)+parseFloat(cash));
                 var x = parseFloat(tip)+parseFloat(cash);

                 $("#output2").val(x);
                 $("#output2").val(x);
                 var num= $("#output2").val();
                 var n = num.toString();
                 document.getElementById("abc_total").innerHTML = n;
                    // number.append("9");
                    break;

            case 8:
            // if(turn==3) { $('#output span:last-child').remove();
            //  count3--;}
            if(turn==3) {   document.getElementById('output').value = ''; count3=0; cashh=0;}
             else if (turn==2) {  document.getElementById('output2').value = ''; count2=0; tott=0; }
             else if (turn==1) {  document.getElementById('tips').value = ''; count1=0; tipp=0; }

               break;

            case 110:num='.';
              // $("#output").append('<span>' + '.' + '</span>');
               // $("#output2").append('<span>' + '.' + '</span>');
               // if(turn==3 && cas=0) {   $("#output").val($("#output").val()+"."); cas=1  count3++;}
               //  else if (turn==2 && tot=0) {  $("#output2").val($("#output2").val()+"."); tot=1  count2++;}
               //  else if (turn==1 && tip=0) {   $("#tips").val($("#tips").val()+".");  tip=1 count1++;}
               if(turn==3 && cashh==0) {   $("#output").val($("#output").val()+".");  cashh=1; count3++;}
                else if (turn==2 && tott==0) {  $("#output2").val($("#output2").val()+"."); tott=1; count2++;}
                else if (turn==1 && tipp==0) {   $("#tips").val($("#tips").val()+"."); tipp=1;  count1++;}
                var tip= $("#tips").val();
                console.log(tip);
                var cash= $("#output").val();
                console.log(cash);
                console.log(parseFloat(tip)+parseFloat(cash));
                var x = parseFloat(tip)+parseFloat(cash);

                $("#output2").val(x);
                $("#output2").val(x);
                var num= $("#output2").val();
                var n = num.toString();
                document.getElementById("abc_total").innerHTML = n;
               break;
               case 190:num='.';
                 // $("#output").append('<span>' + '.' + '</span>');
                  // $("#output2").append('<span>' + '.' + '</span>');
                  // if(turn==3 && cas=0) {   $("#output").val($("#output").val()+"."); cas=1  count3++;}
                  //  else if (turn==2 && tot=0) {  $("#output2").val($("#output2").val()+"."); tot=1  count2++;}
                  //  else if (turn==1 && tip=0) {   $("#tips").val($("#tips").val()+".");  tip=1 count1++;}
                  if(turn==3 && cashh==0) {   $("#output").val($("#output").val()+".");  cashh=1; count3++;}
                   else if (turn==2 && tott==0) {  $("#output2").val($("#output2").val()+"."); tott=1; count2++;}
                   else if (turn==1 && tipp==0) {   $("#tips").val($("#tips").val()+"."); tipp=1;  count1++;}
                   var tip= $("#tips").val();
                   console.log(tip);
                   var cash= $("#output").val();
                   console.log(cash);
                   console.log(parseFloat(tip)+parseFloat(cash));
                   var x = parseFloat(tip)+parseFloat(cash);

                   $("#output2").val(x);
                   $("#output2").val(x);
                   var num= $("#output2").val();
                   var n = num.toString();
                   document.getElementById("abc_total").innerHTML = n;
                  break;

             case 27:
             // if(turn==3) {while(count>0)
             // { $('#output span:last-child').remove(); count3--;}}
             if(turn==3) {   document.getElementById('output').value = ''; count3=0;}
              else if (turn==2) {document.getElementById('output2').value = ''; count3=0; }
              else if (turn==1) { document.getElementById('tips').value = ''; count1=0;}


                break;

            default: return;
        }

        e.preventDefault();
    });
