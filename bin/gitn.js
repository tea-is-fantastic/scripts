const util = require('util');
const exec = util.promisify(require('child_process').exec);

const argv = require('minimist')(process.argv.slice(2));

async function gitn() {
    const {stdout, stderr} = await exec(
        `rm -rf .git && git init . && git add -A && git commit --no-verify -am "woohoo" && git branch -M main && git remote add origin ${argv._[1]} && git push --all -f`,
    );
    console.log(stdout);
    console.log(stderr);
}

module.exports = gitn;
