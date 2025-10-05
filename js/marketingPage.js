var currentActiveIndexCarrousel = 0;

const liveBox = document.getElementById('liveBox');
liveBox.addEventListener('click', () => {
  window.open('https://youtu.be/HdhHsbYvERY?si=mBcqC3RrRk9fuAxr', '_blank');
});

function onArrowClick(direction) {
  const ul = document.querySelector('.content ul');
  const items = ul.querySelectorAll('li');

  if(direction === 'left' && currentActiveIndexCarrousel !== 0)  {
    currentActiveIndexCarrousel--;
  }
  if(direction === 'right' && currentActiveIndexCarrousel !== 2)  {
    currentActiveIndexCarrousel++;
  }
  const spans = Array.from(document.querySelector('.carousel-indicators').querySelectorAll('span'));
  // Remove 'active' from all spans
  spans.forEach(span => span.classList.remove('active'));

  // Add 'active' to the currently selected one
  spans[currentActiveIndexCarrousel].classList.add('active');
  items[currentActiveIndexCarrousel].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
}


function changeAlbumPreviewScreen(liElement, platform) {
  // look at this improvement! I could make this as a good code example for my future junior trainee students! If i ever get one lol
  const iframes = liElement.querySelectorAll('iframe');

  iframes.forEach(iframe => {
    const srcUrl = iframe.getAttribute('src');
    if (srcUrl.includes(platform)) {
      iframe.style.display = 'block';
    } else {
      iframe.style.display = 'none';
    }
  });
}

function _changeAlbumPreviewScreen(liElement, platform) {
  // This deffo can be improved! instead of doing a whole if else stuff we can probably do this in a way
  //
  const iframes = liElement.querySelectorAll('iframe');
  iframes.forEach(function(iframe, index) {
    console.log(`Iframe ${index}: ${iframe.src}`);
  });

  iframes.forEach(function(iframe, index) {
    const srcUrl = iframe.getAttribute('src');

  })

  if (platform === 'spotify') {
    iframes[0].style.display = 'block';  // Show Spotify
    if (iframes[1]) iframes[1].style.display = 'none';  // Hide YouTube
    if (iframes[2]) iframes[2].style.display = 'none';  // Hide Apple Music
  } else if (platform === 'youtube') {
    iframes[0].style.display = 'none';   // Hide Spotify
    if (iframes[1]) iframes[1].style.display = 'block';  // Show YouTube
    if (iframes[2]) iframes[2].style.display = 'none';  // Hide Apple Music
  } else if (platform === 'apple') {
    iframes[0].style.display = 'none';   // Hide Spotify
    if (iframes[1]) iframes[1].style.display = 'none';  // Hide YouTube
    if (iframes[2]) iframes[2].style.display = 'block'; // Show Apple Music
  }
}
