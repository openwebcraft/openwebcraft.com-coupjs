function (newDoc, oldDoc, userCtx, secObj) {
  var v = require('lib/validate').init(newDoc, oldDoc, userCtx, secObj);

  v.isAuthor = function() {
    return v.isAdmin() || userCtx.roles.indexOf('author') != -1;
  };

  // admins or owner can always delete
  if (v.isAdmin()) return true;
  if (((oldDoc && (oldDoc.author == userCtx.name))) && newDoc._deleted) return true;

  v.unchanged('type');
  v.unchanged('created_at');

  // docs with authors can only be saved by their author
  // admin can author anything...
  if (!v.isAdmin() && newDoc.author && newDoc.author != userCtx.name) {    
    v.unauthorized('Only '+newDoc.author+' may edit this document.');
  }
      
  if (newDoc) {
    if (!v.isAuthor()) {
      v.unauthorized('Only authors or admin may create/ edit documents.');
    }
    v.require('created_at', 'author', 'content', 'content_format', 'title', 'type');
  }
}