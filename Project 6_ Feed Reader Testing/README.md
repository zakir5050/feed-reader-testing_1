# How to run this application?

1. Download the project assets .
2. open index.html .


# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.

* Write a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.

* Write a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

* Write a new test suite named "The menu".

* Write a test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.

* Write a test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

* Write a test suite named "Initial Entries".

* Write a test that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container.

* Write a test suite named "New Feed Selection".

* Write a test that ensures when a new feed is loaded by the loadFeed function that the content actually changes.


