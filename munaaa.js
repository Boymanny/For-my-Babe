// Function to show the questions after clicking "Continue"
function showQuestions() {
    // Hide the initial heartfelt message and the continue button
    document.querySelector('.heartfelt-message').style.display = 'none';
    document.querySelector('.continue-button-container').style.display = 'none';

    // Show the question container
    document.getElementById('questionContainer').style.display = 'block';

    // Show the first question
    document.getElementById('question1').style.display = 'block';
}

// Function to show the next question based on the user's answer
function nextQuestion(answer, questionNumber) {
    const currentQuestion = document.getElementById(`question${questionNumber}`);
    const nextQuestion = document.getElementById(`question${questionNumber + 1}`);
    
    // Hide the current question
    currentQuestion.style.display = 'none';
    
    // If it's the last question, show the final message based on the answer
    if (questionNumber === 2) {
        const finalMessage = document.getElementById('finalMessage');
        const responseMessage = document.getElementById('responseMessage');
        
        finalMessage.style.display = 'block';
        
        if (answer === 'yes') {
            responseMessage.innerHTML = "Yay! I'm so happy! You're the best!";
        } else {
            responseMessage.innerHTML = "Oh no! But we can still be friends, right?";
        }
    } else {
        // Show the next question
        nextQuestion.style.display = 'block';
    }
}

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    // We wait until the page is fully loaded before doing anything
});
