// Write your code here!

const userInfo = {
    username: "Mercy",
    description: "Hi, welcome to my webpage! Just a new user of this website",
    theme: "red"
}
function displayUser(userInfo){
    const header = document.querySelector("#main")
    header.textContent = userInfo.username + "'s personal Webpage"
    header.className = userInfo.theme

    const description = document.createElement("p")
    const body = document.querySelector("body")

    //add details
    description.textContent = userInfo.description
    description.className = userInfo.theme

    body.append(description)
}
displayUser(userInfo)