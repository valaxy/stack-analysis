define(function (require) {
	var stack = require('index')

	QUnit.module('stack')

	QUnit.test('parse1()', function (assert) {
		var line = "    at Object.<anonymous> (http://localhost:63343/stack-analysis/test/unit.js:7:15)"
		assert.deepEqual(stack._parse1(line), {
			func: 'Object.<anonymous>',
			url : 'http://localhost:63343/stack-analysis/test/unit.js',
			line: '7',
			col : '15'
		})
	})

	QUnit.test('parse1()', function (assert) {
		var line = '    at n.Callbacks.j (http://10.33.68.76:3000/bower_components/jquery/dist/jquery.min.js:2:26911)'
		assert.deepEqual(stack._parse1(line), {
			func: 'n.Callbacks.j',
			url : 'http://10.33.68.76:3000/bower_components/jquery/dist/jquery.min.js',
			line: '2',
			col : '26911'
		})
	})


	QUnit.test('parse1()', function (assert) {
		var line = '   at x.y.(aaa bbb) (http://www.baidu.com:1:2)'
		assert.deepEqual(stack._parse1(line), {
			func: 'x.y.(aaa bbb)',
			url : 'http://www.baidu.com',
			line: '1',
			col : '2'
		})
	})

	QUnit.test('parse1()', function (assert) {
		var line = '   at Object.n.extend.Deferred.(anonymous function) [as resolve] (http://10.33.68.76:3000/bower_components/jquery/dist/jquery.min.js:2:28704)'
		assert.deepEqual(stack._parse1(line), {
			func: 'Object.n.extend.Deferred.(anonymous function)',
			url : 'http://10.33.68.76:3000/bower_components/jquery/dist/jquery.min.js',
			line: '2',
			col : '28704'
		})
	})

	QUnit.test('parse2()', function (assert) {
		var line = '   at http://10.33.68.76:3000/src/loader/index.js:28:21'
		assert.deepEqual(stack._parse2(line), {
			func: null,
			url : 'http://10.33.68.76:3000/src/loader/index.js',
			line: '28',
			col : '21'
		})
	})


	QUnit.test('stack()', function (assert) {
		console.log(stack())
		assert.ok(true)
	})

})