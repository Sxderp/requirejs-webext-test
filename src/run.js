
require.config({
  'baseUrl': '/src'
});


// This wrapper function is not required.
function startup() {

require(['bgnd/loader', 'utils/random'], (

Loader ,
random ,

) => {

  // Do some prep work.
  // Like, navigator.persist, so it doesn't need to be done every time a db
  // is opened.

  Loader(random());
});

}

startup();

browser.browserAction.onClicked.addListener(() => {
  browser.tabs.create({
    'active': true,
    'url': browser.runtime.getURL('src/pages/example.html')
  });
});
