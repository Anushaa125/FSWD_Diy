class EmployeeData{
    emp1 = {
        name: 'Rahul',
        empId: 3567,
        mailId: 'mailme@gmail.com',
        Address: {
            'City Name': 'Vijayawada',
             District: 'Krishna district',
             pin: 526894,
        },
        Hobbies: ["Netflix", "Tennis", "Coding"],
    };
    emp2 = {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            'City Name': 'Guntur',
             District: 'Prakasham district',
             pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking'],
    };
    emp3 = {
        name: 'Santhosh',
        empId: 8876,
        mailId: 'santhoshmail@gmail.com',
        Address: {
            'City Name': 'Warangal',
             District: 'Hanamkonda district',
             pin: 996587,
        },
        Hobbies: ['Gym', 'Reading Novels'],
    };
    emp4 = {
        name: 'Surya',
        empId: 3469,
        mailId: 'suryamail@gmail.com',
        Address: {
            'City Name': 'Nazamabad',
             District: 'Nazamabad district',
             pin: 648597,
        },
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    };
    emp5 = {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kiranmail@gmail.com',
        Address: {
            'City Name': 'Karimnagar',
             District: 'Karimnagar district',
             pin: 666954,
        },
        Hobbies: ['Gaming', 'Cooking', 'Music'],
    };
}

const empData = new EmployeeData();
const body = document.querySelector('#body');
console.log(body);

const mainbox = document.createElement('div');
mainbox.className = 'mainbox';
body.appendChild(mainbox);

Object.keys(empData).map((emp, index) => {
    const empBox = document.createElement('div');
    empBox.className = `emp${index + 1}`;

    const h2 = document.createElement('h2');
    h2.innerHTML = `Name: ${empData[emp].name}`;

    const h3 = document.createElement('h3');
    h3.innerHTML = `Employee Id: ${empData[emp].empId}`;

    const addBox = document.createElement('div');
    addBox.className = 'addressBox';

    const h32 = document.createElement('h3');
    h32.innerHTML = 'Address:';

    addBox.appendChild(h32);

    Object.keys(empData[emp].Address).map((add) =>{
    const addComp = document.createElement('p');
    addComp.innerHTML = `<b>${add}:</b> ${empData[emp].Address[add]}`;

    addBox.appendChild(addComp);
    });

    const hobbies = document.createElement('p');
    const hobHeading = document.createElement('span');
    hobHeading.innerHTML = `<strong>Hobbies: </strong>`;

    hobbies.append(hobHeading);

    empData[emp].Hobbies.map((hobby, index) => {
        const hobbiesLength = empData[emp].Hobbies.length;
        const eachHobby = document.createElement('span');

        if (index + 1 !== hobbiesLength) {
            eachHobby.innerHTML = `${hobby},`;
        }else{
            eachHobby.innerHTML = `${hobby}.`;
        }

        hobbies.appendChild(eachHobby);
    });

    empBox.appendChild(h2);
    empBox.appendChild(h3);
    empBox.appendChild(addBox);
    empBox.appendChild(hobbies);
    mainbox.appendChild(empBox);
});
console.log(Object.keys(empData));
