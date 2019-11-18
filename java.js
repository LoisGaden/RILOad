// writes to the log 'hello'
console.log('hello!')

// three different variables for the different images
var backgrounds = ['mike-yukhtenko', 'gabriele-garanzelli', 'fabian-oelkers']
// Only fires logic after the page has fully loaded
$( document ).ready(function(){
  // when the button is clicked it triggers a function
  $('h1').on('click', function () {
    // 1. log to the console that you have clicked the button
    console.log('I was clicked!')
    // this selects a randon background from above and stores it as the variable 'randomBackground'
    var randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    // this creates a string that css will understand to be a background url
    var imageUrl = "url('./images/" + randomBackground + ".jpg')"
    // 2. using jquery, change the image url of the body background to the new one saved above
    $('body').css('background', imageUrl)
    // EXTENSION TASK!
    // 3. Change the text of the 'span' to be that of the photographer
    //   (hint, you should re-use randomBackground)
    // $('span').text(randomBackground)

    // Double points if you replace '-' between their names with a space
    var artist = randomBackground.replace(/-/g, ' ');
    $('span').text(artist)
  })
  $("form[name='emailForm']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      firstname: {
        required: true,
        minlength: 2
      },
      lastname: "required",
      email: {
        required: true,
        // Specify that email should be validated
        // by the built-in "email" rule
        email: true
      }
    },
    // Specify validation error messages
    messages: {
      firstname: {
        required: "Please enter your firstname",
        minlength: "First Name must be at least 2 characters"
      },
      lastname: "Please enter your lastname",
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
}) // here endeth the function
