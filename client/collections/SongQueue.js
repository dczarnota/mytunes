// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model: SongModel,

  initialize: function(){

    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    });

    this.on('ended', function(){
      this.at(0).destroy();
      if(this.length >= 1){
        this.playFirst();
      }
    }, this);

    this.on('playFirst', function() {
      this.at(0).play();
    }, this);

    this.on('dequeue', function(){
      this.ended();
    }, this);

  },

  playFirst: function(){
    this.trigger('playFirst', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  }
});
