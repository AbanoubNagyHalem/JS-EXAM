async function dataa() {
  await fetch(
    "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44&fbclid=IwAR3EHgtjuvople9sHYhDr-Pv9e21K2Qk0iYFyyJITWdWk_1LS6sj5b-WG-o"
  )
    .then((response) => response.json())
    .then((data) => {
      var box = ``;
      for (var i = 0; i < data.results.length; i++) {
        console.log(data.results[i]);
        box += `
            <div class="col-md-4 col-sm-6">
                  <div class="post">
                    <img src="${
                      "https://image.tmdb.org/t/p/w500" +
                      data.results[i].poster_path
                    }" alt="" class="image" />
                    <div class="overlay">
                      <div class="text">
                      <h2> ${data.results[i].title || data.results[i].name}</h2>
                      <p class="lead">${data.results[i].overview}</p>
                      
                      <p class="lead">${data.results[i].vote_average}</p>
                      <p class="lead">${
                        data.results[i].release_date ||
                        data.results[i].first_air_date
                      }</p>
                      
                      </div>
                    </div>
                  </div>
                </div>
            `;
      }
      document.getElementById("posting").innerHTML = box;
    });
}
dataa();

$(document).ready(function () {
  $(".bar").click(function () {
    $(".left-bar").toggle();
    $(".full-nav").css({ left: 200 });
    $(".bar").css("display", "none");
    $(".close").css("display", "block");
  });
});

$(document).ready(function () {
  $(".close").click(function () {
    $(".left-bar").toggle();
    $(".full-nav").css({ left: 0 });
    $(".bar").css("display", "block");
    $(".close").css("display", "none");
  });
});
