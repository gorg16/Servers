import {Injectable} from '@angular/core';
import {Server} from './servers.modal';
import {BehaviorSubject} from 'rxjs';
import {LogsModel} from './logs.model';
import {CiCdTableModel} from './ci-cd-table.model';

@Injectable({
  providedIn: 'root'
})
export class ServersService {
  index: number;

  constructor() { }
   public serverTypes = new BehaviorSubject(null);
   public servers: Server[] = [
     new Server(1,
      'WEB SERVER',
      'Active',
      '12h 30m',
      'WEB',
      'Active',
      [65, 59, 80, 56, 56, 55, 40, 45, 34, 66, 123, 56 ],
      15,
      'Oct 2019',
      15,
      'October',
      'November',
       80,
       [
         new LogsModel('Success', new Date( '2019-01-30'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         // tslint:disable-next-line:max-line-length
         // tslint:disable-next-line:max-line-length
         // tslint:disable-next-line:max-line-length
         // tslint:disable-next-line:max-line-length
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),

         new LogsModel('Success', new Date( '2019-02-19'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
         new LogsModel('Success', new Date( '2019-06-16'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
         new LogsModel('Failure', new Date( '2019-10-16'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
         new LogsModel('Success', new Date( '2019-09-11'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
         new LogsModel('Failure', new Date( '2019-02-17'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-07-29'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-11-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-07-13'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-01-11'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-12-03'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-11-04'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Failure', new Date( '2019-11-04'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Success', new Date( '2019-03-04'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
         new LogsModel('Success', new Date( '2019-05-17'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
         new LogsModel('Failure', new Date( '2019-09-29'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": false
         }
         `),
         new LogsModel('Success', new Date( '2019-02-10'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
       ],
       [ new CiCdTableModel(
         'npm run test',
         new Date('2019-05-29'),
         'logsssssssssssssssssssssssssssssssss',
         'success',
         true
       ),
          new CiCdTableModel(
           'npm run validate',
           new Date('2019-05-29'),
           'logsssssssssssssssssssssssssssssssss',
           'success',
            true
         ),
            new CiCdTableModel(
             'npm run init',
             new Date('2019-05-29'),
             'logsssssssssssssssssssssssssssssssss',
             'success',
              false
           ),

       ]
             ),
     new Server(2,
       'FTP SERVER',
       'offline',
       '25h 12m',
       'FTP',
       'Stoped',
       [65, 24, 80, 56, 56, 55, 40, 45, 24, 66, 123, 56 ],
       45,
       'Nov 2017',
       23,
       'May',
       'April',
       20,
       [
        new LogsModel('Success', new Date( '2019-07-16'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-01-06'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-11-01'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-01-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-02-14'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-09-17'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-06-15'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
      ],
       [ new CiCdTableModel(
         'npm run init',
         new Date('2019-08-17'),
         'logsssssssssssssssssssssssssssssssss',
         'fail',
         false
       ),
         new CiCdTableModel(
           'npm run validate',
           new Date('2019-12-12'),
           'logsssssssssssssssssssssssssssssssss',
           'fail',
           false
         ),
         new CiCdTableModel(
           'php  test.php',
           new Date('2019-01-10'),
           'logsssssssssssssssssssssssssssssssss',
           'fail',
           false
         ),

       ]
     ),
     new Server(3,
       'HTTP SERVER',
       'offline',
       '15h 45m',
       'HTTP',
       'Active',
       [65, 12, 80, 56, 56, 70, 40, 45, 24, 66, 123, 56 ],
       65,
       'Sep 2018',
       7,
       'January',
       'February',
       80,
       [
        new LogsModel('Success', new Date( '2019-07-13'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-02-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-05-05'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
         {
             "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
         {
             "success": true
         }
         
         END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
         REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
         START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
         {
             "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
         {
             "success": true
         }
         
         END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
         REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
         START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
         {
             "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
         {
             "success": true
         }
         
         END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
         REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
         2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
         {
             "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
         {
             "success": true
         }
         
         END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
         REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
         {
             "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
         {
             "success": true
         }
         
         END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
         REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
         {
             "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
         {
             "success": true
         }
         
         END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
         REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
         START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
         {
             "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
             "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
         }
         
         2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
         {
             "callbackWaitsForEmptyEventLoop": true,
             "logGroupName": "/aws/lambda/DeleteKit",
             "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
             "functionName": "DeleteKit",
             "memoryLimitInMB": "128",
             "functionVersion": "$LATEST",
             "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
             "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
         }
         
         2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
         {
             "success": true
         }
         `),
        new LogsModel('Success', new Date( '2019-01-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-01-03'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-04-21'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-10-10'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-02-24'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
      ],
       [ new CiCdTableModel(
         'npm run test',
         new Date('2018-02-12'),
         'logsssssssssssssssssssssssssssssssss',
         'success',
         true
       ),
         new CiCdTableModel(
           'npm run init',
           new Date('2019-07-03'),
           'logsssssssssssssssssssssssssssssssss',
           'fail',
           false
         ),
         new CiCdTableModel(
           'php test.php',
           new Date('2019-01-19'),
           'logsssssssssssssssssssssssssssssssss',
           'success',
           true
         ),

       ]

     ),
     new Server(4,
       'SSH SERVER',
       'active',
       '18h 34m',
       'SSH',
       'Stoped',
       // [50, 60, 120, 130, 120, 60, 60, 120, 130, 120, 60, 50 ],
       [12, 3, 8, 17, 23, 18, 16, 35, 50 , 43, 12,  21],
       48,
       'Mar 2017',
       12,
       'August',
       'September',
       22,
       [
        new LogsModel('Success', new Date( '2019-08-14'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-03-13'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-03-24'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-09-01'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-03-23'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-02-05'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-04-15'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
      ],
       [ new CiCdTableModel(
         'npm run validate',
         new Date('2019-03-12'),
         'logsssssssssssssssssssssssssssssssss',
         'fail',
         false
       ),
         new CiCdTableModel(
           'npm run init',
           new Date('2018-06-01'),
           'logsssssssssssssssssssssssssssssssss',
           'success',
           true
         ),
         new CiCdTableModel(
           'npm run test',
           new Date('2019-11-11'),
           'logsssssssssssssssssssssssssssssssss',
           'fail',
           false
         ),

       ]

     ),
     new Server(5,
       'NTP SERVER',
       'acitve',
       '9h 17m',
       'NTP',
       'Active',
       [0, 59, 80, 56, 56, 55, 40, 45, 12, 66, 123, 56 ],
       86,
       'Dec 2018',
       15,
       'June',
       'July',
       123,
       [
        new LogsModel('Success', new Date( '2019-02-07'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-04-14'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-12-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-02-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-05-15'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-05-20'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-01-24'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
      ],
       [ new CiCdTableModel(
         'php test.php',
         new Date('2019-04-12'),
         'logsssssssssssssssssssssssssssssssss',
         'fail',
         false
       ),
         new CiCdTableModel(
           'npm run test',
           new Date('2019-04-29'),
           'logsssssssssssssssssssssssssssssssss',
           'fail',
           false
         ),
         new CiCdTableModel(
           'npm run init',
           new Date('2019-06-14'),
           'logsssssssssssssssssssssssssssssssss',
           'success',
           false
         ),

       ]

     ),
     new Server(6,
       'POP3 SERVER',
       'acitve',
       '10h 25m',
       'POP3',
       'DisConnected',
       [75, 86, 34, 85, 23, 2, 96, 45, 45, 66, 123, 56 ],
       78,
       'Apr 2018',
       4,
       'November',
       'December',
       123,
       [
        new LogsModel('Success', new Date( '2019-06-18'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-04-16'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-10-10'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-07-26'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-01-19'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-02-24'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-07-10'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
      ],
       [ new CiCdTableModel(
         'npm run init',
         new Date('2018-08-09'),
         'logsssssssssssssssssssssssssssssssss',
         'success',
         false
       ),
         new CiCdTableModel(
           'php test.php',
           new Date('2018-05-12'),
           'sjaiasb;lkcjdbsakdjba;sdkj',
           'success',
           true
         ),
         new CiCdTableModel(
           'npm run validate',
           new Date('2019-01-01'),
           'logckjbasdlaksjbhcas;kfjasb;fhasbld',
           'fail',
           false
         ),

       ]

     ),
     new Server(7,
       'SMTP SERVER',
       'acitve',
       '16h 54m',
       'SMTP',
       'Stoped',
       [10, 98, 56, 78, 16, 6, 13, 57, 61, 86, 17, 52 ],
       19,
       'Dec 2019',
       8,
       'December',
       'January',
       25,
       [
        new LogsModel('Success', new Date( '2019-02-21'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-03-01'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-04-23'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-05-19'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-02-28'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
        new LogsModel('Failure', new Date( '2019-03-12'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": false
        }
        `),
        new LogsModel('Success', new Date( '2019-08-18'), `START RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25 Version: $LATEST
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	event
        {
            "id": "9d857141-776c-4c31-b7e9-8bbf2da60284",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:07:08.964Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "awsRequestId": "912e77b9-d0f0-11e8-ba52-db3c9ede2a25",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:07:10.143Z	912e77b9-d0f0-11e8-ba52-db3c9ede2a25	result
        {
            "success": true
        }
        
        END RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25
        REPORT RequestId: 912e77b9-d0f0-11e8-ba52-db3c9ede2a25	Duration: 1204.37 ms	Billed Duration: 1300 ms Memory Size: 128 MB	Max Memory Used: 41 MB	
        START RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc Version: $LATEST
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	event
        {
            "id": "e720ac68-9c34-420e-b5de-bdd8be9898c0",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:14.079Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "awsRequestId": "b87cb8da-d0f0-11e8-9a42-8522b4d881bc",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:14.282Z	b87cb8da-d0f0-11e8-9a42-8522b4d881bc	result
        {
            "success": true
        }
        
        END RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc
        REPORT RequestId: b87cb8da-d0f0-11e8-9a42-8522b4d881bc	Duration: 203.87 ms	Billed Duration: 300 ms Memory Size: 128 MB	Max Memory Used: 42 MB	
        START RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab Version: $LATEST
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	event
        {
            "id": "515f46f6-1242-4180-9ee1-0f270f346de1",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:31.284Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "awsRequestId": "c2bdff74-d0f0-11e8-a249-25d8a7d31eab",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:31.524Z	c2bdff74-d0f0-11e8-a249-25d8a7d31eab	result
        {
            "success": true
        }
        
        END RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab
        REPORT RequestId: c2bdff74-d0f0-11e8-a249-25d8a7d31eab	Duration: 319.74 ms	Billed Duration: 400 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b Version: $LATEST
        2018-10-16T03:08:43.469Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	event
        {
            "id": "ef789937-463e-41f8-b3e3-46ced13382a2",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:43.470Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "awsRequestId": "ca0147e1-d0f0-11e8-90d2-339e836c1e6b",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:43.615Z	ca0147e1-d0f0-11e8-90d2-339e836c1e6b	result
        {
            "success": true
        }
        
        END RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b
        REPORT RequestId: ca0147e1-d0f0-11e8-90d2-339e836c1e6b	Duration: 146.33 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d124371f-d0f0-11e8-b05c-b98337170c80 Version: $LATEST
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	event
        {
            "id": "1df72d7d-3644-45eb-8bfd-5cc170099d60",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:08:55.462Z	d124371f-d0f0-11e8-b05c-b98337170c80	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "awsRequestId": "d124371f-d0f0-11e8-b05c-b98337170c80",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:08:55.601Z	d124371f-d0f0-11e8-b05c-b98337170c80	result
        {
            "success": true
        }
        
        END RequestId: d124371f-d0f0-11e8-b05c-b98337170c80
        REPORT RequestId: d124371f-d0f0-11e8-b05c-b98337170c80	Duration: 155.05 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3 Version: $LATEST
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	event
        {
            "id": "424416f2-9419-4cb2-96bd-3b3dcdb327e8",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:05.893Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "awsRequestId": "d75ee9cc-d0f0-11e8-b46e-859074142aa3",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:06.061Z	d75ee9cc-d0f0-11e8-b46e-859074142aa3	result
        {
            "success": true
        }
        
        END RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3
        REPORT RequestId: d75ee9cc-d0f0-11e8-b46e-859074142aa3	Duration: 167.92 ms	Billed Duration: 200 ms Memory Size: 128 MB	Max Memory Used: 43 MB	
        START RequestId: dda868b3-d0f0-11e8-8d42-1babf12dd0b8 Version: $LATEST
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	event
        {
            "id": "1d545463-b3cf-4d8b-81af-32a2ca14664b",
            "artistId": "f94a75a8-376c-4d46-b048-8e6aae0f3c34"
        }
        
        2018-10-16T03:09:16.441Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	context
        {
            "callbackWaitsForEmptyEventLoop": true,
            "logGroupName": "/aws/lambda/DeleteKit",
            "logStreamName": "2018/10/16/[$LATEST]3460171c2c5f41438e0423b72dcf10cc",
            "functionName": "DeleteKit",
            "memoryLimitInMB": "128",
            "functionVersion": "$LATEST",
            "invokeid": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "awsRequestId": "dda868b3-d0f0-11e8-8d42-1babf12dd0b8",
            "invokedFunctionArn": "arn:aws:lambda:eu-west-1:805629052704:function:DeleteKit:Staging"
        }
        
        2018-10-16T03:09:16.622Z	dda868b3-d0f0-11e8-8d42-1babf12dd0b8	result
        {
            "success": true
        }
        `),
      ],
       [ new CiCdTableModel(
         'npm run validate',
         new Date('2019-12-12'),
         'logsssssssssssssssssssssssssssssssss',
         'success',
         false
       ),
         new CiCdTableModel(
           'npm run init',
           new Date('2019-07-12'),
           'logsssssssssssssssssssssssssssssssss',
           'success',
           false
         ),
         new CiCdTableModel(
           'php test.php',
           new Date('2019-05-29'),
           'logsssssssssssssjkdsbaklsjbaskbcgaAAAAAAAAANNNNNNNNNNNDDDDDDDDOOOOOOOoo',
           'success',
           true
         ),

       ]

     ),
              ];

  getServers() {
    return this.servers.slice();
  }


  getServer(index: number) {
    this.setCurrentIndex(this.servers[index]);
    return this.servers[index];
  }

  setCurrentIndex(index) {
      this.index = index;
    // console.log(this.index, 'index');
  }

  getIndex(): number {
    return this.index;
  }

  getServerData() {
    console.log(this.index, 'indexxxxxx');
    return this.index;
  }

}
