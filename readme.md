Knowing Javascript runtime scope is very useful, the question is how to know that?

# Solution
```javascript
var stack = require('stack-analysis/index')
console.log(stack())
```

# Example
```javascript
var a = function() { console.log(stack()) }
var b = function() { a() }
var c = function() { b() }
b()
```

log something like

```json
[
    ...
    {
        col: "11"        
        func: "stack"    
        line: "36"
        url: "http://localhost/stack-analysis/index.js"
    }
    ..
]
```