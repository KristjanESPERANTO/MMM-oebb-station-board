(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('chalk'), require('prompts'), require('oebb-api')) :
    typeof define === 'function' && define.amd ? define(['chalk', 'prompts', 'oebb-api'], factory) :
    (global = global || self, factory(global.chalk, global.prompts, global.oebb));
}(this, function (chalk, prompts, oebb) { 'use strict';

    chalk = chalk && chalk.hasOwnProperty('default') ? chalk['default'] : chalk;
    prompts = prompts && prompts.hasOwnProperty('default') ? prompts['default'] : prompts;

    prompts({
        type: 'text',
        message: 'Enter the full or partial name of the station',
        name: 'stationName',
    })
        .then(function (_a) {
        var stationName = _a.stationName;
        if (!stationName) {
            return Promise.reject('No station entered.');
        }
        return oebb.searchStationsNew(stationName);
    })
        .then(function (stations) { return prompts({
        type: 'select',
        message: 'Select a station',
        name: 'station',
        choices: stations.map(function (station) { return ({
            title: "" + (station.name || station.meta),
            value: JSON.stringify(station),
        }); }),
    }); })
        .then(function (answers) {
        var station = JSON.parse(answers.station);
        var name = station.name || station.meta;
        var number = station.number;
        console.log("\nYou selected " + chalk.blue.bold(name) + ".\nUse this number in you module configuration: " + chalk.red.bold(number) + "\n\n");
    })
        .catch(function (reason) {
        console.log('');
        console.log(chalk.red('✘ ') + reason);
        process.exit(1);
    });

}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlvbl9maW5kZXIuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
