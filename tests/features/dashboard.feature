Feature: Dashboard
    As a card member
    I want to visit the payment center
    So that I can View paymets and transctions

  Scenario: Visit the Dashboard Page
      When I navigate to the Dasboard
      Then I should see the nav bar
      And I should see the balance details component
      And I should see the transactions component
      And I should see the recent transactions header

  # Scenario: Select Drop Down 
  #     When I navigate to the Dasboard
  #     Then I select drop down 

 

  # Scenario: Make a Minimum payment
  #     When I navigate to the Dasboard
  #     Then I should click on the make a payment button
  #     Then I should see the header with text "Pay Your Bill"
  #     Then I should click on the Minimun Payment Due checkbox
  #     Then I should enter the minimum amount
  #     Then I click on the pay now button
  #     Then I should see the Thank You For Your Payment Alert
  #     When I should click on ok button in the alert box
  #     Then I should see the "Thank You For Your Payment!" label on the dashboard 
 


  # Scenario Outline: Make a payment checkboxes
  #     When I navigate to the Dasboard
  #     Then I should click on the make a payment button
  #     Then I should see the header with text "Pay Your Bill"
  #     Then I should click on the <payment> checkbox
 

#   Scenario: Veiw the navbar elements
#       When I navaigate to the Dasboard
#       Then I should see the payment center logo
#       And I shoudl see the payment center title
#       And I shoudl see the account services link
#       And I shoudl see the activity link
#       And I shoudl see the help button
#       And I shoudl see the login button

#   Scenario: View the balance details labels
#       When I navaigate to the Dasboard
#       And I should see the statement balance title
#       And I should see the make a payment title
#       And I should see the total balance title

#   Scenario: View the balance details amount labels
#       When I navaigate to the Dasboard
#       And I should see the statement balance amount
#       And I should see the make a payment amount
#       And I should see the total balance amount

#   Scenario: View the balance details buttons
#       When I navaigate to the Dasboard
#       And I should see the view transactions button
#       And I should see the make a payment button
#       And I should see the balance details link

#   Scenario: View the transactions header
#       When I navaigate to the Dasboard
#       And I should see transactions header
#       And I should see transactions header title
#       And I should see transactions header date

#   Scenario: View the transactions rows
#       When I navaigate to the Dasboard
#       And I should see transactions component
#       And I should see transactions rows
#       And I should see the amount of transactions
  
 

#   Scenario: Attempt to login with correct credentials
#       When I enter email as "yendyfeliz3"
#       And I enter password as "riwilfn670"
#       And I attempt to login
#     #   Then I should see welcome page

 
  #  Examples:
  #   | payment                   | amount  |
  #   | Minimun Payment Due       | 40.00   |
  #   | Pay Statement Balance     | 1000.85 |
  #   | Pay Total Balance         | 8834.55 |
  #   | Pay Other Amount          | 500.00  |
 
  #  Examples:
  #   | payment               |
  #   | Minimun Payment Due   |
  #   | Pay Statement Balance |
  #   | Pay Total Balance     |
  #   | Pay Other Amount      |