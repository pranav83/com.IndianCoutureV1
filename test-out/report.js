$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/Resources/Login.feature");
formatter.feature({
  "line": 2,
  "name": "login Functionality",
  "description": "",
  "id": "login-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@SanityPack"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "login with valid credential",
  "description": "",
  "id": "login-functionality;login-with-valid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter valid credential\"\u003cUsername\u003e\"\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see welcome message",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "login-functionality;login-with-valid-credential;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 15,
      "id": "login-functionality;login-with-valid-credential;;1"
    },
    {
      "cells": [
        "ppothiwala@gmail.com",
        "Neelraj11"
      ],
      "line": 16,
      "id": "login-functionality;login-with-valid-credential;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 9342774600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on indiancouture landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign-in link text",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to sign-in page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.i_am_on_indiancouture_landing_page()"
});
formatter.result({
  "duration": 8655799400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_sign_in_link_text()"
});
formatter.result({
  "duration": 818600300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_should_navigate_to_sign_in_page()"
});
formatter.result({
  "duration": 847331200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "login with valid credential",
  "description": "",
  "id": "login-functionality;login-with-valid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@Login"
    },
    {
      "line": 1,
      "name": "@SanityPack"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter valid credential\"ppothiwala@gmail.com\"\"Neelraj11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see welcome message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ppothiwala@gmail.com",
      "offset": 25
    },
    {
      "val": "Neelraj11",
      "offset": 47
    }
  ],
  "location": "LoginStepDefs.i_enter_valid_credential(String,String)"
});
formatter.result({
  "duration": 184268000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_on_log_in_button()"
});
formatter.result({
  "duration": 58212500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_should_see_welcome_message()"
});
formatter.result({
  "duration": 969174000,
  "status": "passed"
});
formatter.after({
  "duration": 753950400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 19,
  "name": "login with in-valid user name",
  "description": "",
  "id": "login-functionality;login-with-in-valid-user-name",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Login1"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter in-valid credentail \"\u003cUsername\u003e\"\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
  "name": "",
  "description": "",
  "id": "login-functionality;login-with-in-valid-user-name;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 24,
      "id": "login-functionality;login-with-in-valid-user-name;;1"
    },
    {
      "cells": [
        "hellohihowru",
        "Neelraj11"
      ],
      "line": 25,
      "id": "login-functionality;login-with-in-valid-user-name;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4434103300,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on indiancouture landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign-in link text",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to sign-in page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.i_am_on_indiancouture_landing_page()"
});
formatter.result({
  "duration": 8614484000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_sign_in_link_text()"
});
formatter.result({
  "duration": 885741800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_should_navigate_to_sign_in_page()"
});
formatter.result({
  "duration": 827232600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "login with in-valid user name",
  "description": "",
  "id": "login-functionality;login-with-in-valid-user-name;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 18,
      "name": "@Login1"
    },
    {
      "line": 1,
      "name": "@SanityPack"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter in-valid credentail \"hellohihowru\"\"Neelraj11\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should see error message",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "hellohihowru",
      "offset": 29
    },
    {
      "val": "Neelraj11",
      "offset": 43
    }
  ],
  "location": "LoginStepDefs.i_enter_in_valid_credentail(String,String)"
});
formatter.result({
  "duration": 192252400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_should_see_error_message()"
});
formatter.result({
  "duration": 28066200,
  "status": "passed"
});
formatter.after({
  "duration": 737629500,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 28,
  "name": "login with in-valid password",
  "description": "",
  "id": "login-functionality;login-with-in-valid-password",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Login2"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter valid \"\u003cUsername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter in-valid\"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see error in the box sign-in failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "login-functionality;login-with-in-valid-password;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 35,
      "id": "login-functionality;login-with-in-valid-password;;1"
    },
    {
      "cells": [
        "ppothiwala@gmail.com",
        "123xyzefg"
      ],
      "line": 36,
      "id": "login-functionality;login-with-in-valid-password;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4690885200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I am on indiancouture landing page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click sign-in link text",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I should navigate to sign-in page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepDefs.i_am_on_indiancouture_landing_page()"
});
formatter.result({
  "duration": 8515767700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_sign_in_link_text()"
});
formatter.result({
  "duration": 941383400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_should_navigate_to_sign_in_page()"
});
formatter.result({
  "duration": 825388500,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "login with in-valid password",
  "description": "",
  "id": "login-functionality;login-with-in-valid-password;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 27,
      "name": "@Login2"
    },
    {
      "line": 1,
      "name": "@SanityPack"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter valid \"ppothiwala@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter in-valid\"123xyzefg\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on log-in button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I should see error in the box sign-in failed",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ppothiwala@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepDefs.i_enter_valid(String)"
});
formatter.result({
  "duration": 112807100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123xyzefg",
      "offset": 17
    }
  ],
  "location": "LoginStepDefs.i_enter_in_valid(String)"
});
formatter.result({
  "duration": 97209100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_click_on_log_in_button()"
});
formatter.result({
  "duration": 64048200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepDefs.i_should_see_error_in_the_box_sign_in_failed()"
});
formatter.result({
  "duration": 831608900,
  "status": "passed"
});
formatter.after({
  "duration": 731024400,
  "status": "passed"
});
});