const setAreaToResultField = (areaNameId,area) => {
    const ol = document.getElementById('ordered-lists');
    const areaN = document.getElementById(areaNameId);
    const areaName = areaN.innerText;
    if(area !== undefined){
    ol.innerHTML += `<li class="list-decimal my-2 list-inside">${areaName}<span id="area-field"> ${area} </span>cm<sup>2</sup>
    <span><button class="py-1 px-2 bg-blue-1000 rounded-md">convert
            m<sup>2</sup></button></span></li>`;
    }
}

const getAreaFromInput = (side1Id,side2Id,hasFraction,isEllipse) => {
    const side1 = document.getElementById(side1Id);
    const side2 = document.getElementById(side2Id);
    const side1String = side1.value;
    const side2String = side2.value;
  
    side1.value ='';
    side2.value ='';

    const sideNo1 = parseFloat(side1String);
    const sideNo2 = parseFloat(side2String);
    let area;
    if((sideNo1 > 0 && sideNo2 > 0) && (typeof sideNo1 === 'number' && typeof sideNo2 === 'number')){
        if(hasFraction){

            area = 0.5 * sideNo1 * sideNo2;
            const areaFinal = parseFloat(area.toFixed(2));
            return areaFinal;
        }
        else if(isEllipse){
            area = 3.1416 * sideNo1 * sideNo2;
            const areaFinal = parseFloat(area.toFixed(2));
            return areaFinal;
        }
        else{
            area = sideNo1 * sideNo2;
            const areaFinal = parseFloat(area.toFixed(2));
            return areaFinal;
        }    
    }else{
        alert('Invalid input');
    }
}
const toggleInput = (elementId) => {
    const inputContainer = document.getElementById(elementId);
    inputContainer.classList.toggle('hidden');
}

const getAreaFromElement = (side1Id,side2Id,hasFraction,isEllipse) => {
    const side1 = document.getElementById(side1Id);
    const side2 = document.getElementById(side2Id);
    const side1String = side1.innerText;
    const side2String = side2.innerText;

    const sideNo1 = parseFloat(side1String);
    const sideNo2 = parseFloat(side2String);
    let area;

    if(hasFraction){
        area = 0.5 * sideNo1 * sideNo2;
        const areaFinal = parseFloat(area.toFixed(2));
        return areaFinal;
    }
    else if(isEllipse){
        area = 3.1416 * sideNo1 * sideNo2;
        const areaFinal = parseFloat(area.toFixed(2));
        return areaFinal;
    }
    else{
        area = sideNo1 * sideNo2;
        const areaFinal = parseFloat(area.toFixed(2));
        return areaFinal;
    } 
}

//number generating
const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum);
  };
//color generating
const getRandomColor = () => {
    const h = getRandomNumber(360);
    const s = getRandomNumber(100);
    const l = getRandomNumber(100);
    return `hsl(${h}deg, ${s}%, ${l}%)`;
  };
const setColor = (elementId) => {
    const elementBg = document.getElementById(elementId);
    const randomColor = getRandomColor();
    elementBg.style.background = randomColor;
    const textColor = getRandomColor();
    elementBg.style.color = textColor;
}
const removeColor = (elementId) => {
    const elementBg = document.getElementById(elementId);
    elementBg.style.background = '#ffffff';
    elementBg.style.color = '#000000';
}
