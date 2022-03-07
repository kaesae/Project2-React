## Project Schedule

|  Day | Deliverable | Status |
|---|---|---|
|Day 1| Wireframes / Project Description                | Complete |
|Day 2| useStates                                       | Complete |
|Day 3| Core Application Structure (HTML, CSS, etc.)    | Complete |
|Day 4| MVP & Bug Fixes                                 | Complete |
|Day 5| Final Touches                                   | Complete |
|Day 6| Present                                         | Complete |


## Project Description

The purpose of this project is to showcase my knowledge of requesting data from an API, React, React-DOM, useState, Route, Link, Links, and Component usage and management. This project display Covid cases, vaccinations, and deaths in different countries around the world. As of today, 2/14/22, the covid pandemic is nearing it's 2-year anniversary, so this project is very relevant to today. 

## Wireframes
- Mobile: https://ibb.co/HFDHv7W
- Tablet: https://ibb.co/QCx9pgv
- Desktop: https://ibb.co/1dYKjd9

## React Architecture
- Architecture: https://ibb.co/s5N3svK

## Time/Priority Matrix 
 - Total Time: 60 hrs

### MVP/PostMVP - 5min
#### MVP

- Requesting API
- 5 Components
    - Main
    - Footer
    - Header
    - API Page
    - Bio Page
- Form

#### PostMVP 
- Image API for country
- Change CSS to add image

#### MVP

| Component | Priority | Estimated Time | Actual Time |

| Setting useStates   | H | 10hr  | 10 hr |
| Components          | H | 20hr  | 4 hr  |
| Input Form          | M | 2hr   | 5 hr  |  
| Button              | H | 2hr   | .5 hr | 
| Debugging           | M | 15hr  | 20 hr |
| CSS                 | M | 3hr   | 3 hr |
| Gridding            | M | 1hr   | 1 hr |
| Interactive Nav Bar | M | 2hr   | 1 hr |
| Responsive Tablet   | L | 3hr   |  |
| Responsive PC       | L | 3hr   |  |

| Total | H | 57hrs| hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Images API                | L | 3hr | hr |
| Total |  | 3 hrs| hrs |



### Code Snippet
 - I'm very proud of this part of the code, since it's the main API functionality that allows for a user to pass a value using a form into the API URL, runs the handleSubmit function and fetches the data with the new API URL, and sets the the useState.


```html
                 <form onSubmit={handleSubmit}>
                    <input type="text" value={value} placeholder="Search by country" onChange={handleChange} />
                    <input type="submit" value="Submit" />
                </form>

```
```js
  const handleChange = (event) => {
    setValue(event.target.value);
    };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCasesUrl = `https://covid-api.mmediagroup.fr/v1/cases?country=${value}`
    const newVaccinatedUrl = `https://covid-api.mmediagroup.fr/v1/vaccines?country=${value}`
  
    fetch(newCasesUrl)
        .then((response) => response.json())
        .then((data) => setDisplayCases(data))

    fetch(newVaccinatedUrl)
        .then((response) => response.json())
        .then((data) => setDisplayVaccinated(data))
  };
  ```

