// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

let path = require('path');
let spawn = require('child_process').spawn;

let node = path.join(__dirname, 'bin', 'node.exe');

if (process.platform === 'darwin') {
    return;
}

// build phonegap command
let args = [];
args.push(path.join(__dirname, 'node_modules', 'phonegap', 'bin', 'phonegap.js'));
args.push('--version');

// spawn child
let child = spawn(node, args);

child.stdout.on('data', function(data) {
    console.log('--- STDOUT ---');
    console.log(data.toString());
});

child.stderr.on('data', function(data) {
    console.log('--- STDERR ---');
    console.log(data.toString());
});
