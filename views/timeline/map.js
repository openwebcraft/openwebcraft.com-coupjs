function(doc) {
  if (doc.date && doc.type == "page") {
    emit(doc.date, null);
  }
}
