<template>
  <teleport to="body">
    <div class="draggable w-full m-0 sm:w-1/2 sm:m-4">
      <div class="border-solid border-4 border-gray-400 bg-gray-600">
        <section class="dragger h-4 bg-gray-400 cursor-pointer"></section>
        <h1 class="text-green-700 text-3xl">GREEN WINDOW</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore porro eveniet quibusdam sit asperiores sunt natus consequatur veritatis accusamus cumque!</p>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  name: "Green",
  data() {
    return {
      x: null,
      y:null,
      target: null
    }
  },
  mounted() {
    console.log("Green Window");
    document.addEventListener('mousedown', function(e) {
      var clickedDragger = false;
      for(var i = 0; e.path[i] !== document.body; i++) {
        if (e.path[i].classList.contains('dragger')) {
          clickedDragger = true;
        }
        else if (clickedDragger && e.path[i].classList.contains('draggable')) {
          this.target = e.path[i];
          this.target.classList.add('dragging');
          this.x = e.clientX - this.target.style.left.slice(0, -2);
          this.y = e.clientY - this.target.style.top.slice(0, -2);
          return;
        }
      }
    });

    document.addEventListener('mouseup', function() {
      if (this.target !== null) this.target.classList.remove('dragging');
      this.target = null;
    });

    document.addEventListener('mousemove', function(e) {
      if (this.target === null) return;
      this.target.style.left = e.clientX - this.x + 'px';
      this.target.style.top = e.clientY - this.y + 'px';
      var pRect = this.target.parentElement.getBoundingClientRect();
      var tgtRect = this.target.getBoundingClientRect();

      if (tgtRect.left < pRect.left) this.target.style.left = 0;
      if (tgtRect.top < pRect.top) this.target.style.top = 0;
      if (tgtRect.right > pRect.right) this.target.style.left = pRect.width - tgtRect.width + 'px';
      if (tgtRect.bottom > pRect.bottom) this.target.style.top = pRect.height - tgtRect.height + 'px';
    });  
  },
  unmounted() {
    console.log("unounted");
  }
}
</script>

<style scoped>
.draggable {
  position: relative;
  /* top:50%;
  left: 50%;
  transform: translate(-50%, -50%); */
}
.draggable.dragging {
  user-select: none;
}
</style>