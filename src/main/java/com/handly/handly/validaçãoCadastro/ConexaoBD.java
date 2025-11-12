package com.handly.handly.validaçãoCadastro;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class ConexaoBD {
    //Banco de dados MySQL
    private static final String URL = "";
    private static final String USUARIO = "";
    private static final String SENHA = "";

    public static Connection conectar() {
        try {
            Connection conexao = DriverManager.getConnection(URL, USUARIO, SENHA);
            System.out.println("Conectado com sucesso!");
            return conexao;
        } catch (SQLException e) {
            System.out.println("Erro ao conectar: " + e.getMessage());
            return null;
        }
    }
}

