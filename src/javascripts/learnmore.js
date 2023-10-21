const learnMore = document.getElementById('learn-more');
const servicesDiv = document.getElementById('services');

learnMore.addEventListener('click', () => {
    servicesDiv.scrollIntoView({ behavior: 'smooth' });
})