var filmType =prompt('please enter your type of films');

while (filmType !== 'Horror' && filmType !== 'Romance'){
  filmType = prompt ('please enter the type Horror or Romance');  
}

  var userChoose;

 if (filmType === 'Horror'){
   
    alert ('Welcome to our Website, Down below the is a List that could help you to choose a suitable Horror film');

   userChoose=('<img src="https://live.staticflickr.com/6108/6277596671_4588e91e20_b.jpg">');

  }else if (filmType === 'Romance'){

   alert ('Welcome to our Website, Down below the is a List that could help you to choose a suitable Romance film');

   userChoose=('<img src="https://i.pinimg.com/originals/47/4f/f6/474ff6f6f17180b82dad835195c511d0.png">');
 }


   var numImg= prompt('How many time do you want to see your list?');

   for(var i=0; i<=numImg; i++){
   
    document.write(userChoose);

   } 