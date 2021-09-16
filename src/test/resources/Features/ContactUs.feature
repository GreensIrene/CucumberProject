@ResAp
Feature: Smoke test Automation

Scenario: Home page validations
Given User land on restaurant application
Then User verify the header logo present in page

Scenario: Contact us page validations
When User click on contact us link
And User Enter First Name
And User Enter Last Name
And User Enter Phone Number
And User Enter Guest Number
And User Enter State
And User Enter Email
And User Enter Reservation Date
And User Enter Subject
And User click Reserve Button
Then User success message in the next page
