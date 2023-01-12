public with sharing class newsAPIController {
    @AuraEnabled
    public static Map<String, Object> retrieveNews() {
         HttpRequest httpreq = new HttpRequest();
         httpreq.setEndpoint('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=6217311109e24a96a5cf3901780d0e3a');
         httpreq.setMethod('GET');

         Map<String, Object> newsJsonData = new Map<String, Object>();
         String strResponse = null;

         try{
            Http http = new Http();
            HttpResponse httpResponse = http.send(httpreq);
            if(httpResponse.getStatusCode() == 200) {
                strResponse = httpResponse.getBody();
            } else {
                throw new CalloutException(httpResponse.getBody());
            }
         } Catch(Exception ex) {
            throw ex;
         }
         if(!String.isBlank(strResponse)) {
            newsJsonData = (Map<String, Object>)JSON.deserializeUntyped(strResponse);
         }
         if(!newsJsonData.isEmpty()) {
            return newsJsonData;
         } else {
            return null;
         }
    }
}