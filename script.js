function allowDrop(evt) {
    console.log("allowing drag");
    evt.preventDefault();
}

function drag(evt) {
    console.log("dragging");
    console.log(evt.target.id, typeof (evt), evt);
    evt.dataTransfer.setData("text", evt.target.id);
}
function drop(evt) {
    try {
        evt.preventDefault();
        let data = evt.dataTransfer.getData("text");
        k = document.getElementById(data);
        k.style.borderRadius = "100px";
        evt.target.appendChild(k);
    }
    catch{
        console.log("Drop failed");
    }
  }

function creater() {
    const k = document.createElement('img');
    const idn = Math.floor(Math.random() * 10);
    k.src = "https://source.unsplash.com/random/200x200/?random";
    k.id = String("i" + idn);
    k.draggable = "true";
    k.addEventListener('drag', drag);
    document.getElementById("im").appendChild(k);

}
function rset() {

    console.log("Reset");
    let ct = document.getElement
    k1 = document.getElementsByTagName('img');
    const k = document.getElementById('im');
    for (i = 0; i < 4; i++) {
        document.getElementsByTagName('img')[i].style.borderRadius='0px';
        k.appendChild(k1[i]);
    }
}