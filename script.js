function typeTextOnce(id, text, delay = 50, callback) {
    let el = document.getElementById(id);
    let i = 0;
    function type() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, delay);
      } else if (callback) {
        callback();
      }
    }
    type();
  }

  
  function typeMultiple(id, texts, typingDelay = 60, erasingDelay = 40, pause = 1500) {
    const el = document.getElementById(id);
    let textIndex = 0;
    let charIndex = 0;
    let typing = true;

    function animate() {
      const currentText = texts[textIndex];
      
      if (typing) {
        if (charIndex < currentText.length) {
          el.textContent += currentText.charAt(charIndex);
          charIndex++;
          setTimeout(animate, typingDelay);
        } else {
          typing = false;
          setTimeout(animate, pause);
        }
      } else {
        if (charIndex > 0) {
          el.textContent = currentText.substring(0, charIndex - 1);
          charIndex--;
          setTimeout(animate, erasingDelay);
        } else {
          typing = true;
          textIndex = (textIndex + 1) % texts.length;
          setTimeout(animate, 500);
        }
      }
    }

    animate();
}

window.onload = () => {
    const subjudulList = [
      "Selalu mengembangkan creativitas photographer.",
      "Menekankan profesionalisme dan kemampuan mengabadikan momen-momen berharga.",
      " Menekankan kemampuan menangkap keindahan yang tak terduga di sekitar kita."
    ];

    typeTextOnce("deskripsi", "Selamat Datang di website Creative Photographer", 60, () => {
      typeMultiple("sub-deskripsi", subjudulList);
    });
  };

  function typeTextOnce(id, text, delay = 50, callback) {
    let el = document.getElementById(id);
    let i = 0;
    function type() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, delay);
      } else if (callback) {
        callback();
      }
    }
    type();
  }
