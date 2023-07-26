const EditNoteScreenPage = require('../../screenObjects/EditNoteScreenPage')

describe('Delete Note', () => {
    before(async () => {
        await EditNoteScreenPage.skipTutorial()
        await EditNoteScreenPage.addAndSaveNote('MAC', 'Novo IB\nSquad Rosie\nCresol')
        await driver.back()
    })

    beforeEach(() => {
        console.log('Before each hook')
    })

    it('Delete a note & check the note in trash can', async () => {
        //await EditNoteScreenPage.skipTutorial()
        //await EditNoteScreenPage.addAndSaveNote('MAC', 'Novo IB\nSquad Rosie\nCresol')

        //await driver.back()

        const note = await EditNoteScreenPage.firstNote.getText()

        // click on the note
        await EditNoteScreenPage.firstNote.click()

        // click on more icon
        await EditNoteScreenPage.moreIcon.click()

        // click on Delete item
        await EditNoteScreenPage.deleteIcon.click()
        await driver.saveScreenshot('delete-icon.png')


        // accept alert
        await driver.acceptAlert()

        // click on nav icon
        await EditNoteScreenPage.navIcon.click()

        // click on trash can item
        await EditNoteScreenPage.trashCanItem.click()

        // assertions
        const trashCanItem = await EditNoteScreenPage.firstNote

        await expect(trashCanItem).toHaveText(note)
        await driver.saveScreenshot('validate-trash.png')

    })

       afterEach(() => {
        console.log('After each hook')
    })
})
