document.getElementById('btn').addEventListener('click',
    function () {
        let input = document.getElementById('input').value;

        // creating the todo list elements
        let elem = document.createElement('li');
        let btn1 = document.createElement('button');
        let btn2 = document.createElement('button');
        btn1.innerText = "Done";
        btn2.innerText = "Delete";
        elem.innerText = input;
        let ul = document.querySelector('ul');

        // Appending the created elements to html
        ul.appendChild(elem);
        elem.appendChild(btn1);
        elem.appendChild(btn2);
        // adding sty;es to list
        btn1.style.border = "none";
        btn1.style.marginLeft = '3%';
        btn1.style.borderRadius = '8px';
        btn1.style.backgroundColor = '#b4b3b8';

        btn2.style.border = "none";
        btn2.style.marginLeft = '3%';
        btn2.style.borderRadius = '8px';
        btn2.style.backgroundColor = '#b4b3b8';

        // Adding functionality to the buttons

        btn1.addEventListener('click',
            function () {
                elem.style.textDecoration = 'line-through'

            }
        );
        btn2.addEventListener('click',
            function () {
                elem.remove();

            }
        );

        document.getElementById('input').value = "";
    }
);