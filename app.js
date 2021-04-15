var filmType =prompt('please enter your type of films');

while (filmType !== 'Horror' && filmType !== 'Romance'){
  filmType = prompt ('please enter the type Horror or Romance');  
}


 if (filmType === 'Horror'){
   
    alert ('Welcome to our Website, Down below the is a List that could help you to choose a suitable Horror film');

   document.write('<img src="https://live.staticflickr.com/6108/6277596671_4588e91e20_b.jpg">')
  }else if (filmType === 'Romance'){

   alert ('Welcome to our Website, Down below the is a List that could help you to choose a suitable Romance film')

   document.write('<img src="https://i.pinimg.com/originals/47/4f/f6/474ff6f6f17180b82dad835195c511d0.png">')
 }

   