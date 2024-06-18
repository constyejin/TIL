joinForm.addEventListener('click', function (e) {
  if (idVeri && pwVeri && pwChkVeri) {
    joinForm.submit();
  } else {
    e.preventDefault();

    // focusout; 이벤트 강제 발생
    document.querySelectorAll('input').forEach(function (input) {
      input.dispatchEvent(new Event("focusout"));
    });
  }
});
