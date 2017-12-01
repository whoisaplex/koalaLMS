//add existing students
for(let x = 0; x < students.length; x++){
	userName  = document.getElementById('account-username').value;
	email     = document.getElementById('account-email').value;
	passWord  = document.getElementById('account-password').value;
	firstName = document.getElementById('account-first-name').value;
	lastName  = document.getElementById('account-last-name').value;
	fullName  = firstName + " " + lastName;
	const p = document.createElement("p");
	const d = document.createElement("div");
	const div = document.createElement("div");
	const info = document.createElement("p");
	const remove = document.createElement("p");
	const addInfoIcon = document.createElement("i");
	addInfoIcon.setAttribute('class', 'fa fa-pencil-square-o')
	const addRemoveIcon = document.createElement("i");
	addRemoveIcon.setAttribute('class', 'fa fa-trash-o')
	let first = document.getElementById('studentbox').appendChild(d).appendChild(div).appendChild(p);
	first.setAttribute('class','adminAccountName')
	first.textContent = students[x].full_name
	infoSpace = first.parentNode.appendChild(info);
	infoSpace.setAttribute('class','adminAccountEdit');
	infoSpace.setAttribute('onclick','editAccount(this)')
	infoSpace.appendChild(addInfoIcon);
	removeSpace = first.parentNode.appendChild(remove);
	removeSpace.setAttribute('class','adminAccountDelete')
	removeSpace.setAttribute('onclick','deleteAccount(this)')
	removeSpace.appendChild(addRemoveIcon);
	document.getElementById('account-first-name').value = "";
	document.getElementById('account-last-name').value = "";
}
//add existing teachers
for(let x = 0; x < teachers.length; x++){
	userName  = document.getElementById('account-username').value;
	email     = document.getElementById('account-email').value;
	passWord  = document.getElementById('account-password').value;
	firstName = document.getElementById('account-first-name').value;
	lastName  = document.getElementById('account-last-name').value;
	fullName  = firstName + " " + lastName;
	const p = document.createElement("p");
	const d = document.createElement("div");
	const div = document.createElement("div");
	const info = document.createElement("p");
	const remove = document.createElement("p");
	const addInfoIcon = document.createElement("i");
	addInfoIcon.setAttribute('class', 'fa fa-pencil-square-o')
	const addRemoveIcon = document.createElement("i");
	addRemoveIcon.setAttribute('class', 'fa fa-trash-o')
	firstName = document.getElementById('account-first-name').value;
	lastName  = document.getElementById('account-last-name').value;
	fullName  = firstName + " " + lastName;
	let first = document.getElementById('teacherbox').appendChild(d).appendChild(div).appendChild(p);
	first.setAttribute('class','adminAccountName')
	first.textContent = teachers[x].full_name;
	infoSpace = first.parentNode.appendChild(info);
	infoSpace.setAttribute('class','adminAccountEdit');
	infoSpace.setAttribute('onclick','editAccount(this)')
	infoSpace.appendChild(addInfoIcon);
	removeSpace = first.parentNode.appendChild(remove);
	removeSpace.setAttribute('class','adminAccountDelete')
	removeSpace.setAttribute('onclick','deleteAccount(this)')
	removeSpace.appendChild(addRemoveIcon);
	document.getElementById('account-first-name').value = "";
	document.getElementById('account-last-name').value = "";

}



function addAccount(){
userName  = document.getElementById('account-username').value;
email     = document.getElementById('account-email').value;
passWord  = document.getElementById('account-password').value;
firstName = document.getElementById('account-first-name').value;
lastName  = document.getElementById('account-last-name').value;
fullName  = firstName + " " + lastName;
const p = document.createElement("p");
const d = document.createElement("div");
const div = document.createElement("div");
div.setAttribute('class','store-data')
const info = document.createElement("p");
const remove = document.createElement("p");
const addInfoIcon = document.createElement("i");
addInfoIcon.setAttribute('class', 'fa fa-pencil-square-o')
const addRemoveIcon = document.createElement("i");
addRemoveIcon.setAttribute('class', 'fa fa-trash-o')
// add new teacher
if(document.getElementsByName('privilege')[0].checked && firstName != "" && lastName != ""){
	 	let first = document.getElementById('teacherbox').appendChild(d).appendChild(div).appendChild(p);
		first.setAttribute('class','adminAccountName')
		div.setAttribute('data-value1', fullName)
		div.setAttribute('data-value2', firstName)
		div.setAttribute('data-value3', lastName)
		div.setAttribute('data-value4', userName)
		div.setAttribute('data-value5', email)
		div.setAttribute('data-value6', passWord)
		first.textContent = fullName;
		infoSpace = first.parentNode.appendChild(info);
		infoSpace.setAttribute('class','adminAccountEdit');
		infoSpace.setAttribute('onclick', 'editAccount(this)')
		infoSpace.appendChild(addInfoIcon);
		removeSpace = first.parentNode.appendChild(remove);
		removeSpace.setAttribute('class','adminAccountDelete')
		removeSpace.setAttribute('onclick','deleteAccount(this)')
		removeSpace.appendChild(addRemoveIcon);
		document.getElementById('account-first-name').value = "";
		document.getElementById('account-last-name').value = "";
		document.getElementById('account-username').value = "";
		document.getElementById('account-email').value = "";
		document.getElementById('account-password').value = "";
	}
	//add new student
	else if(document.getElementsByName('privilege')[1].checked && firstName != "" && lastName != ""){
	 	let first = document.getElementById('studentbox').appendChild(d).appendChild(div).appendChild(p);
		first.setAttribute('class','adminAccountName')
		div.setAttribute('data-value1', fullName)
		div.setAttribute('data-value2', firstName)
		div.setAttribute('data-value3', lastName)
		div.setAttribute('data-value4', userName)
		div.setAttribute('data-value5', email)
		div.setAttribute('data-value6', passWord)
		first.textContent = fullName;
		infoSpace = first.parentNode.appendChild(info);
		infoSpace.setAttribute('class','adminAccountEdit');
		infoSpace.setAttribute('onclick', 'editAccount(this)')
		infoSpace.appendChild(addInfoIcon);
		removeSpace = first.parentNode.appendChild(remove);
		removeSpace.setAttribute('class','adminAccountDelete')
		removeSpace.setAttribute('onclick','deleteAccount(this)')
		removeSpace.appendChild(addRemoveIcon);
		document.getElementById('account-first-name').value = "";
		document.getElementById('account-last-name').value = "";
		document.getElementById('account-username').value = "";
		document.getElementById('account-email').value = "";
		document.getElementById('account-password').value = "";
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
	document.getElementById('cancel').onclick = function(){
		document.getElementById('teacher-delete-dropdown').style.display = 'none';
		document.getElementById('teacher-dark-overlay').style.display = 'none';
	}
}
function editAccount(currentAccount, firstName, lastName){
	
	document.getElementById('teacher-dark-overlay').style.display = 'block';
	document.getElementById('admin-edit-dropdown').style.display = 'block';
	document.getElementById('admin-account-header').childNodes[1].innerHTML = 'Updating ' + currentAccount.parentNode.getAttribute('data-value1') + 's account'
	document.getElementById('account-edit-first-name').value = currentAccount.parentNode.getAttribute('data-value2')
	document.getElementById('account-edit-last-name').value = currentAccount.parentNode.getAttribute('data-value3')
	document.getElementById('account-edit-username').value = currentAccount.parentNode.getAttribute('data-value4')
	document.getElementById('account-edit-email').value = currentAccount.parentNode.getAttribute('data-value5')
	document.getElementById('account-edit-password').value = currentAccount.parentNode.getAttribute('data-value6')
	document.getElementById('save').onclick = function(){
		let updateFirstName = document.getElementById('account-edit-first-name').value
		let updateLastname  = document.getElementById('account-edit-last-name').value
		let updateUserName  = document.getElementById('account-edit-username').value
		let updateEmail     = document.getElementById('account-edit-email').value
		let updatePassWord  = document.getElementById('account-edit-password').value
		currentAccount.parentNode.setAttribute('data-value1',updateFirstName + " " + updateLastname)
		currentAccount.parentNode.setAttribute('data-value2',updateFirstName)
		currentAccount.parentNode.setAttribute('data-value3',updateLastname)
		currentAccount.parentNode.setAttribute('data-value4',updateUserName)
		currentAccount.parentNode.setAttribute('data-value5',updateEmail)
		currentAccount.parentNode.setAttribute('data-value6',updatePassWord)

		currentAccount.parentNode.childNodes[0].innerHTML = updateFirstName + " " + updateLastname;
		document.getElementById('teacher-dark-overlay').style.display = 'none';
		document.getElementById('admin-edit-dropdown').style.display = 'none';
	}
	document.getElementById('canceledit').onclick = function(){
		document.getElementById('teacher-dark-overlay').style.display = 'none';
		document.getElementById('admin-edit-dropdown').style.display = 'none';
	}
}
