({
	Insert : function(component, event, helper) {
		   var act = component.get('c.insertld');
           $A.enqueueAction(act, true);
           var name = component.get('v.na');
           var ratg = component.get('v.rg');
           var indu = component.get('v.ind');
           act.setParam('x',name);
           act.setParam('y',ratg);
           act.setParam('z',indu);
           act.setCallback(this,function(response){
               var res = response.getReturnValue();
               if(res!='') {
                   component.set('v.acclst',res);
                   componet.set('v.status',true);
               }
               else {
                   component.set('v.msg', 'Sorry, unable to insert the record');
                   component.set('v.status',false);
               }
        });
	} 
})