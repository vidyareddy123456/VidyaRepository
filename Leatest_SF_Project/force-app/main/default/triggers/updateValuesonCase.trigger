trigger updateValuesonCase on Case (before insert) {
    if(trigger.isinsert && trigger.isbefore) {
        createRelatedContacts.updateCaseValues(trigger.new);
    }
}