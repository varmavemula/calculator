    function print(value) {
        const displayDiv = document.getElementById('display');
        displayDiv.innerText += value;
    }

    //write a function that will clear the single digit from the display when "X" is clicked
    function deleteChar() {
        const displayDiv = document.getElementById('display');
        displayDiv.innerText = displayDiv.innerText.slice(0, -1);
    }

    //write a function that will clear the entire display when "C" is clicked
    function deleteAll() {
        const displayDiv = document.getElementById('display');
        displayDiv.innerText = '';
    }

    //write a function that will evaluate the expression when "=" is clicked
    function calculateValue() {
        const displayDiv = document.getElementById('display');
        displayDiv.innerText = eval(displayDiv.innerText);
        console.log(eval(displayDiv.innerText));
        console.log(displayDiv.innerText);
    }