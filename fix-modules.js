const fse = require("fs-extra");
const path = require("path");

function getSource(name) {
    return path.join(__dirname, `./projects/fix/${name}`);
}

function getDest(name) {
    return path.join(__dirname, `./node_modules/${name}`);
}

function fixModules() {
    try {
        ['resize-observer-polyfill'].forEach(async (name) => {
            await fse.copy(getSource(name), getDest(name));
        });

        console.log("files in assets has been copy to dist");
    } catch (err) {
        console.error(err);
    }
}

fixModules();
