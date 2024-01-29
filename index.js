import { promises as fsPromises } from 'fs';
import process from "process";
import readlinePromises from "readline/promises";
import express from 'express';
import path from "path";

const app = express();
app.listen(3000);
app.set('view engine', 'ejs');

app.use(express.static('views'));

app.get('/',(req,res)=>{
    const isiBiodata = {
        nim:'00000000',
        nama:'Rekayasa Marganih',
        fakultas:'Ilmu Komputer',
        jurusan:'Teknik informatika',
        prodi:'Teknik informatika',
        seleksi:'mandiri'
    }
    res.render('akademik', isiBiodata);
    
})