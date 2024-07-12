# Color Swatches Assessment

This is my attempt at the Color Swatches Assement.

The project is located inside the `/color-swatches` folder. Instructions for running the application are located in the README inside that folder.

In this README, I wanted to provide some insights into my thought process.

# Considerations

- The distinct color names can be determined pretty efficiently by using a Set data structure, which gives us an O(1) lookup time.

- The number of API calls, on the other hand is quite a bit more inefficient. Currently, I can't think of a way to cut down on the number of api calls based on the information provided by the api, so I stuck with a simple for loop that calls the api all 360 times necessary. While there may be a more efficient way to accomplish this, at least we know that we only need to call the API a maximum of 360 times, so our app is still reasonably efficient. There's no risk of reaching an O(n^2) runtime. 

- The API calls will only be made when a user hits the "Get Colors!" button. 

- I chose to use a slider input provided by Angular Material as the means for accepting user input for the S and L values. The reason I chose this is that the slider seemed to be a simple and straight-forward experience for the user when selecting values. Also, out-of-the-box, Angular Material makes the slider accept only values 0 through 100, so I don't have to manually check for invalid values, such as negative numbers. This just makes it a bit quicker and simpler for me to get the assignment done and ensure valid api calls. 

- The user will see the color swatches being loaded in as they are made available from the api, so they'll get a bit of feedback in the form of additional swatches being loaded. I gave some thought to adding a loader animation or some kind of complete message when everything is loaded in; however, since the swatches load reasonably fast, I didn't think it was entirely necessary. If I were trying to improve the UX a bit more, I would also disable or grey out the "Get colors!" button as the colors are being loaded to let the user know that they don't need to hit the button again. This would hopefully also prevent users from spamming the API with too many calls. 
