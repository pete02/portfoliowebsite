import express from 'express'
import cors from 'cors'
const app=express()
const port="3001"

app.use(express.json())
app.use(cors())
app.use(express.static("./dist"))


app.listen(port,'0.0.0.0',() => {
    console.log(`started on port ${port}`)
})

