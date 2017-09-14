new Vue({
    el:'#app',
    data: {
        name:'Fatih'
    },
    methods: {
        gunaydin:function(){
            let gunaydinMesaji = 'Günaydın ' + this.name;
            return gunaydinMesaji;
        },
        iyiGeceler:function(){
            let iyiGecelerMesaji = 'İyi geceler ' + this.name;
            return iyiGecelerMesaji;
        }
    }
});
