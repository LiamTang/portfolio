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
      const delChar = `${array[index].substring(
        -array[index].length,
        charCount,
      )}|`;
      pLocation.innerHTML = delChar;
      charCount -= 1;
      setTimeout(deleteText, 500);
    }
  };

  function deleteText() {
    if (charCount >= 0) {
      const delChar = `${array[index].substring(
        -array[index].length,
        charCount,
      )}|`;
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
    const eachSectionName = [
      'homepage',
      'about-page',
      'works-page',
      'education-page',
      'contact-page',
    ];
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
    }
  };

  /** dark mode setting */
  document.querySelector('.light-icon').addEventListener('click', () => {
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
  });

  /** set navigation toggle in the small media screen */
  document.querySelector('.nav-toggle').addEventListener('click', () => {
    const navLink = document.querySelector('.nav-link');
    navLink.classList.toggle('nav-link_active');

    const navBar = document.querySelector('.nav-bar');
    navBar.classList.toggle('nav-toggle_active');
  });

  /** set email validation */
  document.querySelector('.submit').addEventListener('click', (e) => {
    const subject = document.forms.contactForm.subject.value;
    const message = document.forms.contactForm.message.value;
    if (subject.length <= 2) {
      e.preventDefault();
    }
    if (message.length <= 2) {
      e.preventDefault();
    }
  });

  /** set slide animation of work lists */
  const weatherProject = document.querySelector('.slider-weather-project');
  const pizzaProject = document.querySelector('.slider-pizza-project');
  const calculatorProject = document.querySelector(
    '.slider-calculator-project',
  );
  const calendarProject = document.querySelector(
    '.slider-calendar-project',
  );
  document.querySelector('.list1').addEventListener('click', () => {
    weatherProject.classList.add('active-slide');
    weatherProject.classList.remove('hide-slide');

    pizzaProject.classList.remove('active-slide');
    calculatorProject.classList.remove('active-slide');
    calendarProject.classList.remove('active-slide');
  });

  document.querySelector('.list2').addEventListener('click', () => {
    pizzaProject.classList.add('active-slide');
    pizzaProject.classList.remove('hide-slide');

    calculatorProject.classList.add('hide-slide');
    calculatorProject.classList.remove('active-slide');
    weatherProject.classList.add('hide-slide');
    weatherProject.classList.remove('active-slide');
    calendarProject.classList.add('hide-slide');
    calendarProject.classList.remove('active-slide');
  });

  document.querySelector('.list3').addEventListener('click', () => {
    calculatorProject.classList.remove('hide-slide');
    calculatorProject.classList.add('active-slide');

    weatherProject.classList.remove('active-slide');
    weatherProject.classList.add('hide-slide');
    pizzaProject.classList.remove('active-slide');
    pizzaProject.classList.add('hide-slide');
    calendarProject.classList.add('hide-slide');
    calendarProject.classList.remove('active-slide');
  });

  document.querySelector('.list4').addEventListener('click', () => {
    calendarProject.classList.add('active-slide');
    calendarProject.classList.remove('hide-slide');

    calculatorProject.classList.add('hide-slide');
    calculatorProject.classList.remove('active-slide');
    weatherProject.classList.remove('active-slide');
    weatherProject.classList.add('hide-slide');
    pizzaProject.classList.add('hide-slide');
    pizzaProject.classList.remove('active-slide');
  });
});
