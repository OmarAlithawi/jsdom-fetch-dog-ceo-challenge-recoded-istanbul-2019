document.addEventListener("DOMContentLoaded", function(){
    const dogsImg = fetch("https://dog.ceo/api/breeds/image/random/4")
    .then(response => response.json())
    .then(json => img(json.message))

    const dogsBreed = fetch("https://dog.ceo/api/breeds/list/all")
    .then(response => response.json())
    .then(json => breed(json.message))
});

function img(json){
    const imgBlock = document.getElementById('dog-image-container');
    let i = 0;
    for(let j = 0;j< json.length ; j++){
        const imgs = document.createElement('IMG');
        console.log(imgs);
        imgs.setAttribute('src' , json[i]);
        imgs.style.width = '200px';
        imgs.style.height = '200px';
        imgBlock.append(imgs) ;
        i++;
    }
    
}

function breed(json){
    console.log(json);
    let allDogs = document.querySelector('ul');
    const keys = Object.keys(json)
    let breedsss;
    let sortRes = [];
    for (let i = 0; i < keys.length; i++){
        const breedCategory = keys[i];
        
        const dogBreeds = json[breedCategory];
        if( dogBreeds.length != 0){
            for(let k =0; k < dogBreeds.length ; k++ ){
                breedsss = dogBreeds[k];
                const list = document.createElement('li');
                list.setAttribute('class' , 'list');
                sortRes.push(breedsss);
                list.innerText = breedsss;
                allDogs.append(list) ;
            } 
           
        }
        
    }  
    
    sortBreeds(allDogs);
    changeColor(allDogs);
}

let changeColor = allDogs =>{
    allDogs.addEventListener('click' , (e) =>{
        let targeted = e.target;
        targeted.style.color = 'red'
    })
}

let sortBreeds = (allDogs) =>{
    let dropDown = document.querySelector('#breed-dropdown');
    let list = document.querySelectorAll('.list');
    let newList = Array.from(list);
    console.log(newList);
    dropDown.addEventListener('change' , e =>{
        let options = e.target.value;
        newList.forEach(element => {
            let checkIfMatch = element.textContent.charAt(0) === options;
            if(checkIfMatch){
             element.style.display = 'list-item'
            }else{
                element.style.display = 'none'
            }
        
         })
    })
}

// if the option value is a show the li with text that char(0) =a




console.log('%c HI', 'color: firebrick');

/*
 * let dropDown = document.querySelector('#breed-dropdown');
                let newList = document.querySelector('.list');
                dropDown.addEventListener('change' , e =>{
                    let options = e.target.value;
                    sortRes.forEach(element => {
                       let checkIfMatch =element.charAt(0) === options;
                       if(checkIfMatch){
                        console.log(element)
                        newList = document.createTextNode(element);
                        allDogs.append(newList) ;
                       }
                   
                    })
                
                })
 */