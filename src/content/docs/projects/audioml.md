---
title: Winning P&G's 2023 Deep Learning Hackathon
description: A summary of my machine learning audio project
---
Every year, P&G held a hackathon where the top data scientists in P&G would compete in a machine learning task. In 2023, the task was to classify audio samples as running water or noise. This is useful for behavioral research studies and sustainability studies. The competition consisted of over 100 participating data scientists. I came in first place overall.

## The process I used to win the hackathon:

- **Clean Training Data:** The data provided had many artifiacts and misclassifications. I manually combed the data and created a filtering function to remove incorrect samples. I also recorded my own sample data to enhance my training dataset.

- **Physics:** Since the data was for detecting when a person would open or shut off a faucet, I timed and calculated the rise time for the action, resulting in having the optimal window size for my audio samples.

- **Using the full depth of data available:** The standard approach to audio classification was to bucket data into small samples, and doing a grid search of different frequency bands and building a simple classifier. Instead of this approach, I used the VGG19 transfer learning image classifier and used the mel spectrogram audio representation (this is the thumbnail image) and fed that result into the classifier. The spectrogram allowed for time and frequency representations to be represented in the data.

- **Big, Big Supercomputer:** Since I was a Kubernetes admin for the cluster, I had access to over three V100 GPU's and eight T4 GPU's. With this compute power, I was able to run and build my model in a weekend.

- **Tuned Mass Damper inspired Mean Smoothing:** I had used traditional mean smoothing techniques, but kept seeing the smoothing fail in a predictable way. After seeing the pattern of the fails, I realized that the failure looked like the graph of a tuned mass damper equation from my engineering days. After implementing the function, the smoothing improved my classification by five percent.

- **The Results:** 97% F1 Score, over 10% gap in accuracy compared to runner up.
## Skills Utilized:
- **Data Science:** This project had many components of the data science workflow. I had to do the data cleaning and acquisition, find domain expertise, build the best suited model, and filter the output noise.

- **Communication and Collaboration:** During the hackathon, I had to find many experts from inside the company and from external resources. In addition, I had to then take a tour at the end of competition to present to various executives in the company.

- **Digital Signal Processing:** Having experience in electrical engineering and DSP (Digital Signal Processing) gave me a leg up in the competition. understanding the reasoning behind not compressing to mp3, building fourier transforms, and other filtering tricks allowed me to focus my time on the ML/AI tasks at hand and not on the basic theory.

## Tech Stack:
- **Python/Pandas**
- **Tensorflow/Keras**
- **Excel/PowerPoint**
- **Supercomputer**
- **Managing Expectations**

