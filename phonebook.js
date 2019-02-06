function processData(input) {
    let data = input.split('\n');
    let n = data.shift();
    let phonebook = {}
    let search = data.splice(n)

    //creating photobook
    for (let i = 0; i < n; i++) {
        let person = data[i].split(" ")
        let name = person[0]
        let number = person[1]
        phonebook[name]=number
    }
    //queries
    let result = search.map((name) => {
        if (phonebook[name]) {
            console.log(`${name}=${phonebook[name]}`)
        } else {
            console.log("Not found")
        }
    })
}

processData(
3
sam 99912222
tom 11122222
harry 12299933
sam
edward
harry
)
