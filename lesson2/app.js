new Vue({
    el:'#app',
    data:{
        imageIndex:0,
        gallery: [
            'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
            'https://i.pinimg.com/736x/2e/18/ab/2e18ab3f71b73c6719b04c81625bb922--cat-cute-cute-pets.jpg',
            'https://lh3.googleusercontent.com/pj0jrgFCXjNtAkktmst6H1qaU4F9nmOE5b7_kAcwgYfoQfF7NQXQo3uu2lteXqFrEsg=w300',
            'https://i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg',
            'https://i.ytimg.com/vi/U4hmssxV1fI/hqdefault.jpg',
            'http://www.cutestpaw.com/wp-content/uploads/2011/11/Dream-About-Me.jpg',
            'https://static.pexels.com/photos/45170/kittens-cat-cat-puppy-rush-45170.jpeg'
        ]
    },
    methods:{
        geriGit:function(){
            if(this.imageIndex === 0){
                this.imageIndex = this.gallery.length - 1;
            } else {
                this.imageIndex -= 1;
            }
        },
        ileriGit:function(){
            if(this.imageIndex === this.gallery.length - 1){
                this.imageIndex = 0;
            } else {
                this.imageIndex += 1;
            }
        },
        fotoyaGit:function(index){
            this.imageIndex = index;
        }
    }
});
