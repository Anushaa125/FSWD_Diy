let arr = [1, 2, 3];

arr.push(4);
console.log(arr);

arr.pop();
console.log(arr);

arr.shift();
console.log(arr);

arr.unshift(5);
console.log(arr);

let arr2 = [
    {
        name: 'Rahul',
        empId: 3567,
        mailId: 'mailme@gmail.com',
        Address: {
            'City  Name': 'Vijayawada',
             District: 'Krishna district',
             pin: 526894,
        },
        Hobbies: ['Netflix', 'Tennis', 'Coding'],
    },
    {
        name: 'Ravi',
        empId: 9867,
        mailId: 'ravimail@gmail.com',
        Address: {
            'City  Name': 'Guntur',
             District: 'Prakasham district',
             pin: 685479,
        },
        Hobbies: ['Reading', 'Swimming', 'Baking'],
    },
    {
        name: 'Santhosh',
        empId: 8876,
        mailId: 'santhoshmail@gmail.com',
        Address: {
            'City  Name': 'Warangal',
             District: 'Hanamkonda district',
             pin: 996587,
        },
        Hobbies: ['Gym', 'Reading Novels'],
    },
    {
        name: 'Surya',
        empId: 3469,
        mailId: 'suryamail@gmail.com',
        Address: {
            'City  Name': 'Nazamabad',
             District: 'Nazamabad district',
             pin: 648597,
        },
        Hobbies: ['Badminton', 'E-Sports', 'Netflix'],
    },
    {
        name: 'Kiran',
        empId: 8864,
        mailId: 'kiranmail@gmail.com',
        Address: {
            'City  Name': 'Karimnagar',
             District: 'Karimnagar district',
             pin: 666954,
        },
        Hobbies: ['Gaming', 'Cooking', 'Music'],
    }   
];
arr2.map((ele) => {
    console.log(ele.name);
    let arr3 = [];
    Object.keys(ele.Address).map((item) => {
        arr3.push(ele.Address[item]);
    });
    console.log(arr3);
    ele.Hobbies.forEach((hobby) => {
        console.log(hobby);        
    });
});
