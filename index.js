const express = require('express')
const { Client } = require('runcfg')
const path = require("node:path");
const app = express()
class Configuration {
    version
    target
    enabled
}

let start = async function() {
    let client = new Client(path.resolve(__dirname + "/.runcfg"))
    let config = await client.Load(Configuration)

    app.use(express.json())
    app.get('/', (req, res) => {
        res.send(`Config Version: ${config.version}\n Target: ${config.target}\n Enabled: ${config.enabled}`)
    })

    app.listen(5001, () => console.log('Server running on port 5001.'))
}()
