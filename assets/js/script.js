// Número oficial da loja (DDI + DDD + Número, apenas dígitos)
const TELEFONE_LOJA = "5511981010300";

/**
 * 1. Compra rápida direto dos cards de Produtos
 */
function comprarPeloWhatsApp(nomeProduto, precoProduto) {
    const mensagem = `Olá, Aura Moda Feminina! Tenho interesse na peça *${nomeProduto}* (${precoProduto}). Gostaria de verificar tamanhos disponíveis.`;
    const url = `https://wa.me/${TELEFONE_LOJA}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, "_blank");
}

/**
 * 2. Captura de dados do formulário de Contato e envio dinâmico para WhatsApp
 */
document.addEventListener("DOMContentLoaded", () => {
    const formContato = document.getElementById("form-whatsapp");

    if (formContato) {
        formContato.addEventListener("submit", function (evento) {
            evento.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const assunto = document.getElementById("assunto").value;
            const mensagemUsuario = document.getElementById("mensagem").value.trim();

            const textoFinal =
                `Olá! Meu nome é *${nome}*.\n` +
                `*Assunto:* ${assunto}\n` +
                `*Mensagem:* ${mensagemUsuario}`;

            const urlWhatsApp = `https://wa.me/${TELEFONE_LOJA}?text=${encodeURIComponent(textoFinal)}`;
            window.open(urlWhatsApp, "_blank");
        });
    }

    /**
     * 3. Feedback visual ao clicar no botão de Download do Catálogo PDF
     */
    const botoesDownload = document.querySelectorAll(".btn-download-catalogo");

    botoesDownload.forEach((botao) => {
        botao.addEventListener("click", () => {
            const textoOriginal = botao.textContent;
            botao.textContent = "Baixando Catálogo...";
            botao.style.opacity = "0.8";

            const aviso = document.getElementById("feedback-download");
            if (aviso) {
                aviso.style.display = "block";
            }

            setTimeout(() => {
                botao.textContent = "✓ Catálogo Baixado!";
                botao.style.opacity = "1";
            }, 1000);

            setTimeout(() => {
                botao.textContent = textoOriginal;
            }, 4000);
        });
    });
});