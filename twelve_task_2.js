function greetUser(username) {
    const time = new Date();
    const hour = time.getHours();

    let greeting = '';

    if (hour >= 6 && hour < 12) {
        greeting = 'Good morning';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Good afternoon';
    } else {
        greeting = 'Good evening';
    }

    return `${greeting}, ${username}!`;
}

module.exports = { greetUser };


