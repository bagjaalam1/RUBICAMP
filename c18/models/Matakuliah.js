import { db } from '../main.js'

export default class Matakuliah {
    static read(callback) {
        db.all('SELECT * FROM matakuliah', (err, data) => {
            callback(err, data)
        });
    }

    static add(kode, nama, sks,  callback) {
        db.run('INSERT INTO matakuliah VALUES (?, ?, ?)', [kode, nama, sks], (err) => {
            callback(err)
        });
    }

    static search(kode, callback) {
        db.all('SELECT * FROM matakuliah WHERE kode_mk = ?', [kode], (err, data) => {
            callback(err, data)
        });
    }

    static remove(kode, callback) {
        db.run('DELETE FROM matakuliah WHERE kode_mk = ?', [kode], (err) => {
            callback(err)
        });
    }
}