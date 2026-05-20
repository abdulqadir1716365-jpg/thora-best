function getRecipes() {

  let query = document.getElementById("search").value;
  let result = document.getElementById("result");

  result.innerHTML = "Loading... ";

  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)

    .then(res => res.json())

    .then(data => {

      result.innerHTML = "";

      if (!data.meals) {
        result.innerHTML = "<h2>No Recipe Found </h2>";
        return;
      }

      data.meals.forEach(item => {

        result.innerHTML += `

        <div 
          onclick="openModal('${item.strMealThumb}','${item.strMeal}','${item.strCategory}')"
          style="
            background:blue;
            margin:30px;
            padding:10px;
            border-radius:10px;
            cursor:pointer;
          "
        >
 
          <img 
            src="${item.strMealThumb}" 
            width="350"
            style="border-radius:10px;"
          >

          <h3>${item.strMeal}</h3>

          <p>${item.strCategory}</p>
 <button style="background:red;color:white;padding:5px;border:none;border-radius:5px;">
        View Details
      </button>
        </div>

        `;
      });

    })

    .catch(err => {
      console.log(err);
      result.innerHTML = "<h2>API Error </h2>";
    });
}


// open model
function openModal(img, title, category) {

  document.getElementById("modal").style.display = "flex";

  document.getElementById("modalImg").src = img;

  document.getElementById("modalTitle").innerText = title;

  document.getElementById("modalPublisher").innerText = category;
}


//  MODAL CLOSE
function closeModal() {
  document.getElementById("modal").style.display = "none";
}