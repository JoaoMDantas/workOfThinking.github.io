window.addEventListener('resize', function() {
    if (window.matchMedia('(max-width: 600px)').matches) {
      document.querySelector('.container').style.width = '100%';
      document.querySelector('.container').style.padding = '0 10px';}}

  );
  