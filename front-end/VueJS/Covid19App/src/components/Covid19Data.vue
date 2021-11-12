<template>
  <div class="container">
    <div id="reading">
    <h3>UK Covid19 Data:</h3>
    <figure>{{name[0].deaths}}</figure>
    <figcaption>(Total Death Toll)</figcaption>
    </div> 
  </div> 
</template>

<script>
import axios from 'axios';
import { apiAccess } from '/User/config';

  export default {
    name: 'Covid19Data',
    data() {
      return {
        name: [0],
      };
    },
    created: function() {
      axios
        .get('https://covid-19-data.p.rapidapi.com/country/',
          {params:{name: 'UK', date: '2020-04-01'},
          headers: {
            'x-rapidapi-key': apiAccess(), 
            'x-rapidapi-host':'covid-19-data.p.rapidapi.com'
          }
          })
        .then(res => {
          this.name = res.data;
          console.log(res.data)
        })
    }
  }
</script>

<style>
  h3 {
    color: forestgreen;
    padding:0%
  }
  #reading {
    margin-top:5%;
    margin-left: 35%;
    margin-right:35%;
    padding:0%;
    border: green;
    border-style: solid;
    border-radius: 1em;
  }
  figure {
    font-size: xx-large;
  }
  figcaption {
    font-size: medium;
    font-style: italic;
  }
</style>