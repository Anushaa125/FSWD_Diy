restaurantList = [
    {
      id: 1,
      resturantName: "KFC",
      address: "Anand Vihar",
      city: "Delhi",
    },
    {
      id: 2,
      resturantName: "Domino",
      address: "Savitha Vihar",
      city: "Delhi",
    },
    {
      id: 3,
      resturantName: "Burger King",
      address: "Civil Lines",
      city: "Pune",
    },
    {
      id: 4,
      resturantName: "Subway",
      address: "Cantoment",
      city: "Mumbai",
    },
  ];

  let usersData = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "amet consectetur adipisicing",
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: " Lorem ipsum dolor sit",
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: "placeat voluptas doloribus maiores",
        completed: true,
      },
      {
        userId: 1,
        id: 5,
        title: " dolorum officia ,  aut ipsum ",
        completed: false,
      },
      {
        userId: 1,
        id: 6,
        title: " Labore  mollitia explicabo ad",
        completed: false,
      },
      {
        userId: 1,
        id: 7,
        title: "autemnumquam nobis consequatur",
        completed: true,
      },
      {
        userId: 1,
        id: 8,
        title: "magni blanditiis quo sequi",
        completed: false,
      },
      {
        userId: 1,
        id: 9,
        title: "fugit deserunt impedit",
        completed: true,
      },
    ];
    const getData = () => {
      const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(usersData);
        }, 3000);
      });
      return myPromise;
    };

    const myFunc = async() => {
        const x = await getData();
        console.log(x);
        x.map((item) => {
            console.log(item.title);
        });
    };
    myFunc();

    const spreadFunction = () => {
        let newArr = [...restaurantList, [1, 2, 3]];
        console.log(newArr);
    };
    spreadFunction();

    const resetFunction = (...args) => {
        args.map((ele) => {
            console.log(ele);
        });
    };
    resetFunction(...restaurantList);
