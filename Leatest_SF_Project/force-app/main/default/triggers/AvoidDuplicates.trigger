trigger AvoidDuplicates on Lead (before insert) {
    if(trigger.isinsert && trigger.isbefore) {
        createRelatedContacts.avoidDuplicateLeads(trigger.new);
        createRelatedContacts.validateLeadRecords(trigger.new);
        createRelatedContacts.updateleadValues(trigger.new);
}
}