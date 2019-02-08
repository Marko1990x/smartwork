angular.module('zadatak1').component('ctrlTwo', {
    templateUrl: 'ctrl2.html',
    controller: function CtrlTwoController() {

        this.$onInit = () => {
            createObjectFunction.call({ foo: 21 }).bar();
            createObject.call({ foo: 21 }).bar();
        }

        this.ja = {
            ime: 'Danilo',
            prezime: 'Mogin',
            godina: 33,
            email: 'danilo.mogin@gmail.com',
        }

        this.send = () => {
            var userObj = {
                ime: this.ja.ime,
                prezime: this.ja.prezime,
                godina: this.ja.godina,
                email: this.ja.email,
            };
            console.log(`userObj`);
            console.log(userObj);
        }
    }
});

function createObjectFunction() {
    console.log('Function Inside `createObjectFunction`:', this.foo);
    return {
        foo: 42,
        bar: function () {
            console.log('Function Inside `bar`:', this.foo);
        },
    };
}

function createObject() {
    console.log('Arrow Inside `createObject`:', this.foo);
    return {
        foo: 42,
        bar: () => console.log('Arrow Inside `bar`:', this.foo),
    };
}