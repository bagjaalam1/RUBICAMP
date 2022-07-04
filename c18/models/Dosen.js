import { db } from '../main.js'

export default class Dosen {
    static read(callback) {
        db.all('SELECT * FROM dosen', (err, data) => {
            callback(err, data)
        });
    }

    static add(kode, nama, callback) {
        db.run('INSERT INTO dosen VALUES (?, ?)', [kode, nama], (err) => {
            callback(err)
        });
    }

    static search(kode, callback) {
        db.all('SELECT * FROM dosen WHERE nip = ?', [kode], (err, data) => {
            callback(err, data)
        });
    }

    static remove(kode, callback) {
        db.run('DELETE FROM dosen WHERE nip = ?', [kode], (err) => {
            callback(err)
        });
    }
}