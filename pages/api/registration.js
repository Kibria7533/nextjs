import Cors from 'cors'
import axios from 'axios'

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

async function handler(req, res) {
  // Run the middleware
  await runMiddleware(req, res, cors)

  // Rest of the API logic
  console.log(req.body,'user save')
  if(req.body.name){
    const getdata = await axios.post('http://localhost:5000/save',req.body).then(res2=>{
      res.json({ message: 'user saved',data:getdata.data })
    }).catch(err=>{
      res.json({ message: 'error while user saved',err })
    })
   
  }
   
}

export default handler