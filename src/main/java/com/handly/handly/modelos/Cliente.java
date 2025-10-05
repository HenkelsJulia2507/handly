package com.handly.handly.modelos;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import jakarta.persistence.PrimaryKeyJoinColumn;
import jakarta.persistence.DiscriminatorValue;

@Entity
@Table(name = "clientes")
@DiscriminatorValue("CLIENTE")
@PrimaryKeyJoinColumn(name = "id")
public class Cliente extends Usuario {

       @ManyToOne //muitos clientes para um prestador
       private PrestadorServico prestadorServico;
    
    private String nome;
    private String telefone;
    private String email;
    private String senha;
    private String cep;

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

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }
}