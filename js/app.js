
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

const getAreaFromInput = (side1Id,side2Id,hasFraction) => {
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
            const areaS = area.toFixed(2);
            const areaFinal = parseFloat(areaS);
            return areaFinal;
        }
        else{
            area = sideNo1 * sideNo2;
            const areaS = area.toFixed(2);
            const areaFinal = parseFloat(areaS);
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

const getAreaFromElement = (side1Id,side2Id,hasFraction) => {
    const side1 = document.getElementById(side1Id);
    const side2 = document.getElementById(side2Id);
    const side1String = side1.innerText;
    const side2String = side2.innerText;

    const sideNo1 = parseFloat(side1String);
    const sideNo2 = parseFloat(side2String);
    let area;

    if(hasFraction){
        area = 0.5 * sideNo1 * sideNo2;
        const areaS = area.toFixed(2);
        const areaFinal = parseFloat(areaS);
        return areaFinal;
    }
    else{
        area = sideNo1 * sideNo2;
        const areaS = area.toFixed(2);
        const areaFinal = parseFloat(areaS);
        return areaFinal;
    } 
}


const cards = document.querySelectorAll('.cards');
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        const targetElement = event.target.classList;
        
        if(targetElement.contains('triangle-btn')){
            const area = getAreaFromInput('triangle-side1', 'triangle-side2', true);
            setAreaToResultField('triangle',area);

        }
        else if(targetElement.contains('rectangle-btn')){
            const area = getAreaFromInput('rectangle-side1', 'rectangle-side2', false);
            setAreaToResultField('rectangle',area);
        }
        else if(targetElement.contains('parallelogram-btn')){
            const checkField = document.getElementById('check-parallelogram');
            if(checkField.checked){
                const area = getAreaFromInput('parallelogram-side1', 'parallelogram-side2', false);
                setAreaToResultField('parallelogram',area);
            }else{
                const area = getAreaFromElement('parallelogram-side1-element', 'parallelogram-side2-element', false);
                setAreaToResultField('parallelogram',area);
            }
            
        }
        else if(targetElement.contains('rhombus-btn')){
            const area = getAreaFromInput('rhombus-side1', 'rhombus-side2', true);
            setAreaToResultField('rhombus',area);
        }
        else if(targetElement.contains('pentagon-btn')){
            const area = getAreaFromInput('pentagon-side1', 'pentagon-side2', true);
            setAreaToResultField('pentagon',area);
        }
        else if(targetElement.contains('ellipse-btn')){
            const area = getAreaFromInput('ellipse-side1', 'ellipse-side2', false);
            setAreaToResultField('ellipse',area);
        }

        //input enabling
        if(targetElement.contains('edit-parallelogram')){
            toggleInput('input-parallelogram');
        }
        else if(targetElement.contains('edit-rhombus')){
            toggleInput('input-rhombus');
        }
        else if(targetElement.contains('edit-pentagon')){
            toggleInput('input-pentagon');
        }
        else if(targetElement.contains('edit-ellipse')){
            toggleInput('input-ellipse');
        }
        

    })
    // card.addEventListener('toggle', (event) => {
    //     const targetElement = event.target.classList;
    //     if(targetElement.contains('edit-parallelogram')){
    //         toggleInput('input-parallelogram');
    //         console.log('edit clicked');


    //     }
    //     else if(targetElement.contains('edit-rhombus')){
    //         toggleInput('input-rhombus');
    //     }
    //     else if(targetElement.contains('edit-pentagon')){
    //         toggleInput('input-pentagon');
    //     }
    //     else if(targetElement.contains('edit-ellipse')){
    //         toggleInput('input-ellipse');
    //     }
    // })
})