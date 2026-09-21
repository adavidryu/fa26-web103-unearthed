const renderGifts = async () => {
  const response = await fetch('/gifts');
  const data = await response.json();
  const mainContent = document.getElementById('main-content');

  const intro = document.createElement('section');
  intro.className = 'intro';
  intro.innerHTML = `
    <div>
      <h2>Cool things to buy.</h2>
    </div>
    <p class="intro-copy">A short list of goodies..</p>
  `;
  mainContent.appendChild(intro);

  if (!data) {
    const noGifts = document.createElement('h2');
    noGifts.textContent = 'No Gifts Available 😞';
    mainContent.appendChild(noGifts);
    return;
  }

  data.map((gift) => {
    const card = document.createElement('div');
    card.className = 'card';

    const topContainer = document.createElement('div');
    topContainer.className = 'top-container';
    topContainer.style.backgroundImage = `url(${gift.image})`;

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container';

    const name = document.createElement('h3');
    name.textContent = gift.name;

    const price = document.createElement('p');
    price.textContent = `Price: ${gift.pricePoint}`;

    const audience = document.createElement('p');
    audience.textContent = `Audience: ${gift.audience}`;

    const readMore = document.createElement('a');
    readMore.textContent = 'Read More >';
    readMore.href = `/gifts/${gift.id}`;
    readMore.setAttribute('role', 'button');

    bottomContainer.appendChild(name);
    bottomContainer.appendChild(price);
    bottomContainer.appendChild(audience);
    bottomContainer.appendChild(readMore);

    card.appendChild(topContainer);
    card.appendChild(bottomContainer);
    mainContent.appendChild(card);
  });
};

renderGifts();
