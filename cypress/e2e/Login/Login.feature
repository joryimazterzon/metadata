Feature: Login to demo blaze
  Scenario: Test 1 Sign in with Invalid user
    When I login with invalid user

  Scenario: Test 1 Sign Up with a new user
    When I sign up with random user
    Then I can login with random user
    Then I can logout
