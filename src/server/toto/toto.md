toto 
./index.js pulls in routes, module exporter for dir 
./routes.js handles api routes
./toto.js main code logic, exposes api functions for router
./crud.js db tools exports functions
./helpers.js helper functions, most-used stuff
./data/*.json db and templates 
What do we want to do here

the main function here returns all these functions for the router
crud handles the satabase ops, we just call them here for sorting and whatnot

helpers have non-crud-related, resuable functions

crud has crud-related reusable functions

routes calls functions in here to pass values through


