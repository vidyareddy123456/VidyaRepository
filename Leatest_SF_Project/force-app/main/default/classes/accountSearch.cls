public with sharing class accountSearch {
    @AuraEnabled(cacheable=true)
    public static List<Account> displayAccts(string searchkey) {
        List<Account> acclst = new List<Account>();
        for(Account acc: [select id, Name, Phone, Industry, Website from Account where Name LIKE : '%'+searchkey +'%']){
            acclst.add(acc);
        }
        if(acclst.size() ==0){
            throw new AuraHandledException('');
        }
        return acclst;
    }
}