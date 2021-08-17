# ShoulderTap Frontend Coding Challenge

Please read the following instructions carefully and make sure that you fulfil all the requirements listed.

## Task

We would like you to write a React App that will cover the functionality listed below and provide us with the source as well as anything else need to run it locally for evaluation:

- Create a React App Frontend that implements the design in the attached png
- The search bar on the top should allow you to input a single word (be careful with validating this correctly)
- Once the user clicks on "Search" or hits enter, pull words related to the input word to populate the word cloud. Use the [THIS API](https://www.wordsapi.com) to get the related words using the "hasTypes" property.
- Display the returned words in a word cloud. Make sure to handle cases where there might be enough words that overflow could occur.
- The words in the word cloud should be selectable. When a user selects a word, it should change color and move to the top in a smooth animation. Several words can be selected at once.

## Notes

- The Word API has a free plan with 2.5k requests per day, so please sign up for that one.
- The word cloud does not have to look exactly as in the wireframe as long as it is visually appealing.
