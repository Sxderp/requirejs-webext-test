/* A script that's not required by anything but still needs loading. */

require(['utils/random'], (

random ,

) => {

let g = 'a-script-that-needs-loading is being loaded asynchronously with '
      + 'the main script:';
console.error(g, random());

});
