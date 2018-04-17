$("h1").removeAttr("style");

setTimeout(() => {
    $("h1").css("color",  "blue");
}, 5000);

$(".red-div").css("color",  "red");
$("#ligreen").css("color",  "green");
$("#lipink").css("color",  "pink");
$("#brown-div").css("color",  "brown");

$("button.alert").click(function (){
   var mess = $("#my-input").val();
    alert(mess);
});

$("button.student").click(function (){
    var newStudent = $("#my-input2").val();
    $(".students").append("<li>" + newStudent + "</li>");
 });
