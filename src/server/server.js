const app = require("./index")
const PORT = 8081

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening at port ${PORT}`)
})