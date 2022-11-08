import db from './createConnection.js'



db.query(`
    INSERT INTO items (name,price,image_url,description) VALUES ('Nike Football', 300, "https://www.tradeinn.com/f/13812/138126045/nike-premier-league-strike-football-ball.jpg",'Nike Premier League Strike Football');
    `)

db.query(`
    INSERT INTO items (name,price,image_url,description) VALUES ('Football Shoes', 1000, "https://5.imimg.com/data5/SELLER/Default/2020/9/RH/XX/VF/28514375/new-football-shoes-500x500.jpeg", 'High-quality leather shoes');
    `)
    
db.query(`
    INSERT INTO items (name,price,image_url,description) VALUES ('Football Protector', 200,"https://www.sksports.gr/image/cache/products/2/SP2079-010-800x800.jpeg",'Made out the strongest material');
    `)

db.query(`
    INSERT INTO items (name,price,image_url,description) VALUES ('Football Goal', 1200,"https://shop12835.sfstatic.io/upload_dir/shop/products/Legehjulet/_thumbs/champion-240-x-160-fodboldmal-fra-my-hood.w1220.h1220.fill.jpg",'For adults and children alike');
    `)

db.end();