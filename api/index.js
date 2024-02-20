import express from 'express'

const app = express()
app.listen(3000, () => {
    console.log("This is running in port 3000!!")
})