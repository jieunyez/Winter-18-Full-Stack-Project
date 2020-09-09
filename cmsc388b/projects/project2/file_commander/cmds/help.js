const menus= {
    main: `
    file_commander [command] <options>

    peek_inside .............. show content for the file 
    copy_file ............ copy a file to a place you want
    help  ............... show help menu for a command
    -h  ............... show the help for a command`,

  peek_inside: `
    file_commander peek_inside <param>

    param ..... the parameter should be the path to the file`,
  copy_file: `
    file_commander copy_file <param1> <param2> 
    param1 ..... the first parameter is the path to the source file you want to copy
    param2 ..... the second parameter is the path of the file you want to copy to`,
}

module.exports = (args) => {
    //console.log("===========")
    //console.log(args._[0])
    const subCmd = args._[0] === 'help' ? args._[1] : args._[0]
    //console.log(subCmd)
    console.log(menus[subCmd] || menus.main)
  }