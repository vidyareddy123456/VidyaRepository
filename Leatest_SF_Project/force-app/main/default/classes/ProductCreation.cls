public class ProductCreation {
    public string name{get;set;}
    public string id{get;set;}
    public integer price{get;set;}
    public Date mdate{get;set;}
    public Date edate{get;set;}
    public string result{get;set;}
    public list<Product__c> lstproducts{get;set;}
    
    public void CreateRecord() {
     
        Product__c pro = new Product__c();
           pro.Name = name;
           pro.Product_id__c = id;
           pro.Price__c = price;
           pro.Manu_Date__c = mdate;
           pro.Expiry_Date__c = edate;
        
        insert pro;
        
        lstproducts = [select id, Name, Price__c, Manu_Date__c,Product_id__c, Expiry_Date__c from Product__c where Product_id__c =:id];
    }
}