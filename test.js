document.getElementById('button2').addEventListener('click', ()=>{
    console.log("get clicked");
    // let xhr = new XMLHttpRequest();
    // xhr.open('GET', "\test");
    // xhr.onload = function (){
    //     document.getElementById('button').innerText = 'I got clicked'+this.responseText;
    // }
    document.getElementById('button2').innerText = "got clicked"
})