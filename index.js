let http=require('http');
let fs=require('fs');

server = http.createServer((req,res)=>{
    if(req.url=='/'|| req.url==='/home' ){
        let data = fs.readFileSync('home.html','utf-8');
        res.end(data);
        res.end();

    }else if(req.url=='/about' ){
        let data = fs.readFileSync('about.html','utf-8');
        res.end(data);   
        res.end();
    }
    else if(req.url=='/contact'){
        let data = fs.readFileSync('contact.html','utf-8');
        res.end(data);
        res.end();
    }
    else if(req.url=='/file-write'){
        fs.writeFileSync('demo.txt','hello world!');
        let data = fs.readFileSync('filewrite.html','utf-8')
        res.end(data);
    }
    else{
        let data = fs.readFileSync('404.html','utf-8');
        res.end(data);
    }
    
})





server.listen(3000,()=>{
    console.log('Server run success at port 3000.')
})


