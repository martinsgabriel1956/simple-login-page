export const switchTheme = () => {
  const app = document.querySelector('#app');
  const switchBtn = document.querySelector('.switch-theme-btn');
  const imgBg = document.querySelector('img.bg');
  const linkText = document.querySelector('a');
  
  app.classList.add('light-theme');
  imgBg.src = './assets/bg-light.svg';
  
  switchBtn.addEventListener('click', () => {
    app.classList.toggle('light-theme');
    app.classList.toggle('dark-theme');
    
    if(app.classList.contains('light-theme')) {
      imgBg.src = './assets/bg-light.svg';
      linkText.style.color = '#000';
    } else if(app.classList.contains('dark-theme')) {
      imgBg.src = './assets/bg-dark.svg';
      linkText.style.color = '#20DF7F';
    }
  })
};

