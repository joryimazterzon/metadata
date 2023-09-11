Feature: Login to demo blaze
  Scenario Outline: Perform a successful login
    When I login with to www.demoblaze.com
    Then I select Phones category to add a device
    | category  | index  |
    |  phone    |   3    |
    |  phone    |   1    |
    Then I visit the cart and remove one item
    | index |
    |  1    |
    Then place the order and purchase
    


