// Starts the quiz by hiding the intro screen and showing question1
function startQuiz() {
  document.getElementById("intro").style.display = "none";
  document.getElementById("question1").style.display = "inline-block";
}

/**
 * hides the element of given id
 * 
 * @author Neil Bizzell
 * @param {string} id the name of the element to be hidden
 */
 function hideElement(id) {
  document.getElementById(id).style.display = "none";
}

/**
 * shows the element of given id
 * 
 * @author Neil Bizzell
 * @param {string} id the id of the element to be shown
 */
function showElement(id){
  document.getElementById(id).style.display = "block";
}

/**
 * hides current question and moves to next question 
 *  
 * @author Neil Bizzell
 * @param {number} question the number of the current question 
 */

function nextQuestion(questionNo){
  questionId = "question" + questionNo
  hideElement(questionId)
  questionNo ++
  nextId =  "question" + questionNo
  showElement(nextId)
}

/**
 * hides question 5 shows results
 */
  function results() {
    
  calculateResults()
  document.getElementById("question5").style.display = "none";
  document.getElementById("results").style.display = "inline-block";
}
  
/**
 * calculates and displays the results
 */
 function calculateResults() {
  const radios1 = document.querySelectorAll('input[name="quest1"]');
  let q1Value;
  for (const rb of radios1) {
      if (rb.checked) {
          q1Value = rb.value;
          break;
      } else {
        q1Value = 0;
      }
  }
  
  const radios2 = document.querySelectorAll('input[name="quest2"]');
  let q2Value;
  for (const rb of radios2) {
      if (rb.checked) {
          q2Value = rb.value;
          break;
      } else {
        q2Value = 0;
      }
  }
  const radios3 = document.querySelectorAll('input[name="quest3"]');
  let q3Value;
  for (const rb of radios3) {
      if (rb.checked) {
          q3Value = rb.value;
          break;
      } else {
        q3Value = 0;
      }
  }
  
  const radios4 = document.querySelectorAll('input[name="quest4"]');
  let q4Value;
  for (const rb of radios4) {
      if (rb.checked) {
          q4Value = rb.value;
          break;
      } else {
        q4Value = 0;
      }
  }
  
  const radios5 = document.querySelectorAll('input[name="quest5"]');
  let q5Value;
  for (const rb of radios5) {
      if (rb.checked) {
          q5Value = rb.value;
          break;
      } else {
        q5Value = 0;
      }
  }
  

  let total = Number(q1Value) + Number(q2Value) + Number(q3Value) + Number(q4Value) + Number(q5Value);
  console.log("Total is " + total);
  if (total > 13) {
    msg = "You are SUPER HEALTHY keep up the good work!!!";
  } else if (total >= 8) {
    msg = "You have a reasonably healthy lifestyle, but there's room for improvement";
  } else {
    msg = "You need to have a word with yourself!!";
  }

  document.getElementById("result").innerHTML = msg

}