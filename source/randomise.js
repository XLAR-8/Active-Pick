<script>
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
    console.log(Math.floor(Math.random() * (max - min)) + min);
  return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
}
</script>

