describe('Add Notes', () => {
    it.skip('Skip tutorial', async () => {
        await $(
            '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip"]'
        ).click()

        await expect($('//*[@text="Add note"]')).toBeDisplayed()
    })

    it.skip('add a note, save changes & verify note', async () => {
        await $('//*[@text="Add note"]').click()
        await $('//*[@text="Text"]').click()
        await expect($('//*[@text="Editing"]')).toBeDisplayed()

        // add note title
        await $(
            '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]'
        ).addValue('Cresol MAC')

        // add note body
        await $(
            '//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]'
        ).addValue('Novo IB\nSquad Rosie\nQA Automation')

        // save the changes
        await driver.back()
        await driver.back()

        // assertion
        await expect(
            $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_btn"]')
        ).toBeDisplayed()
        await expect(
            $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/view_note"]')
        ).toHaveText('Novo IB\nSquad Rosie\nQA Automation')
    })
})
