const animationContainer = document.getElementById('animal-animation');

    function createPaw() {
        const paw = document.createElement('div');
        paw.classList.add('paw');
        paw.style.left = Math.random() * window.innerWidth + 'px';
        paw.style.animationDuration = 2 + Math.random() * 3 + 's';
        animationContainer.appendChild(paw);

        setTimeout(() => {
            paw.remove();
        }, 5000);
    }

    setInterval(createPaw, 300);

    