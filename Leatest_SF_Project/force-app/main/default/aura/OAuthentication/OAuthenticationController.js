({
	OAuth:function(component, event, helper) {
		  var act = component.get('c.getAccRecords');
          $A.enqueueAction(act,true);
          act.setCallback(this,function(response){
             var res = response.getReturnValue();
              if(res!='') {
                  component.set('v.acclst',res);
                  component.set('v.status',true);
              }
              else {
                  component.set('v.msg', 'sorry, unable to display');
                  component.set('v.status', false);
              }
        });
	}
})