const util = require('util');
const exec = util.promisify(require('child_process').exec);

async function build() {
    const {stdout, stderr} = await exec(
        `npm i && npm build && git add -A && git commit --no-verify -am "woohoo" && git push --all && rm -rf ./node_modules`,
    );
    console.log(stdout);
    console.log(stderr);
}

module.exports = build;
