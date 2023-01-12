public with sharing class calculateNumbers {
    @AuraEnabled
    public static integer getSumResult(integer firstNumber, integer secondNumber) {
        return (firstNumber+secondNumber);
    }
}