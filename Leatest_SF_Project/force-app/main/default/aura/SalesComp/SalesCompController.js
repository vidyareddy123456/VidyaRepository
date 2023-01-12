({
	DisplayData : function(component, event, helper) {
		var act = component.get('c.getAccRecords');
        $A.enqueueAction(act, true);
        act.setCallback(this,function(response){
            var res = response.getReturnValue();
            if(res!='') {
                component.set('v.poslst',res);
                component.set('v.status',true);
            }
            else {
                component.set('v.msg','Sorry, unable to display');
                component.set('v.status',false);
            }
        });
	}
})