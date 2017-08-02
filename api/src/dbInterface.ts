import * as DB from 'couchdb'

class Couch {
    public Instance

    constructor(host: string, port: number) {
        this.Instance = DB.createClient(port, host)
    }

    createDB(dbName: string) {
        return this.Instance.db(dbName)
    }
}

export default Couch