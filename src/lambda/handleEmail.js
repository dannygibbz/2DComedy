let MongoClient = require("mongodb").MongoClient
let url = `mongodb://dcrmls:101elimS@ds143594.mlab.com:43594/2dcomedy`

let badRequest = {
  statusCode: 405,
  body: "No Request",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
}

let goodRequest = {
  statusCode: 200,
  body: "Email inserted",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
}
function oneMoreTime(event, context, callback) {
  if (event.httpMethod !== "POST") {
    callback(null, badRequest)
  }

  MongoClient.connect(
    url,
    { useNewUrlParser: true },
    (connectionErr, db) => {
      if (connectionErr) {
        callback(connectionErr, badRequest)
      }

      const dbo = db.db("2dcomedy")
      const params = JSON.parse(event.body)
      const myobj = { email: params.email }
      dbo.collection("Emails").insertOne(myobj, (err, res) => {
        if (err) {
          callback(err, badRequest)
        }

        db.close()

        callback(null, goodRequest)
      })
    }
  )
}

exports.handler = oneMoreTime
