let data = JSON.parse(localStorage.getItem("commits")) || {
  "2026-04-18": 30, // 30 minutes
  "2026-04-19": 60, //60 mintues
  "2026-04-20": 10 // 10 minutes
}

const container = document.getElementById('heatmap')

for (let i = 0; i < 365; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    
    const date = getDateFromIndex(i)
    const minutes = data[date] || 0

    square.style.backgroundColor = getColor(minutes)

    container.appendChild(square)
}

function getColor(minutes){
    if (minutes === 0) return "#eaf4fb"
    if (minutes < 30) return "#b3d9f0"
    if (minutes < 60) return "#5aafd4"
    if (minutes < 120) return "#1a7aab"
    return "#0d3f57"
}

function getDateFromIndex(i) {
    const today = new Date()
    const pastDate = new Date()
    pastDate.setDate(today.getDate() - (365 - i))
    return pastDate.toISOString().split("T")[0]
}

function addCommit(minutes) {
    const today = new Date().toISOString().split("T")[0]

    data[today] = (data[today] || 0) + minutes

    localStorage.setItem("commits", JSON.stringify(data))
}