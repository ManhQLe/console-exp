const rl = require("readline");
rl.emitKeypressEvents(process.stdin);

process.stdin.setRawMode(true);

process.stdin.on('keypress',(str,key)=>{
    if(key.ctrl && key.name==='c')
        process.exit();
    else
    {
        console.log("Pressed ",str);
        console.log(key);        
    }
})