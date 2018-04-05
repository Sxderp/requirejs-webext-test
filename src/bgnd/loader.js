
// Unfortunately full path (from baseUrl) are needed for requiring scripts that
// are in the same folder, for background sources. Therefore bgnd/logger needed
// to be specified.
define(['utils/random', 'bgnd/logger'], (

random ,
logger ,

) => {


function load(value) {
  // Do some background loading.
  logger.warn('Loading value:', value);
  logger.error('New value:', random());

  // Do other stuff, not accessible
  doInternalLoading();
}


function doInternalLoading() {
  logger.info('This is more loadding, internal function.');
}


return load;

});
