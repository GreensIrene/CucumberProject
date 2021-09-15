$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "verifying Adactin Hotel Details",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should login \"\u003cuserName\u003e\" and \"\u003cpassWord\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should enter the Hotel details to search \"\u003clocation\u003e\" and \"\u003chotels\u003e\" and \"\u003croomType\u003e\" and \"\u003cnumberofRooms\u003e\" and \"\u003ccheckInDate\u003e\" and \"\u003ccheckOutDate\u003e\" and \"\u003cadultsPerPerson\u003e\" and \"\u003cchildernPerPerson\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.step({
  "name": "user sholud confim the names and payment details \"\u003cfirstName\u003e\"and \"\u003clastName\u003e\" and \"\u003cbillingAddress\u003e\" and \"\u003ccreditCardNo\u003e\" and \"\u003ccreditCardType\u003e\" and \"\u003cexpiryMonth\u003e\" and \"\u003cexpiryYear\u003e\" and \"\u003ccvvNo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "passWord",
        "location",
        "hotels",
        "roomType",
        "numberofRooms",
        "checkInDate",
        "checkOutDate",
        "adultsPerPerson",
        "childernPerPerson",
        "firstName",
        "lastName",
        "billingAddress",
        "creditCardNo",
        "creditCardType",
        "expiryMonth",
        "expiryYear",
        "cvvNo"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Sydney",
        "Hotel Sunshine",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Melbourne",
        "Hotel Creek",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Brisbane",
        "Hotel Hervey",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Adelaide",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "London",
        "Hotel Hervey",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "New York",
        "Hotel Creek",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Los Angeles",
        "Hotel Hervey",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Paris",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "Adelaide",
        "Hotel Hervey",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    },
    {
      "cells": [
        "prakash2857",
        "Snkl@2857",
        "London",
        "Hotel Cornice",
        "Double",
        "2 - Two",
        "09/09/2021",
        "10/09/2021",
        "2 - Two",
        "1 - One",
        "Prakash",
        "Selvaraj",
        "Namakkal",
        "0123456789123456",
        "VISA",
        "June",
        "2022",
        "358"
      ]
    }
  ]
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Sydney\" and \"Hotel Sunshine\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Melbourne\" and \"Hotel Creek\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Brisbane\" and \"Hotel Hervey\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Adelaide\" and \"Hotel Cornice\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"London\" and \"Hotel Hervey\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"New York\" and \"Hotel Creek\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Los Angeles\" and \"Hotel Hervey\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Paris\" and \"Hotel Cornice\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"Adelaide\" and \"Hotel Hervey\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifying login details with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on the Adactin Login page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSetup.user_is_on_the_Adactin_Login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should login \"prakash2857\" and \"Snkl@2857\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginPageSetup.user_should_login_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter the Hotel details to search \"London\" and \"Hotel Cornice\" and \"Double\" and \"2 - Two\" and \"09/09/2021\" and \"10/09/2021\" and \"2 - Two\" and \"1 - One\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_enter_the_Hotel_details_to_search(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should confirm the details",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_should_confirm_the_details()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sholud confim the names and payment details \"Prakash\"and \"Selvaraj\" and \"Namakkal\" and \"0123456789123456\" and \"VISA\" and \"June\" and \"2022\" and \"358\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageSetup.user_sholud_confim_the_names_and_payment_details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageSetup.user_should_verify_success_message()"
});
formatter.result({
  "status": "passed"
});
});