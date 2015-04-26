define(function (require, exports) {
	var reg1 = /^\s*at ([^\.]+)((\.([^\.\s]|\(.*?\))+)*) (\[.*?\] )?\((.+):(\d+):(\d+)\)$/ // it's very hard to debug
	var reg2 = /^\s*at (.+):(\d+):(\d+)$/               // at url:2:5


	var parse1 = function (str) {
		var match = str.match(reg1)
		if (match) {
			return {
				func: match[1] + match[2],
				url : match[6],
				line: match[7],
				col : match[8]
			}
		} else {
			return false
		}
	}

	var parse2 = function (str) {
		var match = str.match(reg2)
		if (match) {
			return {
				func: null,
				url : match[1],
				line: match[2],
				col : match[3]
			}
		} else {
			return false
		}
	}

	var stack = function () {
		var info = []
		var e = new Error
		var lines = e.stack.split('\n')
		lines = lines.slice(1) // remove first line, because is a error message
		for (var i in lines) {
			var line = lines[i]
			var match
			if (match = parse1(line)) {
				info.push(match)
			} else if (match = parse2(line)) {
				info.push(match)
			} else {
				throw new Error('This is a bug, please help me to fix this with reporting it to github issue')
			}
		}
		return info
	}

	// for debug
	stack._parse1 = parse1
	stack._parse2 = parse2

	return stack
})