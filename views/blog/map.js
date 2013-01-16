function(doc) {
  if (doc.date && doc.type == "post") {
    emit(doc.date, null);
  }
}
