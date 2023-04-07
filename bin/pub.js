const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function pub() {
    const {stdout, stderr} = await exec(
        `git add -A && git commit -am "woohoo" && npm version patch && npm publish --access=public && git push --all`,
    );
    console.log(stdout);
    console.log(stderr);
}

module.exports = pub;
