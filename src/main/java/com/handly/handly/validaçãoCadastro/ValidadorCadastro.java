package com.handly.handly.validaçãoCadastro;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class ValidadorCadastro {

    public static boolean verificarCadastro(String email, String tipo) {
        String tabela = tipo.equalsIgnoreCase("cliente") ? "clientes" : "prestadores";
        String sql = "SELECT * FROM " + tabela + " WHERE email = ?";

        try (Connection conexao = ConexaoBD.conectar();
             PreparedStatement stmt = conexao.prepareStatement(sql)) {

            stmt.setString(1, email);
            ResultSet rs = stmt.executeQuery();

            if (rs.next()) {
                System.out.println("Usuário já cadastrado como " + tipo + "!");
                return true;
            } else {
                System.out.println("Usuário não encontrado no banco de dados.");
                return false;
            }

        } catch (SQLException e) {
            System.out.println("Erro ao verificar cadastro: " + e.getMessage());
            return false;
        }
    }

    public static void main(String[] args) {
        // Exemplo de uso
        boolean existe = verificarCadastro("teste@email.com", "cliente");
        System.out.println("Resultado: " + existe);
    }
}