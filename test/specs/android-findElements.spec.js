describe.skip('Android Elements Tests', () => {
    it.skip('Find element by accessibility id', async () => {
        //await driver.pause(5000)

        //find element by accessibility id
        const appOption = await $('~App')
        await driver.pause(3000)

        //click on element
        await appOption.click()
        //assertion
        const actionBar = await $('~Action Bar')
        await expect(actionBar).toBeExisting()
    })

    it.skip('Find element by classname ', async () => {
        //find element by classname
        const className = await $('android.widget.TextView')
        console.log(await className.getText())

        await expect(className).toHaveText('API Demos')
    })

    it.skip('Find element by xpath ', async () => {
        //xpath - (//tagname[@attribute=value])
        await $('//android.widget.TextView[@content-desc="App"]').click()
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click()

        //find by text

        //await $('//android.widget.TextView[@text="Command two"]').click()

        //find by class - assertion
        //const textAssertion = await $('//android.widget.TextView')
        //await expect(textAssertion).toHaveText('You selected: 1, Command two')
    })

    it.skip('Find element by UIAutomator ', async () => {
        //find text contains
        //await $('android=new UiSelector().textContains("Alert")').click()
    })

    it.skip('Find multiple elements ', async () => {
        const expectList = [
            'API Demos',
            "Access'ibility",
            'Accessibility',
            'Animation',
            'App',
            'Content',
            'Graphics',
            'Media',
            'NFC',
            'OS',
            'Preference',
            'Text',
            'Views'
        ]
        const actualList = []
        //find multiple elements
        const textList = await $$('android.widget.TextView')
        //loop through them
        for (const element of textList) {
            actualList.push(await element.getText())
            console.log(element.getText())
        }
        //assert the list

        await expect(actualList).toEqual(expectList)
    })

    it.skip('Working with Text Field', async () => {
        await $('~Views').click()
        await $('~Auto Complete').click()
        await $('~1. Screen Top').click()

        //enter country name
        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]')
        await textField.addValue('Canada')

        //verify the country name
        await expect(textField).toHaveText('Canada')
    })
})
