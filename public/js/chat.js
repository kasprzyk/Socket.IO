const socket = io();

socket.on('countUpdated', () => {
  console.log('The count has beed updated');
});
