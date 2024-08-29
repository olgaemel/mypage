const nav = document.querySelector('.nav')
const pic = document.querySelector('.pic')
window.addEventListener('scroll', fixNav)

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 100) {
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

window.addEventListener('scroll', () => {
  pic.classList.add('active')
})

// pic.addEventListener('click', () => {
//   pic.classList.add('active')
// })

// function fixPic() {
//     if (window.scrollY > nav.offsetHeight + 100) {
//       nav.classList.add('active')
//     } else {
//       nav.classList.remove('active')
//     }
//   }
