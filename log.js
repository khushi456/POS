var mysql = require('mysql');
window.$ = window.jQuery = require('jquery');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: null,
  database: 'rpos'
});
connection.connect(function (err) {
  if (err) throw err;
  else {

    console.log("connected..");
    
    $(document).ready(function () {
      $("#action-btn").click(function () {
        var eemail = $("#email").val();
        var ppassword = $("#password").val();
        var sql = "SELECT * FROM users WHERE email= '" + eemail + "' AND  password='" + ppassword + "' ";
        connection.query(sql, function (err, result) {
          if (err) throw err;
          if (result.length > 0) {
            
            window.location = "./tab.html";
            
          }
          else {
            alert("not registered");
          }
        
        });

      });
    });

  }

})