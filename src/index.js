import pkg from '../package.json';

console.log(`Hello from ${pkg.name}:${pkg.version}.`);
console.log(`This was built for ${process.env.APP_ENV}`);