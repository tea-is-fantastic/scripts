#!/usr/bin/env node
const argv = require('minimist')(process.argv.slice(2));

const f = {
    pub: require("./bin/pub"),
    build: require("./bin/build"),
    gitn: require("./bin/gitn"),
    gitp: require("./bin/gitp"),
}

async function setup() {
    if(argv?._) {
        f[argv._[0]]();
    }
}

setup();
