public class FetchRecords {
    @AuraEnabled
    public static List<Account> getAccountRecords() {
        List<Account> lstacc = [SELECT Id, Name, Active__c, Rating, Industry FROM Account];
        return lstacc;
    }
}