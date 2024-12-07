const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profileImg = document.getElementById("profile_img");
const nameP = document.getElementById("name");
const date = document.getElementById("date");

const animatedBgs = document.querySelectorAll(".animated-bg");
const animatedBgTexts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500)

function getData() {
    header.innerHTML = `<img
            src="https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="cover-img"
            />`;
    title.innerHTML = `Lorem ipsum dolor sit amet.`;
    excerpt.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, sapiente.`;
    profileImg.innerHTML = `<img src="https://randomuser.me/api/portraits/men/43.jpg" alt="">`
    nameP.innerHTML = `John Doe`
    date.innerHTML = `Dec 07, 2024`

    
    animatedBgs.forEach(bg => bg.classList.remove("animated-bg"))
    animatedBgTexts.forEach(bg => bg.classList.remove("animated-bg-text"))
}