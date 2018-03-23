// Guys, I used Google Chrome to check the result
var tabcontent = document.getElementsByClassName("tabcontent");
tabcontent[0].style.display = "block";

function openTab(e, typeOfTab) {
    var i, tablinks;
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");

    }
    document.getElementById(typeOfTab).style.display = "block";
    e.currentTarget.className += " active";

     var element = document.querySelector(".chat");
    element.scrollTop = element.scrollHeight;
}

var input = document.querySelector("input");
input.addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode === 13) {

        var div = document.createElement("div");
        var message = document.createElement("p");
        message.innerHTML = e.target.value;
        var currentTabId = document.querySelector(".active").id
        var container = document.getElementById(currentTabId)
        div.appendChild(message)
        container.appendChild(div)
        e.target.value = ""
        div.animate([{
            transform: 'translateY(50px)'
        }, {
            transform: 'translateY(0px)'
        }], {

            duration: 1000,

        });

        setTimeout(function() {
            var div = document.createElement("div");
            var message = document.createElement("p");
            message.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quam enim voluptatem voluptate.";
            var currentTabId = document.querySelector(".active").id
            var container = document.getElementById(currentTabId)
            div.className = "botMessage"
            div.appendChild(message)
            container.appendChild(div)

            div.animate([{
                transform: 'translateY(50px)'
            }, {
                transform: 'translateY(0px)'
            }], {

                duration: 1000,

            });

           
        }, 1000);

    }
});

