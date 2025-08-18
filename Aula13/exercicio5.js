// 5. Object inside object
// Make an object 'movie' with 'title' and 'director'.
// Inside it, add 'review' with 'rating' and 'comment'.
// Print the rating and comment.

movie = {
    Title: "Mean Girls",
    Director: "Mark Waters",
    review : {Rating: "5", Comment: "Good"}};
console.log(`Rating: ${movie.review.Rating} Comment: ${movie.review.Comment}`);