var liData = "";


    for(var i=0; i < json.length; i++){
        liData = liData + `<li>
                <div class="list">
                <a href="./images/${json[i].img}" data-lightbox="images" data-title="${json[i].name}"><img src="./images/${json[i].img}"></a>
                <div class="list-description">
                <h2>${json[i].name}</h2>
                <p>${json[i].description}</p>
                </div>
                </div>
                </li>`
    }
    document.querySelector(".scroll").innerHTML=liData;
   









    
