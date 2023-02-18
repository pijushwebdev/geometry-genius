
//add click event to the button
const cards = document.querySelectorAll('.cards');
cards.forEach((card) => {
    card.addEventListener('click', (event) => {
        const targetElement = event.target.classList;
        
        if(targetElement.contains('triangle-btn')){
            const area = getAreaFromInput('triangle-side1', 'triangle-side2', true,false);
            setAreaToResultField('triangle',area);

        }
        else if(targetElement.contains('rectangle-btn')){
            const area = getAreaFromInput('rectangle-side1', 'rectangle-side2', false,false);
            setAreaToResultField('rectangle',area);
        }
        else if(targetElement.contains('parallelogram-btn')){
            const checkField = document.getElementById('check-parallelogram');
            if(checkField.checked){
                const area = getAreaFromInput('parallelogram-side1', 'parallelogram-side2', false,false);
                setAreaToResultField('parallelogram',area);
            }else{
                const area = getAreaFromElement('parallelogram-side1-element', 'parallelogram-side2-element', false,false);
                setAreaToResultField('parallelogram',area);
            }
            
        }
        else if(targetElement.contains('rhombus-btn')){
            const checkField = document.getElementById('check-rhombus');
            if(checkField.checked){
                const area = getAreaFromInput('rhombus-side1', 'rhombus-side2', true,false);
                setAreaToResultField('rhombus',area);
            }else{
                const area = getAreaFromElement('rhombus-side1-element', 'rhombus-side2-element', true,false);
                setAreaToResultField('rhombus',area);
            }
        }
        else if(targetElement.contains('pentagon-btn')){
            const checkField = document.getElementById('check-pentagon');
            if(checkField.checked){
                const area = getAreaFromInput('pentagon-side1', 'pentagon-side2', true,false);
                setAreaToResultField('pentagon',area);
            }else{
                const area = getAreaFromElement('pentagon-side1-element', 'pentagon-side2-element', true,false);
                setAreaToResultField('pentagon',area);
            }
        }
        else if(targetElement.contains('ellipse-btn')){
            const checkField = document.getElementById('check-ellipse');
            if(checkField.checked){
                const area = getAreaFromInput('ellipse-side1', 'ellipse-side2', false,true);
                setAreaToResultField('ellipse',area);
            }else{
                const area = getAreaFromElement('ellipse-side1-element', 'ellipse-side2-element', false,true);
                setAreaToResultField('ellipse',area);
            }
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
    card.addEventListener('mouseover',(event) => {
        const targetElement = event.target.classList;

        if(targetElement.contains('triangle-card')){
            setColor('triangle-bg');
        }
        if(targetElement.contains('rectangle-card')){
            setColor('rectangle-bg');
        }
        if(targetElement.contains('parallelogram-card')){
            setColor('parallelogram-bg');
        }
        if(targetElement.contains('rhombus-card')){
            setColor('rhombus-bg');
        }
        if(targetElement.contains('pentagon-card')){
            setColor('pentagon-bg');
        }
        if(targetElement.contains('ellipse-card')){
            setColor('ellipse-bg');
        }
    })
    card.addEventListener('mouseout',(event) => {
        const targetElement = event.target.classList;

        if(targetElement.contains('triangle-card')){
            removeColor('triangle-bg');
        }
        if(targetElement.contains('rectangle-card')){
            removeColor('rectangle-bg');
        }
        if(targetElement.contains('parallelogram-card')){
            removeColor('parallelogram-bg');
        }
        if(targetElement.contains('rhombus-card')){
            removeColor('rhombus-bg');
        }
        if(targetElement.contains('pentagon-card')){
            removeColor('pentagon-bg');
        }
        if(targetElement.contains('ellipse-card')){
            removeColor('ellipse-bg');
        }
    })
})

const blogBtn = document.getElementById('blog-btn');
blogBtn.addEventListener('click',() => {
    location.href = 'blog.html'
})

document.getElementById('ordered-lists').addEventListener('click',(event) => {
    const id =event.target.getAttribute('id');

    if(id == 'Pentagon'){
        convertMeter('area-field');
    }
    else if(id == 'Triangle'){
        convertMeter('area-field');
    }
    else if(id == 'Parallelogram'){
        convertMeter('area-field');
    }
    else if(id == 'Rhombus'){
        convertMeter('area-field');
    }
    else if(id == 'Ellipse'){
        convertMeter('area-field');
    }
    else if(id == 'Rectangle'){
        convertMeter('area-field');
    }

})