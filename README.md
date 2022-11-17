# Lab 8
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    Within a Github action that runs whenever code is pushed. This is because we have to test each piece of code frequently so that we don't get overwhelmed by a bunch of errors and bugs when integrating. We also don't want to always run these tests manually because simpler tests don't require human interaction too much and should be handled automatically to save time.

2) Would you use an end to end test to check if a function is returning the correct output? No.