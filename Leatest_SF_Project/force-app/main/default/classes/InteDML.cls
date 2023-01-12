public class InteDML {
    class insertData {
        string nm;
        string rtg;
        string indty;
    }
    @AuraEnabled
    public static void insertld(string x, string y, string z) {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:JoshAntraData/services/apexrest/AccountData');
        req.setHeader('Content-type', 'application/json');
        insertData ind = new insertData();
        ind.nm=x;
        ind.rtg=y;
        ind.indty=z;
        string jsonString = JSON.serialize(ind);
        req.setBody(jsonString);
        req.setMethod('POST');
        HttpResponse resp = h.send(req);
        system.debug(resp.getBody());
        system.debug(resp.getStatus());
        system.debug(resp.getStatusCode());
    
    }
}