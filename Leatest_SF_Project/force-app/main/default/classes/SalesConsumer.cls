public class SalesConsumer {
    @AuraEnabled
    public static List<object> getAccRecords() {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('https://joshsolutions2-dev-ed.my.salesforce.com/services/apexrest/AccountData');
        req.setMethod('GET');
        req.setHeader('Authorization','Bearer !AQcAQNY0fLSUD8swBPVdBSGrG41lhmVMG5ZjVLIhuqVxT5JWvfd5Scs.PgcZ8EN0BMvuVuvRStUdyPUpVSURyoGmXScz3pNk');
        HttpResponse resp = h.send(req);
        integer code = resp.getStatusCode();
        if(code == 200) {
            List<object> acclst = (List<object>)JSON.deserializeUntyped(resp.getBody());
            return acclst;
           
        }
        else {
            return null;
        }
    }
}