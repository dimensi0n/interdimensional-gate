/**
 * @param {import('../GateOS')} os 
 * @param {string[]} args
 */
exports.call = (os, args) => {
    os.row([`${args} file created`]).end();
}