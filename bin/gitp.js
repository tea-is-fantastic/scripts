const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function gitp() {
    const {stdout, stderr} = await exec(
        `git add -A && git commit --no-verify -am "woohoo" && git push --all`,
    );
    console.log(stdout);
    console.log(stderr);
}

module.exports = gitp;
