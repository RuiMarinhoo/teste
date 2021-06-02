// const express = require('express');
// const app = express();
// const path = require('path');
// const router = express.Router();
//
//
// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
// });

// router.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
// });

//add the router
// app.use(express.static(__dirname));
// app.use('/', router);
// app.listen(process.env.PORT || 3000);
// const port = process.env.port || 3000;
// const hostname = '127.0.0.1';
// app.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/MyCB'));
app.get('/*', function(req,res) {
  res.sendFile(path.join(__dirname+
    '/dist/my-cb/index.html'));});
app.listen(process.env.PORT || 8080);
