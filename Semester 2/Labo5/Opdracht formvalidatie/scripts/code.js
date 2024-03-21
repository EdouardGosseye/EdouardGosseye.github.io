const setup = () => {
    document.querySelector('form').addEventListener('submit', function(event) {
        // Stop het standaardgedrag van het formulier (verzenden) om onze eigen validatie uit te voeren
        event.preventDefault();
        // Roep de functie validateForm() aan
        validateForm();
    });
}
const validateForm = () => {
    var firstName = document.getElementById('firstName').value.trim();
    var lastName = document.getElementById('lastName').value.trim();
    var birthDate = document.getElementById('birthDate').value.trim();
    var email = document.getElementById('email').value.trim();
    var children = parseInt(document.getElementById('children').value);

    var isValid = true;

    if (firstName.length > 30) {
        document.getElementById('firstName').classList.add('error');
        document.getElementById('firstNameError').innerText = "Max. 30 karakters";
        isValid = false;
    } else {
        document.getElementById('firstName').classList.remove('error');
        document.getElementById('firstNameError').innerText = "";
    }

    if (lastName === "") {
        document.getElementById('lastName').classList.add('error');
        document.getElementById('lastNameError').innerText = "Verplicht veld";
        isValid = false;
    } else if (lastName.length > 50) {
        document.getElementById('lastName').classList.add('error');
        document.getElementById('lastNameError').innerText = "Max. 50 karakters";
        isValid = false;
    } else {
        document.getElementById('lastName').classList.remove('error');
        document.getElementById('lastNameError').innerText = "";
    }

    var datePattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!datePattern.test(birthDate)) {
        document.getElementById('birthDate').classList.add('error');
        document.getElementById('birthDateError').innerText = "Formaat is niet jjjj-mm-dd";
        isValid = false;
    } else {
        var parts = birthDate.split('-');
        var year = parseInt(parts[0]);
        var month = parseInt(parts[1]);
        var day = parseInt(parts[2]);

        if (year < 1000 || year > 9999 || month < 1 || month > 12 || day < 1 || day > 31) {
            document.getElementById('birthDate').classList.add('error');
            document.getElementById('birthDateError').innerText = "Geen geldige datum";
            isValid = false;
        } else {
            document.getElementById('birthDate').classList.remove('error');
            document.getElementById('birthDateError').innerText = "";
        }
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email').classList.add('error');
        document.getElementById('emailError').innerText = "Geen geldig email adres";
        isValid = false;
    } else {
        document.getElementById('email').classList.remove('error');
        document.getElementById('emailError').innerText = "";
    }

    if (!isGetal(children) || children < 0 || children >= 99) {
        document.getElementById('children').classList.add('error');
        document.getElementById('childrenError').innerText = "Ongeldig aantal kinderen";
        isValid = false;
    } else {
        document.getElementById('children').classList.remove('error');
        document.getElementById('childrenError').innerText = "";
    }

    if (isValid) {
        alert("Proficiat!");
    }
    }
const isGetal = (tekst) => {
    return !isNaN(tekst);
}

window.addEventListener("load", setup);