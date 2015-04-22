define(function (require) {
	var simpleCase = require('./simple-case/index')

	QUnit.module('stack')

	QUnit.test('simple case', function (assert) {
		console.log(simpleCase())
	})
})