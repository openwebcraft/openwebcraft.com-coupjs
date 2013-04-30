function(doc) {
    if (doc.created_at && doc.type == "post" && doc.status == "published") {
        var _ = require('views/lib/underscore');
        var moment = require('views/lib/moment');
        emit(doc.created_at, _.extend(
            {
                // human readbale created_at date using moment.js
                created_at_from_now: moment(doc.created_at).fromNow(),
                // flatten out _attachments to ease {{ mustache }} rendering
                attachments: _.map(doc._attachments, function(value, key, list) {
                    return {filename: key, metadata: value};
                })
            }, doc)
        );
        //emit(doc.created_at, null);
    }
}
