const yargs = require('yargs')
const notes = require('./notes')

//create add command

yargs.command({
    command: 'add',
    describe: 'Add a new note.',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Note body',
            demandOption: true,
            type:'string'
        }
    },
    handler(argv){
        notes.AddNote(argv.title, argv.body)
    }
})


//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a note.',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command

yargs.command({
    command: 'list',
    describe: 'List of notes.',
    handler(){
        notes.nodeList()
    }
})

//create read command

yargs.command({
    command: 'read',
    describe: 'Read note.',
    builder: {
        describe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})


yargs.parse()