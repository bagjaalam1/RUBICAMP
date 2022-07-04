import { db } from '../main.js'

export default class Kontrak {
    static read(callback) {
        db.all('SELECT * FROM kontrak', (err, data) => {
            callback(err, data)
        });
    }

    static add(id, nim, nip, kode, nilai, callback) {
        db.run('INSERT INTO kontrak VALUES (?, ?, ?, ?, ?)', [id, nim, nip, kode, nilai], (err) => {
            callback(err)
        });
    }

    static search(kode, callback) {
        db.all('SELECT * FROM kontrak WHERE id = ?', [kode], (err, data) => {
            callback(err, data)
        });
    }

    static remove(kode, callback) {
        db.run('DELETE FROM kontrak WHERE id = ?', [kode], (err) => {
            callback(err)
        });
    }
}