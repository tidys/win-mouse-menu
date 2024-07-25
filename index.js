#!/usr/bin/env node
const Regedit = require('regedit');
const {exists, create} = require('./util')
const {program} = require('commander');
const key = 'HKCR\\directory\\background\\shell';
let values = {};
const webstorm = `${key}\\webstorm`;
values[webstorm] = {
    "test": {
        type: "REG_SZ",
        value: "123",
    }
};



return;
const {Registry} = require('rage-edit');
Registry.set(webstorm, "test")
//Regedit.promisified.createKey([webstorm]);
return;
(async () => {
    let bool = await exists(webstorm);
    if (!bool) {
        await create(webstorm);
    } else {
        console.log('ok')
    }
    // Regedit.putValue(values, (error) => {
    //     console.log(error);
    // });
})();


return;

function listKey() {
    Regedit.list(key, (error, result) => {
        if (error) {
            console.log(error)
        } else {
            console.log(result);
        }
    })
}

return listKey();
program.version('0.0.1').allowUnknownOption(true);
program.command("add")
    .argument('label', '菜单名称')
    .argument('value', "菜单值")
    .action(() => {

    });

program.command('list').action(() => {
    listKey();
})

program.parse(process.argv);