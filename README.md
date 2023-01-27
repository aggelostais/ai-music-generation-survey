<base target="_blank">

# AI Music Generation Survey
**[Take the Survey](https://vercel.com/button)](http://ai-music-generation-survey.vercel.app)**

## Introduction
Welcome to our AI Piano Music survey! This is a part of our [Piano Polyphonic Music Generation](https://github.com/aggelostais/piano-polyphonic-music-generation) research project, aiming to create new and innovative ways to generate piano music using Artificial Intelligence. Our goal is to create music that is both expressive and emotionally engaging, and we need your help to make it even better.

## About the Survey
The survey is designed to gather feedback about the quality of the piano music generated by our AI models. It consists of a series of questions and tasks that will help us understand and improve the quality of our AI-generated piano music. 
You will be listening to a variety of piano songs, some composed by humans and others generated by different AI models. 
with the task of rating each one and providing valuable feedback. 

## How to take the survey
To take the survey, simply visit the link provided and follow the instructions on the page. The survey should take around 5 minutes to complete. It consists of listening to six piano songs generated by our AI model and answering a series of questions and tasks about each song. After submitting your answers for each song, the page will be refreshed and a new song will start playing. You can always see your progress at the top of the page.

We appreciate your time and effort in taking the survey and helping us make our AI piano music even better. If you have any questions or issues, please reach out to us via email.

## How your feedback will be used
Your feedback will be used to improve the AI model and to generate new and better piano music. We will also use your feedback to understand the factors that affect the perception of the music and to identify areas where our models can be improved.

## Technical Specifications
* **Code Source**: The survey was built using code from https://github.com/geofila/site and further developed to include additional features and functionality.
* **Implementation**: Flask web framework in Python 
* **Storage**: The music samples and data collected is stored in Firebase Storage.
* **Deployment**: The survey is deployed on Vercel as a Serverless Function. It uses the Web Server Gateway Interface (WSGI) with Flask to enable handling requests on Vercel with Serverless Functions.

## Requirements
To run this project on your local machine, you will need to have Python and Flask installed. You will also need to create a Firebase project and connect it to the survey to store the data. A Vercel account is also required for deployment.

## Running Locally
* Clone the repository to your local machine
```
git clone https://github.com/aggelostais/ai-music-generation-survey.git
```
* Install the required packages
```
pip install -r requirements.txt
```
* Create a Firebase project and connect it to the survey.
* Replace the Firebase configuration details in the index.py file with your own,
creating a config.json configuration file.
* Run the application.
```
python index.py
```
* The survey will be running on http://localhost:5000/

## Deployment
* Connect your Vercel account to your GitHub repository and follow the instructions to deploy the project.
* You can follow this example https://vercel.com/templates/python/flask-hello-world

## Improments
- [ ] Add Previous button on introduction modals.
- [ ] Add Finish button for futher contribution after 6 songs.



<!-- ## Running Locally

```bash
npm i -g vercel
vercel dev
```

Your Flask application is now available at `http://localhost:3000`. -->

<!-- ## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fexamples%2Ftree%2Fmain%2Fpython%2Fflask&demo-title=Flask%20%2B%20Vercel&demo-description=Use%20Flask%202%20on%20Vercel%20with%20Serverless%20Functions%20using%20the%20Python%20Runtime.&demo-url=https%3A%2F%2Fflask-python-template.vercel.app%2F&demo-image=https://assets.vercel.com/image/upload/v1669994156/random/flask.png) -->
