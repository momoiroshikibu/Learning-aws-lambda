const aws = require('aws-sdk');

const REGION = 'ap-northeast-1';
const BUCKET_NAME = '';
const ACCESS_KEY_ID = '';
const SECRET_ACCESS_KEY = '';

exports.handler = function(event, context) {

    aws.config.update({
        accessKeyId: ACCESS_KEY_ID,
        secretAccessKey: SECRET_ACCESS_KEY,
        region: REGION
    });

    const s3 = new aws.S3();
    const fileName = 'hello.txt';

    const params = {
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: 'hellooo!',
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
