function parseHTML(url, scrapperKey) {
    console.log("loading BeginWorld Images..");

    var imgsArray = [];
    var dom = getSourceAsDOM(url, scrapperKey);
    var images = dom.querySelectorAll("img[alt]");

    for (var i = 0; i < images.length; i++) {
        var image = images[i];

        imgUrl = image.attributes.src.value;
        imgName = image.attributes.alt.value;

        //create object
        var imgsObj = {
            name: imgName,
            url: imgUrl
        };

        //add to array
        imgsArray.push(imgsObj);
    }

    //add images to dom
    placeImages(imgsArray, scrapperKey);
}


function getSourceAsDOM(url, scrapperKey) {

    url = "https://api.scraperapi.com?api_key=" + scrapperKey + "&url=" + url;
    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", url, false);
    xmlhttp.send();
    parser = new DOMParser();

    return parser.parseFromString(xmlhttp.responseText, "text/html");
}

function placeImages(images, scrapperKey) {

    for (var i = 0; i < images.length; i++) {
        var url = images[i].url;
        var name = images[i].name;

        var img = document.createElement('img');
        img.src = url;
        img.alt = name;
        img.width = 280;
        img.height = 280;
        img.id = "beginWorldImage";

        document.getElementById('ImgSelector').appendChild(img);

        img.addEventListener('click', function() {
            console.log("beginWorldImage clicked");

            //show load wheel
            document.getElementById("loadOverlay").style.display = "block";

            closeNav();

            LoadImage("https://api.scraperapi.com?api_key=" + scrapperKey + "&url=" + this.src, null, this.alt);
        });

    }

    document.getElementById("imgSelectorLoadOverlay").style.display = "none";
}