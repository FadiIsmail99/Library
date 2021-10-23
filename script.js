
let lib = document.createElement('div');
lib.id = 'lib-container';
document.body.appendChild(lib);

let arabicShelf = document.createElement('div');
// arabicShelf.className = 'shelf';
// lib.appendChild(arabicShelf);
// let englishShelf = document.createElement('div');
// englishShelf.className = 'shelf';
// lib.appendChild(englishShelf);
let kidsShelf = document.createElement('div');
kidsShelf.className = 'shelf';
lib.appendChild(kidsShelf);


let addBtn = document.getElementById('addBtn');

addBtn.onclick = function () {
  arrayNewBook = []
  let bname = document.getElementById('bname').value;
  let authname = document.getElementById('authname').value;
  let bimage = document.getElementById('bimg').value;
  let btype = document.getElementById('btype').value;
  console.log(bimage)
  arrayNewBook.push({
    title: bname,
    author: authname,
    image: bimage,
    type: btype,
  });
  console.log(arrayNewBook)
  addBook(arrayNewBook)
};


let arrayNewBook = []

let books = [
  {
    title: 'عروس المطر',
    author: 'بثينة العيمى',
    image: '3.jpg',
    type: 'arabic',
  },
  {
    title: 'البؤساء',
    author: 'فيكتور هيجو',
    image: '6.jpg',
    type: 'arabic',
  },
  {
    title: 'ما لا نبوح به',
    author: 'ساندرا سراج',
    image: '1.jpg',
    type: 'arabic',
  },
  {
    title: 'أنت لي',
    author: 'د.منى المرشود',
    image: '9.jpg',
    type: 'english',
  },
  {
    title: 'ليطمئن قلبي',
    author: 'أدهم شرقاوي',
    image: '7.jpg',
    type: 'english',
  },
  {
    title: 'صاحب الظل الطويل',
    author: 'جين ويستر',
    image: '2.jpg',
    type: 'english',
  },
  {
    title: 'غيوم تائهة',
    author: 'فوميكو ساياشي',
    image: '8.jpg',
    type: 'kids',
  },
];

function addBook(books) {
  books.forEach(function (entry) {
    let book = document.createElement('div');
    book.className = 'book';
    var imgBook = document.createElement('img');
    imgBook.setAttribute('src', entry.image);
    imgBook.setAttribute('height', '200px');
    imgBook.setAttribute('width', '150px');
    book.appendChild(imgBook);
    let title = document.createElement('p');
    title.innerText = 'Book Name: ' + entry.title;
    book.appendChild(title);
    let authorName = document.createElement('p');
    authorName.innerText = 'Author: ' + entry.author;
    book.appendChild(authorName);
    kidsShelf.appendChild(book);
    // switch (entry.type) {
    //   case 'arabic':
    //     arabicShelf.appendChild(book);
    //     break;
    //   case 'english':
    //     englishShelf.appendChild(book);
    //     break;
    //   case 'kids':
    //     kidsShelf.appendChild(book);
    //     break;
    //   default:
    //     console.log('wrong type');
    // }
  });
}

addBook(books);



let addBookBtn = document.createElement('button');
addBookBtn.innerHTML = 'Add New Book';
addBookBtn.className = 'addBookBtn';
lib.id = 'lib-container';
document.body.appendChild(addBookBtn);

var modal = document.getElementById('myModal');

var span = document.getElementsByClassName('close')[0];

addBookBtn.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
