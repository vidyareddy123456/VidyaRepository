trigger ContactsforAccount on Account (after insert, after delete) {
    if(Trigger.isafter && Trigger.isinsert) {
        
    }
}