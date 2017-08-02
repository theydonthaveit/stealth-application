import * as Hapi from 'hapi'
import dbInt from './dbInterface'

const DB = new dbInt('localhost', 5984)
// DB.createDB('test')
console.log(DB)