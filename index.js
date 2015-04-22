define(function (require, exports) {
	var reg1 = /^\s*at ([^\s]+) \((.+):(\d+):(\d+)\)$/ // at stack (...):5:11
	var reg2 = /^\s*at (.+):(\d+):(\d+)$/ // at ....

	var stack = function () {
		var info = []
		var e = new Error
		var lines = e.stack.split('\n')
		lines = lines.slice(1) // remove first line, because is message
		for (var i in lines) {
			var line = lines[i]
			var match
			if (match = line.match(reg1)) {
				info.push({
					func: match[1],
					url: match[2],
					line: match[3],
					col: match[4]
				})
			} else if (match = line.match(reg2)) {
				info.push({
					func: null,
					url: match[1],
					line: match[2],
					col: match[3]
				})
			} else {
				throw new Error('cannot be here')
			}
		}
		return info
	}

	return stack
})