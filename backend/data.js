import bcrypt from 'bcryptjs';

const data ={
    users:[
        {
            name:'ABCD',
            email:'admin@gmail.com',
            password: bcrypt.hashSync('1234',8),
            isAdmin:true,
        },
        {
            name:'EFG',
            email:'a@gmail.com',
            password: bcrypt.hashSync('123',8),
            isAdmin:false,
        },
        
    ],
    products:[
        {
            
            name:'Round neck floral a-line dress',
            category:'Floral',
            image:'/images/img1.jpg',
            price:200,
            countInStock:10,
            brand:'Pluss',
            rating:3.5,
            numReviews:8,
            description:'round neck floral a-line dress',
        },
        {
            
            name:'Contrast dupatta suit set',
            category:'Casual wear',
            image:'/images/img2.jpg',
            price:320,
            countInStock:3,
            brand:'Indo era',
            rating:4.5,
            numReviews:9,
            description:'contrast dupatta suit set',
        },
        {
            
            
            name:'Self design regular cardigan',
            category:'clothing/winter wear/cardigans & pullovers/cardigans',
            image:'/images/img3.jpg',
            price:300,
            countInStock:1,
            brand:'Cayman',
            rating:5,
            numReviews:10,
            description:'self design regular cardigan',
        },
        {
            
            name:'Striped full leg cami jumpsuit',
            category:'Casual wear',
            image:'/images/img4.jpg',
            price:250,
            countInStock:7,
            brand:'Zastraa',
            rating:3,
            numReviews:7,
            description:'striped full leg cami jumpsuit',
        },
        {
            
            name:'High rise wide leg trouser',
            category:'casual wear',
            image:'/images/img5.jpg',
            price:420,
            countInStock:2,
            brand:'Fosh',
            rating:4.7,
            numReviews:9,
            description:'navy and white striped regular fit culottes,stylised waist, ,fly zip and button closure',
        },
        {
            
            name:'Indigo printed regular shrug',
            category:'Work wear',
            image:'/images/img6.jpg',
            price:120,
            countInStock:8,
            brand:'Color cocktail',
            rating:2.5,
            numReviews:5,
            description:'nice brand',
        },
    ],
};
export default data;