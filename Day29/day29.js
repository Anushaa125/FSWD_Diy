let arr2 = [
    {
        name: 'Rahul',
        empId: 3567,
        mailId: 'mailme@gmail.com',
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
    },
    {
        name: 'Santhosh',
        empId: 8876,
        mailId: 'santhoshmail@gmail.com',
    },
    {
        name: 'Surya',
        empId: 3469,
        mailId: 'suryamail@gmail.com',
    },
    {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kiranmail@gmail.com',
    },
];

const mainbox = document.querySelector('.mainbox');
const nb = document.querySelector('.nb');
const nbBox = document.querySelector('.nb-box');
const logoBox = document.querySelector('.logo-box');
const bodyBox = document.querySelector('.bodybox');


logoBox.addEventListener('click', () => {
    console.log('Logo box');
});

nbBox.addEventListener('click', () => {
    console.log('nb box');
});

nb.addEventListener('click', () => {
    console.log('nb');
});

mainbox.addEventListener('click', () => {
    console.log('Main box');
});

arr2.map((item) => {
    const div = document.createElement('div');

    const h2 = document.createElement('h2');
    h2.innerHTML = item.name;

    const h3 = document.createElement('h3');
    h3.innerHTML = item.empId;

    const p = document.createElement('p');
    p.innerHTML = item.mailId;

    const button = document.createElement('button');
    button.innerHTML = "Delete";
    button.className = "delete-emp";
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    div.appendChild(button);
    div.style.padding = '0.5rem';
    div.style.border = '@px solid green';
    bodyBox.appendChild(div);
});

bodyBox.addEventListener('click', (e) => {
    if (e.target.className === 'delete-emp'){
        e.target.parentElement.remove();
    }
});
