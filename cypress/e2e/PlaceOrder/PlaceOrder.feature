  Feature: Place a Purchase Order
  Scenario Outline: Test 3 Validate charged information is correct
    When I login with to www.demoblaze.com
    Then I select Phones category to add a device
    | category  | index  |
    |  phone    |   3    |
    |  phone    |   1    |
    Then I visit the cart and remove one item
    | index |
    |  1    |
    Then place the order and purchase
    Then validate info in confirmation popup