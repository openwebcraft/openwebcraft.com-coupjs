function(doc) {
  if (doc.created_at && doc.type == "page") {
    emit(doc.created_at, null);
  }
}
