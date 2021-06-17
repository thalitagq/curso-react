import { MongoClient} from 'mongodb'

async function handler(req, res) {
  if(req.method === 'POST'){
    const data = req.body
    
    const client = await MongoClient.connect('mongodb+srv://thalita:123123123@sandbox.eovzz.mongodb.net/meetups?retryWrites=true&w=majority')
    const db = client.db()

    const meetusCollection = db.collection('meetups')
    const result = await  meetusCollection.insertOne(data)
    console.log(result)

    client.close()

    res.status(201).json({message: 'Meetup inserted'})
  }
}

export default handler