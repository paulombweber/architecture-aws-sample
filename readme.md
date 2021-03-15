This is a serverless framework architecture based on micro services grouped in domains that run on the same API Gateway

- This is a monorepo only so that you can see the whole thing easily, but they're built in a way that every service can ( and I recommend they to ) be isolated as a differente repository
- Easy to build and put new services and domains on
- Every service will be isolated from the others, even if you mistakenly put the same base url it'll produce an error and not let you screw things up
- Every domain creates a new resource on the api-gateway and it can be passed to the services below
- If you don't need to group the services on domains, you can just remove that and import the gateway on the services directly
- The groups of service normally are used to isolate some services based on context and people who'll work on them, one example would be a domain called HCM (Human Capital Management) which contains services like payroll, hiring and feedbacks. Or ERP ( Enterprise Resource Planning ) which contains services like sales, inventory, providers, and so on. But again, this is optional and easy to remove if you want to

I'm not sure how to use custom basePath property, it would probably make it even easier