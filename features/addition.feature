Feature: Addition

  Addition is great as a verification exercise to get the Cucumber-js infrastructure up and running

  Scenario: Addition
    Given the numbers 1 and 3
    When they are added together
    Then should the result be 4