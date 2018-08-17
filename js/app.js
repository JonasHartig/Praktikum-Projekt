var app = new Vue({
  el: '#app',
  data: {
    slideIndex: 1,
    headline: "The Terminal",
    data: {},
    containers: [{
        type: "todo",
        todos: [{
          name: "todo1",
          completed: true
        }, {
          name: "todo1",
          completed: true
        }]
      },
      {
        type: "linkbox",
        links: [{
            name: "wikipedia",
            url: "https://wikipedia.org",
            types: ["account", "personal"],
            icon: "img/wikipedia-w-brands.svg"
          },
          {
            name: "youtube",
            url: "https://www.youtube.com",
            types: ["account", "personal"],
            icon: "img/youtube-brands.svg"
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv",
            types: ["account", "personal"],
            icon: "img/twitch-brands.svg"
          },
          {
            name: "amazon",
            url: "https://www.amazon.de/",
            types: ["account", "personal"],
            icon:"img/amazon-brands.svg"
          },
          {
            name: "netflix",
            url: "https://www.netflix.com/browse",
            types: ["account", "personal"],
            icon:"img/tab-icon.svg"
          },
          {
            name: "deepl",
            url: "https://www.deepl.com/translator",
            types: ["account", "personal"],
            icon:"img/tab-icon.svg"
          },
          {
            name: "twitter",
            url: "https://twitter.com/",
            types: ["account", "personal"],
            icon:"img/twitter-square-brands.svg"
          },
          {
            name: "whatsapp Web",
            url: "https://web.whatsapp.com/",
            types: ["account", "personal"],
            icon:"img/whatsapp-square-brands.svg"
          },
          {
            name: "dropbox",
            url: "https://www.dropbox.com/",
            types: ["account", "personal"],
            icon:"img/dropbox-brands.svg"
          }
        ]

      },
      {
        type: "vcard",
        todos: [{
          name: "todo1",
          completed: true
        }, {
          name: "todo1",
          completed: true
        }]
      }

    ]
  },
  created: function(){
    var param = {
      name: "whatsapp Web",
      url: "https://web.whatsapp.com/",
      types: ["account", "personal"],
      icon: ""
    };
    var vm = this;
         return $.ajax({
         url: 'https://the-terminal.firebaseio.com//.json',
         type: "get",
         data: JSON.stringify(param),
         success: function (e) {
            console.log("success", e, e["-LK74cOfNE_4BKqRF1O-"]);
            // var data = JSON.parse();
            $.each(e, function(key, val) {
              vm.containers[1].links.push(val);
            })
         },
         error: function(error) {
           alert("error: "+error);
         }
       });



    // console.log(data["-LK74cOfNE_4BKqRF1O"]);
    // $.each(data, function(key, value){
    //   console.log("elemt 1");
    //   console.log(value);
    // });



  },
  methods: {
    reverseMessage: function(message) {
      return message.split('').reverse().join('')
    },
  requestData: function(){
    var param = {
      name: "whatsapp Web",
      url: "https://web.whatsapp.com/",
      types: ["account", "personal"],
      icon: ""
    };
         return $.ajax({
         url: 'https://the-terminal.firebaseio.com//.json',
         type: "get",
         data: JSON.stringify(param),
         success: function (e) {
            console.log("success", e, e["-LK74cOfNE_4BKqRF1O-"]);
            // var data = JSON.parse();
            this.data = e;
         },
         error: function(error) {
           alert("error: "+error);
         }
       });
  },
sendData: function(){
    var param = {
      name: "whatsapp Web",
      url: "https://web.whatsapp.com/",
      types: ["account", "personal"],
      icon: ""
    };
         $.ajax({
         url: 'https://the-terminal.firebaseio.com//.json',
         type: "post",
         data: JSON.stringify(param),
         success: function (e) {
            console.log(e);
         },
         error: function(error) {
           alert("error: "+error);
         }
       });
  }
  }

})
