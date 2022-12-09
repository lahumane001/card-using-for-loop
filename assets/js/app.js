var cl = console.log;

var imagesArray = [
    "https://source.unsplash.com/random/?nature",
    "https://source.unsplash.com/random/?city",
    "https://source.unsplash.com/random/?people",
    "https://source.unsplash.com/random/?fashion&beauty",
    "https://source.unsplash.com/random/?food&drink",
    "https://source.unsplash.com/random/?athletics",
    "https://source.unsplash.com/random/?science",
    "https://source.unsplash.com/random/?robot",
    "https://source.unsplash.com/random/?javascript",
    "https://source.unsplash.com/random/?html",
    "https://source.unsplash.com/random/?angular",
    "https://source.unsplash.com/random/?cricket",
]

var imgContainer = document.getElementById("imgContainer");
var result = '';
for (var i = 0; i < imagesArray.length; i++) {
    cl(imagesArray[i]);
    result += `
    <div class="col-4 mb-4">
      <div class="card myThumbnail">
         <div class="card-body">
             <img src="${imagesArray[i]}" alt="">
         </div>
      </div>
    </div>
    
    `
}

imgContainer.innerHTML = result;