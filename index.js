setInterval(printEnv, 1 * 60 * 1000)
printEnv()

function printEnv() {
    console.log("Defined ENV variables are:")
    console.log(process.env)
}