const floriografiaData = {
    amor: {
        flor: "Rosa Vermelha",
        significado: "Para expressar amor profundo e paixão incondicional. É o símbolo clássico do afeto romântico.",
        link: "significados.html#sig1"
    },

    gratidao: {
        flor: "Crisântemo",
        significado: "Representa a verdade e a lealdade. Ideal para expressar agradecimento duradouro e sincero.",
        link: "significados.html#sig1"
    },

    amizade: {
        flor: "Alecrim",
        significado: "Simboliza a lembrança e a fidelidade. Perfeito para honrar uma amizade que perdura no tempo.",
        link: "significados.html#sig1"
    },

    desculpas: {
        flor: "Lírio Branco",
        significado: "Sinaliza pureza, arrependimento e a busca por um novo começo, transmitindo um pedido de desculpas sincero.",
        link: "significados.html#sig1"
    },

    paz: {
        flor: "Cíclame",
        significado: "Símbolo de resignação e sinceridade. Usado para transmitir tranquilidade e desejo de harmonia.",
        link: "significados.html#sig2"
    },
    
    consolo: {
        flor: "Papoula",
        significado: "Representa a consolação e o sono. É a flor ideal para levar conforto e descanso em momentos difíceis.",
        link: "significados.html#sig2"
    },

    surpresa: {
        flor: "Petúnia",
        significado: "Pode expressar surpresa ou até mesmo raiva. Use com cautela para uma declaração inesperada.",
        link: "significados.html#sig2"
    },

    orgulho: {
        flor: "Lírio Tigre",
        significado: "Símbolo de orgulho, prosperidade e riqueza. Uma flor vibrante para celebrar grandes conquistas.",
        link: "significados.html#sig2"
    }
};

const botoesEmocao = document.querySelectorAll('.emocaobotao');
const resultadocaixa = document.getElementById('resultadocaixa'); 

function consultarFlor(evento) {
    const emocao = evento.currentTarget.getAttribute('emotion');
    const sugestao = floriografiaData[emocao];
    if (sugestao) {
        const htmlResultado = `
            <h3>Para transmitir '${evento.currentTarget.textContent}', sugerimos:</h3>
            <h2>${sugestao.flor}</h2>
            <p>${sugestao.significado}</p>
            <a href="${sugestao.link}" class="linksignificado">Ver significado completo da flor ${sugestao.flor} ></a>
        `;
        resultadocaixa.innerHTML = htmlResultado;
    } else {
        resultadocaixa.innerHTML = `<h3>Desculpe, não temos uma sugestão para a emoção '${emocao}' no momento.</h3>`;
    }
}
botoesEmocao.forEach(botao => {
    botao.addEventListener('click', consultarFlor);
});