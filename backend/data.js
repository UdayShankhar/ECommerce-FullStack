import bcrypt from 'bcryptjs'

const data = {
    users:[
        {
            name:'Uday',
            email:'shankhar87@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin:true
        },
        {
            name: 'Jeff',
            email: 'Jeff@amazon.com',
            password: bcrypt.hashSync('123456'),
            isAdmin:false
        }
    ],
    products:[
        {
            name: 'OnePlus 10 Pro 5G (Volcanic Black, 8GB RAM, 128GB Storage)',
            slug: 'oneplus',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/61mIUCd-37L._AC_UY327_FMwebp_QL65_.jpg',
            price: 66999,
            countInStock: 10,
            brand: 'OnePlus',
            rating: 4.9,
            numReview: 10,
            emi: 650,
            // description:'Smart AC',
            about1: 'Camera: 48MP Main Camera with Sony IMX 789 Lens (OIS enabled), 50MP Ultra-wide angle camera & 8MP Tele photo lens; Front (Selfie) Camera: 32MP; Flash: Dual LED',
            about2: 'Display: 6.7 Inches; 120 Hz QHD+ Fluid AMOLED with LTPO; Resolution: 3216 x 1440; Aspect Ratio: 20:9',
            storeLink: 'https://www.oneplus.in/',
            visit: 'Visit the OnePlus Store'
        },{
            name: 'Apple iPhone 12 (64GB) - Purple',
            slug: 'Apple',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UY327_FMwebp_QL65_.jpg',
            price: 60999,
            countInStock: 10,
            brand: 'Apple',
            rating: 5.0,
            numReview: 10,
            emi: 450,
            // description:'Smart AC',
            about1: '6.1-inch (15.5 cm diagonal) Super Retina XDR display',
            about2: 'A14 Bionic chip, the fastest chip ever in a smartphone',
            storeLink: 'https://www.apple.in/',
            visit: 'Visit the Apple Store'
        },{
            name: 'Redmi Note 11 (Space Black, 6GB RAM, 128GB Storage)',
            slug: 'Redmi',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/71yTvU9VgdL._AC_UY327_FMwebp_QL65_.jpg',
            price: 40599,
            countInStock: 10,
            brand: 'Redmi',
            rating: 4.7,
            numReview: 10,
            emi: 560,
            // description:'Smart AC',
            about1: 'Display: 90Hz FHD+ (1080x2400) AMOLED display; 16.33 centimeters (6.43 inch); 20:9 aspect ratio',
            about2: 'Processor: Qualcomm Snapdragon 680 Octa-core; 6nm processor; Up to 2.4GHz clock speed',
            storeLink: 'https://www.mi.com/in/?utm_source=google&utm_medium=cpc&utm_campaign=[A_BR[SEM_B[MiBRAND_S]20190102]&gclid=EAIaIQobChMIz8_kmp6d9wIVFZJmAh157AteEAAYAiAAEgLQnfD_BwE',
            visit: 'Visit the Redmi Store'
        },{
            name: 'OPPO F21 Pro (Sunset Orange, 8GB RAM, 128 Storage)',
            slug: 'OPPO',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/81W6rHmWHhL._AC_UL480_FMwebp_QL65_.jpg',
            price: 41999,
            countInStock: 10,
            brand: 'OPPO',
            rating: 4.3,
            numReview: 10,
            emi: 660,
            // description:'Smart AC',
            about1: 'Qualcomm Snapdragon 888 (SM8350) Processor',
            about2: '17.22 cm (6.78 inch) Full HD+ Display',
            storeLink: 'https://www.oppo.com/in/?msclkid=0f84ff58bef511eca5adf8698d2cc8cb',
            visit: 'Visit the OPPO Store'
        },
        {
            name: 'Oneplus Buds Pro Bluetooth Truly Wireless in Ear Earbuds with mic (Matte Black)',
            slug: 'oneplusBuds',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/51jJs-kCh6S._AC_UY327_FMwebp_QL65_.jpg',
            price: 9999,
            countInStock: 10,
            brand: 'OnePlus',
            rating: 4.7,
            numReview: 10,
            emi: 250,
            about1: 'Smart Adaptive Noise Cancellation: Up to 40 dB hybrid noise cancelling with automated environmental noise detection & adjustment.',
            about2: 'Worry-free Battery Life: Enjoy up to 38 hours of music and a quick Warp Charging of 10 minutes for 10 hours of playtime.',
            storeLink: 'https://www.oneplus.in',
            visit: 'Visit the OnePlus Store'
        },
        {

            name: 'boat Airdopes 121v2',
            slug: 'boat',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/5161KgWnNEL._AC_UY327_FMwebp_QL65_.jpg',
            price: 7990,
            countInStock: 10,
            brand: 'boat',
            rating: 4.5,
            numReview: 10,
            emi: 420,
            about1: 'True wireless earbuds with Intelligent Active Noise Canceling (ANC) - seamlessly switch between noise canceling and fully adjustable ambient sound.',
            about2: 'Voice Detect instantly switches from ANC to Ambient sound when it hears your voice',
            storeLink: 'https://www.boat-lifestyle.com/',
            visit: 'Visit the boat Store'
        },
        {

            name: 'Apple Airpods Pro',
            slug: 'airpods',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/71zny7BTRlL._AC_UY327_FMwebp_QL65_.jpg',
            price: 20900,
            countInStock: 10,
            brand: 'Apple',
            rating: 4.8,
            numReview: 10,
            emi: 1050,
            // description:'Smart AC',
            about1: 'Active noise cancellation for immersive sound',
            about2: 'Transparency mode for hearing and connecting with the world around you',
            storeLink: 'https://www.apple.com/in/?msclkid=99fcc46abbc011ec8affec1b791f54a0',
            visit: 'Visit the Apple Store'
        },
        {
            name: 'Beats Studio Buds Bluetooth Truly Wireless in Ear Earbuds with Mic (White)',
            slug: 'beatsBuds',
            category: 'Electronics',
            image: 'https://m.media-amazon.com/images/I/41ijQEHFicS._AC_UY327_FMwebp_QL65_.jpg',
            price: 9000,
            countInStock: 10,
            brand: 'Beats',
            rating: 4.8,
            numReview: 10,
            emi: 350,
            // description:'Smart AC',
            about1: 'Custom acoustic platform delivers powerful, balanced sound',
            about2: 'Up to 8 hours of listening time1 (up to 24 hours combined with pocket-sized charging case)2',
            storeLink: 'https://www.beatsbydre.com/',
            visit: 'Visit the Beats Store'
        },
    ]
}

export default data