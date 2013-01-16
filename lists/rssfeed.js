function(head, req) {
  start({
    "headers": {
      "Content-Type": "application/rss+xml"
     }
  });
  
  return require('lib/coup.couch')(this, head, req, function(view) {
    view.rows = [];

    // fetch rows
    while (row = getRow()) view.rows.push(row);
  });
}
