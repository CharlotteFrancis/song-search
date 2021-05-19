document.getElementById('submit').addEventListener('click', event =>{
  event.preventDefault()
  axios.get(`https://api.happi.dev/v1/music?q=${document.getElementById('song_name').value}&limit=&apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON&type=&lyrics=1`)
    .then(res => {
      let songArray = res.data.result
      if (res.data.length() > 10) {
        console.log('works')
      } else {
        console.log('doesnt work')
      }
      console.log(songArray)
      document.getElementById('song_list').innerHTML = ''
    })
    .catch(err => console.error(err))

})






