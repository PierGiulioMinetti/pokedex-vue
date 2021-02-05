

  


const app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      numero: '',
      pokemon: '',
    },
    // created(){
    //     console.log(this.numero);
    // },
    
    methods:{
    
        gerRandomNumber(min, max){
            // GEN NUM
            this.numero = Math.floor(Math.random() * (max - min + 1) + min );
            // return console.log( this.numero);

            // AXIOS
            // Make a request for a user with a given ID
        axios.get('https://pokeapi.co/api/v2/pokemon/' + this.numero)
            .then(response=> {
            // handle success
            // console.log(response.data.name);
            let name = response.data.name;
            console.log(name);
            let img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.numero}.svg`;
        
            
            // CREAZIONE OGGETTO
             this.pokemon ={
                 name,
                 img
                }
                
            ;
                return console.log(this.pokemon);
            })
            .catch(error=> {
            // handle error
            console.log(error);
            })

            // COMMENTO



        }
       
    
        }
    

  }); //vue