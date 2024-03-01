import React, { useState } from 'react';

const ReviewsRatings = () => {
    // State variable for existing reviews
    const [reviews, setReviews] = useState([]);

    // State variables for new review submission
    const [newReview, setNewReview] = useState('');
    const [newRating, setNewRating] = useState(0);

    // Function to handle submission of new review
    const handleSubmitReview = () => {
        // Implement submission logic here (e.g., send new review to backend)
        console.log('Submitting review:', newReview, 'with rating:', newRating);
        // Clear input fields after submission
        setNewReview('');
        setNewRating(0);
    };

    return (
        <div>
            {/* Display Existing Reviews */}
            <h2>Reviews & Ratings</h2>
            <ul>
                {reviews.map((review, index) => (
                    <li key={index}>{review}</li>
                ))}
            </ul>

            {/* Allow Users to Submit New Reviews */}
            <h3>Submit a Review</h3>
            <textarea
                rows="4"
                placeholder="Write your review here"
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
            ></textarea>
            <input
                type="number"
                min="1"
                max="5"
                placeholder="Rating (1-5)"
                value={newRating}
                onChange={(e) => setNewRating(parseInt(e.target.value))}
            />
            <button onClick={handleSubmitReview}>Submit Review</button>
        </div>
    );
}

export default ReviewsRatings;
