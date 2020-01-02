window.$ = window.jQuery = require('jquery');
// $("#btn").click(function () {
 $(document).ready(function() {
$("#one").click(function(){
    console.log(document.getElementById('one').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('one').getAttribute("data-name"));
});
$("#two").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('two').getAttribute("data-name"));
});
$("#three").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('three').getAttribute("data-name"));
});
$("#four").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('four').getAttribute("data-name"));
});
$("#five").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('five').getAttribute("data-name"));
});
$("#six").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('six').getAttribute("data-name"));
});
$("#seven").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('seven').getAttribute("data-name"));
});
$("#eight").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('eight').getAttribute("data-name"));
});
$("#nine").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('nine').getAttribute("data-name"));
});
$("#ten").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('ten').getAttribute("data-name"));
});
$("#eleven").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('eleven').getAttribute("data-name"));
});
$("#twelve").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('twelve').getAttribute("data-name"));
});
$("#thirteen").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('thirteen').getAttribute("data-name"));
});
$("#fourteen").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('fourteen').getAttribute("data-name"));
});
$("#fifteen").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('fifteen').getAttribute("data-name"));
});
$("#sixteen").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('sixteen').getAttribute("data-name"));
});
$("#seventeen").click(function(){
    // console.log(document.getElementById('two').getAttribute("data-name"));
     sessionStorage.setItem("test",document.getElementById('seventeen').getAttribute("data-name"));
});
});
function myfunc() {
    console.log("toggling sidebar");
    $("#side").toggleClass('active');
}
// $(".cancel").click(function () {
// function myfunc2(){
//     console.log("toggling visibility");
//     $("#side").parent().toggleClass('gone');
// }
// function date(){
//     $("#date").datepicker();
// }
$("#File").change(function () {
    $("#myModal123").modal("hide");
    $("#myModal").modal("show");
})
// function anr() {
//     $('.mod').hide();
//     $("#back").click(function () {
//         $('#exampleModal').hide();
//         $('#mod').show();
//     });
// }
$(document).ready(function() {
$('[data-toggle="popover"]').popover({
  html: true,
  content: function() {
    return $('#popover-content').html();
  }
});
$('[data-toggle="popover"]').on('click', function (e) {
  $('[data-toggle="popover"]').not(this).popover('hide');
});
});

// kitchen
$(document).on('click', "#parking", function () {
  $('#pp').modal('show');
});

function online() {
  console.log('Online order...');
  $('#onlineorder').show();
  $(".oo").css("background-color", "white");
  $(".ra").css("background-color", "");
  $('#receiptarchive').hide();
}
function receipt() {
  console.log('Receipt Archive...');
  $('#onlineorder').hide();
  $('#receiptarchive').show();
  $(".ra").css("background-color", "white");
  $(".oo").css("background-color", ""); 
}