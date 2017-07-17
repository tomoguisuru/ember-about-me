/* jshint node: true */

module.exports = function(deployTarget) {
  var deploy_config = {};
  var ENV = {
    build: {},
    s3: {
      accessKeyId:      process.env.AWS_KEY,
      secretAccessKey:  process.env.AWS_SECRET,
      bucket:           process.env.S3_BUCKET,
      region:           'us-west-2',
      cacheControl:     'max-age=315360000, no-transform, public',
    },
    's3-index': {
      accessKeyId:      process.env.AWS_KEY,
      secretAccessKey:  process.env.AWS_SECRET,
      bucket:           process.env.S3_BUCKET,
      region:           'us-west-2',
      allowOverwrite:   true,
    },
  };

  ENV.pipeline = {
    activateOnDeploy: true,
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';

    //ENV['s3'].bucket = ENV['s3-index'].bucket = process.env.S3_BUCKET;

    //process.env.STATIC_ROOT = deploy_config.assetHost;
    //process.env.SEGMENT_ENV = 'production';
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
