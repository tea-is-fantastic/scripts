const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pub() {
    const {stdout, stderr} = await exec(
        `npm version patch && npm publish --access=public`,
    );
    console.log(stdout);
    console.log(stderr);
}

module.exports = pub;
