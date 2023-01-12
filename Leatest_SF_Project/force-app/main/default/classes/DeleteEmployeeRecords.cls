global class DeleteEmployeeRecords implements Database.Batchable<sobject>{
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        string query = 'select id, Name, Salary__c from Employee__c';
        return Database.getQueryLocator(query);
    }
    global void execute(Database.BatchableContext bc, List<Employee__c> lstemp) {
        List<Employee__c> e = new List<Employee__c>(); 
        List<Employee__c> em = new List<Employee__c>(); 
        for(Employee__c emp : lstemp) {
            if(emp.Salary__c>25000) {
                emp.Status__c='Selected';
                em.add(emp);
            }
            if(emp.Salary__c<=25000) {
                e.add(emp);
            }
            update em;  
            delete e;
        }
    }
    global void finish(Database.BatchableContext bc) {
        
    }
}