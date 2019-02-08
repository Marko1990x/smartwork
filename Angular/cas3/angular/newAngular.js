angular
    .module('zadatak1', [])
    .controller('KursCtrl', function KursCtrl() {
        this.naslov = 'Angular JS Kurs';
        this.ja = {
            ime: "danilo",
            prezime: "mogin",
            godina: 33,
            email: 'danilo.mogin@gmail.com',
        }
        this.send = () => {
            var userOBJ = {
                ime: this.ja.ime,
                prezime: this.ja.prezime,
                godine: this.ja.godina,
                email: this.ja.email,
            }
            console.log("user OBJ")
            console.log(userOBJ);
        };

    })
    .component('ctrlTwo', {
        templateUrl: './angular/temp.html' ,   // nasao sam gresku
        // on pocinje da gleda od root foldera
        bindings: {
            naslov: "<",
            ja: "<",
            onSend: "&"
        },
        controller: function ctrlTwoController() {
            this.$onInit = () => {
                this.send();
            }
            this.send = function () {
                this.onSend({
                    Ja: this.ja
                })
            }
        }
    })