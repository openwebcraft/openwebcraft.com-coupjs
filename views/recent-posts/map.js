function(doc) {
    if (doc.created_at && doc.type == "post" && doc.status == "published") {
        var _ = require('views/lib/underscore');
        var moment = require('views/lib/moment');
        emit(doc.created_at, _.extend({created_at_from_now: moment(doc.created_at).fromNow()}, doc));
        //emit(doc.created_at, null);
    }
}
