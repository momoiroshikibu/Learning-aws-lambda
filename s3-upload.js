const aws = require('aws-sdk');

exports.handler = function(event, context) {

    aws.config.update({
        accessKeyId: event.ACCESS_KEY_ID,
        secretAccessKey: event.SECRET_ACCESS_KEY,
        region: event.REGION
    });

    const s3 = new aws.S3();
    const fileName = event.fileName;

    const params = {
        Bucket: event.BUCKET_NAME,
        Key: fileName,
        Body: event.body,
        ContentType: 'text/plain; charset=utf-8',
        ACL: 'public-read'
    };

    s3.putObject(params, function(error, data) {
        if (error) {
            console.error(error);
        } else {
            console.log('yeah', data);
        }
    });
}
