# Lab 8
1) Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

    Within a Github action that runs whenever code is pushed. This is because we have to test each piece of code frequently so that we don't get overwhelmed by a bunch of errors and bugs when integrating. We also don't want to always run these tests manually because simpler tests don't require human interaction too much and should be handled automatically to save time.

2) Would you use an end to end test to check if a function is returning the correct output? No.

3) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.
    No. The "message" features involves not only write, send, and also receive. All these functions working togther makes "message" happen, so unit test is not enough.

4) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.
   Yes. This feature only focuses on one very simple feature with the return value being either True or False. Unit test is good at it.