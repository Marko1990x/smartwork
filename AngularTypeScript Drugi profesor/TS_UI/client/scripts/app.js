"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var users_1 = require("./users");
var categories_1 = require("./categories");
var user_1 = require("./user");
var aid_1 = require("./aid");
var aids_1 = require("./aids");
var $main = $('#main');
var $document = $(document);
$main.load('partials/login.html');
var currentUser;
function categoryResolver() {
    var user = document.getElementById('currentUser');
    var categories = document.getElementById('newCategories');
    var prep = '';
    for (var i in categories_1.allCategories) {
        prep += '<option value="';
        prep += categories_1.allCategories[i].name;
        prep += '">';
        prep += categories_1.allCategories[i].name;
        prep += '</option>';
    }
    user.innerHTML = currentUser.user;
    categories.innerHTML = prep;
}
$document.on('click', '#btnLogin', function () {
    var inUser = document.getElementById('inUser');
    var inPassword = document.getElementById('inPassword');
    if (inUser.value === '' || inPassword.value === '') {
        alert('You must fill in both fields.');
    }
    else if (users_1.allUsers.find(function (user) { return (user.user === inUser.value); }) !== undefined) {
        var log = users_1.allUsers.find(function (user) { return user.user === inUser.value; });
        currentUser = log;
        alert("Welcome " + log.user + "!");
        $main.load('partials/addItem.html', categoryResolver);
    }
    else {
        alert('User doesn\'t exist');
    }
});
$document.on('click', '#linkRegister', function () {
    $main.load('partials/register.html');
});
$document.on('click', '#btnRegister', function () {
    var newUser = document.getElementById('newUser');
    var newPass1 = document.getElementById('newPass1');
    var newPass2 = document.getElementById('newPass2');
    if (newUser.value === '' || newPass1.value === '' || newPass2.value === '') {
        alert('You must fill in all fields.');
    }
    else if (newPass1.value !== newPass2.value) {
        alert('Password fields don\'t match.');
    }
    else if (users_1.allUsers.find(function (item) { return item.user === newUser.value; })) {
        alert('User already exists!');
    }
    else {
        users_1.allUsers.push(new user_1.User(newUser.value, newPass1.value));
        alert('Success!');
        $main.load('partials/login.html');
    }
});
$document.on('click', '#btnAdd', function () {
    var title = document.getElementById('newTitle');
    var price = document.getElementById('newPrice');
    var category = document.getElementById('newCategories');
    if (Number(price.value) === NaN) {
        alert('Price must be a number!');
        console.error('Price must be a number!');
    }
    else {
        aids_1.aids.push(new aid_1.AID(title.value, categories_1.allCategories.find(function (item) { return item.name === category.value; }), Number(price.value)));
    }
    console.log(title.value);
    console.log(Number(price.value));
    console.log(category.value);
    console.log(categories_1.allCategories.find((function (cat) { return cat.name === category.value; })));
    alert('Advertisement has been published!');
});
$document.on('click', '#uiShowAll', function () {
    $main.load('partials/showAids.html', function () {
        var allAids = document.getElementById('allAids');
        var prep = '';
        for (var i in aids_1.aids) {
            prep += '<div class="aidItem">';
            prep += '<img src="' + aids_1.aids[i].category.img + '" alt="Unavailable: ' + aids_1.aids[i].category.img + '">';
            prep += '<p><b>Title</b>: ' + aids_1.aids[i].title + '</p>';
            prep += '<p><b>Category</b>: ' + aids_1.aids[i].category.name + '</p>';
            prep += '<p><b>Price</b>: ' + aids_1.aids[i].price + '</p>';
            prep += '</div>';
        }
        allAids.innerHTML = prep;
    });
});
$document.on('click', '#uiAddMore', function () {
    $main.load('partials/addItem.html', categoryResolver);
});
$document.on('click', '#uiLogOut', function () {
    $main.load('partials/login.html');
});
