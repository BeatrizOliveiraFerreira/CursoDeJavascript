console.log([
    "a", 
    {type: "array"}, 
    function() {return "alo"}
].length)

console.log([
    "a", 
    {type: "array"}, 
    function() {return "alo"},
][1].type)

console.log(['a', 'b', 'c'].length)