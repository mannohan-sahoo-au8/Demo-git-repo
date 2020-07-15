$(document).ready(function() {
  $('button').click(function() {
    var name = $("#nameid").val();
    alert(name);
    $('.imgchange').attr('src',`https://joeschmoe.io/api/v1/${name}`);
  })
})