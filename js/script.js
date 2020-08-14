document.addEventListener('DOMContentLoaded', () => {
  /** add typing feature in the homepage */
  const pLocation = document.getElementById('firstParagraph');
  const array = [
    '/* Welcome to my personal portfolio website */ ',
    '/* I am an expert on web design and web development /* ',
  ];
  let index = 0;
  let charCount = 0;

  const typing = () => {
    if (charCount < array[index].length) {
      const addChar = `${array[index].substring(0, charCount)}|`;
      pLocation.innerHTML = addChar;
      charCount += 1;
      setTimeout(typing, 100);
    } else if (charCount >= array[index].length) {
      const delChar = `${array[index].substring(-array[index].length, charCount)}|`;
      pLocation.innerHTML = delChar;
      charCount -= 1;
      setTimeout(deleteText, 500);
    }
  };

  function deleteText() {
    if (charCount >= 0) {
      const delChar = `${array[index].substring(-array[index].length, charCount)}|`;
      pLocation.innerHTML = delChar;
      charCount -= 1;
      setTimeout(deleteText, 50);
    } else if (index <= array.length) {
      index += 1;
      typing();
    } else {
      typing();
    }
  }
  typing();

  /** add scroll trigger */
  window.onscroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    const section = document.querySelectorAll('section');
    const navLink = document.querySelector('.nav-link');
    const homepage = document.getElementById('homepage');
    const sections = {};
    Array.prototype.forEach.call(section, (e) => {
      sections[e.id] = e.offsetTop;
    });
    const eachSectionHeight = Object.values(sections);
    const eachSectionName = ['homepage', 'about-page', 'works-page', 'education-page', 'contact-page'];
    if (scrollPosition < homepage.offsetHeight - 100) {
      document.querySelector('.nav-bar').classList.remove('show-nav');
      document.querySelector('.back-top').classList.remove('show-back-top');
    } else {
      for (let i = 0; i < eachSectionHeight.length; i += 1) {
        if (eachSectionHeight[i] <= scrollPosition + 5) {
          document.querySelector('.back-top').classList.add('show-back-top');
          document.querySelector('.active').setAttribute('class', ' ');
          document.querySelector('.nav-bar').classList.add('show-nav');
          navLink
            .querySelector(`a[href*=${eachSectionName[i]}]`)
            .setAttribute('class', 'active');
        }
      }
      // for (const i in sections) {
      //   if (sections[i] <= scrollPosition) {
      //     document.querySelector('.back-top').classList.add('show-back-top');
      //     document.querySelector('.active').setAttribute('class', ' ');
      //     document.querySelector('.nav-bar').classList.add('show-nav');
      //     navLink
      //       .querySelector(`a[href*=${i}]`)
      //       .setAttribute('class', 'active');
      //   }
      // }
    }
  };
});

/** dark mode setting */
const setDarkMode = () => {
  const { body } = document;
  body.classList.toggle('dark-mode');
  const title = document.querySelector('.title');
  const image = title.querySelector('img');
  if (image.alt.match('light')) {
    image.src = './asset/image/moon.svg';
    image.alt = 'moon';
  } else {
    image.src = './asset/image/sun.svg';
    image.alt = 'light';
  }
};

/** set slide of work */
const setSlide = (id) => {
  const weatherProject = document.querySelector('.slider-weather-project');
  const pizzaProject = document.querySelector('.slider-pizza-project');
  const calculatorProject = document.querySelector(
    '.slider-calculator-project',
  );

  if (id === 1) {
    weatherProject.classList.add('active-slide');
    pizzaProject.classList.remove('active-slide');
    calculatorProject.classList.remove('active-slide');
    weatherProject.classList.remove('hide-slide');
  }
  if (id === 2) {
    pizzaProject.classList.remove('hide-slide');
    weatherProject.classList.add('hide-slide');
    calculatorProject.classList.add('hide-slide');
    pizzaProject.classList.add('active-slide');
    calculatorProject.classList.remove('active-slide');
    weatherProject.classList.remove('active-slide');
  }
  if (id === 3) {
    calculatorProject.classList.remove('hide-slide');
    calculatorProject.classList.add('active-slide');
    weatherProject.classList.remove('active-slide');
    pizzaProject.classList.remove('active-slide');
    weatherProject.classList.add('hide-slide');
    pizzaProject.classList.add('hide-slide');
  }
};

/** set navigation toggle in the small media screen */
const toggle = () => {
  const navLink = document.querySelector('.nav-link');
  navLink.classList.toggle('nav-link_active');

  const navBar = document.querySelector('.nav-bar');
  navBar.classList.toggle('nav-toggle_active');
};

/** set email validation */
const myForm = () => {
  document.querySelector('.submit').addEventListener('click', (e) => {
    // const name = document.forms.contactForm.fullName.value;
    // const email = document.forms.contactForm.email.value;
    const subject = document.forms.contactForm.subject.value;
    const message = document.forms.contactForm.message.value;
    if (subject.length <= 2) {
      e.preventDefault();
    }
    if (message.length <= 2) {
      e.preventDefault();
    }
  });
};
