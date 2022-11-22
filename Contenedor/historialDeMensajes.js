const fs = require('fs');
const HISTORIAL = './historial.txt'

class Messeges {

    constructor(file) {
        this.messeges = [];
        this.file = file
    }

    saveMessege = (messege) => {
        try {
            newMessege = {
                email: messege.email,
                messege: messege.messege
            }
            const previousMsj = this.getMesseges();
            previousMsj.push(newMessege);
            fs.writeFile(this.file, JSON.stringify(this.messeges));
        }catch(error) {
            console.log(error)
        }
    }

    async getMesseges(){
        try {
            const history = JSON.parse(fs.readFile(this.file));
            return history
        }catch(error) {
            console.log(error);
    }}
}

module.exports = Messeges;