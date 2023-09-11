  Feature: Validate Categories
  Scenario Outline: Test 4 Validate products filtered by category
    When I login with to www.demoblaze.com
    Then I select sub-category to add a device
    | category    | totalProducts  |
    |  phone      |   7            |
    |  notebook   |   6            |
    |  monitor    |   2            |