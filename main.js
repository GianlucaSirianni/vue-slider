var app = new Vue(
    {
      el: '#root',
      data: {
        images: [
            {image: 'https://picsum.photos/id/237/800/400'},
            {image: 'https://picsum.photos/id/236/800/400'},
            {image: 'https://picsum.photos/id/235/800/400'},
            {image: 'https://picsum.photos/id/234/800/400'},
            {image: 'https://picsum.photos/id/233/800/400'},
        ],
        currentIndex: 0,
      },

      methods: {
        left: function(){
          if (this.currentIndex == 0){
            return this.currentIndex = this.images.length - 1;
          } else {
            return this.currentIndex--;
          }
        },

        right: function(){
          this.currentIndex++;

          if (this.currentIndex >= this.images.length){
            return this.currentIndex = 0;
          }
        },
        
      }
    }
  )

