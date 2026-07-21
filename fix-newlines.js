const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Use basic recursion instead of glob module just to be safe if glob fails
function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            if (filePath.endsWith('.ts') || filePath.endsWith('.tsx') || filePath.endsWith('.css')) {
                callback(filePath, stat);
            }
        } else if (stat.isDirectory() && name !== 'node_modules' && name !== '.next' && name !== '.git') {
            walkSync(filePath, callback);
        }
    });
}

walkSync('c:\\\\Infalex\\\\infalex-hub', function(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.endsWith('\\n')) {
        content = content.slice(0, -2) + '\n';
        fs.writeFileSync(filePath, content);
        console.log('Fixed', filePath);
    }
});
