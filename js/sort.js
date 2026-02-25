let block_sort = document.getElementById("block_sort");
let sort_btn = document.getElementById("sort_btn");
let reset_btn = document.getElementById("reset_btn");
let status_text = document.getElementById("status_text");

let arr = [];
const n = 50;
let startArr = []

// функція створює елементи div 
function createEl() {

    block_sort.innerHTML = "";
    arr = [];

    for ( let i = 0; i < n; i++) {

        let value = Math.floor(Math.random() * 300) + 20;
        arr.push(value);

        let bar = document.createElement("div");

        bar.classList.add("bar")
        bar.style.height = value + "px"

        block_sort.appendChild(bar)
    }
    startArr = [...arr];
}

// функція сортує елементи div 
function bubbleSort() {
    status_text.innerText = "Сортування...";
    let bars = document.getElementsByClassName("bar");

    let i = 0;
    let j = 0;

    function step() {
        if (i < n - 1) {
            if (j < n - i -1) {
                if (arr [j] > arr[j+1]) {

                    // swap в масиві
                    let temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;

                    // swap в відображенні
                    bars[j].style.height = arr[j] + "px";
                    bars[j+1].style.height = arr[j+1] + "px"
                }

                j++
                setTimeout(step, 50);
            }
            else {
                j = 0;
                i++
                step();
            }
        }
        else {
            status_text.innerText = "Сортування завершено";
        }
    }
    step();
}

// кнопка ресет
function resBtn() {
    arr = [...startArr];
    block_sort.innerHTML = "";

    for (let i = 0; i < n; i++) {
        let bar = document.createElement("div");

        bar.classList.add("bar");
        bar.style.height = arr[i] + "px"

        block_sort.appendChild(bar);
    }

        

}

createEl();

sort_btn.addEventListener("click", bubbleSort);
reset_btn.addEventListener("click", resBtn);
