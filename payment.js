var count = 0;
console.log("okk");
var num=0;
 function myFunction1() {
		num=1;

		  $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
console.log(num);
	  //console.log($("#output").val());
		  count++;
         //  console.log(count);
         //  if(count==4)
         //  {
         //      var nn = $("#output").val();
         //      console.log("yeaah");
         //        console.log($("#output").val());
         //       if ($("#output").text(nn) == "1111")
         //      {console.log("yess");}
         //      else {
         //           console.log("no");
         //       }
         // }


}
function myFunction2() {
	   num=2;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction3() {
	   num=3;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;

}
function myFunction4() {
	   num=4;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction5() {
	   num=5;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction6() {
	   num=6;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction7() {
	   num=7;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction8() {
	   num=8;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction9() {
	   num=9;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunction0() {
	   num=0;

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}
function myFunctiondot() {
	   num='.';

		 $("#output").append('<span>' + num + '</span>');
          $("#output2").append('<span>' + num + '</span>');
	 console.log(num);
		 count++;


}

function myFunctionclear()
 {
  $('#output span:last-child').remove();
   $('#output2 span:last-child').remove();
  count--;
}
function myFunctionclearall()
 {
     while(count>0)
     {
  $('#output span:last-child').remove();

  $('#output2 span:last-child').remove();
  count--;
     }

}
