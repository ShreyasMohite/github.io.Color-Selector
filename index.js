let setcolor = () => {

    let color = document.getElementById("color").value;
    let body = document.getElementById('body');
    document.getElementById('hexcolor').innerHTML = color;
    body.style.backgroundColor = color;

}