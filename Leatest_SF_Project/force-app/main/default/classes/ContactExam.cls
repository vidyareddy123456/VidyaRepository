public class ContactExam {
    public static void updateAccount(List<Contact> lstcon) {
        set<id> lstid = new set<id>();
        for(Contact con : lstcon) {
            if(con.Accountid != Null) {
                lstid.add(con.Accountid);
            }
        }
        List<Account> acclist = [select Count_of_Contacts__c, Name from Account WHERE id in:lstid];
        integer count = [select count() from contact where Accountid in :lstid];
        for(Account a : acclist) {
            a.Count_of_Contacts__c = count;
        }
        update acclist;
    }
}