// built functuion to craete option in index.html

function addOption(animalArray) {
  console.log(animalArray);
  for (var i = 0; i < animalArray.length; i++) {
    $("#selectPet").append(
      `<option value=${animalArray[i]}>${animalArray[i]}</option>`
    );
  }
}
// function start here
$(document).ready(function() {
  let animalArray = [`beagle`, `bunny`, `cat`, `iguana`, `pony`];
  addOption(animalArray);

  //  click function start  from here to show what pet you want
  $("#btnSubmit").click(function() {
    event.preventDefault();
    var petSlected = $("#selectPet").val();
    $("#pics img").attr("src", "img/" + petSlected + ".jpg");
  });
});
