// Certifica-se de que o código será executado após o DOM estar completamente carregado
document.addEventListener("DOMContentLoaded", () => {
  // Seleciona todos os links do menu que têm um href começando com #
  const menuLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

  // Função para obter a distância de um elemento até o topo da página
  function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href"); // Obtém o id da seção
    return document.querySelector(id).offsetTop; // Retorna a distância do topo
  }

  // Função que trata o evento de clique para o scroll suave
  function scrollToSection(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const distanceFromTheTop = getDistanceFromTheTop(event.target) - 90; // Calcula a distância com o ajuste de 90px
    smoothScrollTo(0, distanceFromTheTop); // Chama a função de scroll suave
  }

  // Adiciona o evento de clique para cada link do menu
  menuLinks.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });

  // Função que realiza o scroll suave
  function smoothScrollTo(endX, endY, duration = 800) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    // Função de easing para suavizar o movimento
    const easeInOutQuart = (time, from, distance, duration) => {
      time /= duration / 2;
      if (time < 1) return (distance / 2) * time * time * time * time + from;
      time -= 2;
      return (-distance / 2) * (time * time * time * time - 2) + from;
    };

    // Atualiza a posição da janela a cada frame
    function animationFrame() {
      const currentTime = new Date().getTime() - startTime;
      const newX = easeInOutQuart(currentTime, startX, distanceX, duration);
      const newY = easeInOutQuart(currentTime, startY, distanceY, duration);

      // Se o tempo for maior que a duração, o scroll termina
      if (currentTime >= duration) {
        window.scrollTo(endX, endY);
        return;
      }

      window.scrollTo(newX, newY);
      requestAnimationFrame(animationFrame); // Continua a animação
    }

    // Inicia a animação
    requestAnimationFrame(animationFrame);
  }
});
