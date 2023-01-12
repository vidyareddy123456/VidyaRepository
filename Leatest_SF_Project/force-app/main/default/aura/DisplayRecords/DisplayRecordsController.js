({
	Display : function(component, event, helper) {
		    var act = component.get('c.getRecords');
            $A.enqueueAction(act, false);
            act.setCallback(this, function(response){
            var res = response.getReturnValue();
            console.log();
            var leadStatus=[];
                var defoption={"label":'--None--', "value":'--None--'};
                leadStatus.push(defoption);
                for(var i=0; i<res.length; i++) {
                    var item = {"label": res[i].Status,"value": res[i].Status};
                }
                 leadStatus.push(item);
                component.set('v.options',res);
        });
	},
    Submit : function(component, event, helper) {
        component.set('v.cols',[
            {label:'Name', fieldName:'Name', type:'text'},
            {label:'Phone', fieldName:'Phone', type:'text'},
            {label:'Email', fieldName:'Email', type:'text'},
            {label:'Status', fieldName:'Status', type:'picklist'},
            {label:'Lead Source', fieldName:'LeadSource', type:'text'},
            {label:'Company', fieldName:'Company', type:'text'}]);
              var act= component.get('c.fetchLeadRecords');
              var val= component.get('v.sts');
              $A.enqueueAction(act, false);
              act.setParam('st',val);
        act.setCallback(this, function(response){
              var re = response.getReturnValue();
            if(re!='') {
                component.set('v.accRecord',re);
            }
            else {
                component.set('v.msg', 'Sorry, Unable to Display');
            }
        });
    }  
})