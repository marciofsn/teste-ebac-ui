/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {
    
    beforeEach(() => {
        produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ariel Roll Sleeve Sweatshirt')
        cy.get('#tab-title-description > a').should('have.text', 'Descrição')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Jupiter All-Weather Trainer'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Ariel Roll Sleeve Sweatshirt')
        cy.get('.product_title').should('contain', 'Ariel Roll Sleeve Sweatshirt')
    });

    it('Deve adicionar produto ao carrinho', () => {
        let qtd = 10
        let produto = 'Taurus Elements Shell'
        let tamanho = 'L'
        let cor = 'Yellow'
        produtosPage.buscarProduto(produto)
        produtosPage.addProdutoCarrinho(tamanho, cor, qtd)

        // cy.get('.woocommerce-message').should('be.visible').and('contain', qtd + ' ×' + ` “${produto}”` + ' foram adicionados no seu carrinho.')
        // cy.get('.woocommerce-message').should('contain', qtd + ' ×' + ` “${produto}”` + ' foram adicionados no seu carrinho.')
        cy.get('.woocommerce-message').should('contain', qtd + ' ×' + ' “' + produto +'”' + ' foram adicionados no seu carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho usando massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[1].tamanho, 
                dados[1].cor, 
                dados[1].quantidade)

        cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)
        })
    });
    
});