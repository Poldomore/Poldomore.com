const nama = 'argalih prams';
let umur = 15;

let biodata = document.getElementById('biodata');
function generateBiodata() {
  if (umur > 10 && umur < 18) {
  generasi =
  } 
  else if (umur > 18 && umur < 30) {
    console.log('pendewasaan')
  }
  else {
    console.log('hahaha tuwaa')
  }
  return biodata.innerHTML = generasi;
}


generateBiodata();
