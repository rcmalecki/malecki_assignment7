//For readability and clarity it is good practice to declare variables at the beginning of the JS document if possible
var churchillSpeech = {
      'author': 'Churchill',
      'year': 1940,
      'yearIsBCE': false,
      'authorAge': '66'
    },
    ghandiSpeech = {
      'author': 'Ghandi',
      'year': 1942,
      'yearIsBCE': false,
      'authorAge': '73'
    },
    demosthenesSpeech = {
      'author': 'Demosthenes',
      'year': 342,
      'yearIsBCE': true,
      'authorAge': '42'
    },
    speechesArray = [churchillSpeech, ghandiSpeech, demosthenesSpeech],
    donatePrompt;

document.getElementById('BtnDonate').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Donate" button.
  donatePrompt = window.prompt("How much would you like to donate?");
   var sideNav = document.getElementById ('SideNav');
   
   if(donatePrompt < 100){
    var donation = document.createElement('h3');
	var donText = document.createTextNode('Thank you for your donation of $45!');
	donation.appendChild(donText);
	document.getElementById('SideNav').appendChild(donation);
  }else if (donatePrompt >= 100){
    var genDonation = document.createElement('h3');
	var genText = document.createTextNode('Thank you for your very generous donation!');
	genDonation.appendChild(genText);
	document.getElementById('SideNav').appendChild(genDonation);
	sideNav.setAttribute('style','color: red');
	var genArt = document.getElementsByTagName('ARTICLE');
	var i = 0;
	while (i < genArt.length) {
		console.log(genArt[i]);
		document.getElementById(genArt[i].id).className = 'generous-donation';
		i++;
	}
  }
});

document.getElementById('BtnChurchill').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Churchill" button.
  console.log('This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year);
  document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[0].author + ' in ' + speechesArray[0].year + '.';
  
  if(speechesArray[0].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[0].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[0].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnGhandi').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Ghandi" button.
  console.log('This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year);
  document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[1].author + ' in ' + speechesArray[1].year + '.';
  
  if(speechesArray[1].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[1].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[1].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});

document.getElementById('BtnDemosthenes').addEventListener('click', function(){
  //Code in here executes when the user clicks the "Demosthenes" button.
  console.log('This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year);
  document.getElementById('ConsoleDisplay').innerHTML = 'This speech was written by ' + speechesArray[2].author + ' in ' + speechesArray[2].year + '.';

  if(speechesArray[2].yearIsBCE === true){
    console.log('This speech took place before the common era.');
  }else{
    console.log('This speech took place during the common era.');
  }

  var oldest = speechesArray[0].year,
      newest = speechesArray[0].year;

  for(var i = 0; i < speechesArray.length; i++){
    if(speechesArray[i].year < oldest){
      oldest = speechesArray[i].year;
    }
    if(speechesArray[i].year > newest){
      newest = speechesArray[i].year;
    }
  }

  if(speechesArray[2].year === oldest){
    console.log('This is the oldest speech on the page.');
  }
  if(speechesArray[2].year === newest){
    console.log('This is the most recent speech on the page.');
  }
});