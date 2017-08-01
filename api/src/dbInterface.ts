import * as DB from 'couchdb'

interface Construct {
    host: string;
    port: string;
    dbName: string;
    docName: string;
}

function Create(construct: Construct) {
    let client = DB.createClient(construct.host, construct.port);
    let db = client.db(construct.dbName);
    return 1;
}

function Retrieve(construct: Construct) {}

function Insert(construct: Construct) {

}

export default {}