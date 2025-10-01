 function createParticles() {
      const particlesContainer = document.getElementById("particles");
      for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.top = Math.random() * 100 + "vh";
        particle.style.animationDelay = Math.random() * 8 + "s";
        particle.style.animationDuration = (Math.random() * 3 + 5) + "s";
        particlesContainer.appendChild(particle);
      }
    }

    createParticles();