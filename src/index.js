console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", function() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const imageContainer = document.getElementById("dog-image-container");
  
    
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.alt = "Random Dog Image";
          img.style.width = "200px"; 
          img.style.margin = "10px"; 
          imageContainer.appendChild(img); 
        });
      })
      .catch(error => {
        console.error("Error fetching dog images:", error);
      });
  });
  document.addEventListener('DOMContentLoaded', () => {
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const breedList = document.getElementById('dog-breeds');
    const breedFilter = document.getElementById('breed-dropdown');
    let allBreeds = {}; 

    
    fetch(breedUrl)
        .then(response => response.json()) 
        .then(data => {
            allBreeds = data.message; 
            displayBreeds(allBreeds); 
        })
        .catch(error => console.error('Error fetching breeds:', error));

    function displayBreeds(breeds) {
        breedList.innerHTML = ''; 
        for (let breed in breeds) {
            const li = document.createElement('li');
            li.textContent = breed; 
            breedList.appendChild(li); 

            
            li.addEventListener('click', () => {
                li.style.color = 'blue'; 
            });
        }
    }

    
    breedFilter.addEventListener('change', (event) => {
        const selectedLetter = event.target.value;
        if (selectedLetter === 'all') {
            displayBreeds(allBreeds); 
        } else {
            const filteredBreeds = {};
            
            for (let breed in allBreeds) {
                if (breed.startsWith(selectedLetter)) {
                    filteredBreeds[breed] = allBreeds[breed];
                }
            }
            displayBreeds(filteredBreeds); 
        }
    });
});
