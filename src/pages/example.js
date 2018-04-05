
require.config({
  'baseUrl': '/src',
});

require(['text.js', 'utils/random'], (

Text   ,
random ,

) => {

let gChanger = new Text();
let gInput = document.getElementById('values');


function changeText(event) {
  gChanger.write(gInput.value + ': ' + random().toString().substr(0, 4));
}


document.getElementById('submit').addEventListener('click', changeText);

});
