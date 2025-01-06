<template>
    <div class="artist-info">
      <h1>Informações do Artista</h1>

      <input
        v-model="artistName"
        @keyup.enter="fetchArtistData"
        placeholder="Digite o nome do artista"
      />
  
      <p v-if="isLoading">Carregando...</p>

      <p v-if="error">{{ error }}</p>
  
      <div v-if="artist">
        <h2>{{ artist.name }}</h2>
        <img :src="artist.image[2]['#text']" alt="Foto do Artista" />
        <p>{{ artist.bio.summary }}</p>
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        artistName: "",
        artist: null,
        isLoading: false,
        error: null,
      };
    },
    methods: {
      async fetchArtistData() {

        if (!this.artistName) {
          this.error = "Por favor, insira o nome de um artista!";
          return;
        }
  
        this.isLoading = true;
        this.error = null;
        this.artist = null;
  
        try {
          const response = await axios.get(
            `https://ws.audioscrobbler.com/2.0/`,
            {
              params: {
                method: "artist.getinfo",
                artist: this.artistName,
                api_key: "67898544dd61d6d7aa522ec70a263a9e",
                format: "json",
              },
            }
          );

          if (response.data.artist) {
            this.artist = response.data.artist;
          } else {
            this.error = "Artista não encontrado!";
          }
        } catch (err) {
          this.error = "Erro ao buscar os dados. Verifique a sua conexão!";
        } finally {
          this.isLoading = false;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .artist-info {
    text-align: center;
    margin: 20px auto;
    max-width: 600px;
  }
  
  input {
    padding: 10px;
    width: 80%;
    margin-bottom: 10px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 20px;
  }
  </style>
  