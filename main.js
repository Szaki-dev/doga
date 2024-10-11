import './style.css'
document.addEventListener('DOMContentLoaded', async () => {
  const url = 'https://petrik-utazas-default-rtdb.europe-west1.firebasedatabase.app/travelDestinations.json';
  const container = document.getElementById('container');
  const betoltoIcon = document.getElementById('betolt');
  const template = document.getElementById('template').content;

  try {
    const res = await fetch(url);
    const celok = await res.json();

    celok.forEach(destination => {
      const klon = document.importNode(template, true);
      klon.querySelector('.card-img-top').src = destination.img;
      klon.querySelector('.card-title').textContent = destination.title;
      klon.querySelector('.card-text').textContent = destination.content;
      container.appendChild(klon);
    });
  } catch (error) {
    console.error('Error: ', error);
  }
  if(container.children.length > 0) {
    betoltoIcon.style.display = 'none';
  }
});
