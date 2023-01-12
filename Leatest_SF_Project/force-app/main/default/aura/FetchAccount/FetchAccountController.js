({
	Display : function(component, event, helper) {
		    var act = component.get('c.getAccountRecords');
            $A.enqueueAction(act, false);
            act.setCallback(this,function(response){
            var res = response.getReturnValue();
                if(res!='') {
                    component.set('v.accountlist',res);
                }
                else {
                    component.set('v.msg', 'Sorry, Cannt Display');
                }
        });
	}
})