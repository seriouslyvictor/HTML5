const links = document.querySelectorAll("a[data-toLoad]");
const pageArea = document.querySelector(".page");



console.log(links)



for (const link of links) {
    link.addEventListener("click", carregarCorpo)
    
}

function carregarCorpo(e) {
    e.preventDefault();
    console.log(e)
    let pageToLoad = e.target.getAttribute("data-toLoad");
    console.log(pageToLoad)
    fetch(pageToLoad).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
    }).then(html => {
        pageArea.innerHTML = html;
    }).catch(error => {
        console.error('Error loading the content:', error);
    });
}

