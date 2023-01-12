global class DeleteEmployeeShedule implements schedulable{ 
    global void execute(schedulablecontext bc) {
        DeleteEmployeeRecords delEmp = new DeleteEmployeeRecords();
        Database.executeBatch(delEmp);
    }
}