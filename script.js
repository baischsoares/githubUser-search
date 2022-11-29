const app = new Vue({
    el: '#app',
    data: {
        userName: '',
        user: {},
        erro: '',
    },
    // filters: {
    //     dataFormatada(valor){
    //         return valor.length
    //     }
    // },
    methods: {
        puxarDados(){
           fetch(`https://api.github.com/users/${this.userName}`)
           .then(r => {
            if(r.status === 200){
               r.json().then(r => {
                this.user = r;
                this.user.created_at = this.user.created_at.substring(0, 10);
                if(this.erro){
                    document.querySelector('.erro').classList.remove('ativo')
                }
               })
            }
            if(r.status === 404) {
              this.erro = true;
              document.querySelector('.erro').classList.add('ativo')
            }
        })
    },
  },
})