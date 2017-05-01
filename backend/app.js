const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const low = require('lowdb');
const storage = require('lowdb/file-async');
const uuid = require('node-uuid');

//注册、登录
const crypto = require('crypto');
const md5 = str => crypto
		.createHash('md5')
		.update(str.toString())
		.digest('hex');

const server = jsonServer.create();

server.use(jsonServer.defaults());

server.use(bodyParser.json());

const dbfile = process.env.prod === '1' ? 'db.json' : '_db.json';

const db = low(dbfile, { storage });

const router = jsonServer.router(dbfile)
server.use('/api', router);

server.listen(5001, () => {
	console.log('server is runing at ', 5001, dbfile);
});

server.post('/questionnaire/add', (req, res) => {
	const item = req.body;
	item.id = uuid.v1();
	item.createDate = new Date().toLocaleDateString();
	db('questionnaires').push(item).then(() => {
		res.json({'success': true, data: item});
	});
});

server.get('/questionnaire/get/:id', (req, res) => {
	console.log(req.params.id)
	const questionnaire = db('questionnaires').find({id: req.params.id});
	console.log('data', questionnaire)
	res.json({'success': true, data: questionnaire})
})

server.get('/questionnaires/get', (req, res) => {
	console.log(db('questionnaires').values())
	const questionnaires = db('questionnaires').values();
	console.log(questionnaires);
	res.json({'success': true, data: questionnaires});
})

// 注册、登录
server.post('/user/add', (req, res) => {
	let item = req.body;
	//查找是否有相同的用户
	console.log(item)
	let user = db('user').find({
		username: item.username,
	});

	if(user) {
		//如果存在相同的用户名,则提示用户已存在
		res.json({
			success: false,
			message: '"' + item.username + '" is exists',
		})
	} else {
		//如果不存在相同的用户，则保持用户信息并完成注册
		//这里对密码做了MD5加密存储
		item.password = md5(item.password);
		//同时保存注册时间
		item.createDate = new Date().toLocaleDateString();
		db('user').push(item).then(() => {
			res.json({ success: true });
		});
	}
});

server.post('/user/valid', (req, res) => {
	let item = req.body;
	item.password = md5(item.password);

	let userValidPromise = (user) => {
		return new Promise((resolve, reject) => {
			let user_name = db('user').find({ username: user.username });
			console.log(user_name)
			if(!user_name) {
				let message = 'username_is_not_exists';
				reject(message);
				return ;
			} 

			let user_password = db('user').find({
				username: user.username,
				password: user.password,
			});
			console.log(user_password)
			if(!user_password) {
				let message = 'password_is_not_match';
				reject(message);
				return ;
			}
			let message = 'valid_success';
			resolve(message);					
		})
	}

	userValidPromise(item).then(
	(msg) => {
		res.json({ success: true });
	},
	(msg) => {
		console.log(msg)
		res.json({
			success: false,
			msg: msg,
		});
	})

})










