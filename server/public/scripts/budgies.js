const renderBirds = async () => {
    const response = await fetch('/budgies')
    const data = await response.json()


    const mainContent = document.getElementById('main-content')

    if (data) {

        data.map(bird => {
            const card = document.createElement('div')
            card.classList.add('card')

            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')

            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')

            topContainer.style.backgroundImage = `url(${bird.image})`

            const name = document.createElement('h3')
            name.textContent = bird.name
            bottomContainer.appendChild(name)

            const birthdayMonth = document.createElement('p')
            birthdayMonth.textContent = 'Birthday Month: ' + bird.birthdayMonth
            bottomContainer.appendChild(birthdayMonth)

            const age = document.createElement('p')
            age.textContent = 'Age: ' + bird.age
            bottomContainer.appendChild(age)

            const color = document.createElement('p')
            color.textContent = 'Color: ' + bird.color
            bottomContainer.appendChild(color)

            const gender = document.createElement('p')
            gender.textContent = 'Gender: ' + bird.gender
            bottomContainer.appendChild(gender)
            
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/budgies/${bird.id}`
            bottomContainer.appendChild(link)
        
            card.appendChild(topContainer)
            card.appendChild(bottomContainer)
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Birds Available 💔'
        mainContent.appendChild(message)
    }
}
const renderBird = async () => {
    const requestedID = Number(window.location.href.split('/').pop())
    const response = await fetch('/budgies')
    const data = await response.json()

    const aBirdContent = document.getElementById('gift-content')
    let bird
    bird = data.find(aBird => Number.isInteger(requestedID) && aBird.id === requestedID)

    if (bird) {
        document.getElementById('image').src = bird.image
        document.getElementById('name').textContent = bird.name
        document.getElementById('birthdayMonth').textContent = 'Birthday Month: ' + bird.birthdayMonth
        document.getElementById('age').textContent = 'Age: ' + bird.age
        document.getElementById('color').textContent = 'Color: ' + bird.color
        document.getElementById('gender').textContent = bird.gender
        document.title = `Cool Budgie Gallery- ${bird.name}`
    }
    else {
        window.location.href = '/404.html'
    }
}


const path = window.location.pathname
const isHomePage = path === '/' || path === '/index.html'

if (document.getElementById('main-content') && isHomePage) {
    renderBirds()
}
else if (document.getElementById('gift-content')) {
    renderBird()
}
else {
    window.location.href = '/404.html'
}
