public class DisplayRecords {
   @AuraEnabled
    public static List<Lead> getRecords() {
        //string stats=st+'%';
        List<Lead> leads = [SELECT Status FROM Lead];
        return leads;
    }
    public static List<Lead> fetchLeadRecords(string st) {
        string stats=st+'%';
        List<Lead> lstleads = [SELECT Id, Name, Company, Phone, Email, Status, LeadSource FROM Lead where Status LIKE:stats];
        return lstleads;
    }
    public static List<Lead> LeadRecords(string com) {
        string comp=com+'%';
        List<Lead> lstld = [SELECT Id, Name, Company, Phone, Email, Status, LeadSource FROM Lead where Company LIKE:comp];
        return lstld;
    }
}