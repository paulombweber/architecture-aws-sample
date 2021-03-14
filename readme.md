This is a sample of a serverless framework architecture based on micro services that run on the same API Gateway

Pros:
- Easy to build and put new services on
- Every service will be isolated from the others, even if you mistakenly put the same base url it'll produce an error and not let you screw things up.

Cons:
- If you put any lambda on the api gateway micro service it'll create a new api gateway on AWS, so it'll have a differente url than the one exported( if you do discover how to fix this, PR to this repo please )


I'm not sure how to use custom basePath property, it would make it even easier