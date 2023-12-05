import { useState } from "react";

function Rating(){

	const [selectedEmoji, setSelectedEmoji] = useState('');
	const [feedbackText, setFeedbackText] = useState('');
	const [showFeedbackForm, setShowFeedbackForm] = useState(false);

  // Challenge 2: Handle emoji button click
  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setShowFeedbackForm(true);
  };

  // Challenge 3: Handle submit button click
  const handleSubmit = () => {
    console.log(`Selected Emoji: ${selectedEmoji}`);
    console.log(`Feedback Text: ${feedbackText}`);
  };

  return (
    <div>
      
      <div id="feedback">
      
			{showFeedbackForm ? (
			<>
				<textarea id="textarea-css"
				placeholder="Enter your feedback..."
				value={feedbackText}
				onChange={(e) => setFeedbackText(e.target.value)}
				/><br />
				<button id="submit" onClick={handleSubmit}>
				Submit
				</button>
			</>
			) : (
			<div id="buttonDesign">
				<button onClick={() => handleEmojiClick('😍')}>😍</button>
				<button onClick={() => handleEmojiClick('😀')}>😀</button>
				<button onClick={() => handleEmojiClick('🙁')}>🙁</button>
				<button onClick={() => handleEmojiClick('😭')}>😭</button>
			</div>
			)}
      </div>
    </div>
  );

}
export default Rating;