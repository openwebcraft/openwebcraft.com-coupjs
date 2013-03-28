function(doc) {
    if (doc.created_at && doc.type == "post" && doc.status == "draft") {
        emit(doc.created_at, null);
    }
}