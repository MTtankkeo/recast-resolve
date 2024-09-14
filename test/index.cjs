const {SwcRederence} = require("swc-reference");

(async () => {
    const reference = await SwcRederence.byParse("console.log('hello, world!')");
    console.log(reference.AST.body);
})();