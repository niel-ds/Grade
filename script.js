document.addEventListener("DOMContentLoaded", function () {
    const materias = [
        "Aprofundamento 1", "Aprofundamento 2", "Arte", "Biologia", "Educação Física",
        "Filosofia", "Física", "Geografia", "História", "Identidade e Protagonismo",
        "Língua Inglesa", "Matemática", "Língua Portuguesa", "Química", "Sociologia"
    ];

    const container = document.querySelector(".materias-container");

    materias.forEach(materia => {
        const divMateria = document.createElement("div");
        divMateria.classList.add("materia");

        const titulo = document.createElement("h2");
        titulo.textContent = materia;
        divMateria.appendChild(titulo);

        const divNotas = document.createElement("div");
        divNotas.classList.add("notas");

        for (let i = 1; i <= 4; i++) {
            const input = document.createElement("input");
            input.type = "number";
            input.placeholder = `${i}º Trim`;
            input.min = "0";
            input.max = "10";
            divNotas.appendChild(input);
        }

        divMateria.appendChild(divNotas);
        container.appendChild(divMateria);
    });

    document.getElementById("calcular").addEventListener("click", () => {
        alert("Função de cálculo ainda não implementada!");
    });
});