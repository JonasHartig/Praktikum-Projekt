var app = new Vue({
  el: '#app',
  data: {
    slideIndex: 1,
    headline: "The Terminal",
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
  methods: {
    reverseMessage: function(message) {
      return message.split('').reverse().join('')
    }
  }

})



// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
