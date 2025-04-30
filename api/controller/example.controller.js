const securedExample = async (req, res) => {
    console.log('Algum processo que precisa de autenticação estava rodando aqui');
    return res.status(200).json({ message: 'Esse é um endpoint seguro' });
}
export default { securedExample };