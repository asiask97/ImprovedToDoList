const addbutton = document.querySelector('.plus');
const ul = document.querySelector('ul')

addbutton.addEventListener('click', creatingNewLi);

function creatingNewLi() {
    var input = document.createElement("input");
    input.type = 'text';
    input.placeholder = 'Anything Else?'
    input.className ='justCreatedListItem';
    ul.appendChild(input);

}

var justCreatedListItem = document.querySelector('.justCreatedListItem');
var lastchild = ul.lastChild;
document.addEventListener('keypress', changetoLi);
var path =''
function changetoLi(e){

    if (e.charCode === 13 && !ul.lastChild.value == ''){

        var value = ul.lastChild.value;
        var input = document.createElement("li");
        input.className ='li';
        var addingvalue = document.createTextNode(value);
        input.appendChild(addingvalue);

        var span = document.createElement('span');
        var svg = document.createElementNS("http://www.w3.org/2000/svg", 'svg');;
        svg.setAttribute('width', '17');
        svg.setAttribute('height', '18');
        svg.setAttribute('fill', 'none');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        path = document.createElementNS('http://www.w3.org/2000/svg',"path");  
        path.setAttribute('d', 'M13.166 11.023l-2.844-2.606 2.62-2.86a.86.86 0 00-.05-1.215l-.632-.579a.86.86 0 00-1.214.057l-2.62 2.86L5.58 4.075a.86.86 0 00-1.214.057l-.582.636a.86.86 0 00.05 1.214l2.844 2.605-2.62 2.861a.86.86 0 00.05 1.215l.632.579a.86.86 0 001.214-.057l2.62-2.86 2.844 2.605a.86.86 0 001.215-.057l.582-.636a.86.86 0 00-.05-1.214z');
        path.setAttribute('fill', '#ffffff');

        svg.appendChild(path);
        span.appendChild(svg);
        input.appendChild(span);



        ul.lastChild.replaceWith(input);
    }
}

ul.addEventListener('click', deletebutton);
function deletebutton(e){
    console.log(e) 
    if( e.target.tagName === 'SPAN' ){
        e.target.parentElement.remove()
    }   
}



