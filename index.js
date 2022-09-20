let word_space = document.getElementById('our_word');
let input = document.getElementById('input_area');
let result_display = document.getElementsByClassName('display')[0];
let btn = document.getElementById('btn');
let result = document.getElementById("result");

let wordst = ["html", "css", "saini"];

const choose = () => {
    let random = Math.floor(Math.random() * wordst.length);
    return wordst[random];
}
const changeword = (word) => {
    // console.log(word);
    for (let i = word.length-1; i > 0; i--){
        let j = Math.floor(Math.random() * (i));   // mix words 
        let temp = word[i]
        word[i] = word[j];
        word[j] = temp;
    }
    // console.log(word);

    return word;
}
let play = false;
let myRigthword = ""





const showoutput = () => {

    if (!play) {
        play = true;
        btn.innerText = "check thw word"
         myRigthword = choose();
        let fakecreateword = changeword(myRigthword.split(""));
        let genrateword = fakecreateword.join("");
        word_space.innerText = `${genrateword}`
    } else {
        let inputvalue = input.value;
       
        if (inputvalue == myRigthword) {
            result_display.style.display = 'block';
            result.innerText = "right 👍";

        } else {
            result_display.style.display = 'block';
            result.innerText = "wrong 👎 word or  maybe you not writing ";
            
        }

       
    }

    

}

function reset() {
    word_space.innerText ="Again try"
    result_display.style.display = 'none';
    play = false;
}


btn.addEventListener('click', showoutput);
