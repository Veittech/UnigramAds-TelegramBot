function getStartMessage(userName) 
{
    return `Good day, ${userName} 😎\n\nHere you can test the <b>Unigram Ads library</b>, `+
        `which allows you to <b>show native ads</b> through one of several available ad networks, inside web applications made on Unity!`;
}

module.exports =
{
    getStartMessage,
}