const ratingData = [
    {restaurant: 'KFC', rating: 5},
    {restaurant: 'Burger King', rating: 4},
    {restaurant: 'KFC', rating: 3},
    {restaurant: 'Domino', rating: 2},
    {restaurant: 'Subway', rating: 3},
    {restaurant: 'Domino', rating: 1},
    {restaurant: 'Subway', rating: 4}, 
    {restaurant: 'Pizza Hut', rating: 5},  
];

const avgRating = ( ) => {
    const headers = Array.from(
        new Set(ratingData.map(({restaurant}) => restaurant))
    );
    let arr = [];
    headers.map((head) => {
        let total = 0;
        let count = 0;
        const filteredRatingData = ratingData.filter(
            (obj) => obj.restaurant == head
        );
        filteredRatingData.map((item) => {
            total = filteredRatingData.reduce((prev, next) => prev + next.rating, 0);
            count++;
        });
        arr.push({ restaurant: head, averageRating: (total / count).toFixed(2)});
    });
    return arr;
};

const arr = avgRating();

console.log(arr);

console.log(arr.filter((item) => item.averageRating >= 4));
