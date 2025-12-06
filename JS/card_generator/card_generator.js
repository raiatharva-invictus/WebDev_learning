let card_no = 1;

function createCard(title, channel, views, old_months, duration, thumbnail){
    // logic for views
    if(views >= 1000 && views < 1000000){
        views = `${parseFloat(views/1000).toFixed(1)}K views`
        
    }else if (views >= 1000000 && views < 1000000000){
        views = `${parseFloat((views/1000000).toFixed(1))}M views`
    }else{
        views = `${views} views`
    }
    let card = document.createElement("div")
    card.className = `card${card_no}`
    card.style.color = "white"
    card.style.backgroundColor = "rgba(97, 11, 11, 0.664)"

    let image = document.createElement("div")  
    image.className = "image" 
    image.style.position = "relative"
    let img = document.createElement("img")
    img.src = thumbnail
    img.style.margin = "5px"
    img.style.borderRadius = "7px"
    img.style.float = "left"
    let div_duration = document.createElement("div")
    div_duration.style.backgroundColor = "rgba(0, 0, 0, 0.7)"
    div_duration.style.position = "absolute"
    div_duration.style.top = "78px"
    div_duration.style.left = "136px"
    div_duration.style.borderRadius = "4px"
    div_duration.style.fontSize = "11px"
    div_duration.style.padding = "0px 2px"
    div_duration.innerHTML = `${duration}`
    
    let div_title = document.createElement("div")
    div_title.className = "title"
    div_title.innerHTML = title
    div_title.style.margin = "5px 3px 10px 181px"
    
    let div_info = document.createElement("div")
    div_info.className = "info"
    div_info.style.margin = "5px 3px 1px 181px"
    div_info.style.fontSize = "11px"
    
    let span_channel = document.createElement("span")
    span_channel.className = "channel"
    span_channel.innerHTML = `${channel} &bull; `
    
    let span_views = document.createElement("span")
    span_views.className = "views"
    span_views.innerHTML = `${views} &bull; `
    
    let span_old_months = document.createElement("span")
    span_old_months.className = "old_months"
    span_old_months.innerHTML = old_months
    
    
    div_info.append(span_channel, span_views, span_old_months)
    image.append(img, div_duration)
    card.append(image, div_title, div_info)
    document.querySelector(".container").append(card)
    
    card_no++
}


createCard("Intro to web dev vid 1", "atharvaverse", 342834299, "2 months ago", "31:26", "./thumbnails/image.png");
createCard("Intro to web dev vid 2", "atharvaverse", 9098290, "2 years ago","15:18", "./thumbnails/image.png")
createCard("Intro to web dev vid 3", "atharvaverse", 909, "2 days ago","10:10", "./thumbnails/image.png")
createCard("Intro to web dev vid 4", "atharvaverse", 32, "1 days ago", "20:19" ,"./thumbnails/image.png")

