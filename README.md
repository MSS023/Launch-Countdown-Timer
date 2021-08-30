# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)

### Links

- Solution URL: [MSS023/Launch-Countdown-Timer](https://github.com/MSS023/Launch-Countdown-Timer)
- Live Site URL: (https://launch-countdown-timer-mss.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

I learned a lot about React Hooks along with setInterval(). An instance of my code is mentioned below:-

useEffect(() => {
		const interval = setInterval(() => {
			if(sec>0)
			{
				setTime([day,hrs,min,sec-1]);
			}
			else {
				if(min>0)
				{
					setTime([day,hrs,min-1,59]);
				}
				else
				{
					if(hrs>0)
					{
						setTime([day,hrs-1,59,59]);
					}
					else
					{
						if(day>0)
						{
							setTime([day-1,23,59,59]);
						}
						else
						{
							setTime([0,0,0,0]);
						}
					}
				}
			}
		},1000);
		return () => clearInterval(interval);
	});

## Author

- Frontend Mentor - [@MSS023](https://www.frontendmentor.io/profile/MSS023)
- LinkedIn - [Manan Sahni](https://www.linkedin.com/in/manan-sahni-9207271a1?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BjZFxey%2FORjK1QS3zKKc7dw%3D%3D)

## Acknowledgments

I want to thank all my friends and mentors who've actively helped me in learning new things. Moreover I want to acknowledge the help provided by websites like https://www.stackoverflow.com and https://www.geeksforgeeks.org . It won't be possible for me to complete any project were it not for these websites.