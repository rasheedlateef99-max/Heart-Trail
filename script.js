document.addEventListener("mousemove", function (event) {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💛";

    heart.style.left = event.clientX + "px";
    heart.style.top = event.clientY + "px";

    heart.style.fontSize = Math.random() * 40 + 30 + "px";

    heart.style.filter = `hue-rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 1000);
});