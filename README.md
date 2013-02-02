# openwebcraft.com-coupjs

Yet another openwebcraft.com web site.

## Building Blocks

- **Site application**: [CouchApp][couchapp] - a JavaScript and HTML5 application, served directly from [Apache CouchDB][couchdb] using [Coup.js][coupjs] (to render html server side on first request and handle subsequent calls client side, resulting in fast, SEO friendly pageload) and [Page.js][pagejs] as client-side router.
- **CouchApp Deployment**: [Mouch][mouch] - Ruby script to assemble the project files and deploy the application.
- **Site Backend**: [Apache CouchDB][couchdb] - a (NoSQL) database that uses JSON for documents, JavaScript for MapReduce queries, and regular HTTP for an API.
- **Templates**: [mustache.js][mustachejs] - an implementation of the [mustache][mustache] template system in JavaScript.

## Setup

    bundle install

## Configuration

localhost: in file `.env.localhost`, e.g. `COUCH_URL=http://admin:password@127.0.0.1:5984/openwebcraft_com_coupjs`

Iris Couch: in file `.env.iriscouch`, e.g. `COUCH_URL=https://admin:party@openwebcraft.iriscouch.com/openwebcraft_com_coupjs`

## Deployment

Per target environment:

    rake target={localhost|iriscouch} mouch

Site start url: [http://127.0.0.1:5984/openwebcraft_com_coupjs/_design/pages/_rewrite](http://127.0.0.1:5984/openwebcraft_com_coupjs/_design/pages/_rewrite)

[couchdb]: http://couchdb.apache.org "Apache CouchDB"
[couchapp]: http://couchapp.org/ "CouchApp"
[mustache]: http://mustache.github.com/ "mustache"
[mustachejs]: https://github.com/janl/mustache.js/ "mustache.js"
[coupjs]: https://github.com/jo/coup.js "Coup.js"
[pagejs]: http://visionmedia.github.com/page.js/ "Page.js"
[mouch]: http://jo.github.com/mouch/ "Mouch"