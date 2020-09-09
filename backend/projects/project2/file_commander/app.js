const minimist = require('minimist')

module.exports = () => {
    const args = minimist(process.argv.slice(2))
    //console.log("args is: ");
    //console.log(args);

    let cmd = args._[0] || 'help'

    if (args.help || args.h) {
        cmd = 'help'
      }

    switch (cmd) {
        case 'peek_inside': 
            require ('./cmds/peek_inside')(args)
            break
        case 'copy_file':
            require ('./cmds/copy_file')(args)
            break
        case 'help':
            require ('./cmds/help')(args)
            break
        default:
            console.error(`"${cmd}" is not a valid command!`)
            break
    }
}