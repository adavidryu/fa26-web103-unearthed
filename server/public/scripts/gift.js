const renderGift = async () => {
  const requestedID = parseInt(window.location.href.split('/').pop(), 10);
  const response = await fetch('/gifts');
  const data = await response.json();
  const giftContent = document.getElementById('gift-content');

  let gift = null;

  if (data) {
    gift = data.find((item) => item.id === requestedID);
  }

  if (gift) {
    const image = document.getElementById('image');
    const name = document.getElementById('name');
    const submittedBy = document.getElementById('submittedBy');
    const submittedOn = document.getElementById('submittedOn');
    const pricePoint = document.getElementById('pricePoint');
    const audience = document.getElementById('audience');
    const description = document.getElementById('description');

    image.src = gift.image;
    name.textContent = gift.name;
    submittedBy.textContent = `Submitted by: ${gift.submittedBy}`;
    submittedOn.textContent = `Submitted on: ${gift.submittedOn}`;
    pricePoint.textContent = `Price: ${gift.pricePoint}`;
    audience.textContent = `Audience: ${gift.audience}`;
    description.textContent = gift.description;
    document.title = gift.name;
  } else {
    const noGift = document.createElement('h2');
    noGift.textContent = 'No Gifts Available 😞';
    giftContent.appendChild(noGift);
  }
};

renderGift();
