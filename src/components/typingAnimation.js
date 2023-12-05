const text = [
    "wow typing ....",
    "hello there!!",
    "hi",
    "words",
    "mmm"
];

const typingSpeed = 50; // Adjust the typing speed (milliseconds per character)
const pauseDuration = 2000; // Adjust the pause duration between animations (milliseconds)
const prefix = "| "; // Use a . as the prefix
const prefixColor = "#5077e0"; // Set the color for the prefix
const textColor = "#3c3b3f"; // Set the color for the remaining text

function startTypingAnimation() {
    const typingText = document.querySelector(".typing-text");
    let textIndex = 0;
    let charIndex = 0;

    function type() {
        const currentText = text[textIndex];
        if (charIndex <= currentText.length) {
            // Separate prefix and text with spans and apply different colors
            typingText.innerHTML = `<span style="color: ${prefixColor}">${prefix}</span>` +
                `<span style="color: ${textColor}">${currentText.substring(0, charIndex)}</span>`;
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(() => {
                // Start the deletion animation after the pause
                deleteText();
            }, pauseDuration);
        }
    }

    function deleteText() {
        if (charIndex > 0) {
            // Separate prefix and text with spans and apply different colors
            typingText.innerHTML = `<span style="color: ${prefixColor}">${prefix}</span>` +
                `<span style="color: ${textColor}">${text[textIndex].substring(0, charIndex - 1)}</span>`;
            charIndex--;
            setTimeout(deleteText, typingSpeed);
        } else {
            // Move to the next string after the deletion animation
            textIndex = (textIndex + 1) % text.length;
            setTimeout(() => {
                // Start typing the next string after another pause
                charIndex = 0;
                type();
            }, pauseDuration);
        }
    }

    // Start the initial typing animation
    type();
}

export default startTypingAnimation;