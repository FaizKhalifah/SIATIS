import express from 'express';


const app = express();
app.listen(3000);
app.set('view engine', 'ejs');

app.use(express.static('views'));

const isiBiodata = {
    nim:'00000000',
    nama:'Rekayasa Marganih',
    fakultas:'Ilmu Komputer',
    jurusan:'Teknik informatika',
    prodi:'Teknik informatika',
    seleksi:'mandiri'
}

app.get('/',(req,res)=>{
    res.render('akademik', isiBiodata);
    
})
app.get('/biodata',(req,res)=>{
    res.render('biodata',isiBiodata)
})

app.get('/kemahasiswaan',(req,res)=>{
    res.render('kemahasiswaan',isiBiodata);
})