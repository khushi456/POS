window.$=window.jQuery = require('jquery');
var count = 0;
console.log("okk");
var num=0;
 function myFunction1() {
		num=1;
		if (count < 4) {
		  $("#output").append('<span>' + num + '</span>');

	      // console.log($("#output").val());
		   count++;
           if(count==4)
           {
            var nn = document.getElementById("output").textContent;
            console.log($("#output").val());
                if (nn == "0000")
               {console.log("Correct Password");
              window.location.href = "tab.html";}
               else
               {console.log("Incorrect Password");}
          }
    }
}

function myFunction2() {
	   num=2;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction3() {
	   num=3;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction4() {
	   num=4;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction5() {
	   num=5;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction6() {
	   num=6;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction7() {
	   num=7;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction8() {
	   num=8;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction9() {
	   num=9;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}
function myFunction0() {
	   num=0;
	   if (count < 4) {
		 $("#output").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;
         if(count==4)
         {
          var nn = document.getElementById("output").textContent;
          console.log($("#output").val());
              if (nn == "0000")
             {console.log("Correct Password");
           window.location.href = "tab.html";}
             else
             {console.log("Incorrect Password");}
        }

}
}

function myFunctionclear()
 {
  $('#output span:last-child').remove();
  count--;
}
function myFunctionclearall()
 {
  $('#output span:last-child').remove();
  $('#output span:last-child').remove();
  $('#output span:last-child').remove();
  $('#output span:last-child').remove();
  count=0;
}
