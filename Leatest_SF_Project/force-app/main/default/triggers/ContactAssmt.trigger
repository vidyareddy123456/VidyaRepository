trigger ContactAssmt on Contact (before insert) {
    if(Trigger.isbefore && Trigger.isinsert) {
        ContactExam.updateAccount(Trigger.new);
    }
}