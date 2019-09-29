Solution to Laybuy Assessment

## What is this?
This is a solution to the Laybuy's technical assessment.

## How was it made?
It's been developed with node, typescript, grapql and type-graphql on the Back-end and React with apollo libraries in order to query Graphql Local Server.

There are many features than this solution didn't take in count but they should totally be added on a more **prod-like** release:

* Caching: there are thousands of results coming from the Rest API and they seem to be quite static values. Hence, querying them once and caching them on redis, memcached or even a small persistant database could be a good solution, in order to avoid such a long delays caused by requesting the values from the Rest Endpoint.
* pagination: having so many results, another *must-have* feature is the pagination. Specially on the graphql back-end so we can reduce network traffic.
* There areany other things to be done on the front end, however, it was not my goal to deliver or show up some more advanced as time is a constraint in my life.

## What's in here?


There are two components on this repo:

1) A GraphQL Server using Graphql-yoga, type-graphql in order to use
a more concise annotation approach, typescript and jest. 
2) A React front end consuming the data provided by the GraphQL Server.

Project Directory:
```
.
├── deploy                  # Start and Deployment scripts
├── dist                    # compiled files
└── src                     # source code
│   ├── data                # Mock data 
│   ├── resolvers           # GraphQL Resolvers
│   ├── schemas             # GraphQL Schemas
│   ├── tests               # A few jest tests.
│   ├── ui-grapql-grid      ##### NOTE: Reactjs Front end ######
│   ├── src                 # Front end source code


```

#Installing and Running

The GraphQL server and the Reactjs website requires you to install several dependencies and running scripts to run them.
There are a few scripts in **./deploy** folder which automates this process for you:

`
$ ./deploy.sh
`
Run it in order to install all dependencies and compiling Typescript code.

`$ ./start-server.sh`
starts graphql server.

`$ ./start-ui.sh` starts react website.

Once you have Graphql and React running, you'll be able to fetch Laybuys Merchants using their REST API ENDPOINT as a Datasource but exposing them with GraphQL.
When you start the react website, you'll also be able to view the results in a basic react page.


If you find any problem or you have question about the code, email me on **raco@raulcornejo.com**
