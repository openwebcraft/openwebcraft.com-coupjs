function(doc) {
  if (doc.created_at && doc.type == "post" && doc.status == "published") {
    emit(doc.created_at, null);
  }
}
