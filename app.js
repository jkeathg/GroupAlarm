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
