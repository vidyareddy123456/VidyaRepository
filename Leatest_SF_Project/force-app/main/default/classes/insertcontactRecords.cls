public class insertcontactRecords {
public static void contactInsert() {
    List<Contact> lstcon = new List<Contact>();
        for(integer counter=1;counter<=200;counter++) {
          Contact con = new Contact();
          con.FirstName='Apex';
          con.LastName='Contact'+counter;
          con.Email='apex'+counter+'@gmail.com';
          lstcon.add(con);
        
          if(!lstcon.isEmpty()) {
             insert lstcon;
        }
     
}
}
}