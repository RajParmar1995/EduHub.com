var checkval = 0;
function sidenav(val) {
    if (checkval == 0) {
        openNav();
        checkval = 1;
    } else {
        closeNav();
        checkval = 0;
    }
}

function openNav() {
  document.getElementById("mySidenav").style.width = "15%";
  document.getElementById("main").style.marginLeft = "15%";
   document.getElementById("main").style.width = "96%";
   document.getElementById("datastore").style.width = "84.3%";
    document.getElementById("contentrow").style.marginRight = "-1%";


  //$('#opennavbtn').hide();
  //$('#closebtn').show();
 // document.getElementById("HtmlIntro").style.margintop = "150px";
  //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";  
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
  document.getElementById("main").style.marginLeft= "0%";
   document.getElementById("main").style.width = "100%";
   document.getElementById("datastore").style.width = "96%";
   document.getElementById("contentrow").style.marginRight = "-1%";
  document.body.style.backgroundColor = "white";
    var abc = $("#sourceCode").val();
}

function ShowAndHide(_id) {
    var x = document.getElementById(_id);
    if (x.style.display == 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}

// Add active class to the current button (highlight it)
/*var header = document.getElementById("mySidenav");
var btns = header.getElementsByClassName("Btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}
*/



   //<a href="javascript:void(0)" class="closebtn" onClick="closeNav()">&times;</a>