const AddNoteScreenPage = require('../../screenObjects/AddNoteScreenPage')
const {Given, When, Then} = require('@wdio/cucumber-framework')

describe('Add Notes', () => {
    it('Skip tutorial', async () => {
        await AddNoteScreenPage.skipBtn.click()
        await expect(AddNoteScreenPage.addNoteTxt).toBeDisplayed()
    })

    it('add a note, save changes & verify note', async () => {
        await AddNoteScreenPage.addNoteTxt.click()
        await AddNoteScreenPage.textOption.click()
        await expect(AddNoteScreenPage.textEditing).toBeDisplayed()
        
        await driver.saveScreenshot('add-note.png')
        // add note title
        await AddNoteScreenPage.noteHeading.addValue('Cresol - Cooperados')

        // add note body
        await AddNoteScreenPage.noteBody.addValue('MAC\nNovo IB\nCresol')

        // save the changes
        await AddNoteScreenPage.saveNote()

        // assertion
        await expect(AddNoteScreenPage.editBtn).toBeDisplayed()
        await expect(AddNoteScreenPage.viewNote).toHaveText('MAC\nNovo IB\nCresol')
    })
})
