class restaurantManager {
    restaurantList = [
        {
            id: 1,
            restaurantName: 'KFC',
            address: 'Anand Vihar',
            city: 'Delhi',
        },
        {
            id: 2,
            restaurantName: 'Domino',
            address: 'Savita Vihar',
            city: 'Delhi',
        },
        {
            id: 3,
            restaurantName: 'Burger King',
            address: 'Civil Lines',
            city: 'Pune',
        },
        {
            id: 4,
            restaurantName: 'Subway',
            address: 'Cantonment',
            city: 'Mumbai',
        },

    ];

    printAllRestaurantNames = () => {
        return this.restaurantList.map((restaurant) => restaurant.restaurantName);
    };
    filterRestaurantByCity = (cityName) => {
        return this.restaurantList.filter(
            (restaurant) => restaurant.city == cityName
        );
    };
}

const restaurantObj = new restaurantManager();
console.log(restaurantObj.printAllRestaurantNames());
console.log(restaurantObj.filterRestaurantByCity('Pune'));

const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getFullYear());
console.log(date.getTime());
console.log(date.getHours());

console.log('//Math');

console.log(Math.round(23.456));
console.log(Math.ceil(45.75));
console.log(Math.floor(95.147));
console.log(Math.PI);
console.log(Math.sqrt(16));
console.log(Math.random());
