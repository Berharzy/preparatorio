function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    // Esconde todos os conteúdos das abas
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe "active" de todos os botões das abas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Mostra o conteúdo da aba atual e adiciona uma classe "active" ao botão da aba
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Abre a primeira aba por padrão
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".tab button").click();
});

/* funcção do player */

document.addEventListener('DOMContentLoaded', function() {
    const checkbox = document.getElementById('rememberCheckbox');

 


});
