import { Template } from 'meteor/templating';
// import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';
import './playground.html';
import './maxim.js';
import './playground.js';
import '/lib/collection.js';

Meteor.startup(function () {
  
});


  Template.playground.helpers({
    
    "buttons": function(){
      // Session.get('reactivate');
      var starter = MusicMachine.findOne({});
      if (starter) {
        if (starter.start==1) {
          toggleOnByInput("toggleMachine");            
        } else if (starter.start==0) {
          toggleOffByInput("toggleMachine");
        }

       


        if (starter.drums==1) {
          toggleOnByInput("toggle1");            
        } else if (starter.drums==0) {
          toggleOffByInput("toggle1");
        }

        if (starter.bassline==1) {
          toggleOnByInput("toggle2");            
        } else if (starter.bassline==0) {
          toggleOffByInput("toggle2");
        }

        if (starter.arp==1) {
          toggleOnByInput("toggle3");            
        } else if (starter.arp==0) {
          toggleOffByInput("toggle3");
        }

        if (starter.cymbal1==1) {
          toggleOnByInput("toggle4");            
        } else if (starter.cymbal1==0) {
          toggleOffByInput("toggle4");
        }

        if (starter.hihat2==1) {
          toggleOnByInput("toggle5");            
        } else if (starter.hihat2==0) {
          toggleOffByInput("toggle5");
        }

        if (starter.snaredrum1==1) {
          toggleOnByInput("toggle6");            
        } else if (starter.snaredrum1==0) {
          toggleOffByInput("toggle6");
        }

        //  if (starter.playall==1) {
        //   toggleOnByInput("toggleAll");            
        // } else if (starter.playall==0) {
        //   toggleOffByInput("toggleAll");
        // }


      }
    },

    "startmachine": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne({});
      if (starter) {
        if (starter.start==1) {
          startMachine();
          return "Machine is ON";
        } else if (starter.start==0) {
          stopMachine();
          return "Machine is OFF";
        }
      }
    },

    "drums": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne({});
      if (starter) {
        if (starter.drums==1) {
          // toggleOn("toggle1");
          // toggleOnByInput("toggle1");
          playDrums();
          
          
          return "ON";
        } else if (starter.drums==0) {
          // toggleOff("toggle1");
          // toggleOffByInput("toggle1");
          stopDrums();
          
          
          return "OFF";
        }
      }
    },

    "bass": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne({});
      if (starter) {
        if (starter.bassline==1) {
          playBass();
          return "ON";
        } else if (starter.bassline==0) {
          stopBass();
          return "OFF";
        }
      }
    },

    "arp": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne({});
      if (starter) {
        if (starter.arp==1) {
          playArp();
          return "ON";
        } else if (starter.arp==0) {
          stopArp();
          return "OFF";
        }
      }
    },

    "cymbal1": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.cymbal1==1) {
          playCymbal1();
          return "ON";
        } else if (starter.cymbal1==0) {
          stopCymbal1();
          return "OFF";
        }
      }
    },


    "hihat2": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.hihat2==1) {
          playHihat2();
          return "ON";
        } else if (starter.hihat2==0) {
          stopHihat2();
          return "OFF";
        }
      }
    },

    "snaredrum1": function () {
      Session.get('reactivate');
      var starter = MusicMachine.findOne();
      if (starter) {
        if (starter.snaredrum1==1) {
          playSnaredrum1();
          return "ON";
        } else if (starter.snaredrum1==0) {
          stopSnaredrum1();
          return "OFF";
        }
      }
    },

   

    //don't forget the commas between each function
//the last one doesn't have to have one!


  "sliderVal1":  function() { 
    var slider = MusicMachine.findOne();
    if (slider) { 
        Template.instance().$('#slider1').data('uiSlider').value(slider.slide);
        setSpeed(slider.slide/50);
        return slider.slide;
      }
    },

  }); // playgrounf helper
// }); //startup function


  Template.playground.events({

      "change span.toggleMachine": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {start: x}});
    },


      "change span.toggleAll": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {drums: x,bassline: x, arp: x, cymbal1: x, hihat2: x, snaredrum1: x}});
        // if (x){x= "on"}
        // else {x= "off"}
        // console.log(x);
        // $('.toggle-alltracks').bootstrapToggle(x);
    },

      "change span.toggle1": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {drums: x}});
    },

      "change span.toggle2": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {bassline: x}});
    },

      "change span.toggle3": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {arp: x}});
    },

      "change span.toggle4": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {cymbal1: x}});
    },

      "change span.toggle5": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {hihat2: x}});
    },

      "change span.toggle6": function(event) {
        var x = event.target.checked * 1; // to convert true/false to 1/0
        Session.set('reactivate', x);
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {snaredrum1: x}});
    },

});



  Template.playground.onRendered(function() {
    $('h2').hide();
    var handler = _.throttle(function(event, ui) {
        var val = MusicMachine.findOne({});
        MusicMachine.update({ _id: val._id }, {$set: {slide: ui.value}});
    }, 50, { leading: false });
    
    if (!this.$('#slider1').data('uiSlider')) {
        $("#slider1").slider({
            slide: handler,
            min: 0,
            max: 100
        });
    }
  });


function toggleOn(id) {
  $('#'+id).bootstrapToggle('on');
}
function toggleOff(id) {
  $('#'+id).bootstrapToggle('off');  
}
function toggleOnByInput(id) {
  $('#'+id).prop('checked', true).change();
}
function toggleOffByInput(id) {
  $('#'+id).prop('checked', false).change();
}