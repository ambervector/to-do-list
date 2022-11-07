user:'strict';


let input = document.querySelector('.entered-list');
let addBtn = document.querySelector('.add-list');
let tasks = document.querySelector('.tasks');

//ADD BTN DISABLED

input.addEventListener('keyup', () => {
    if(input.value.trim() != 0) {
        // addBtn.disabled = false;
        addBtn.classList.add('active');

    }
})

// ADD NEW TASK TO LIST
addBtn.addEventListener('click', () => {
    if (input.value.trim() != 0) {
        let newItem = document.createElement('div');
        // console.log(newItem);
        newItem.classList.add('item');
        newItem.innerHTML = `
        <p> ${input.value} </p>
        <div class="item-btn">
            <i class="fa-solid fa-square-check"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
        `

        console.log(newItem);
        console.log(tasks);
        tasks.appendChild(newItem);
        input.value = '';
    } else {
        alert('Please enter a task!');
        }
    });

    //DELETE ITEM FROM LIST
    tasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-trash')) {
            e.target.parentElement.parentElement.remove();
        }
    })

    //MARK ITEM AS COMPLETED

    tasks.addEventListener('click', (e) => {
        if (e.target.classList.contains('fa-square-check')) {
            e.target.parentElement.parentElement.classList.toggle('completed');
        }

    })
    




