document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('actionButton');
    const statusText = document.getElementById('status');

    if (button) {
        button.addEventListener('click', () => {
            console.log("Command Executed!");
            statusText.innerText = "Command Sent Successfully";
            statusText.style.color = "#4CAF50";
        });
    }
});
