var path = require('path');

// get file name
console.log(path.basename('public/image/Untitled.png'));
console.log(path.basename('public/image/Untitled.png', '.png'));

// get dirname
console.log(path.dirname('public/image/Untitled.png'));

// get extension file

console.log(path.extname('index.php'));
console.log(path.extname('index.html.md'));
console.log(path.extname('index.'));
console.log(path.extname('index'));
console.log(path.extname('.index'));

console.log(path.format({
    dir : '/public/image',
    base : 'index.php'
}));

console.log(path.format({
    root : '/',
    base : 'index.php'
}));

console.log(path.format({
    dir : '/',
    name : 'index',
    ext : '.txt'
}));

console.log(path.format({
    root : 'C://',
    dir : 'C://path/dir',
    base : 'index.php',
    ext : '.php',
    name : 'index'
}));

console.log(path.format({
    base : 'index.php'
}));

// kiểm tra đường dẫn tuyệt đối
console.log(path.isAbsolute('/foo/bar')); // true
console.log(path.isAbsolute('/baz/..')); // true
console.log(path.isAbsolute('qux/')); // false
console.log(path.isAbsolute('.')); // false

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// Kết quả '/foo/bar/baz/asdf);

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
// '/foo/bar/baz/asdf'


console.log(path.parse('/home/user/dir/file.txt'));
// {
//    root : "/",
//    dir : "/home/user/dir",
//    base : "file.txt",
//    ext : ".txt",
//    name : "file"
// }
// 


console.log('foo/bar/baz'.split(path.sep));
// returns ['foo', 'bar', 'baz']
