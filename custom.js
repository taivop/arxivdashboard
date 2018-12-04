addPapers(100, true);

var shufflePapers = function() {
    var rtable = document.querySelector('#rtable');
    for (var i = rtable.children.length; i >= 1; i--) {
        rtable.appendChild(rtable.children[Math.random() * i | 0]);
    }
}

var intervalID = window.setInterval(shufflePapers, 30000);
