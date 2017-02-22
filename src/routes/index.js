// src/routes/index.js
const router = require('express').Router();
module.exports = router;

const files = [
  {eventname: 'Tuesday Practice', eventdate:'March 7 2017', eventtime:'7pm - 8:30pm'},
  {eventname: 'Thursday Practice', eventdate:'March 9 2017', eventtime:'6pm - 7:30pm'},
  {eventname: 'Saturday Games', eventdate:'March 11 2017', eventtime:'9am - 4pm'},
];


router.get('/tester', function(req, res, next) {
  console.log('a');
  next();
})
router.get('/tester', function(req, res, next) {
  console.log('b');
  next();
})
router.get('/tester', function(req, res, next) {
  console.log('c');
  res.end('done');
})


router.get('/files', function(req, res, next) {
  setTimeout(function(){res.json(files)},1000);
});

router.post('/files', function(req, res, next) {
  const newFile = {
    filename: req.body.filename,
    title: req.body.title
  };

  files.push(newFile);
  res.json(files);
});

// GET /hello/1234lskjdhfssldklsd/
//
// router.use('/hello/:myparam', function(req, res, next) {
//   res.end(`Hello ${req.params.myparam}`);
// });

// router.use('/hello', function(req, res, next) {
//   res.end('Hello Code Louisville!!!');
// });
//
// router.use('/data', function(req, res, next) {
//   const myData = {
//   	"title": "Example Schema",
//   	"type": "object",
//   	"properties": {
//   		"firstName": {
//   			"type": "string"
//   		}
//   	},
//   	"required": ["firstName", "lastName"]
//   }
//
//   res.json(myData);
// });

router.get('/', (req,res) => {
  res.render('index',
    {title: 'Karen - FSJS Project',
    message: 'Event List:'});
});

router.use(function(req, res, next) {
  res.format({
    html: () => res.send(`
      <h1>Our Project</h1>
      <ul>
        <li>GET a list of files (including meta data)</li>
        <li>EDIT a file (the meta data)</li>
        <li>UPLOAD a file</li>
        <li>DELETE a file</li>
      </ul>
      `)
  })
});
