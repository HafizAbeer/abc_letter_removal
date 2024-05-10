const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "w", "x", "y", "z"]

function inputValue() {
    return document.getElementById("inputText").value
}

function checkAlphabet() {
    document.getElementById("output").innerHTML = ""
    let alpha = inputValue()

    if (alphabets.includes(alpha)) {
        let removeAlphabet = alphabets.indexOf(alpha)

        alphabets.splice(removeAlphabet, 1)
        console.log(alphabets)
    }
    else {
        alert("Aplhabet does not exists")
    }
    toShowOutput()
}

function toShowOutput() {
    // document.getElementById("output").innerHTML = alphabets
    for (let i = 0; i < alphabets.length; i++) {
        document.getElementById("output").innerHTML += i + 1 + ")" + "&nbsp;" + alphabets[i] + "<br />"
    }
}



