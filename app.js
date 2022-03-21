// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)



// nav dropdown
let dropdown = document.getElementById('dropdown');
let dropdownContent = document.getElementById('dropdown-content');


// on click show drop down
dropdown.addEventListener('click', () => {
    if (dropdownContent.style.display === 'none'){
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }

});


// get signup form
let body = document.getElementsByTagName('body');
let signupLink = document.getElementById('sign-up');
let signupForm = document.getElementById('signup-form');



signupLink.addEventListener('click', () => {
    if (signupForm.style.display === 'none' || loginForm.style.display === 'none') {
        signupForm.style.display = 'block';
        

    } else {
        signupForm.style.display = 'none';
    }
});


// get login form
let loginLink = document.getElementById('log-in');
let loginForm = document.getElementById('login-form');

loginLink.addEventListener('click', () => {
    if (loginForm.style.display === 'none' || signupForm.style.display === 'none') {
        loginForm.style.display = 'block';
    } else {
        loginForm.style.display = 'none';
    }
});


// get add form

// let addFriendLink = document.getElementById('adding-friend');
// let addFriendForm = document.getElementById('friend-form');

// addFriendLink.addEventListener('click', () => {
//     if (addFriendForm.style.display === 'none' || signupForm.style.display === 'none' || loginForm.style.display === 'none') {
//         addFriendForm.style.display = 'block';
//     } else {
//         addFriendForm.style.display = 'none';
//     }
// });


const closeSignUpForm = document.getElementById('closeSignup');
const closeLoginForm = document.getElementById('closeLogin');


closeSignUpForm.addEventListener('click', () => {
    
    signupForm.style.display = 'none';
});



closeLoginForm.addEventListener('click', () => {
    
    loginForm.style.display = 'none';
});