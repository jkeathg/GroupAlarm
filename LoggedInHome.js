// import functions

// reference needed DOM elements


// set event listeners 
    // get user input(s)
    // do any needed work with the value(s)
    // update DOM to reflect new value(s)



// nav dropdown
const dropDownAct = document.getElementById('dropdown');
const dropdownContent = document.getElementById('dropdown-content');


// on click show drop down
dropDownAct.addEventListener('click', () => {
    if (dropdownContent.style.display === 'none'){
        dropdownContent.style.display = 'block';
    } else {
        dropdownContent.style.display = 'none';
    }

});


// // get signup form
// let body = document.getElementsByTagName('body');
// let signupLink = document.getElementById('sign-up');
// let signupForm = document.getElementById('signup-form');



// signupLink.addEventListener('click', () => {
//     if (signupForm.style.display === 'none' || loginForm.style.display === 'none' || addFriendForm.style.display === 'none') {
//         signupForm.style.display = 'block';
        

//     } else {
//         signupForm.style.display = 'none';
//     }
// });


// // get login form
// let loginLink = document.getElementById('log-in');
// let loginForm = document.getElementById('login-form');

// loginLink.addEventListener('click', () => {
//     if (loginForm.style.display === 'none' || signupForm.style.display === 'none' || addFriendForm.style.display === 'none') {
//         loginForm.style.display = 'block';
//     } else {
//         loginForm.style.display = 'none';
//     }
// });


// get add form


const addFriendLink = document.getElementById('friend-add');
const addFriendForm = document.getElementById('adding-friend');

addFriendLink.addEventListener('click', () => {
    if (addFriendForm.style.display === 'none') {
        addFriendForm.style.display = 'block';
    } else {
        addFriendForm.style.display = 'none';
    }
});

// get add alarm

const addAlarmLink = document.getElementById('alarm-add');
const addAlarmForm = document.getElementById('adding-alarm');

addAlarmLink.addEventListener('click', () => {
    
    if (addAlarmForm.style.display === 'none') {
        addAlarmForm.style.display = 'block';
    } else {
        addAlarmForm.style.display = 'none';
    }
    
});


// h5 closing forms

const closeFriendForm = document.getElementById('closeFriend');
const closeAlarmForm = document.getElementById('closeAlarm');


closeFriendForm.addEventListener('click', () => {
    
    addFriendForm.style.display = 'none';
});



closeAlarmForm.addEventListener('click', () => {
    
    addAlarmForm.style.display = 'none';
});
