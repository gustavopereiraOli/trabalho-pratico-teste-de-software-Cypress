describe("Calculadora", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  // paulo
  it("deve limpar os campos ao clicar em limpar", () => {
    cy.get('[data-cy="num1"]').type("10");
    cy.get('[data-cy="operacao"]').select("+");
    cy.get('[data-cy="num2"]').type("5");
    cy.get('[data-cy="calcular"]').click();
    cy.get('[data-cy="limpar"]').click();
    cy.get('[data-cy="num1"]').should("have.value", "");
    cy.get('[data-cy="num2"]').should("have.value", "");
    cy.get('[data-cy="resultado"]').should("be.empty");
  });

  // victor
  it("deve exibir erro ao selecionar uma operação inválida", () => {
    cy.get('[data-cy="num1"]').clear().type("10");
    cy.get('[data-cy="num2"]').clear().type("5");

    cy.get('[data-cy="operacao"]')
      .invoke("removeAttr", "required")
      .invoke("val", "")
      .trigger("change");

    cy.get('[data-cy="calcular"]').click();

    cy.get('[data-cy="resultado"]').should(
      "contain.text",
      "Erro: Operação inválida"
    );
    cy.get('[data-cy="resultado"]').should(
      "have.css",
      "background-color",
      "rgb(248, 215, 218)"
    );
  });

  // gustavo
  it("deve exibir erro ao tentar dividir por zero", () => {
    const numeradores = ["10", "154", "1000"];

    numeradores.forEach((n) => {
      cy.get('[data-cy="num1"]').clear().type(n);
      cy.get('[data-cy="operacao"]').select("/");
      cy.get('[data-cy="num2"]').clear().type("0");
      cy.get('[data-cy="calcular"]').click();

      cy.get('[data-cy="resultado"]').should(
        "contain.text",
        "Divisão por zero não é permitida"
      );
      cy.get('[data-cy="resultado"]').should(
        "have.css",
        "background-color",
        "rgb(248, 215, 218)"
      );

      cy.get('[data-cy="limpar"]').click();
    });
  });

  // luis
  it("deve realizar todas as operações corretamente", () => {
    const oparacaoRecord = {
      "+": "soma",
      "-": "subtração",
      "*": "multiplicação",
      "/": "divisão",
    };

    const operacoes = [
      { op: "+", n1: "10", n2: "5", res: "15" },
      { op: "-", n1: "10", n2: "5", res: "5" },
      { op: "*", n1: "10", n2: "5", res: "50" },
      { op: "/", n1: "10", n2: "5", res: "2" },
    ];

    operacoes.forEach(({ op, n1, n2, res }) => {
      cy.get('[data-cy="num1"]').clear().type(n1);
      cy.get('[data-cy="operacao"]').select(op);
      cy.get('[data-cy="num2"]').clear().type(n2);
      cy.get('[data-cy="calcular"]').click();

      const operacaoTexto = oparacaoRecord[op];

      cy.get('[data-cy="resultado"]').should(
        "contain.text",
        `O resultado da ${operacaoTexto} entre ${n1} e ${n2} é: ${res}`
      );
      cy.get('[data-cy="resultado"]').should(
        "have.css",
        "background-color",
        "rgb(212, 237, 218)"
      );

      cy.get('[data-cy="limpar"]').click();
    });
  });
});
