export const gerarMassa = () => {
    const email = `${Math.random().toString(36).substring(2, 10)}@teste.com.br`;
    return email;
}