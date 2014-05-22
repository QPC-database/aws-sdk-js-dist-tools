window.AWS.Service.defineServiceApi(window.AWS.S3, "2006-03-01", {"format":"rest-xml","apiVersion":"2006-03-01","checksumFormat":"md5","endpointPrefix":"s3","globalEndpoint":"s3.amazonaws.com","serviceAbbreviation":"Amazon S3","serviceFullName":"Amazon Simple Storage Service","signatureVersion":"s3","timestampFormat":"rfc822","xmlnamespace":"http://s3.amazonaws.com/doc/2006-03-01/","operations":{"abortMultipartUpload":{"name":"AbortMultipartUpload","http":{"method":"DELETE","uri":"/{Bucket}/{Key}?uploadId={UploadId}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"},"UploadId":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"completeMultipartUpload":{"name":"CompleteMultipartUpload","http":{"method":"POST","uri":"/{Bucket}/{Key}?uploadId={UploadId}"},"input":{"payload":"MultipartUpload","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"},"MultipartUpload":{"type":"structure","members":{"Parts":{"type":"list","members":{"type":"structure","members":{"ETag":{},"PartNumber":{"type":"integer"}}},"flattened":true,"name":"Part"}},"name":"CompleteMultipartUpload"},"UploadId":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Location":{},"Bucket":{},"Key":{},"Expiration":{"type":"timestamp","location":"header","name":"x-amz-expiration"},"ETag":{},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"VersionId":{"location":"header","name":"x-amz-version-id"}}}},"copyObject":{"name":"CopyObject","http":{"method":"PUT","uri":"/{Bucket}/{Key}"},"input":{"type":"structure","members":{"ACL":{"location":"header","name":"x-amz-acl"},"Bucket":{"required":true,"location":"uri"},"CacheControl":{"location":"header","name":"Cache-Control"},"ContentDisposition":{"location":"header","name":"Content-Disposition"},"ContentEncoding":{"location":"header","name":"Content-Encoding"},"ContentLanguage":{"location":"header","name":"Content-Language"},"ContentType":{"location":"header","name":"Content-Type"},"CopySource":{"required":true,"location":"header","name":"x-amz-copy-source"},"CopySourceIfMatch":{"location":"header","name":"x-amz-copy-source-if-match"},"CopySourceIfModifiedSince":{"type":"timestamp","location":"header","name":"x-amz-copy-source-if-modified-since"},"CopySourceIfNoneMatch":{"location":"header","name":"x-amz-copy-source-if-none-match"},"CopySourceIfUnmodifiedSince":{"type":"timestamp","location":"header","name":"x-amz-copy-source-if-unmodified-since"},"Expires":{"type":"timestamp","location":"header","name":"Expires"},"GrantFullControl":{"location":"header","name":"x-amz-grant-full-control"},"GrantRead":{"location":"header","name":"x-amz-grant-read"},"GrantReadACP":{"location":"header","name":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","name":"x-amz-grant-write-acp"},"Key":{"required":true,"location":"uri"},"Metadata":{"type":"map","location":"header","name":"x-amz-meta-","keys":{},"members":{}},"MetadataDirective":{"location":"header","name":"x-amz-metadata-directive"},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","name":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","name":"x-amz-website-redirect-location"}}},"output":{"type":"structure","members":{"Expiration":{"type":"timestamp","location":"header","name":"x-amz-expiration"},"CopySourceVersionId":{"location":"header","name":"x-amz-copy-source-version-id"},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"ETag":{},"LastModified":{"type":"timestamp"}}},"alias":"PutObjectCopy"},"createBucket":{"name":"CreateBucket","http":{"method":"PUT","uri":"/{Bucket}"},"input":{"payload":"CreateBucketConfiguration","type":"structure","members":{"ACL":{"location":"header","name":"x-amz-acl"},"Bucket":{"required":true,"location":"uri"},"CreateBucketConfiguration":{"type":"structure","members":{"LocationConstraint":{}}},"GrantFullControl":{"location":"header","name":"x-amz-grant-full-control"},"GrantRead":{"location":"header","name":"x-amz-grant-read"},"GrantReadACP":{"location":"header","name":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","name":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","name":"x-amz-grant-write-acp"}}},"output":{"type":"structure","members":{"Location":{"location":"header","name":"Location"}}},"alias":"PutBucket"},"createMultipartUpload":{"name":"CreateMultipartUpload","http":{"method":"POST","uri":"/{Bucket}/{Key}?uploads"},"input":{"type":"structure","members":{"ACL":{"location":"header","name":"x-amz-acl"},"Bucket":{"required":true,"location":"uri"},"CacheControl":{"location":"header","name":"Cache-Control"},"ContentDisposition":{"location":"header","name":"Content-Disposition"},"ContentEncoding":{"location":"header","name":"Content-Encoding"},"ContentLanguage":{"location":"header","name":"Content-Language"},"ContentType":{"location":"header","name":"Content-Type"},"Expires":{"type":"timestamp","location":"header","name":"Expires"},"GrantFullControl":{"location":"header","name":"x-amz-grant-full-control"},"GrantRead":{"location":"header","name":"x-amz-grant-read"},"GrantReadACP":{"location":"header","name":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","name":"x-amz-grant-write-acp"},"Key":{"required":true,"location":"uri"},"Metadata":{"type":"map","location":"header","name":"x-amz-meta-","keys":{},"members":{}},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","name":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","name":"x-amz-website-redirect-location"}}},"output":{"type":"structure","members":{"Bucket":{"name":"Bucket"},"Key":{},"UploadId":{},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"}}},"alias":"InitiateMultipartUpload"},"deleteBucket":{"name":"DeleteBucket","http":{"method":"DELETE","uri":"/{Bucket}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"deleteBucketCors":{"name":"DeleteBucketCors","http":{"method":"DELETE","uri":"/{Bucket}?cors"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"deleteBucketLifecycle":{"name":"DeleteBucketLifecycle","http":{"method":"DELETE","uri":"/{Bucket}?lifecycle"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"deleteBucketPolicy":{"name":"DeleteBucketPolicy","http":{"method":"DELETE","uri":"/{Bucket}?policy"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"deleteBucketTagging":{"name":"DeleteBucketTagging","http":{"method":"DELETE","uri":"/{Bucket}?tagging"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"deleteBucketWebsite":{"name":"DeleteBucketWebsite","http":{"method":"DELETE","uri":"/{Bucket}?website"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"deleteObject":{"name":"DeleteObject","http":{"method":"DELETE","uri":"/{Bucket}/{Key}?versionId={VersionId}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"},"MFA":{"location":"header","name":"x-amz-mfa"},"VersionId":{"location":"uri"}}},"output":{"type":"structure","members":{"DeleteMarker":{"type":"boolean","location":"header","name":"x-amz-delete-marker"},"VersionId":{"location":"header","name":"x-amz-version-id"}}}},"deleteObjects":{"name":"DeleteObjects","http":{"method":"POST","uri":"/{Bucket}?delete"},"input":{"payload":"Delete","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Delete":{"type":"structure","members":{"Objects":{"type":"list","members":{"type":"structure","members":{"Key":{"required":true},"VersionId":{}}},"flattened":true,"required":true,"name":"Object"},"Quiet":{"type":"boolean"}},"required":true},"MFA":{"location":"header","name":"x-amz-mfa"}}},"output":{"type":"structure","members":{"Deleted":{"type":"list","members":{"type":"structure","members":{"Key":{},"VersionId":{},"DeleteMarker":{"type":"boolean"},"DeleteMarkerVersionId":{}}},"flattened":true},"Error":{"type":"list","members":{"type":"structure","members":{"Key":{},"VersionId":{},"Code":{},"Message":{}}},"flattened":true,"name":"Errors"}}},"alias":"DeleteMultipleObjects"},"getBucketAcl":{"name":"GetBucketAcl","http":{"method":"GET","uri":"/{Bucket}?acl"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"AccessControlList":{"type":"list","members":{"type":"structure","members":{"Grantee":{"type":"structure","members":{"DisplayName":{},"EmailAddress":{},"ID":{},"xsi:type":{"attribute":true,"name":"Type"},"URI":{}},"xmlns":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"Permission":{}},"name":"Grant"},"name":"Grants"}}}},"getBucketCors":{"name":"GetBucketCors","http":{"method":"GET","uri":"/{Bucket}?cors"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"CORSRule":{"type":"list","members":{"type":"structure","members":{"AllowedHeader":{"type":"list","members":{},"flattened":true,"name":"AllowedHeaders"},"AllowedMethod":{"type":"list","members":{},"flattened":true,"name":"AllowedMethods"},"AllowedOrigin":{"type":"list","members":{},"flattened":true,"name":"AllowedOrigins"},"ExposeHeader":{"type":"list","members":{},"flattened":true,"name":"ExposeHeaders"},"MaxAgeSeconds":{"type":"integer"}}},"flattened":true,"name":"CORSRules"}}}},"getBucketLifecycle":{"name":"GetBucketLifecycle","http":{"method":"GET","uri":"/{Bucket}?lifecycle"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Rule":{"type":"list","members":{"type":"structure","members":{"Expiration":{"type":"structure","members":{"Date":{"type":"timestamp","format":"iso8601"},"Days":{"type":"integer"}}},"ID":{},"Prefix":{},"Status":{},"Transition":{"type":"structure","members":{"Date":{"type":"timestamp","format":"iso8601"},"Days":{"type":"integer"},"StorageClass":{}}},"NoncurrentVersionTransition":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"},"StorageClass":{}}},"NoncurrentVersionExpiration":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"}}}}},"flattened":true,"name":"Rules"}}}},"getBucketLocation":{"name":"GetBucketLocation","http":{"method":"GET","uri":"/{Bucket}?location"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"LocationConstraint":{}}}},"getBucketLogging":{"name":"GetBucketLogging","http":{"method":"GET","uri":"/{Bucket}?logging"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"LoggingEnabled":{"type":"structure","members":{"TargetBucket":{},"TargetGrants":{"type":"list","members":{"type":"structure","members":{"Grantee":{"type":"structure","members":{"DisplayName":{},"EmailAddress":{},"ID":{},"xsi:type":{"attribute":true,"name":"Type"},"URI":{}},"xmlns":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"Permission":{}},"name":"Grant"}},"TargetPrefix":{}}}}}},"getBucketNotification":{"name":"GetBucketNotification","http":{"method":"GET","uri":"/{Bucket}?notification"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"TopicConfiguration":{"type":"structure","members":{"Event":{},"Topic":{}}}}}},"getBucketPolicy":{"name":"GetBucketPolicy","http":{"method":"GET","uri":"/{Bucket}?policy"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Policy":{}},"payload":"Policy"}},"getBucketRequestPayment":{"name":"GetBucketRequestPayment","http":{"method":"GET","uri":"/{Bucket}?requestPayment"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Payer":{}}}},"getBucketTagging":{"name":"GetBucketTagging","http":{"method":"GET","uri":"/{Bucket}?tagging"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"TagSet":{"type":"list","members":{"type":"structure","members":{"Key":{},"Value":{}},"name":"Tag"}}}}},"getBucketVersioning":{"name":"GetBucketVersioning","http":{"method":"GET","uri":"/{Bucket}?versioning"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Status":{},"MfaDelete":{"name":"MFADelete"}}}},"getBucketWebsite":{"name":"GetBucketWebsite","http":{"method":"GET","uri":"/{Bucket}?website"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"RedirectAllRequestsTo":{"type":"structure","members":{"HostName":{},"Protocol":{}}},"IndexDocument":{"type":"structure","members":{"Suffix":{}}},"ErrorDocument":{"type":"structure","members":{"Key":{}}},"RoutingRules":{"type":"list","members":{"type":"structure","members":{"Condition":{"type":"structure","members":{"HttpErrorCodeReturnedEquals":{},"KeyPrefixEquals":{}}},"Redirect":{"type":"structure","members":{"HostName":{},"HttpRedirectCode":{},"Protocol":{},"ReplaceKeyPrefixWith":{},"ReplaceKeyWith":{}}}},"name":"RoutingRule"}}}}},"getObject":{"name":"GetObject","http":{"method":"GET","uri":"/{Bucket}/{Key}?versionId={VersionId}&response-content-type={ResponseContentType}&response-content-language={ResponseContentLanguage}&response-expires={ResponseExpires}&response-cache-control={ResponseCacheControl}&response-content-disposition={ResponseContentDisposition}&response-content-encoding={ResponseContentEncoding}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"IfMatch":{"location":"header","name":"If-Match"},"IfModifiedSince":{"type":"timestamp","location":"header","name":"If-Modified-Since"},"IfNoneMatch":{"location":"header","name":"If-None-Match"},"IfUnmodifiedSince":{"type":"timestamp","location":"header","name":"If-Unmodified-Since"},"Key":{"required":true,"location":"uri"},"Range":{"location":"header","name":"Range"},"ResponseCacheControl":{"location":"uri"},"ResponseContentDisposition":{"location":"uri"},"ResponseContentEncoding":{"location":"uri"},"ResponseContentLanguage":{"location":"uri"},"ResponseContentType":{"location":"uri"},"ResponseExpires":{"type":"timestamp","location":"uri"},"VersionId":{"location":"uri"}}},"output":{"type":"structure","members":{"Body":{"type":"binary","streaming":true},"DeleteMarker":{"type":"boolean","location":"header","name":"x-amz-delete-marker"},"AcceptRanges":{"location":"header","name":"accept-ranges"},"Expiration":{"type":"timestamp","location":"header","name":"x-amz-expiration"},"Restore":{"location":"header","name":"x-amz-restore"},"LastModified":{"type":"timestamp","location":"header","name":"Last-Modified"},"ContentLength":{"type":"integer","location":"header","name":"Content-Length"},"ETag":{"location":"header","name":"ETag"},"MissingMeta":{"type":"integer","location":"header","name":"x-amz-missing-meta"},"VersionId":{"location":"header","name":"x-amz-version-id"},"CacheControl":{"location":"header","name":"Cache-Control"},"ContentDisposition":{"location":"header","name":"Content-Disposition"},"ContentEncoding":{"location":"header","name":"Content-Encoding"},"ContentLanguage":{"location":"header","name":"Content-Language"},"ContentType":{"location":"header","name":"Content-Type"},"Expires":{"type":"timestamp","location":"header","name":"Expires"},"WebsiteRedirectLocation":{"location":"header","name":"x-amz-website-redirect-location"},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"Metadata":{"type":"map","location":"header","name":"x-amz-meta-","keys":{},"members":{}}},"payload":"Body"}},"getObjectAcl":{"name":"GetObjectAcl","http":{"method":"GET","uri":"/{Bucket}/{Key}?acl&versionId={VersionId}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"},"VersionId":{"location":"uri"}}},"output":{"type":"structure","members":{"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"AccessControlList":{"type":"list","members":{"type":"structure","members":{"Grantee":{"type":"structure","members":{"DisplayName":{},"EmailAddress":{},"ID":{},"xsi:type":{"attribute":true,"name":"Type"},"URI":{}},"xmlns":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"Permission":{}},"name":"Grant"},"name":"Grants"}}}},"getObjectTorrent":{"name":"GetObjectTorrent","http":{"method":"GET","uri":"/{Bucket}/{Key}?torrent"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Body":{"type":"binary","streaming":true}},"payload":"Body"}},"headBucket":{"name":"HeadBucket","http":{"method":"HEAD","uri":"/{Bucket}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"headObject":{"name":"HeadObject","http":{"method":"HEAD","uri":"/{Bucket}/{Key}?versionId={VersionId}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"IfMatch":{"location":"header","name":"If-Match"},"IfModifiedSince":{"type":"timestamp","location":"header","name":"If-Modified-Since"},"IfNoneMatch":{"location":"header","name":"If-None-Match"},"IfUnmodifiedSince":{"type":"timestamp","location":"header","name":"If-Unmodified-Since"},"Key":{"required":true,"location":"uri"},"Range":{"location":"header","name":"Range"},"VersionId":{"location":"uri"}}},"output":{"type":"structure","members":{"DeleteMarker":{"type":"boolean","location":"header","name":"x-amz-delete-marker"},"AcceptRanges":{"location":"header","name":"accept-ranges"},"Expiration":{"type":"timestamp","location":"header","name":"x-amz-expiration"},"Restore":{"location":"header","name":"x-amz-restore"},"LastModified":{"type":"timestamp","location":"header","name":"Last-Modified"},"ContentLength":{"type":"integer","location":"header","name":"Content-Length"},"ETag":{"location":"header","name":"ETag"},"MissingMeta":{"type":"integer","location":"header","name":"x-amz-missing-meta"},"VersionId":{"location":"header","name":"x-amz-version-id"},"CacheControl":{"location":"header","name":"Cache-Control"},"ContentDisposition":{"location":"header","name":"Content-Disposition"},"ContentEncoding":{"location":"header","name":"Content-Encoding"},"ContentLanguage":{"location":"header","name":"Content-Language"},"ContentType":{"location":"header","name":"Content-Type"},"Expires":{"type":"timestamp","location":"header","name":"Expires"},"WebsiteRedirectLocation":{"location":"header","name":"x-amz-website-redirect-location"},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"Metadata":{"type":"map","location":"header","name":"x-amz-meta-","keys":{},"members":{}}}}},"listBuckets":{"name":"ListBuckets","http":{"method":"GET","uri":"/"},"input":{"type":"structure","members":{}},"output":{"type":"structure","members":{"Buckets":{"type":"list","members":{"type":"structure","members":{"Name":{},"CreationDate":{"type":"timestamp"}},"name":"Bucket"}},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}}}},"alias":"GetService"},"listMultipartUploads":{"name":"ListMultipartUploads","http":{"method":"GET","uri":"/{Bucket}?uploads&prefix={Prefix}&delimiter={Delimiter}&max-uploads={MaxUploads}&key-marker={KeyMarker}&upload-id-marker={UploadIdMarker}&encoding-type={EncodingType}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Delimiter":{"location":"uri"},"EncodingType":{"location":"uri"},"KeyMarker":{"location":"uri"},"MaxUploads":{"type":"integer","location":"uri"},"Prefix":{"location":"uri"},"UploadIdMarker":{"location":"uri"}}},"output":{"type":"structure","members":{"Bucket":{},"KeyMarker":{},"UploadIdMarker":{},"NextKeyMarker":{},"Prefix":{},"NextUploadIdMarker":{},"MaxUploads":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Upload":{"type":"list","members":{"type":"structure","members":{"UploadId":{},"Key":{},"Initiated":{"type":"timestamp"},"StorageClass":{},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"Initiator":{"type":"structure","members":{"ID":{},"DisplayName":{}}}}},"flattened":true,"name":"Uploads"},"CommonPrefixes":{"type":"list","members":{"type":"structure","members":{"Prefix":{}}},"flattened":true},"EncodingType":{}}}},"listObjectVersions":{"name":"ListObjectVersions","http":{"method":"GET","uri":"/{Bucket}?versions&delimiter={Delimiter}&key-marker={KeyMarker}&max-keys={MaxKeys}&prefix={Prefix}&version-id-marker={VersionIdMarker}&encoding-type={EncodingType}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Delimiter":{"location":"uri"},"EncodingType":{"location":"uri"},"KeyMarker":{"location":"uri"},"MaxKeys":{"type":"integer","location":"uri"},"Prefix":{"location":"uri"},"VersionIdMarker":{"location":"uri"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"KeyMarker":{},"VersionIdMarker":{},"NextKeyMarker":{},"NextVersionIdMarker":{},"Version":{"type":"list","members":{"type":"structure","members":{"ETag":{},"Size":{"type":"integer"},"StorageClass":{},"Key":{},"VersionId":{},"IsLatest":{"type":"boolean"},"LastModified":{"type":"timestamp"},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}}}},"flattened":true,"name":"Versions"},"DeleteMarker":{"type":"list","members":{"type":"structure","members":{"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"Key":{},"VersionId":{},"IsLatest":{"type":"boolean"},"LastModified":{"type":"timestamp"}}},"flattened":true,"name":"DeleteMarkers"},"Name":{},"Prefix":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"type":"list","members":{"type":"structure","members":{"Prefix":{}}},"flattened":true},"EncodingType":{}}},"alias":"GetBucketObjectVersions"},"listObjects":{"name":"ListObjects","http":{"method":"GET","uri":"/{Bucket}?delimiter={Delimiter}&marker={Marker}&max-keys={MaxKeys}&prefix={Prefix}&encoding-type={EncodingType}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Delimiter":{"location":"uri"},"EncodingType":{"location":"uri"},"Marker":{"location":"uri"},"MaxKeys":{"type":"integer","location":"uri"},"Prefix":{"location":"uri"}}},"output":{"type":"structure","members":{"IsTruncated":{"type":"boolean"},"Marker":{},"NextMarker":{},"Contents":{"type":"list","members":{"type":"structure","members":{"Key":{},"LastModified":{"type":"timestamp"},"ETag":{},"Size":{"type":"integer"},"StorageClass":{},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}}}},"flattened":true},"Name":{},"Prefix":{},"MaxKeys":{"type":"integer"},"CommonPrefixes":{"type":"list","members":{"type":"structure","members":{"Prefix":{}}},"flattened":true},"EncodingType":{}}},"alias":"GetBucket"},"listParts":{"name":"ListParts","http":{"method":"GET","uri":"/{Bucket}/{Key}?uploadId={UploadId}&max-parts={MaxParts}&part-number-marker={PartNumberMarker}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"},"MaxParts":{"type":"integer","location":"uri"},"PartNumberMarker":{"type":"integer","location":"uri"},"UploadId":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"Bucket":{},"Key":{},"UploadId":{},"PartNumberMarker":{"type":"integer"},"NextPartNumberMarker":{"type":"integer"},"MaxParts":{"type":"integer"},"IsTruncated":{"type":"boolean"},"Part":{"type":"list","members":{"type":"structure","members":{"PartNumber":{"type":"integer"},"LastModified":{"type":"timestamp"},"ETag":{},"Size":{"type":"integer"}}},"flattened":true,"name":"Parts"},"Initiator":{"type":"structure","members":{"ID":{},"DisplayName":{}}},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}},"StorageClass":{}}}},"putBucketAcl":{"name":"PutBucketAcl","http":{"method":"PUT","uri":"/{Bucket}?acl"},"input":{"payload":"AccessControlPolicy","type":"structure","members":{"ACL":{"location":"header","name":"x-amz-acl"},"AccessControlPolicy":{"type":"structure","members":{"Grants":{"type":"list","members":{"type":"structure","members":{"Grantee":{"type":"structure","members":{"DisplayName":{},"EmailAddress":{},"ID":{},"Type":{"required":true,"attribute":true,"name":"xsi:type"},"URI":{}},"xmlns":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"Permission":{}},"name":"Grant"},"name":"AccessControlList"},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}}}},"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"GrantFullControl":{"location":"header","name":"x-amz-grant-full-control"},"GrantRead":{"location":"header","name":"x-amz-grant-read"},"GrantReadACP":{"location":"header","name":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","name":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","name":"x-amz-grant-write-acp"}}},"output":{"type":"structure","members":{}}},"putBucketCors":{"name":"PutBucketCors","http":{"method":"PUT","uri":"/{Bucket}?cors"},"input":{"payload":"CORSConfiguration","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"CORSConfiguration":{"type":"structure","members":{"CORSRules":{"type":"list","members":{"type":"structure","members":{"AllowedHeaders":{"type":"list","members":{},"flattened":true,"name":"AllowedHeader"},"AllowedMethods":{"type":"list","members":{},"flattened":true,"name":"AllowedMethod"},"AllowedOrigins":{"type":"list","members":{},"flattened":true,"name":"AllowedOrigin"},"ExposeHeaders":{"type":"list","members":{},"flattened":true,"name":"ExposeHeader"},"MaxAgeSeconds":{"type":"integer"}}},"flattened":true,"name":"CORSRule"}}},"ContentMD5":{"location":"header","name":"Content-MD5"}}},"output":{"type":"structure","members":{}}},"putBucketLifecycle":{"name":"PutBucketLifecycle","http":{"method":"PUT","uri":"/{Bucket}?lifecycle"},"input":{"payload":"LifecycleConfiguration","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"LifecycleConfiguration":{"type":"structure","members":{"Rules":{"type":"list","members":{"type":"structure","members":{"Expiration":{"type":"structure","members":{"Date":{"type":"timestamp","format":"iso8601"},"Days":{"type":"integer"}}},"ID":{},"Prefix":{"required":true},"Status":{"required":true},"Transition":{"type":"structure","members":{"Date":{"type":"timestamp","format":"iso8601"},"Days":{"type":"integer"},"StorageClass":{}}},"NoncurrentVersionTransition":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"},"StorageClass":{}}},"NoncurrentVersionExpiration":{"type":"structure","members":{"NoncurrentDays":{"type":"integer"}}}}},"flattened":true,"required":true,"name":"Rule"}}}}},"output":{"type":"structure","members":{}}},"putBucketLogging":{"name":"PutBucketLogging","http":{"method":"PUT","uri":"/{Bucket}?logging"},"input":{"payload":"BucketLoggingStatus","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"BucketLoggingStatus":{"type":"structure","members":{"LoggingEnabled":{"type":"structure","members":{"TargetBucket":{},"TargetGrants":{"type":"list","members":{"type":"structure","members":{"Grantee":{"type":"structure","members":{"DisplayName":{},"EmailAddress":{},"ID":{},"Type":{"required":true,"attribute":true,"name":"xsi:type"},"URI":{}},"xmlns":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"Permission":{}},"name":"Grant"}},"TargetPrefix":{}}}},"required":true},"ContentMD5":{"location":"header","name":"Content-MD5"}}},"output":{"type":"structure","members":{}}},"putBucketNotification":{"name":"PutBucketNotification","http":{"method":"PUT","uri":"/{Bucket}?notification"},"input":{"payload":"NotificationConfiguration","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"NotificationConfiguration":{"type":"structure","members":{"TopicConfiguration":{"type":"structure","members":{"Event":{},"Topic":{}},"required":true}},"required":true}}},"output":{"type":"structure","members":{}}},"putBucketPolicy":{"name":"PutBucketPolicy","http":{"method":"PUT","uri":"/{Bucket}?policy"},"input":{"payload":"Policy","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"Policy":{"required":true}}},"output":{"type":"structure","members":{}}},"putBucketRequestPayment":{"name":"PutBucketRequestPayment","http":{"method":"PUT","uri":"/{Bucket}?requestPayment"},"input":{"payload":"RequestPaymentConfiguration","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"RequestPaymentConfiguration":{"type":"structure","members":{"Payer":{"required":true}},"required":true}}},"output":{"type":"structure","members":{}}},"putBucketTagging":{"name":"PutBucketTagging","http":{"method":"PUT","uri":"/{Bucket}?tagging"},"input":{"payload":"Tagging","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"Tagging":{"type":"structure","members":{"TagSet":{"type":"list","members":{"type":"structure","members":{"Key":{"required":true},"Value":{"required":true}},"name":"Tag"},"required":true}},"required":true}}},"output":{"type":"structure","members":{}}},"putBucketVersioning":{"name":"PutBucketVersioning","http":{"method":"PUT","uri":"/{Bucket}?versioning"},"input":{"payload":"VersioningConfiguration","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"MFA":{"location":"header","name":"x-amz-mfa"},"VersioningConfiguration":{"type":"structure","members":{"MFADelete":{"name":"MfaDelete"},"Status":{}},"required":true}}},"output":{"type":"structure","members":{}}},"putBucketWebsite":{"name":"PutBucketWebsite","http":{"method":"PUT","uri":"/{Bucket}?website"},"input":{"payload":"WebsiteConfiguration","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"WebsiteConfiguration":{"type":"structure","members":{"ErrorDocument":{"type":"structure","members":{"Key":{"required":true}}},"IndexDocument":{"type":"structure","members":{"Suffix":{"required":true}}},"RedirectAllRequestsTo":{"type":"structure","members":{"HostName":{"required":true},"Protocol":{}}},"RoutingRules":{"type":"list","members":{"type":"structure","members":{"Condition":{"type":"structure","members":{"HttpErrorCodeReturnedEquals":{},"KeyPrefixEquals":{}}},"Redirect":{"type":"structure","members":{"HostName":{},"HttpRedirectCode":{},"Protocol":{},"ReplaceKeyPrefixWith":{},"ReplaceKeyWith":{}},"required":true}},"name":"RoutingRule"}}},"required":true}}},"output":{"type":"structure","members":{}}},"putObject":{"name":"PutObject","http":{"method":"PUT","uri":"/{Bucket}/{Key}"},"input":{"payload":"Body","type":"structure","members":{"ACL":{"location":"header","name":"x-amz-acl"},"Body":{"type":"binary","streaming":true},"Bucket":{"required":true,"location":"uri"},"CacheControl":{"location":"header","name":"Cache-Control"},"ContentDisposition":{"location":"header","name":"Content-Disposition"},"ContentEncoding":{"location":"header","name":"Content-Encoding"},"ContentLanguage":{"location":"header","name":"Content-Language"},"ContentLength":{"type":"integer","location":"header","name":"Content-Length"},"ContentMD5":{"location":"header","name":"Content-MD5"},"ContentType":{"location":"header","name":"Content-Type"},"Expires":{"type":"timestamp","location":"header","name":"Expires"},"GrantFullControl":{"location":"header","name":"x-amz-grant-full-control"},"GrantRead":{"location":"header","name":"x-amz-grant-read"},"GrantReadACP":{"location":"header","name":"x-amz-grant-read-acp"},"GrantWriteACP":{"location":"header","name":"x-amz-grant-write-acp"},"Key":{"required":true,"location":"uri"},"Metadata":{"type":"map","location":"header","name":"x-amz-meta-","keys":{},"members":{}},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"StorageClass":{"location":"header","name":"x-amz-storage-class"},"WebsiteRedirectLocation":{"location":"header","name":"x-amz-website-redirect-location"}}},"output":{"type":"structure","members":{"Expiration":{"type":"timestamp","location":"header","name":"x-amz-expiration"},"ETag":{"location":"header","name":"ETag"},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"VersionId":{"location":"header","name":"x-amz-version-id"}}}},"putObjectAcl":{"name":"PutObjectAcl","http":{"method":"PUT","uri":"/{Bucket}/{Key}?acl"},"input":{"payload":"AccessControlPolicy","type":"structure","members":{"ACL":{"location":"header","name":"x-amz-acl"},"AccessControlPolicy":{"type":"structure","members":{"Grants":{"type":"list","members":{"type":"structure","members":{"Grantee":{"type":"structure","members":{"DisplayName":{},"EmailAddress":{},"ID":{},"Type":{"required":true,"attribute":true,"name":"xsi:type"},"URI":{}},"xmlns":{"prefix":"xsi","uri":"http://www.w3.org/2001/XMLSchema-instance"}},"Permission":{}},"name":"Grant"},"name":"AccessControlList"},"Owner":{"type":"structure","members":{"DisplayName":{},"ID":{}}}}},"Bucket":{"required":true,"location":"uri"},"ContentMD5":{"location":"header","name":"Content-MD5"},"GrantFullControl":{"location":"header","name":"x-amz-grant-full-control"},"GrantRead":{"location":"header","name":"x-amz-grant-read"},"GrantReadACP":{"location":"header","name":"x-amz-grant-read-acp"},"GrantWrite":{"location":"header","name":"x-amz-grant-write"},"GrantWriteACP":{"location":"header","name":"x-amz-grant-write-acp"},"Key":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{}}},"restoreObject":{"name":"RestoreObject","http":{"method":"POST","uri":"/{Bucket}/{Key}?restore&versionId={VersionId}"},"input":{"payload":"RestoreRequest","type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"Key":{"required":true,"location":"uri"},"VersionId":{"location":"uri"},"RestoreRequest":{"type":"structure","members":{"Days":{"type":"integer","required":true}}}}},"output":{"type":"structure","members":{}},"alias":"PostObjectRestore"},"uploadPart":{"name":"UploadPart","http":{"method":"PUT","uri":"/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}"},"input":{"payload":"Body","type":"structure","members":{"Body":{"type":"binary","streaming":true},"Bucket":{"required":true,"location":"uri"},"ContentLength":{"type":"integer","location":"header","name":"Content-Length"},"ContentMD5":{"location":"header","name":"Content-MD5"},"Key":{"required":true,"location":"uri"},"PartNumber":{"type":"integer","required":true,"location":"uri"},"UploadId":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"ETag":{"location":"header","name":"ETag"}}}},"uploadPartCopy":{"name":"UploadPartCopy","http":{"method":"PUT","uri":"/{Bucket}/{Key}?partNumber={PartNumber}&uploadId={UploadId}"},"input":{"type":"structure","members":{"Bucket":{"required":true,"location":"uri"},"CopySource":{"required":true,"location":"header","name":"x-amz-copy-source"},"CopySourceIfMatch":{"location":"header","name":"x-amz-copy-source-if-match"},"CopySourceIfModifiedSince":{"type":"timestamp","location":"header","name":"x-amz-copy-source-if-modified-since"},"CopySourceIfNoneMatch":{"location":"header","name":"x-amz-copy-source-if-none-match"},"CopySourceIfUnmodifiedSince":{"type":"timestamp","location":"header","name":"x-amz-copy-source-if-unmodified-since"},"CopySourceRange":{"location":"header","name":"x-amz-copy-source-range"},"Key":{"required":true,"location":"uri"},"PartNumber":{"type":"integer","required":true,"location":"uri"},"UploadId":{"required":true,"location":"uri"}}},"output":{"type":"structure","members":{"CopySourceVersionId":{"location":"header","name":"x-amz-copy-source-version-id"},"ServerSideEncryption":{"location":"header","name":"x-amz-server-side-encryption"},"ETag":{},"LastModified":{"type":"timestamp"}}}}},"pagination":{"listBuckets":{"resultKey":"Buckets"},"listMultipartUploads":{"limitKey":"MaxUploads","moreResults":"IsTruncated","outputToken":["NextKeyMarker","NextUploadIdMarker"],"inputToken":["KeyMarker","UploadIdMarker"],"resultKey":"Uploads"},"listObjectVersions":{"moreResults":"IsTruncated","limitKey":"MaxKeys","outputToken":["NextKeyMarker","NextVersionIdMarker"],"inputToken":["KeyMarker","VersionIdMarker"],"resultKey":"Versions"},"listObjects":{"moreResults":"IsTruncated","limitKey":"MaxKeys","outputToken":"NextMarker or Contents[-1].Key","inputToken":"Marker","resultKey":["Contents","CommonPrefixes"]},"listParts":{"moreResults":"IsTruncated","limitKey":"MaxParts","outputToken":"NextPartNumberMarker","inputToken":"PartNumberMarker","resultKey":"Parts"}},"waiters":{"__default__":{"interval":5,"maxAttempts":20},"bucketExists":{"operation":"HeadBucket","ignoreErrors":["NoSuchBucket"],"successType":"output"},"bucketNotExists":{"operation":"HeadBucket","successType":"error","successValue":404},"objectExists":{"operation":"HeadObject","ignoreErrors":["NoSuchKey"],"successType":"output"},"objectNotExists":{"operation":"HeadObject","successType":"error","successValue":404}}});