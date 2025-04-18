$(document).ready(function () {
  // Carrossel de imagens
  $(".images-carousel").slick({
    autoplay: true,
    autoplaySpeed: 1400,
    arrows: false,
    dots: true,
  });

  // Menu hambúrguer
  $(".menu-hamburguer").click(() => {
    $("nav").slideToggle(350);
  });

  // Máscara de telefone
  $("#telefone").mask("(00) 00000-0000", {
    placeholder: "(11) 91234-5678",
  });

  // Validação do formulário
  $(".form-contato").validate({
    rules: {
      nome: {
        required: true,
        minlength: 3,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      veiculo: {
        required: true,
      },
      mensagem: {
        required: true,
        minlength: 10,
      },
    },
    messages: {
      nome: {
        required: "Por favor, digite seu nome.",
        minlength: "Seu nome deve ter pelo menos 3 caracteres.",
      },
      email: {
        required: "Por favor, informe seu e-mail.",
        email: "Digite um e-mail válido.",
      },
      telefone: {
        required: "Informe um número de telefone para contato.",
      },
      veiculo: {
        required: "Informe o veículo de interesse.",
      },
      mensagem: {
        required: "Escreva uma mensagem.",
        minlength: "Sua mensagem precisa ter pelo menos 10 caracteres.",
      },
    },
    submitHandler: function (form) {
      alert(
        "Sua requisição foi enviada com sucesso! Entraremos em contato em breve."
      );
      form.reset();
    },
    invalidHandler: function () {
      alert("Preencha todos os campos obrigatórios antes de enviar.");
    },
  });

  // Preenche o campo de interesse
  $(".card-veiculo button, .card-promocao button").click(function () {
    const destino = $("#contato");
    const nomeveiculo = $(this).closest("li").find("h3").text();

    $("#veiculo").val(nomeveiculo);

    $("html, body").animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
