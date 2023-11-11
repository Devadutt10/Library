//Variables...

const addBook = document.querySelector(".addBook");
const submitForm = document.querySelector(".submit-form");
const exitBtn = document.querySelector(".exit-btn");
const bookInput = document.querySelector(".book-input");
const authorInput = document.querySelector(".author-input");
const submitBtn = document.querySelector('.submit-btn');




//Event listener for making the form appear and disappear...

addBook.addEventListener('click',function(){
     submitForm.style.display = "block";
});

exitBtn.addEventListener('click',function(){
    submitForm.style.display = "none";
});

//Constructor function for making a Book object...

function Book(title,author){
    this.title = title;
    this.author = author;
}




//function for adding a new book...

function addNewBook(){
   
    if(bookInput.value==="" || authorInput.value === ""){
        alert("Enter the details of the book");
        
    }
    else{
        let title = bookInput.value;
   let author = authorInput.value;

   let bookNew = new Book(title,author); //Makin a book object with the author name and title...
   let container = document.querySelector(".book-container");

   let newBookDiv = document.createElement('div');//Creating a div element
   newBookDiv.classList.add("book-nav");//adding class
   container.appendChild(newBookDiv);//appending to container

   let nav = document.createElement('nav');
   newBookDiv.appendChild(nav);

   let ul = document.createElement('ul');
   nav.appendChild(ul);

   let li1 = document.createElement('li');
   ul.appendChild(li1);
   li1.innerText = `${bookNew.title}`;

   let li2 = document.createElement('li');
   ul.appendChild(li2);
   li2.innerText = `${bookNew.author}`;

   let li3 = document.createElement('li');
   ul.appendChild(li3);
   let li4 = document.createElement('li');
   ul.appendChild(li4)

   let select = document.createElement('select');
   li3.appendChild(select);

   let option1 = document.createElement('option');
   select.appendChild(option1);
   option1.innerHTML = 'Read';

   let option2 = document.createElement('option');
   select.appendChild(option2);
   option2.innerHTML = 'Not Read';

   let btnDelete = document.createElement('button');
   btnDelete.classList.add('delete-btn');
   btnDelete.innerHTML = 'Delete';
   li4.appendChild(btnDelete);
   
   
   btnDelete.addEventListener('click',function(){
    newBookDiv.remove();
   })

   submitForm.style.display = 'none';

   bookInput.value = "";
   authorInput.value = "";

    }

   
   
}

//Adding event listener for submission...

submitBtn.addEventListener('click',addNewBook);






