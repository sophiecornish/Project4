const mongoose = require('mongoose');
const Product = require('../models/product');
const User = require('../models/user');
const { dbURI } = require('../config/environment');
mongoose.Promise = require('bluebird');
mongoose.connect(dbURI);

const productData = [
  {
    product: 'SCALLOP-TRIM LAYERED DRESS',
    category: 'Dresses',
    price: 79,
    colour: 'Black',
    colourHex: ' #000',
    gender: 'women\'s',
    description: 'Updated with scallop-trimmed layers, this shirt dress is made from a soft woven material with a clean grandad collar. Cut for a short length, it is finished with a concealed button front and cuffed ¾ sleeves.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0672185_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0672185_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0672185_001_100],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0672185_001_101],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]','https://lp.cosstores.com/app001prod?set=source[01_0672185_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]']
  },{
    product: '30 INCH SKINNY LEG JEANS',
    category: 'Jeans',
    price: 69,
    colour: 'Fresh Blue',
    colourHex: '#343f51',
    gender: 'women\'s',
    description: 'With an authentic appearance and long-lasting performance at the forefront, these skinny jeans are cut from soft denim with comfortable stretch. A high-waisted fit in a 30" leg length, they have front and back pockets, a zip fly fastening and matte metal hardware.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0648659_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0648659_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]','https://lp.cosstores.com/app001prod?set=source[01_0648659_001_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0648659_001_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018081]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0648659_001_100],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]'],
    quantityAvailable: 20
  }, {
    product: 'CRINKLED OVERSIZED COAT',
    category: 'Coats and Jackets',
    price: 135,
    colour: 'Black',
    colourHex: '#000',
    gender: 'women\'s',
    description: 'An ultra-lightweight piece designed to be layered, this coat is made from a crinkled technical fabric with a three-button fastening. Cut for an oversized fit, it has elasticated cuffs, a vent at the back of the hem and functional front pockets with a flap.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0682475_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0682475_001_100],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]','https://lp.cosstores.com/app001prod?set=source[01_0682475_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0682475_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0682475_001_101],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]'],
    quantityAvailable: 12
  },{
    product: 'ASYMMETRIC T-SHIRT',
    category: 'Tops',
    price: 49,
    colour: 'Midnight Blue',
    colourHex: '#191970',
    gender: 'women\'s',
    description: 'Made from smooth cotton jersey, this T-shirt is reimagined in an asymmetric shape. Intentionally cut with sleeves that are uneven, it is completed with a high neck and comfortable kimono sleeves.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0667819_003_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0667819_003_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]','https://lp.cosstores.com/app001prod?set=source[01_0667819_003_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
      'https://lp.cosstores.com/app001prod?set=source[01_0667819_003_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]', 'https://lp.cosstores.com/app001prod?set=source[02_0667819_003_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]'],
    quantityAvailable: 40
  },{
    product: 'COLOUR-BLOCK A-LINE SKIRT',
    category: 'Skirts',
    price: 69,
    colour: 'Burnt Orange / Navy / Sky Blue',
    colourHex: '#cc5500',
    gender: 'women\'s',
    description: 'Designed with a colour-block pattern, this skirt is made from soft cotton with a bold circular panel in a contrasting, papery material. An A-line fit with a back zip, it is completed with an elasticated grosgrain waistband and discreet side pockets.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0672162_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0672162_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0672162_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]','https://lp.cosstores.com/app001prod?set=source[01_0672162_001_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]','https://lp.cosstores.com/app001prod?set=source[02_0672162_001_002],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]'],
    quantityAvailable: 8
  },{
    product: 'STRUCTURED KNIT JUMPER',
    category: 'Knitwear',
    price: 55,
    colour: 'Mustard',
    colourHex: '#F5D04C',
    gender: 'men\'s',
    description: 'A COS classic, this jumper is made from cotton in a raised structured stitch knit. A casual design with a regular fit, it has long sleeves, a round neckline and tightly ribbed edges.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0469568_009_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0469568_009_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0469568_009_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0469568_009_100],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]','https://lp.cosstores.com/app001prod?set=source[01_0469568_009_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]'],
    quantityAvailable: 40
  },{
    product: 'SLIM LEG JEANS',
    category: 'Jeans',
    price: 69,
    colour: 'Mid-Blue',
    colourHex: '#2662ac',
    gender: 'men\'s',
    description: 'Tapering towards the ankle, these slim-fit jeans are cut from worn denim with a soft, washed tone. A classic 5-pocket style, they have oxidised metal hardware, a button fly fastening and subtle stretch for comfort.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0552805_009_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0552805_009_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0552805_009_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0552805_009_003],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/zoom]', 'https://lp.cosstores.com/app001prod?set=source[01_0552805_009_004],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018083]&call=url[file:/product/main]'],
    quantityAvailable: 22
  },{
    product: 'LONG WOOL COAT WITH BELT',
    category: 'Coats and Jackets',
    price: 225,
    colour: 'Black',
    colourHex: '#000',
    gender: 'men\'s',
    description: 'A traditional single-breasted style updated with modern details, this long coat is made from a warm wool blend with a smooth silky lining. Cut for a regular fit, it has peaked lapels, a concealed front button fastening and a back belt that runs to the front pockets.',
    primaryImgUrl: 'https://lp.cosstores.com/app001prod?set=source[01_0677881_001_001],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]',
    imgUrl: ['https://lp.cosstores.com/app001prod?set=source[01_0677881_001_002],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0677881_001_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[01_0677881_001_005],type[ECOMLOOK],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/main]', 'https://lp.cosstores.com/app001prod?set=source[02_0677881_001_001],type[PRODUCT],device[hdpi],quality[80],ImageVersion[2018082]&call=url[file:/product/zoom]'],
    quantityAvailable: 6
  }
];


const userData = [
  {
    username: 'Rob',
    email: 'rob.levy@email.com',
    password: 'pass'
  },{
    username: 'Sophie',
    email: 'sophie@sophie.com',
    password: 'admin'
  }, {
    username: 'Max',
    email: 'max@email.com',
    password: 'pass'
  }
];

Product.collection.drop();
User.collection.drop();
User.create(userData)
  .then(users => {
    console.log(`created ${users.length} users`);
    return Product.create(productData);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
