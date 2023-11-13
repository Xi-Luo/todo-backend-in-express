var express = require('express');
var router = express.Router();

let todoList = [
	{ id: 0, content: 'learn node&express', createTime: '2023-06-01 00:00', updateTime: '2023-06-01 00:00', isDone: true },
	{ id: 1, content: 'play the piano', createTime: '2023-01-01 11:11', updateTime: '2023-06-01 00:00', isDone: false },
	{ id: 2, content: 'build todo app', createTime: '2023-01-01 11:11', updateTime: '2023-06-01 00:00', isDone: false },
]
/* GET todo listing. */
router.get('/todo/list', function (req, res, next) {
	res.json(todoList)
});

router.post('/todo/add', function (req, res, next) {
	const todo = {
		...req.body,
		id: todoList.length,
		createTime: new Date(),
		isDone: false,
		updateTime: new Date()
	}
	todoList.push(todo)
	res.json(todoList)
});

router.post('/todo/remove', function (req, res, next) {
	const id = Number(req.query.id)
	todoList = todoList.filter(item => item.id !==id)
	res.json(todoList)
});

router.post('/todo/update', function (req, res, next) {
	let changeIndex = -1
	todoList.some((item, index) => {

		console.log('changeIndex', index)
		if (item.id === req.body.id) {
			console.log('changeIndex-', index)
			changeIndex = index
			return true
		}
	})
	if (changeIndex >= 0) {
		const todo = {
			...req.body,
			updateTime: new Date()
		}
		todoList.splice(changeIndex, 1, todo)
		res.json(todoList)
	} else {
		res.json({ success: false, msg: 'todo not found' })
	}
});

module.exports = router;
