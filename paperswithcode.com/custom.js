var shufflePapers = function() {
    var rtable = document.querySelector('.content');
    for (var i = rtable.children.length; i >= 1; i--) {
        rtable.appendChild(rtable.children[Math.random() * i | 0]);
    }
}

var intervalID = window.setInterval(shufflePapers, 37000);
