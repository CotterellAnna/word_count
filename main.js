let count = document.querySelector('#count');

function count_(){
    let text_box = document.getElementById('text_box').value;
    count.value = 0;
    for(let i=0; i<text_box.length; i++){
        if(text_box[i]==' ' && text_box[i+1] != ' '){
            count.value++;
        }
    }
}
