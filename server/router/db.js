let { MongoClient, ObjectId } = require('mongodb');

function collection(colName, res) {
    return new Promise((resolve, reject) => {
        // 连接数据库
        MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
            if (err) {
                res.json({error: 5, msg: '数据库连接失败'})
                client.close();
                reject(err);
                return;
            } 

            // 成功
            let  dataBase = client.db('store');
            resolve({
                db: client,
                col: dataBase.collection(colName)
            })
        })
    })
}

module.exports = { collection, ObjectId }