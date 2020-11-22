let form=document.querySelector('#book-form');
let bookList=document.querySelector('#book-list');


class Book{
	constructor(title,author,isbn)
	{
		this.title=title;
		this.author=author;
		this.isbn=isbn;

	}

}

class UI{
	constructor()
	{

	}
	addToBooklist(book)
	{
		let list= document.querySelector('#book-list');
		let row=document.createElement('tr');
		row.innerHTML=
		`<td>${book.title}</td>
		<td>${book.author}</td>
		<td>${book.isbn}</td>
		<td><a href='#' class="delete">X</a></td>`;

		list.appendChild(row);
	}

	clearFields()
	{
	document.querySelector('#title').value='';
	document.querySelector('#author').value='';
	document.querySelector('#isbn').value='';
	}

	showalert(message,className)
	{
		let div=document.createElement('div');
		div.className=`alert ${className}`;
		div.appendChild(document.createTextNode(message));
		let container=document.querySelector('.container');
		let form=document.querySelector('#book-form');
		container.insertBefore(div,form);

		setTimeout(()=>
		{
			document.querySelector('.alert').remove();
		},2000);
	}

	deleteFromBook(target)
	{
		if(target.hasAttribute('href'))
		{
			target.parentElement.parentElement.remove();
			//ui.showalert("Book deleted","success");
		}
	}
}
form.addEventListener('submit',newBook);
bookList.addEventListener('click',removeBook);

function newBook(e)
{
	let title=document.querySelector('#title').value,
	author=document.querySelector('#author').value,
	isbn=document.querySelector('#isbn').value;
  
    let ui=new UI();
    if(title==='' || author==='' || isbn==='')
    {
    	ui.showalert("Please fill all the fields!!!","error");
    }
    else
    {
    	 let book= new Book(title,author,isbn);
    	   ui.addToBooklist(book);
    	   ui.clearFields();
    	   ui.showalert("New book added successfully","success");

    }
  

	e.preventDefault();
}

function removeBook(e)
{
	let ui= new UI();
	ui.deleteFromBook(e.target);
	ui.showalert("Book deleted","success");
	e.preventDefault();
}