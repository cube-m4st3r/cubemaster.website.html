window.addEventListener('scroll', function() {
    const heroHeight = document.querySelector('.hero').offsetHeight;
    const header = document.querySelector('header');
    if (window.scrollY > heroHeight) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

const typedText = "Welcome to My Developer Site"; // replace with your own text
var typedTextEl = document.getElementById("hero-title");
let i = 0;

setInterval(() => {
  if (i < typedText.length) {
    typedTextEl += typedText.charAt(i);
    i++;
  }
}, 100); // adjust the delay as needed

const repoList = document.getElementById('repo-list');

  fetch('https://api.github.com/users/cube-m4st3r/repos')
    .then(response => response.json())
    .then(data => {
      data.forEach(repo => {
        const repoLink = document.createElement('a');
        repoLink.classList.add('repo');
        repoLink.href = repo.html_url;
        repoLink.target = '_blank';
        repoLink.innerText = repo.name;
        repoList.appendChild(repoLink);
      });
    })
    .catch(error => console.error(error));

