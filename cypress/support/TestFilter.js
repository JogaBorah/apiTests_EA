/// <reference types="cypress"/>

const TestFilter = (testCaseDefinedTags, runTest) => {
    if (Cypress.env('tags')){
        const groupTagsArray = Cypress.env('tags').split('/')
        groupTagsArray.forEach(eachGroupTagsString => {
            const tagsArrayForEachGroup = eachGroupTagsString.split('-')
            const isFound = tagsArrayForEachGroup.every((tag) => testCaseDefinedTags.includes(tag))
            if (isFound) {
                runTest()
            }

        })
    } else {
        runTest()
    }
}

export default TestFilter