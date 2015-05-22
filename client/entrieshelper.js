//Used to
Template.start.helpers({
  entries: function() {
    return Entries.find();
  },
  columns: function() {
    // the context is a part
    var result = _.values(this.data);
    result.unshift(this.text);
    return result;
  }
});