global class InsertBatcch implements Database.Batchable<sObject>{
    global List<Account> start(Database.BatchableContext BC) {

List<Account> AccList= new List<Account>();
for(Integer i=0;i<5;i++)
{
account ac= new account();
ac.Name='Batch'+i;
AccList.add(ac);
}
String query = 'SELECT Id, Name FROM Account';
return AccList;
}

global void execute(Database.BatchableContext BC, List<Account> accList) {


try {
if(accList.size()>0)
{
Insert accList;
}

} catch(Exception e) {
System.debug(e);
}

}

global void finish(Database.BatchableContext BC) {
// execute any post-processing operations like sending email
}
}