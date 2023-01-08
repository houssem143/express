const express = require('express')
const app = express()
const port = 3000

const greeting = (req,res,next) => {
  
const date=new Date() 
const day=date.getDay()
const hour= date.getHours()

if ((day==6 || day==0) || (hour<=9 || hour>=17)) {
  res.send("Error:Sorry retry later!")
}else
  (next())
  }

  app.use(greeting)
  app.use(express.static("comp"))

app.listen(port, () => {
   console.log(`Example app listening on port ${port}`)
})
