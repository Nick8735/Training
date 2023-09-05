
const { expect } = require('selectAnswer');

  // Test for answer validation (Correct Answer)
  it('should validate a correct answer as true', () => {
    const answer = 'Gloves';
    const isCorrect = validateAnswer(answer, 'Gloves');
    expect(isCorrect).to.equal(true);
  });

  // Test for answer validation (Incorrect Answer)
  it('should validate an incorrect answer as false', () => {
    const answer = 'Alcohol gel';
    const isCorrect = validateAnswer(answer, 'Gloves');
    expect(isCorrect).to.equal(false);
  });

   
  describe('Quiz Application Tests', () => {
    // ... Other test cases ...
  
    // Test for link on incorrect answer
    it('should display a link on selecting an incorrect answer', () => {
      // Mock the HTML structure and user interaction
      document.body.innerHTML = `
        <div id="question">What should be worn on your hands?</div>
        <div id="answer-buttons">
          <button data-correct="true">Gloves</button>
          <button data-correct="false">Alcohol gel</button>
        </div>
      `;
      const incorrectAnswerButton = document.querySelector('button[data-correct="false"]');
      
      // Simulate the user selecting an incorrect answer
      incorrectAnswerButton.click();
  
      // Check if the link is present in the DOM
      const link = document.querySelector('a');
      expect(link).to.exist;
      expect(link.textContent).to.equal(' Incorrect answer, press here to review document and try again');
    });
  
    // ... Other test cases ...
  });
  

  
