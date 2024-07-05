export default [
    {
        id: 1, 
        nameService: "Haircuts and Styling",
        typeService: "hair", 
        thumbnail: "/src/assets/images/hair-thumbnail.jpg",
        description : "This is a description",
        price: 150000,
        rating: 0,
        riviewCount: 0,
        riview : [
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 2, 
        nameService: "Manicure and Pedicure",
        typeService: "care", 
        thumbnail: "/src/assets/images/care-thumbnail.jpg",
        description : "This is a description",
        price: 200000,
        rating: 4.5,
        riviewCount: 2,
        riview : [
            {
                id: 1,
                username: "Tony Andreas",
                comment: "Is good service",
                rating: 5,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 2,
                username: "Bagas Aji",
                comment: "Nice service",
                rating: 4,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
    {
        id: 3, 
        nameService: "Facial Treatments",
        typeService: "facial", 
        thumbnail: "/src/assets/images/facial-thumbnail.jpg",
        description : "This is a description",
        price: 500000,
        rating: 4.6,
        riviewCount: 3,
        riview : [
            {
                id: 1,
                username: "Tony Andreas",
                comment: "Is good service",
                rating: 5,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 2,
                username: "Bagas Aji",
                comment: "Nice service",
                rating: 4,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            },
            {
                id: 3,
                username: "Herman Adi",
                comment: "Happy",
                rating: 5,
                createdAt: "2023-11-15 10:21:37.261134+01:00"
            }
        ],
        createdAt: "2023-11-15 10:21:37.261134+01:00"
    },
];