# Sticky Popcorn

<img src="https://res.cloudinary.com/ddwlpgsjq/image/upload/v1742056601/Screenshot_2025-03-15_at_16.35.42_dnmwif.png" width="500" alt="image of Sticky Popcorn logo"> 


### [Sticky Popcorn](https://stickypopcorn-moviereviews.netlify.app/)

## Description

Sticky Popcorn is a full-stack web application that's been built around a movies database and their reviews. The users are able to view the information of the movies, including the reviews, and requires them to log into their account (or create one, if they don't already have one) to add, update, or delete their review, as well as being able to add a movie to their Favourites, or Watchlist.

The app focuses on building a Node.js/Express/MongoDB with full CRUD functionality, using JWT token-based authentication, and React for the front-end.

## Time Frame

The project took one week from day of planning, and was a team-based project that consisted of:
- myself, 
- [Claire](https://github.com/Claire-bot87), 
- [Kamran](https://github.com/Kam-Gemini). 

We implemented the use of Trello, ERD(Entity Relationship Diagram), routing table, and Excalidraw for the wireframes to help us plan the project.

## Tech Stack

- Node.js
- Express.js
- React 
- MongoDB Compass
- Mongoose
- JavaScript
- CSS
- HTML
- Git
- GitHub
- Postman (for testing)
- Netlify (for hosting)

## Planning

During the planning stage, my team and I agreed on the subject of a movie database, and decided between us what we would like to include. We roughly sketched the layout of the website, and the purpose of the app on Excalidraw, during which we discussed user experiences and interfaces as we guided through the layout. 
Once we were all on board with the idea, each team member was allocated with a task to help complete the planning, which included the use of:
- [Trello (for the user stories)](https://trello.com/b/qLbGLI4H/sticky-popcorn-app),
- [ERD](https://dbdiagram.io/d/StickyPopcorn-67a5d3a3263d6cf9a05e3be6),
- [Excalidraw (for the wireframes)](https://res.cloudinary.com/ddwlpgsjq/image/upload/v1742056620/Untitled-2025-03-15-1623_oxkktw.png),
- [Spreadsheet (for the routing table)](https://docs.google.com/spreadsheets/d/1dBa-vcvxqSvyo68SDoe2hoy5MUcR_3tIvn12t-FFFl8/edit?gid=0#gid=0).


I was tasked with the wireframe, Kamran had the ERD, and Claire with the routing table. 
Throughout the stages of planning, we would get together for a stand-up to run through each of our process, and helped resolve any queries that arose.
To stay organised, Kamran created the Trello board where we collaborated on the user stories, and to help track our progress by adding and assigning tasks to the relevant person. 


## Build Process

The team and I agreed that I would be the one that creates the Git Repository, and grant both Kamran and Claire access for them to contribute.
We started screen-sharing to set up the initial project structure, and install the necessary dependencies for the back-end.
Our application consisted of three models, in which we divided up the responsibilities:

Claire: User model,
Kamran: Movies model,
Myself: Reviews model.

Each team member also created the corresponding controllers for their sections. 
We followed a branching strategy whereby each team member worked on their own separate branch. When a feature was ready, we created a pull-request to be reviewed, and a team member would approve the PR before merging it into the main branch.
After merging, everyone would pull the latest changes from the main branch, and stay up-to date and avoid any conflicts.

Kamran populated the movies collection data, and I added sample reviews and user profiles to support testing whilst waiting for the User controller to be completed.

Upon completing the back-end, we moved onto the front-end, continuing the same responsibilities of the divided tasks:
Claire: sign-in and register components, and styling,
Kamran: movie components,
Myself: review components, and styling.

Throughout the entire project, we had daily stand-ups in the morning and maintained regular communication to ensure everything had integrated smoothly.


## Challenges

#### Challenge #1

One of the technical challenges I faced was making sure that each review was correctly assigned to the specific movie, so when a user submitted a review, it would need to include the correct movieId so that the database could store and retrieve the review in relation to the movie. But the problem I initially encountered was that the reviews were being created, but they weren't being associated to the correct movie. This was due to the movieId not being consistently attached to the review request, so without this relationship, retrieving the reviews for the specific movie became difficult.

So to solve this, I ensured that the review submitted had a valid movieId, which meant changes were made to the back-end so that "movieId" existed in the reviews model, and the reviews were stored correctly with a reference to the associated movie:
``` JS
const reviewSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
    },
      
    movieId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie"
    }, 
    
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    }]
}
```


The route that shows the reviews are correctly linked to the movies:
```JS
router.get("/movies/:movieId/reviews", async (req, res, next) => {
    try {
        const { movieId } = req.params
        const movie = await Movie.findById(movieId)
        
        if(!movie) {
            return res.status(404).json ({ message: "Movie not found" })
        }
        const reviews = await Review.find({ movieId: movieId }).populate("author")
            return res.json(reviews)
    } catch (error) {
        next(error)
    }
})
```

#### Challenge #2

One of the challenges I felt working in a team project was the pressure of ensuring my code was correct before pushiong, whilst also trying to avoid any conflicts with my teammate's work. Initially, I was worried about creating a domino effect where one of my mistakes would break someone else's work, however, after a few pull requests and remembering to regularly pull from the main branch, I became more confident due to us working on separate components, which also meant that merge conflicts were kept to a minimum.

#### Challenge #3

Whilst working through the reviews model, I had to consider how it related to the user and movie models. To ensure smooth integration, I referenced back to the our ERD and routing table, which helped me in keeping my work aligned with my teammates' sections, and avoided unnecessary refactoring later on. 



## Wins

## Key Learnings

## Bugs

## Future Improvements

#### Asset Attributions


#### Tools