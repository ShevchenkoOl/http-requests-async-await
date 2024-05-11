const o={title:"hello world",body:"looreilly"};(()=>{const t={method:"POST",body:JSON.stringify(o)};return fetch("https://jsonplaceholder.typicode.com/posts",t).then((o=>{if(console.log(o),!o.ok)throw new Error(o.statusText);return o.json()}))})().then((o=>console.log(o)));
//# sourceMappingURL=index.dedcac7c.js.map
