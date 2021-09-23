let formEl = $('#projetc-form');
let nameInputEl = $('#project-type');
let dateInputEl = $('#datepicker');
//let skillsListEl = $('#projects-list');

let printSkills = function (name, date) {
  let listEl = $('<li>');
  let listDetail = name.concat(' on ', date);
  listEl.addClass('list-group-item').text(listDetail);
  //listEl.appendTo(skillsListEl);
};

let handleFormSubmit = function (event) {
  event.preventDefault();

  let nameInput = nameInputEl.val();
  let dateInput = dateInputEl.val();

  if (!nameInput || !dateInput) {
    console.log('You need to fill out the form!');
    return;
  }

  printSkills(nameInput, dateInput);

  // resets form
  nameInputEl.val('');
  dateInputEl.val('');
};

formEl.on('submit', handleFormSubmit);

// Autocomplete widget
$(function () {
  let project_Types = [
    'Type_1',
    'Type_2',
    'Type_3',
    'Type_4',

  ];
  $('#project-type').autocomplete({
    source: project_Types,
  });
});

// Datepicker widget
$(function () {
  $('#datepicker').datepicker({
    changeMonth: true,
    changeYear: true,
  });
});