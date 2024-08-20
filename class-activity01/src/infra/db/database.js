import * as fs from 'fs';
import {DATABASE_PATH} from "./definitions.js";
import {access, createAccessString, getNestedData} from "../utils.js";

let databaseInstance = null;

class Database {

    static getInstance() {
        if (databaseInstance === null) {
            databaseInstance = new Database();
        }
        return databaseInstance
    }

    #data = null

    read() {
        fs.readFile(DATABASE_PATH, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            this.#data = JSON.parse(data);
        })
    }

    write(data){
        fs.writeFile(DATABASE_PATH, JSON.stringify(data), (err, data) => {
            if(err)
                throw err;
            this.#data = JSON.parse(data);
        })
    }

    select(prop) {
        return access(prop,this.#data)
    }

    insert(prop,instance){
        const a  = access(prop,this.#data)
        prop.pop()

    }




}