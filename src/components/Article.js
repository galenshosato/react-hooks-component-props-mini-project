import React from "react";

function Article({
    title,
    date = 'January 1, 1970',
    preview,
    minutes,
}) {
    let minutesEmojis = ''
    if(minutes < 30) {
        let roundedMins = Math.ceil(minutes / 5)
        minutesEmojis = '☕️'.repeat(roundedMins)
    } else {
        let roundedMins = Math.ceil(minutes / 10)
        minutesEmojis = '🍱'.repeat(roundedMins)
    }


    return(
        <article>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{minutesEmojis}{minutes} minutes</p>
        </article>

    )
}

export default Article