// $(".bodypart").on("click", function(e) {
//     const clickedElement = $(this);
//     $(this).addClass("animate");
//     $(".bodypart").fadeOut(500, function(e) {
//         window.location.href = clickedElement.data("redirect");
//     })
// })

async function typeWriterEffect(element, text, delay=30) {
    element.innerHTML = "";
    for (const char of text) {
        element.innerHTML += char;
        await new Promise(resolve => setTimeout(resolve, delay));
    }
}

$(function () {
    $(".hitbox").click(function() {
        $(".hitbox").hide();
        const clickedHitbox = $(this);
        $(".display-image").fadeOut(500, function() {
            window.location.href = clickedHitbox.data("redirect");
        });
    })

    const headerElement = document.querySelector(".header-text h3");
    const typeWriterText = "Click on the body section you want to learn: (Head, Torso, or Arms)."
    typeWriterEffect(headerElement, typeWriterText);
});
