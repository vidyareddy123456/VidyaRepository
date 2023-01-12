public with sharing class wireComponent {
    public wireComponent() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        return [select id, Name, Rating, Industry from Account];
    }
    @AuraEnabled 
    public static List<Account> getAccountRecordsList() {
        return [select id, Name, Rating, Industry from Account Limit 10];
    }
}