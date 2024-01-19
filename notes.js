const fs = require('fs')
const chalk = require('chalk')

//Add notes

const AddNote = (title, body) =>{
    const notes = loadNotes()
    //const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote=notes.find((note)=> note.title === title)

    if(!duplicateNote)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold.bgYellow('New note added!'))
    }
    else{
        console.log(chalk.red.bold.bgYellow('Note title taken!'))
    }
}

const saveNotes = (notes) => {
    const note=JSON.stringify(notes)
    fs.writeFileSync('notes.json',note)
}



// Remove Note

const removeNote = (title) => {
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)

    // const notesToKeep = notes.filter(function (note){
    //     return note.title !== title
    // })

    if(notes.length>notesToKeep.length){
        console.log(chalk.green.bold.bgYellow('Successfully Removed...'))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.bold.bgYellow(title+' not found...'))
    }
}


const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch (e){
        return []
    }
}


// Listing the notes

const nodeList = ()=>{
    const nodelists = loadNotes()
    console.log(chalk.white.bgYellow('Your Notes...'))
    if(nodelists.length>0){
        nodelists.forEach((note) => {
            console.log(note.title)
        })
    }
    else{
        console.log('[ ]')
    }
}

// Reading note

const readNote = (title)=>{
    const allNotes = loadNotes()
    const data = allNotes.find((note)=> note.title===title)
    if(data!==null){
        console.log(chalk.white.bgYellow(data.title))
        console.log(data.body)
    }
    else{
        console.log(chalk.red.bgYellow('Not Found!...'))
    }
}

module.exports = {
    AddNote: AddNote,
    removeNote: removeNote,
    nodeList: nodeList,
    readNote: readNote
}