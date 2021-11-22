
console.log("Marshall McLuhan")

var theFirst = document.getElementById("first");
theFirst.addEventListener('click', firstfunc);

function firstfunc(){
    console.log("clicked!");
    theFirst.onclick = function(){
        theFirst.innerHTML = "As soon as information is acquired, it is rapidly replaced by still newer information."
    }
}


var theSecond = document.getElementById("second");
theSecond.addEventListener('click', secfunc);

function secfunc(){
    console.log("clicked!");
    theSecond.onclick = function(){
        theSecond.innerHTML = "When this circuit learns your job, what are you going to do?"
    }
}


var theThird = document.getElementById("third");
theThird.addEventListener('click', thirdfunc);

function thirdfunc(){
    console.log("clicked!");
    theThird.onclick = function(){
        theThird.innerHTML = "All media work us over completely. They are so pervasive in their personal, political, economic, psychological, moral ethical and social consequences that they leave no part of us untouched"
    }
}


var theForth = document.getElementById("forth");
theForth.addEventListener('click', forthfunc);

function forthfunc(){
    console.log("clicked!");
    theForth.onclick = function(){
        theForth.innerHTML = "When information is brushed against information the results are startling and effective"

    }
}


var theFifth = document.getElementById("fifth");
theFifth.addEventListener('click', fifthfunc);

function fifthfunc(){
    console.log("clicked!");
    theFifth.onclick = function () {
        theFifth.innerHTML = "Our “Age of Anxiety” is, in great part, the result of trying to do today's job with yesterday's tools"
    }
}