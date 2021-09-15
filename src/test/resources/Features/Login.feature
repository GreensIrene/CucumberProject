Feature: verifying Adactin Hotel Details

  Scenario Outline: verifying login details with valid credentials
    Given user is on the Adactin Login page
    When user should login "<userName>" and "<passWord>"
    And user should enter the Hotel details to search "<location>" and "<hotels>" and "<roomType>" and "<numberofRooms>" and "<checkInDate>" and "<checkOutDate>" and "<adultsPerPerson>" and "<childernPerPerson>"
    And user should confirm the details
    And user sholud confim the names and payment details "<firstName>"and "<lastName>" and "<billingAddress>" and "<creditCardNo>" and "<creditCardType>" and "<expiryMonth>" and "<expiryYear>" and "<cvvNo>"
    Then user should verify success message

    Examples: 
      | userName    | passWord  | location    | hotels         | roomType | numberofRooms | checkInDate | checkOutDate | adultsPerPerson | childernPerPerson | firstName | lastName | billingAddress | creditCardNo     | creditCardType | expiryMonth | expiryYear | cvvNo |
      | prakash2857 | Snkl@2857 | Sydney      | Hotel Sunshine | Double   | 2 - Two       | 09/09/2021  | 10/09/2021   | 2 - Two         | 1 - One           | Prakash   | Selvaraj | Namakkal       | 0123456789123456 | VISA           | June        |       2022 |   358 |
   