document.getElementById('yesBtn').addEventListener('click', function() {
    alert('Great! See you there pookie bear <3.');
  });
  
  document.getElementById('noBtn').addEventListener('click', function() {
    alert('Sorry, you cannot decline the invitation.');
  });
  
  function moveButton() {
    var button = document.getElementById('noBtn');
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'absolute';
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
  }
  