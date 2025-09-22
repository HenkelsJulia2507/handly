package com.handly.handly.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.DiscriminatorValue;

@Entity
@Table(name = "prestadores_servico")
@DiscriminatorValue("PRESTADOR")
@PrimaryKeyJoinColumn(name = "id")
public class PrestadorServico extends Usuario {

    private String nome;
    private String telefone;
    private String endereco;
    private String cpf;

    public PrestadorServico() {
    }

    public PrestadorServico(Long id, String username, String password, String role, String nome, String telefone,
            String endereco, String cpf) {
        super(id, username, password, role);
        this.nome = nome;
        this.telefone = telefone;
        this.endereco = endereco;
        this.cpf = cpf;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getTelefone() {
        return telefone;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public String getCpf() {
        return cpf;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }
}
