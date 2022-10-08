var categories = document.querySelectorAll('.category');
var images = document.querySelectorAll ( '.image');

// Functon for Getting on each category
categories.forEach(function (category) {

  // Event on Category while clicking
  category.addEventListener('click', function () {
    for (let i = 0; i < categories.length; i++) {
      categories[i].classList.remove('active');
    }
    this.classList.add('active');
    var categoryAttr = category.getAttribute('data-target')

    // Funtion for getting each images
    images.forEach(function (image) {
      var imageAttr = image.getAttribute('data-target');

      // Condition for Showing Images Category wise
      if (categoryAttr == imageAttr || categoryAttr == 'all') {
        image.classList.remove('hide-image');
      } else {
        image.classList.add('hide-image');
      }
    })
  })
})