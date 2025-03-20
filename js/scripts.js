function openCard(title, date, content) {
    document.getElementById('modal').style.display = 'flex';
    document.getElementById('modal-title').textContent = title;
    document.getElementById('modal-date').textContent = "Data: " + date;

    // Substitui \n por <br> para que as quebras de linha sejam corretamente aplicadas no HTML
    let formattedContent = content.replace(/\n/g, "<br>");

    // Adiciona a formatação de alinhamento à direita para as linhas "Atenciosamente" e "José Antônio Souza"
    formattedContent = formattedContent.split("<br>").map((line) => {
        // Verifica se a linha contém "Atenciosamente" ou "José Antônio Souza" e aplica o alinhamento à direita
        if (line.includes("Atenciosamente") || line.includes("José Antônio Souza")) {
            return `<p class="card-content-right">${line}</p>`;
        } else {
            return `<p>${line}</p>`;
        }
    }).join("<br>");  // Junta as linhas novamente com <br> no meio, para preservar as quebras de linha

    // Insere o conteúdo formatado no modal
    document.getElementById('modal-content').innerHTML = formattedContent;
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
