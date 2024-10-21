const labels = document.querySelectorAll('label');

labels.forEach(label => {
  label.addEventListener('click', function(e) {
    e.preventDefault();
    this.querySelector('.checkbox-img').classList.toggle('checked');

    let inputCheck = this.querySelector("input[type='checkbox']")

    if(this.querySelector('.checkbox-img').classList.contains('checked')) {
      inputCheck.checked = true;
    } else {
      inputCheck.checked = false;
    }

    // console.log(inputCheck.checked);
  })
})
