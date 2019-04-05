/// <reference path="node_modules/@types/jquery/index.d.ts" />
import { allUsers } from './users';
import { Category } from './category';
import { allCategories } from './categories';
import { User } from './user';
import { AID } from './aid';
import { aids } from './aids';
let $main: JQuery<HTMLElement> = $('#main');
let $document: JQuery<HTMLElement> = $(document);
$main.load('partials/login.html');

let currentUser: User;

function categoryResolver(): void {
    const user: HTMLSpanElement = <HTMLSpanElement>document.getElementById('currentUser');
    const categories: HTMLSelectElement = <HTMLSelectElement>document.getElementById('newCategories');
    let prep: string = '';
    for (let i in allCategories) {
        prep += '<option value="';
        prep += allCategories[i].name;
        prep += '">';
        prep += allCategories[i].name;
        prep += '</option>';
    }
    user.innerHTML = currentUser.user;
    categories.innerHTML = prep;
}

$document.on('click', '#btnLogin', () => {
    let inUser: HTMLInputElement = <HTMLInputElement>document.getElementById('inUser');
    let inPassword: HTMLInputElement = <HTMLInputElement>document.getElementById('inPassword');

    if (inUser.value === '' || inPassword.value === '') {
        alert('You must fill in both fields.');
    } else if (allUsers.find((user: User) => (user.user === inUser.value)) !== undefined) {
        const log = allUsers.find((user: User) => user.user === inUser.value)
        currentUser = <User>log;
        alert(`Welcome ${log!.user}!`);
        $main.load('partials/addItem.html', categoryResolver);
    } else {
        alert('User doesn\'t exist');
    }
});
$document.on('click', '#linkRegister', () => {
    $main.load('partials/register.html');
});

$document.on('click', '#btnRegister', () => {
    const newUser: HTMLInputElement = <HTMLInputElement>document.getElementById('newUser');
    const newPass1: HTMLInputElement = <HTMLInputElement>document.getElementById('newPass1');
    const newPass2: HTMLInputElement = <HTMLInputElement>document.getElementById('newPass2');

    if (newUser.value === '' || newPass1.value === '' || newPass2.value === '') {
        alert('You must fill in all fields.');
    } else if (newPass1.value !== newPass2.value) {
        alert('Password fields don\'t match.');
    } else if (allUsers.find(item => item.user === newUser.value)) {
        alert('User already exists!');
    } else {
        allUsers.push(new User(newUser.value, newPass1.value));
        alert('Success!');
        $main.load('partials/login.html');
    }
});

$document.on('click', '#btnAdd', () => {
    const title: HTMLInputElement = <HTMLInputElement>document.getElementById('newTitle');
    const price: HTMLInputElement = <HTMLInputElement>document.getElementById('newPrice');
    const category: HTMLSelectElement = <HTMLSelectElement>document.getElementById('newCategories');
    if (Number(price.value) === NaN) {
        alert('Price must be a number!');
        console.error('Price must be a number!');
    } else {
        aids.push(new AID(title.value, <Category>allCategories.find(item => item.name === category.value), Number(price.value)));
    }
    console.log(title.value);
    console.log(Number(price.value));
    console.log(category.value);
    console.log(allCategories.find((cat => cat.name === category.value)));
    alert('Advertisement has been published!');
});

$document.on('click', '#uiShowAll', () => {
    $main.load('partials/showAids.html', () => {
        const allAids: HTMLDivElement = <HTMLDivElement>document.getElementById('allAids');
        let prep: string = '';
        for (let i in aids) {
            prep += '<div class="aidItem">'
            prep += '<img src="' + aids[i].category.img + '" alt="Unavailable: ' + aids[i].category.img + '">';
            prep += '<p><b>Title</b>: ' + aids[i].title + '</p>';
            prep += '<p><b>Category</b>: ' + aids[i].category.name + '</p>';
            prep += '<p><b>Price</b>: ' + aids[i].price + '</p>';
            prep += '</div>';
        }
        allAids.innerHTML = prep;
    });
});

$document.on('click', '#uiAddMore', () => {
    $main.load('partials/addItem.html', categoryResolver);
});

$document.on('click', '#uiLogOut', () => {
    $main.load('partials/login.html');
});