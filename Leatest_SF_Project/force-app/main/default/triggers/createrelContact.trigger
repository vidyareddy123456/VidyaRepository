trigger createrelContact on Account (after insert, before delete) {
    if(trigger.isinsert && trigger.isafter) {
        createRelatedContacts.createContact(trigger.new);
    }
    if(trigger.isdelete && trigger.isbefore) {
        createRelatedContacts.preventDeletionofActiveRecords(trigger.old);
    }
    if(trigger.isinsert && trigger.isafter) {
        createRelatedContacts.createContactbasedonField(trigger.new);
    }
}