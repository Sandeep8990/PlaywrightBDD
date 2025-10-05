Feature: Login functionality

@Test
  Scenario: Successful login
    Given I open the login page
    When I login with username "admin" and password "password123"
    Then I should see the homepage
