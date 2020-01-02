window.$ = window.jQuery = require('jquery');

$(document).ready(function () {
  console.log("***");
  var xx = sessionStorage.getItem("test");
  console.log(xx);
  console.log("yess");
  $('#bar').hide();
  document.getElementById("abc").innerHTML = xx;
});

// changes
$(document).ready(function () {
  $("#bar-icon").click(function () {
    $('#bar').show();
  });
  var countries = ["Salmon salads", "Seafood salad", "Caesar salad", "Greek salad", "Roasted Salmon", "Smoky hake", "Salmon sandwich", "Minestone", "Borsch", "Vegetable soup", "Cheese creamy soup", "Lime cupcake", "Banana pie", "Brownie", "Carrot cake", "Cheesecake", "Cherry pie", "Chia pudding", "Rasberry cake", "Apples", "Oranges", "Banana", "Grapes", "Bread basket", "Porterhouse steak", "chicken sandwich", "Meat donuts", "chicken wings", "Beverages",];
  console.log("countriess");
  /*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
  autocomplete(document.getElementById("myInput"), countries);
  function autocomplete(inp, arr) {
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function (e) {
      var a, b, i, val = this.value;
      /*close any already open lists of autocompleted values*/
      closeAllLists();
      if (!val) { return false; }
      currentFocus = -1;
      /*create a DIV element that will contain the items (values):*/
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      /*append the DIV element as a child of the autocomplete container:*/
      this.parentNode.appendChild(a);
      /*for each item in the array...*/
      for (i = 0; i < arr.length; i++) {
        /*check if the item starts with the same letters as the text field value:*/
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          /*create a DIV element for each matching element:*/
          b = document.createElement("DIV");
          /*make the matching letters bold:*/
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          /*insert a input field that will hold the current array item's value:*/
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          /*execute a function when someone clicks on the item value (DIV element):*/
          b.addEventListener("click", function (e) {
            /*insert the value for the autocomplete text field:*/
            inp.value = this.getElementsByTagName("input")[0].value;
            console.log("cli");
            console.log(inp.value);
            if (inp.value.localeCompare("Salmon salads") == 0 || inp.value.localeCompare("Seafood salad") == 0 ||
              inp.value.localeCompare("Caesar salad") == 0 || inp.value.localeCompare("Greek salad") == 0) {
              console.log("sal");
              $('#one').hide();
              $('#two').hide();
              $('#demo').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#demo').hide();
              });
            }
            else if (inp.value.localeCompare("Roasted Salmon") == 0 || inp.value.localeCompare("Smoky hake") == 0 ||
              inp.value.localeCompare("Salmon sandwich") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#fish').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#fish').hide();
              });
            }
            else if (inp.value.localeCompare("Minestone") == 0 || inp.value.localeCompare("Borsch") == 0 ||
              inp.value.localeCompare("Vegetable soup") == 0 || inp.value.localeCompare("Cheese creamy soup") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#soups').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#soups').hide();
              });
            }
            else if (inp.value.localeCompare("Lime cupcake") == 0 || inp.value.localeCompare("Banana pie") == 0 ||
              inp.value.localeCompare("Brownie") == 0 || inp.value.localeCompare("Carrot cake") == 0 ||
              inp.value.localeCompare("Cheesecake") == 0 || inp.value.localeCompare("Cherry pie") == 0 ||
              inp.value.localeCompare("Chia pudding") == 0 || inp.value.localeCompare("Rasberry cake") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#desserts').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#desserts').hide();
              });
            }
            else if (inp.value.localeCompare("Apples") == 0 || inp.value.localeCompare("Oranges") == 0 ||
              inp.value.localeCompare("Banana") == 0 || inp.value.localeCompare("Grapes") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#fruit').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#fruit').hide();
              });
            }
            else if (inp.value.localeCompare("Bread basket") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#bread').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#bread').hide();
              });
            }
            else if (inp.value.localeCompare("Porterhouse steak") == 0 || inp.value.localeCompare("chicken sandwich") == 0 ||
              inp.value.localeCompare("Meat donuts") == 0 || inp.value.localeCompare("chicken wings") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#meat').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#meat').hide();
              });
            }
            else if (inp.value.localeCompare("Beverages") == 0) {
              $('#one').hide();
              $('#two').hide();
              $('#beverages').show();
              $("#light").click(function () {
                $('#one').show();
                $('#two').show();
                $('#beverages').hide();
              });
            }
            /*close the list of autocompleted values,
            (or any other open lists of autocompleted values:*/
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });
    /*execute a function presses a key on the keyboard:*/
    // console.log("cli");
    inp.addEventListener("keydown", function (e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        /*If the arrow DOWN key is pressed,
        increase the currentFocus variable:*/
        currentFocus++;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 38) { //up
        /*If the arrow UP key is pressed,
        decrease the currentFocus variable:*/
        currentFocus--;
        /*and and make the current item more visible:*/
        addActive(x);
      } else if (e.keyCode == 13) {
        /*If the ENTER key is pressed, prevent the form from being submitted,*/
        e.preventDefault();
        if (currentFocus > -1) {
          /*and simulate a click on the "active" item:*/
          if (x) x[currentFocus].click();
        }
      }
    });
    function addActive(x) {
      /*a function to classify an item as "active":*/
      if (!x) return false;
      /*start by removing the "active" class on all items:*/
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      /*add class "autocomplete-active":*/
      x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
      /*a function to remove the "active" class from all autocomplete items:*/
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    function closeAllLists(elmnt) {
      /*close all autocomplete lists in the document,
      except the one passed as an argument:*/
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    /*execute a function when someone clicks in the document:*/
    document.addEventListener("click", function (e) {
      closeAllLists(e.target);
    });
    // $('#bar').hide();
  }
});
// 



function myfun(paravalue) {
  var backup = document.body.innerHTML;
  var divcontent = document.getElementById(paravalue).innerHTML;
  document.body.innerHTML = divcontent;
  window.print();
  document.body.innerHTML = backup;
  location.reload();
}
function myFunction1() {
  $('#one').hide();
  $('#two').hide();
  $('#demo').show();

  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#demo').hide();
  });

}
function myFunction2() {
  $('#one').hide();
  $('#two').hide();
  $('#fish').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#fish').hide();

  });
}

function myFunction3() {
  $('#one').hide();
  $('#two').hide();
  $('#soups').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#soups').hide();

  });

}
function myFunction4() {
  $('#one').hide();
  $('#two').hide();
  $('#desserts').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#desserts').hide();

  });

}
function myFunction5() {
  $('#one').hide();
  $('#two').hide();
  $('#fruit').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#fruit').hide();

  });

}
function myFunction6() {
  $('#one').hide();
  $('#two').hide();
  $('#bread').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#bread').hide();

  });

}
function myFunction7() {
  $('#one').hide();
  $('#two').hide();
  $('#meat').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#meat').hide();

  });

}
function myFunction8() {
  $('#one').hide();
  $('#two').hide();
  $('#beverages').show();
  $("#light").click(function () {

    $('#one').show();
    $('#two').show();
    $('#beverages').hide();

  });

}
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
function myfunc() {
  console.log("toggling sidebar");
  $("#side").toggleClass('active');
  }
// });

var shoppingCart = (function () {

  cart = [];
  // Constructor
  function Item(name, price, count) {
    this.name = name;
    this.price = price;
    this.count = count;
  }
  // Save cart
  function saveCart() {
    sessionStorage.setItem('shoppingCart', JSON.stringify(cart));
  }
  // Load cart
  function loadCart() {
    cart = JSON.parse(sessionStorage.getItem('shoppingCart'));
  }
  if (sessionStorage.getItem("shoppingCart") != null) {
    loadCart();
  }

  // =============================
  // Public methods and propeties
  // =============================
  var obj = {};

  // Add to cart
  obj.addItemToCart = function (name, price, count) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count++;
        console.log(cart[item].count);
        saveCart();
        return;
      }
    }
    var item = new Item(name, price, count);
    cart.push(item);
    saveCart();
  }
  // Set count from item
  obj.setCountForItem = function (name, count) {
    for (var i in cart) {
      if (cart[i].name === name) {
        cart[i].count = count;
        break;
      }
    }
  };
  // Remove item from cart
  obj.removeItemFromCart = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        cart[item].count--;
        console.log(cart[item].count);
        if (cart[item].count === 0) {
          cart.splice(item, 1);
        }
        break;
      }
    }
    saveCart();
  }

  // Remove all items from cart
  obj.removeItemFromCartAll = function (name) {
    for (var item in cart) {
      if (cart[item].name === name) {
        console.log(name);
        cart.splice(item, 1);
        break;
      }
    }
    saveCart();
  }

  // Clear cart
  obj.clearCart = function () {
    cart = [];
    saveCart();
  }

  // Count cart
  obj.totalCount = function () {
    var totalCount = 0;
    for (var item in cart) {
      totalCount += cart[item].count;
    }
    return totalCount;
  }

  // Total cart
  //  var globtot=0;
  //  var totalCart=0;
  obj.totalCart = function () {
    var totalCart = 0;
    for (var item in cart) {
      totalCart += cart[item].price * cart[item].count;
      //  globtot=totalCart;
    }
    return Number(totalCart.toFixed(2));
  }

  // Discount cart
  obj.discountCart = function () {
    var globtot = obj.totalCart();
    var discountCart = 0;
    for (var item in cart) {
      discountCart += cart[item].price * cart[item].count * 0.15;
    }
    // console.log(globtot);
    return Number(globtot - discountCart.toFixed(2));
  }
  // List cart
  obj.listCart = function () {
    var cartCopy = [];
    for (i in cart) {
      item = cart[i];
      itemCopy = {};
      for (p in item) {
        itemCopy[p] = item[p];

      }
      itemCopy.total = Number(item.price * item.count).toFixed(2);
      cartCopy.push(itemCopy)
    }
    return cartCopy;
  }

  // cart : Array
  // Item : Object/Class
  // addItemToCart : Function
  // removeItemFromCart : Function
  // removeItemFromCartAll : Function
  // clearCart : Function
  // countCart : Function
  // totalCart : Function
  // listCart : Function
  // saveCart : Function
  // loadCart : Function
  return obj;
})();

// *****************************************
// Triggers / Events
// *****************************************
// Add item

// function imageClick(){
//  var name = document.getElementById('data-name').textContent;
//  var price =document.getElementById('data-price').textContent;
//  console.log(name);
//  console.log(price);
//  shoppingCart.addItemToCart(name, price, 1);
//  displayCart();
// }
$(document).ready(function () {
  $('.card1').click(function (event) {
    event.preventDefault();
    var name = $(this).data('name');
    var price = Number($(this).data('price'));
    shoppingCart.addItemToCart(name, price, 1);
    displayCart();
  });
  //Body 
  $('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
      console.log('hey');
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});
  $('body').on('click', function (e) {
    $('[data-toggle=popover]').each(function () {
      console.log('hey');
        // hide any open popovers when the anywhere else in the body is clicked
        if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
            $(this).popover('hide');
        }
    });
});




  $(document).on('click', "#clear-cart", function () {
    shoppingCart.clearCart();
    displayCart();
  });
  //kitchen

  $(document).on('click', "#parking", function () {
    console.log("Parking clicked");
    $('#pp').modal('show');
  });
  //percentage
  $(document).on('click', "#percent", function () {
    console.log("prcentage clicked");
    $('#percentmodal').modal('show');
  });



  // Clear items
  // $('.clear-cart').click(function() {
  //  shoppingCart.clearCart();
  //  displayCart();
  // });

  // function clearCart(){
  //   shoppingCart.clearCart();
  //  displayCart();
  // }
  // $(function(){
  //   // Enables popover
  //   $("[data-toggle=popover]").popover();
  // });

  $('[data-toggle="popover"]').popover({
    html: true,
    content: function () {
      return $('#popover-content').html();
    }
  });

  $('[data-toggle="popover"]').on('click', function (e) {
    $('[data-toggle="popover"]').not(this).popover('hide');
  });

  $(document).on('click', "#guest-count", function () {
    console.log("GuestCounnt Clicked");
    // $('.popover-content').html($('#guest-count').html())
  });

  // function GuestCount(){
  //   console.log("GuestCounnt Clicked");
  //   $('#popover-content').html($('#guest-count').html())
  // }

  $(document).on('click', "#receiptComment", function () {
    $('#changeProfileModal').modal('show');
  });

  //   $(document).on('click','[data-toggle="popover"]', function() {
  //     $(this).popover('toggle');
  //     $('#guest').popover({
  //     html: true,
  //     trigger: 'manual',
  //     content: function() {
  //         return $('#guest-count').html();
  //     }
  // });
  // });

  // $(document).on('click', '#guest', function() {
  //   $(this).popover('toggle');
  //   $('#guest').popover({
  //     html: true,
  //     content: function() {
  //       console.log("popover single");
  //       return $('#guest-count').html();
  //     }
  //   });
  // });

  // $(document).on('click', "#guest", function() {
  //   console.log("Guest1 clicked");
  //   $('#guest').popover({
  //   html: true,
  //   content: function() {
  //     console.log("Guest2 clicked");
  //     return $('#guest-count').html();
  //   }
  // });
  // });
  // -1
  $('.show-cart').on("click", ".minus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.removeItemFromCart(name);
    displayCart();
  });
  // +1
  $('.show-cart').on("click", ".plus-item", function (event) {
    var name = $(this).data('name')
    shoppingCart.addItemToCart(name);
    displayCart();
  });

  // Item count input
  $('.show-cart').on("change", ".item-count", function (event) {
    var name = $(this).data('name');
    var count = Number($(this).val());
    shoppingCart.setCountForItem(name, count);
    displayCart();
  });
});



// function displayCart() {
// var cartArray = shoppingCart.listCart();
// var output = "";
// var output2 = "";
// document.getElementById('divtwo').style.class="hidden";
// output2 +="<table >";
// output2 +="<tr ><h2><center>RECEIPT</center></h2></tr><br><br>";
// // document.getElementById("date").innerHTML = Date();
// // output2 += "<p id="date"></p>";
// output2 +="<tr><center><b>email id</b> : pos@gmail.com </center></tr><br>";
// output2 +="<tr> <center><b>contact number</b> : 123456789 </center> </tr><br>";
// output2 +="<hr>";
// for(var i in cartArray) {
//  output += "<tr style='width: 100%; display: inline-table; table-layout: fixed;'>"
//    + "<td style='width:150px;'>" + cartArray[i].name + "</td>"
//    + "<td  style='width:140px;'><div class='input-group'><button style='width:40px;' id='minus' class='minus-item input-group-addon btn-sm btn-default' data-name='" + cartArray[i].name + "'>-</button>"
//    + "<input style='width:70px;' type='text' id='count' class='item-count form-control input-number' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//    + "<button style='width:40px;' id='plus' class='plus-item btn-sm btn-default input-group-addon' data-name='" + cartArray[i].name + "'>+</button></div></td>"
//    + "<td style='width:80px;'>" + cartArray[i].price + "</td>"
//    // + "<td style='width:70px;'><button class='delete-item btn-sm btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//    + " = "
//    + "<td style='width:70px;'>" + cartArray[i].total + "</td>"
//    +  "</tr>";
//    output2 += "<center><tr style='width: 100%; display: inline-table; table-layout: fixed;'>"
//      + "<td style='width:150px;'>"    + cartArray[i].name +    "   </td>"
//      // + "<td  style='width:140px;'><div class='input-group'><button style='width:40px;' class='minus-item input-group-addon btn-sm btn-primary' data-name=" + cartArray[i].name + ">-</button>"
//      // + "<input style='width:70px;' type='text' class='item-count form-control input-number' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
//      // + "<button style='width:40px;'class='plus-item btn-sm btn-primary input-group-addon' data-name=" + cartArray[i].name + ">+</button></div></td>"
//      + "<td style='width:80px;'>(    " + cartArray[i].price +   "    )</td>"
//      // + "<td style='width:70px;'><button class='delete-item btn-sm btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//      // + " = "
//      + "<td style='width:70px;'>"     + cartArray[i].total +      "</td>"
//      +  "</tr></center><br>";
//    // output2 +=
//    // output2 += "<tr style='width: 100%; display: inline-table; table-layout: fixed;'>"
//    //        // +"<thead>" +"Jhon"+ "</thead>"
//    //       + "<td style='width:150px;'>  " + cartArray[i].name + "  </td>"
//    //       + "<td style='width:80px;'>   ( " + cartArray[i].price + " )   </td>"
//    //       // + "<td style='width:70px;'><button class='delete-item btn-sm btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
//    //       // + " = "
//    //       + "<td style='width:70px;'>  " + cartArray[i].total + "  </td>"
//    //       +  "</tr><br>";
// console.log(cartArray[i].name);
// }var tot=shoppingCart.totalCart();
// var disc=shoppingCart.discountCart();
// sessionStorage.setItem("test1",disc);
// // sessionStorage.setItem("test2",disc);
// // output2+="<br><br>"
// output2 +="<hr>";
// output2+="<tr style='width:80px;'>   Total =  " + tot + "</tr><br>"
// output2+="<tr style='width:80px;'>   Total after discount =  " + disc + "   </tr>"
// output2+="</table>";

// $('.show-cart').html(output);
// $('.show-cart1').html(output);
// $('.total-cart').html(shoppingCart.totalCart());
// $('.total-count').html(shoppingCart.totalCount());
// $('.discount-cart').html(shoppingCart.discountCart());
// }

function displayCart() {
  var cartArray = shoppingCart.listCart();
  var output = "";
  var output2 = "";
  var output3 = "";
  document.getElementById('divtwo').style.class = "hidden";
  output2 += "<table >";
  output2 += "<tr ><h2><center>RECEIPT</center></h2></tr><br><br>";
  // document.getElementById("date").innerHTML = Date();
  // output2 += "<p id="date"></p>";
  output2 += "<tr><center><b>email id</b> : pos@gmail.com </center></tr><br>";
  output2 += "<tr> <center><b>contact number</b> : 123456789 </center> </tr><br>";
  output2 += "<hr>";
  for (var i in cartArray) {
    output += "<tr style='width: 100%; display: inline-table; table-layout: fixed;'>"
      + "<td style='width:150px;'>" + cartArray[i].name + "</td>"
      + "<td  style='width:140px;'><div class='input-group'><button style='width:40px;' id='minus' class='minus-item input-group-addon btn-sm btn-default' data-name='" + cartArray[i].name + "'>-</button>"
      + "<input style='width:70px;' type='text' id='count' class='item-count form-control input-number' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      + "<button style='width:40px;' id='plus' class='plus-item btn-sm btn-default input-group-addon' data-name='" + cartArray[i].name + "'>+</button></div></td>"
      + "<td style='width:80px;'>" + cartArray[i].price + "</td>"
      // + "<td style='width:70px;'><button class='delete-item btn-sm btn-danger' data-name=" + cartArray[i].name + ">X</button></td>"
      + " = "
      + "<td style='width:70px;'>" + cartArray[i].total + "</td>"
      + "</tr>";
    output3 += "<tr style='width: 100%; display: inline-table; table-layout: fixed;'>"
      + "<td style='width:120px;'><input type='button' style='font-weight:800; font-size:12px;' class='btn btn-light btn-circle btn-sm' value='" + cartArray[i].count + "'></td>"
      + "<td style='width:120px;'>" + cartArray[i].name + "</td>"
      //  + "<td  style='width:140px;'><div class='input-group'><button style='width:40px;' id='minus' class='minus-item input-group-addon btn-sm btn-default' data-name='" + cartArray[i].name + "'>-</button>"
      //  + "<input style='width:70px;' type='text' id='count' class='item-count form-control input-number' data-name='" + cartArray[i].name + "' value='" + cartArray[i].count + "'>"
      //  + "<button style='width:40px;' id='plus' class='plus-item btn-sm btn-default input-group-addon' data-name='" + cartArray[i].name + "'>+</button></div></td>"
      //  + "<td style='width:80px;'>" + cartArray[i].price + "</td>"
      + "<td style='width:20px;'><button class='delete-item btn-sm btn-light' data-name=" + cartArray[i].name + ">X</button></td>"
      //  + " = "
      //  + "<td style='width:70px;'>" + cartArray[i].total + "</td>"
      + "</tr>";
    output2 += "<center><tr style='width: 100%; display: inline-table; table-layout: fixed;'>"
      + "<td style='width:150px;'>" + cartArray[i].name + "   </td>"
      + "<td style='width:80px;'>(    " + cartArray[i].price + "    )</td>"
      + "<td style='width:70px;'>" + cartArray[i].total + "</td>"
      + "</tr></center><br>";
  } var tot = shoppingCart.totalCart();
  var disc = shoppingCart.discountCart();
  sessionStorage.setItem("test1", disc);
  // sessionStorage.setItem("test2",disc);
  // output2+="<br><br>"
  output2 += "<hr>";
  output2 += "<tr style='width:80px;'>   Total =  " + tot + "</tr><br>"
  output2 += "<tr style='width:80px;'>   Total after discount =  " + disc + "   </tr>"
  output2 += "</table>";
  $('.split-cart').html(output3);
  $('.show-cart').html(output);
  $('.show-cart1').html(output2);
  $('.total-cart').html(shoppingCart.totalCart());
  $('.total-count').html(shoppingCart.totalCount());
  $('.discount-cart').html(shoppingCart.discountCart());
}

displayCart();


// function online() {
//   console.log('Online order...');
//   $('#onlineorder').show();
//   $(".oo").css("background-color", "white");
//   $(".ra").css("background-color", "");
//   $('#receiptarchive').hide();
// }
// function receipt() {
//   console.log('Receipt Archive...');
//   $('#onlineorder').hide();
//   $('#receiptarchive').show();
//   $(".ra").css("background-color", "white");
//   $(".oo").css("background-color", ""); 
// }