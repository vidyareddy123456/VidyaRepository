public class OAuthAthentication {
   @AuraEnabled
    public static List<object> getAccRecords() {
        Http h = new Http();
        HttpRequest req = new HttpRequest();
        req.setEndpoint('callout:JoshAntraData/services/apexrest/AccountData');
        req.setMethod('GET');
        HttpResponse resp = h.send(req);
        integer code = resp.getStatusCode();
        system.debug(code);
        if(code == 200) {
           List<object> acclst = (List<object>)JSON.deserializeUntyped(resp.getBody());
           system.debug(acclst);
            return acclst;           
        }
        else {
            return null;
        }
    }
}