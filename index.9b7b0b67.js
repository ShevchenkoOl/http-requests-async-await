!function(){var o,t={title:"hello world",body:"looreilly"};(o={method:"POST",body:JSON.stringify(t)},fetch("https://jsonplaceholder.typicode.com/posts",o).then((function(o){if(console.log(o),!o.ok)throw new Error(o.statusText);return o.json()}))).then((function(o){return console.log(o)}))}();
//# sourceMappingURL=index.9b7b0b67.js.map
