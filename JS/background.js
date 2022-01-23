const image = ["space1.jpg","space2.jpg","space4.jpg","space5.jpg"]

const choseImage = image[Math.floor(Math.random()*image.length)]


const img = document.createElement("img")

document.body.append(img)
img.src= `img/${choseImage}`