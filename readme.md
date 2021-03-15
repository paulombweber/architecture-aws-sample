This is a serverless framework architecture based on micro services grouped in domains that run on the same API Gateway

- Easy to build and put new services and domains on
- Every service will be isolated from the others, even if you mistakenly put the same base url it'll produce an error and not let you screw things up.
- Every domain needs to have at least one function so that it creates a new resource on the api-gateway and it can be passed to the services below
- If you don't need to group the services on domains, you can just remove that and import the gateway on the services directly

I'm not sure how to use custom basePath property, it would make it even easier