const interests = [
  {
    icon: "fas fa-running",
    title: "Running",
    description: "Me encanta correr, aunque ahora mismo por limitaciones físicas no puedo hacerlo. Cuando me recupere, volveré y correré mi primera maratón! (quizá deba empezar con unos humildes 5km)"
  },
  {
    icon: "fas fa-dumbbell",
    title: "Gym",
    description: "Al igual que con el running, de momento no puedo disfrutar de lo hermoso que es moverse. Ir al gimnasio es lo mejor que puedes hacer por tu salud, ya seas programador o no, tu cuerpo agradecerá que lo utilices como corresponde! El ser humano es muy fuerte, veloz y ágil, tiene mucho potencial!"
  },
  {
    icon: "fas fa-tv",
    title: "Anime & Manga",
    description: "No hay nada mejor que ver anime en una laptop en la cama, completamente sola, con un vasito de coca cola y unos snacks. Mi lista de animes favoritos cambia constantemente, siempre publican nuevos interesantes. Mis mangas favoritos son One Piece e InuYasha..."
  },
  {
    icon: "fas fa-chess",
    title: "Ajedrez",
    description: "No soy una fan hardcore, pero te sorprendería lo entretenido que es jugar ajedrez!"
  },
  {
    icon: "fas fa-music",
    title: "Música",
    description: "HARDCORE FAN DE ARCTIC MONKEYS"
  },
  {
    icon: "fas fa-fish",
    title: "Orcas",
    description: "Las orcas son el mamífero más increíble de toda la historia del planeta tierra. Son los depredadores más audaces, inteligentes y capaces del mar. No tienen competencia alguna, tanto dentro como fuera del océano. Pagaría para que una orca me de una cachetada."
  },
  {
    icon: "fas fa-graduation-cap",
    title: "Terapia Ocupacional",
    description: "Soy estudiante de T.O. desde el año 2022. Creo firmemente (y todos deberían) que es la mejor área de la salud, la única que de base es centrada en el cliente y no en la patología. Actualmente estoy trabajando en TOpedia (link a futuro), una web donde tendré toda la información necesaria para estudiar esta hermosa carrera, ya que actualmente es muy desconocida y no hay tanta información presente en un sólo lugar."

  }
];

const list = document.getElementById("interests-list");
interests.forEach(interest => {
  list.innerHTML += `
    <li>
      <i class="${interest.icon}"></i>
      <strong>${interest.title}: </strong> ${interest.description}
    </li>
  `;
});

const metas = [
  {
    icon: "fas fa-laptop-code",
    title: "Aprender JavaScript",
    description: "Quiero dominar JS para poder crear cositas por mi cuenta."
  },
  {
    icon: "fas fa-rocket",
    title: "Publicar mi portafolio",
    description: "Subir mi sitio a GitHub Pages o Netlify y compartirlo con el mundo."
  },
  {
    icon: "fas fa-globe",
    title: "Crear TOpedia",
    description: "Una web que reúna todos mis apuntes y recursos de Terapia Ocupacional."
  }
];

const goalsList = document.getElementById("goals-list");
metas.forEach(meta => {
  goalsList.innerHTML += `
    <li>
      <i class="${meta.icon}"></i>
      <strong>${meta.title}: </strong> ${meta.description}
    </li>
  `;
});


// Tabs de intereses
document.querySelectorAll('.interest-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    
    document.querySelectorAll('.interest-tab, .interest-content').forEach(el => {
      el.classList.remove('active');
    });
    
    // Activar el seleccionado
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});



// CARRUSEL
document.addEventListener('DOMContentLoaded', function() {
    
    const carousel = document.querySelector('.carousel-inner');
    const items = document.querySelectorAll('.carousel-item');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  }
  
  prevBtn.addEventListener('click', () => {
    currentIndex = Math.max(currentIndex - 1, 0);
    updateCarousel();
  });
  
  nextBtn.addEventListener('click', () => {
    currentIndex = Math.min(currentIndex + 1, items.length - 1);
    updateCarousel();
  });
});

    
    let currentIndex = 0;
    const totalItems = items.length;
    
    // Crear indicadores dinámicamente
    for (let i = 0; i < totalItems; i++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (i === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToSlide(i));
        indicatorsContainer.appendChild(indicator);
    }
    
    const indicators = document.querySelectorAll('.indicator');
    
    // Función para actualizar los indicadores
    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            indicator.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Función para mover el carrusel
    function moveCarousel() {
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
        carousel.style.display = 'none';
        carousel.offsetHeight;
        updateIndicators();
    }
    
    // Ir a un slide específico
    function goToSlide(index) {
        currentIndex = index;
        moveCarousel();
    }
    
    // Botón anterior
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalItems) % totalItems;
        moveCarousel();
    });
    
    // Botón siguiente
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalItems;
        moveCarousel();
    });