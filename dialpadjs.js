window.$= window.jQuery=require('jquery');
var count = 0;
var number="";
console.log("okk");
var num=0;
 function myFunction1() {
		num=1;
		if (count < 4) {
		  $("#output").append('<span>' + "o " + '</span>');
          number = number +"1";
          // $("#output").append('<span>' + num + '</span>');
           // console.log("***");
  console.log(number);
  // console.log("***");
	      // console.log($("#output").val());
		   count++;
           if(count==4)
           {
            // var nn = document.getElementById("output").textContent;
            // console.log($("#output").val());
                if (number == "0000")
               {console.log("Correct Password");
           window.location.href="tab.html";
       }
               else
               {console.log("Incorrect Password");}
          }
    }
}
function myFunction2() {
	   num=2;
	   if (count < 4) {
           // $("#output").append('<span>' + "*" + '</span>');
           // $("#output2").append('<span>' + num + '</span>');
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"2";
	 console.log(num);
		 count++;
         if(count==4)
         {
          // var nn = document.getElementById("output").textContent;
          // console.log($("#output").val());
              if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction3() {
	   num=3;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"3";
	 console.log(num);
		 count++;
         if(count==4)
         {
         if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction4() {
	   num=4;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"4";
	 console.log(num);
		 count++;
         if(count==4)
         {
          if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction5() {
	   num=5;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"5";
	 console.log(num);
		 count++;
         if(count==4)
         {
         if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction6() {
	   num=6;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"6";
	 console.log(num);
		 count++;
         if(count==4)
         {
        if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction7() {
	   num=7;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"7";
	 console.log(num);
		 count++;
         if(count==4)
         {
          if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction8() {
	   num=8;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"8";
	 console.log(num);
		 count++;
         if(count==4)
         {
          if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction9() {
	   num=9;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"9";
	 console.log(num);
		 count++;
         if(count==4)
         {
         if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunction0() {
	   num=0;
	   if (count < 4) {
           $("#output").append('<span>' + "o " + '</span>');
           number = number +"0";
	 //console.log(num);
      console.log("***");
console.log(number);
console.log("***");
		 count++;
         if(count==4)
         {
         if (number == "0000")
             {console.log("Correct Password");   window.location.href="tab.html";}
             else
             {console.log("Incorrect Password");}
        }
}
}
function myFunctionclear()
  {
      console.log(number);
      console.log("type "+typeof(number));
      var len = number.length;
      console.log("length " +len);
     if (len==1)
     {
         console.log("in if");
         number="";
     }
     else{
          console.log("in else");
          console.log("number beforeee " + number);
            // var number = number.slice(0, -1);
            number = number.substring(0, number.length - 1);
            console.log("number " + number);
            console.log("going out");
         }
  $('#output span:last-child').remove();
  count--;
}
function myFunctionclearall()
 {
     console.log(number);
     number="";
 console.log(number);
  $('#output span:last-child').remove();
  $('#output span:last-child').remove();
  $('#output span:last-child').remove();
  $('#output span:last-child').remove();
  count=0;
}
