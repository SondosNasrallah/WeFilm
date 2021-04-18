var filmType;

var favFilm = function () {
  filmName = prompt('Hello, please enter your fav film type');

  while (filmType !== 'Horror' && filmType !== 'Romance') {
    filmType = prompt('Please enter the film type Horror or Romance');
  }

}
favFilm();


var userChoose;


function showImages() {

  if (filmType === 'Horror') {
    userChoose = '<img src="https://live.staticflickr.com/6108/6277596671_4588e91e20_b.jpg">';
  } else if (filmType === 'Romance') {
    userChoose = '<img src="https://i.pinimg.com/originals/47/4f/f6/474ff6f6f17180b82dad835195c511d0.png">';
  }

  var imagesNumber = prompt('How many image do you want?');

  for (var i = 0; i < imagesNumber; i++) {
    document.write(userChoose);
  }

}

showImages(); 