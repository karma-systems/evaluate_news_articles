import urlChecker from "./checkURL";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let inputUrl = document.getElementById('article-url').value

    if (urlChecker(inputUrl)) {

        postData('http://localhost:8081/results', { url: inputUrl })

            .then(function (res) {
                document.getElementById("text").innerHTML = `Text: ${res.text}`;
                document.getElementById("score_tag").innerHTML = `Score Tag: ${res.score_tag}`;
                document.getElementById("agreement").innerHTML = `Agreement: ${res.agreement}`;
                document.getElementById("subjectivity").innerHTML = `Subjectivity: ${res.subjectivity}`;
                document.getElementById("confidence").innerHTML = `Confidence: ${res.confidence}`;
                document.getElementById("irony").innerHTML = `Irony: ${res.irony}`;
            })
    } else {
        alert('Please try a valid URL.');
    }
}

const postData = async (url = "", data = {}) => {
    console.log('Analyzing:', data);
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    });
    try {
        const newData = await response.json();
        console.log('Data received:', newData)
        return newData;
    } catch (error) {
        console.log('error', error);
    }
};



export { handleSubmit }
