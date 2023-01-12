public class createRelatedContacts {
    public static void createContact(List<Account> acclst) {
        List<Contact> contacttoCreate = new List<contact>();
        for(Account acc:acclst) {
            Contact con = new contact();
            con.LastName = acc.Name;
            con.AccountId = acc.id;
            contacttoCreate.add(con);
        }
        if(!contacttoCreate.isEmpty()) {
            insert contacttoCreate;
        }
    }
    public static void avoidDuplicateLeads(List<Lead> lstlds) {
        for(Lead ld: lstlds) {
            List<Lead> lst = [SELECT id, LastName, Email from lead where LastName=:ld.LastName];
            if(lst.size()>0) {
                ld.addError('You can not create duplicate records');
            }
        }
    }
    public static void preventDeletionofActiveRecords(List<Account> lstacc) {
        for(Account acc: lstacc) {
            if(acc.Active__c== 'yes') {
                acc.addError('You are not authorized to delete active records');
            }
        }
    }
    public static void validateLeadRecords(List<Lead> lstlead) {
        for(Lead ld: lstlead) {
            if(ld.Email == Null) {
                ld.Email.addError('email is mandatory');
            }
            if(ld.Phone == Null) {
                ld.Phone.addError('You can not create without provide phone number');
            }
        }
    }
    public static void updateCaseValues(List<Case> cslst) {
        List<Case> cases = new List<Case>();
        for(Case cs: cslst) {
            if(cs.Origin == 'Email') {
                cs.Status = 'New';
                cs.Priority = 'premium';
                cases.add(cs);
            }
        }
    }
    public static void updateleadValues(List<Lead> leadlst) {
        List<Lead> lstld = new List<Lead>();
        for(Lead ld: leadlst) {
            if(ld.LeadSource == 'Web') {
                ld.Rating = 'Cold';
            }
            else {
                ld.Rating = 'Hot';
            }
            lstld.add(ld);
        }
    }
    public static void createContactbasedonField(List<Account> acclst) {
        List<contact> listOfContactToInsert = new List<contact>();
        Map<Id,Integer> accntMap=new Map<Id,Integer>();
        for(Account a : acclst){
        accntMap.put(a.Id,(Integer)a.Count_of_Contacts__c);
     
   }
   if(!accntMap.isEmpty()){
   for(Id accId:accntMap.keySet()){
   // creating contact records
   for(integer i = 1; i<=accntMap.get(accId);i++){
      contact c =  new contact();
      c.AccountId=accId;
      c.LastName = 'Test'+i;
      listOfContactToInsert.add(c);
   }
}
    if(!listOfContactToInsert.isEmpty())
   {
   insert listOfContactToInsert;
}
}
    }
}