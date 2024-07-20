document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');

            // Hide all content
            contents.forEach(content => content.classList.remove('active'));

            // Show the selected content
            document.getElementById(targetId).classList.add('active');

            // Update button styles
            buttons.forEach(btn => btn.classList.remove('button-active'));
            button.classList.add('button-active');
        });
    });

    // Show the first tab by default
    if (buttons.length > 0) {
        buttons[0].click();
    }
});