Feature: Create a new Text

    Scenario: User is creating a Text
        Given the User is on the NewText page
        When they click Submit button
        Then they are redirected to the Text detail page
