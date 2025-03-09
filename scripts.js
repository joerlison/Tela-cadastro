function formatarCPF(input) {
    // Remove tudo que não for número
    let cpf = input.value.replace(/\D/g, '');
  
    // Formata o CPF no padrão XXX.XXX.XXX-XX
    if (cpf.length > 3) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 6) {
      cpf = cpf.replace(/(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 9) {
      cpf = cpf.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
  
    // Atualiza o valor no campo
    input.value = cpf;
  }
  