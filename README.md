Solution to Laybuy Test

## What's here?


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
