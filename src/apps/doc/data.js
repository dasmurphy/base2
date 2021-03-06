
doc.data = new Base({
  PATH: "/data/doc/entries/",
  
  exists: function(objectID, entry) {
    return MiniWeb.server.io.exists(this.makepath(objectID, entry));
  },

  makepath: function(objectID, entry) {
    return this.PATH + String(objectID).replace(/::/, '.prototype.').split('.').join('/') + '/#' + entry;
  },

  read: function(objectID, entry) {
    return MiniWeb.server.io.read(this.makepath(objectID, entry));
  },

  remove: function(objectID, entry) {
    return MiniWeb.server.io.remove(this.makepath(objectID, entry));
  },
  
  write: function(objectID, entry, value) {
    var io = MiniWeb.server.io;
    var names = objectID.replace(/::/, '.prototype.').split('.');
    for (var i = 1; i <= names.length; i++) {
      var path = this.PATH + names.slice(0, i).join('/');
      if (!io.isDirectory(path)) {
        io.mkdir(path);
      }
    }
    io.write(path + '/#' + entry, value);
  }
});
