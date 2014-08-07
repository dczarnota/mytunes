// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){

  },

  playFirst: function(){
    this.trigger('playFirst', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  }
});
