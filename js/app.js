var app = new Vue({
      el: '#app',
      data: {
        slideIndex : 1,
        headline: "The Terminal",
        containers: [
        {
          type: "todo",
          todos: [
          {
            name: "todo1",
            completed: true
          },{
            name: "todo1",
            completed: true
          }]
        },
        {
          type: "linkbox",
          links: [
          {
            name: "wikipedia",
            url: "https://wikipedia.org",
            types: ["account", "personal"]
          },
          {
            name: "youtube",
            url: "https://www.youtube.com",
            types: ["account", "personal"]
          },
          {
            name: "twitch",
            url: "https://www.twitch.tv",
            types: ["account", "personal"]
          },
          {
            name: "amazon",
            url: "https://www.amazon.de/",
            types: ["account", "personal"]
          },
          {
            name: "netflix",
            url: "https://www.netflix.com/browse",
            types: ["account", "personal"]
          },
          {
            name: "deepl",
            url: "https://www.deepl.com/translator",
            types: ["account", "personal"]
          }
          ]
        },
        {
          type: "vcard",
          todos: [
          {
            name: "todo1",
            completed: true
          },{
            name: "todo1",
            completed: true
          }]
        }

        ]
      },
      methods: {
        reverseMessage: function (message) {
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
  if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block"; 
      dots[slideIndex-1].className += " active";
    }