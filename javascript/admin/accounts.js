

//add existing students
for(let x = 0; x < students.length; x++){
	let p = document.createElement("p");
	let d = document.createElement("div");
	let div = document.createElement("div");
	let info = document.createElement("p");
	let remove = document.createElement("p");
	let addInfoIcon = document.createElement("i");
	addInfoIcon.setAttribute('class', 'fa fa-pencil-square-o')
	let addRemoveIcon = document.createElement("i");
	addRemoveIcon.setAttribute('class', 'fa fa-trash-o')
	firstName = document.getElementById('account-first-name').value;
	lastName  = document.getElementById('account-last-name').value;
	fullName  = firstName + " " + lastName;
	let first = document.getElementById('studentbox').appendChild(d).appendChild(div).appendChild(p);
	first.setAttribute('class','adminAccountName')
	first.textContent = students[x].full_name
	infoSpace = first.parentNode.appendChild(info);
	infoSpace.setAttribute('class','adminAccountEdit');
	infoSpace.appendChild(addInfoIcon);
	removeSpace = first.parentNode.appendChild(remove);
	removeSpace.setAttribute('class','adminAccountDelete')
	removeSpace.setAttribute('onclick','deleteAccount(this)')
	removeSpace.appendChild(addRemoveIcon);
	document.getElementById('account-first-name').value = "";
	document.getElementById('account-last-name').value = "";
}
for(let x = 0; x < teachers.length; x++){
	let p = document.createElement("p");
	let d = document.createElement("div");
	let div = document.createElement("div");
	let info = document.createElement("p");
	let remove = document.createElement("p");
	let addInfoIcon = document.createElement("i");
	addInfoIcon.setAttribute('class', 'fa fa-pencil-square-o')
	let addRemoveIcon = document.createElement("i");
	addRemoveIcon.setAttribute('class', 'fa fa-trash-o')
	firstName = document.getElementById('account-first-name').value;
	lastName  = document.getElementById('account-last-name').value;
	fullName  = firstName + " " + lastName;
	let first = document.getElementById('teacherbox').appendChild(d).appendChild(div).appendChild(p);
	first.setAttribute('class','adminAccountName')
	first.textContent = teachers[x].full_name;
	infoSpace = first.parentNode.appendChild(info);
	infoSpace.setAttribute('class','adminAccountEdit');
	infoSpace.setAttribute('onclick','adminEditAccount(this)')
	infoSpace.appendChild(addInfoIcon);
	removeSpace = first.parentNode.appendChild(remove);
	removeSpace.setAttribute('class','adminAccountDelete')
	removeSpace.setAttribute('onclick','deleteAccount(this)')
	removeSpace.appendChild(addRemoveIcon);
	document.getElementById('account-first-name').value = "";
	document.getElementById('account-last-name').value = "";

}



function addAccount(){
let p = document.createElement("p");
let d = document.createElement("div");
let div = document.createElement("div");
let info = document.createElement("p");
let remove = document.createElement("p");
let addInfoIcon = document.createElement("i");
addInfoIcon.setAttribute('class', 'fa fa-pencil-square-o')
let addRemoveIcon = document.createElement("i");
addRemoveIcon.setAttribute('class', 'fa fa-trash-o')
firstName = document.getElementById('account-first-name').value;
lastName  = document.getElementById('account-last-name').value;
fullName  = firstName + " " + lastName;
if(document.getElementsByName('privilege')[1].checked && firstName != "" && lastName != ""){
	 	let first = document.getElementById('teacherbox').appendChild(d).appendChild(div).appendChild(p);
		first.setAttribute('class','adminAccountName')
		first.textContent = fullName;
		infoSpace = first.parentNode.appendChild(info);
		infoSpace.setAttribute('class','adminAccountEdit');
		infoSpace.appendChild(addInfoIcon);
		removeSpace = first.parentNode.appendChild(remove);
		removeSpace.setAttribute('class','adminAccountDelete')
		removeSpace.setAttribute('onclick','deleteAccount(this)')
		removeSpace.appendChild(addRemoveIcon);
		document.getElementById('account-first-name').value = "";
		document.getElementById('account-last-name').value = "";
	}
	else if(document.getElementsByName('privilege')[2].checked && firstName != "" && lastName != ""){
	 	let first = document.getElementById('studentbox').appendChild(d).appendChild(div).appendChild(p);
		first.setAttribute('class','adminAccountName')
		first.textContent = fullName;
		infoSpace = first.parentNode.appendChild(info);
		infoSpace.setAttribute('class','adminAccountEdit');
		infoSpace.appendChild(addInfoIcon);
		removeSpace = first.parentNode.appendChild(remove);
		removeSpace.setAttribute('class','adminAccountDelete')
		removeSpace.setAttribute('onclick','deleteAccount(this)')
		removeSpace.appendChild(addRemoveIcon);
		document.getElementById('account-first-name').value = "";
		document.getElementById('account-last-name').value = "";
	}
}
function deleteAccount(currentAccount){
	document.getElementById('teacher-dark-overlay').style.display = 'block';
	document.getElementById('teacher-delete-dropdown').style.display = 'block';
	document.getElementById('delete').onclick = function(){
		currentAccount.parentNode.parentNode.childNodes[0].remove();
		document.getElementById('teacher-dark-overlay').style.display = 'none';
		document.getElementById('teacher-delete-dropdown').style.display = 'none';
	}
}
