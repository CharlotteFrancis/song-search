document.getElementById('submit').addEventListener('click', event =>{
  event.preventDefault()
  axios.get(`https://api.happi.dev/v1/music?q=${document.getElementById('song_name').value}&limit=&apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON&type=&lyrics=1`)
    .then(res => {
      let songArray = res.data.result
      console.log(songArray)
      document.getElementById('song_list').innerHTML = ''
      if (songArray.length >= 10) {
        for (let i = 0; i < 10; i++) {
          let song = document.createElement('li')
          song.innerHTML = `
          <h1>Artist: ${songArray[i].artist}</h1>
          <h2>Title: ${songArray[i].track}</h2>
          <h3>Album: ${songArray[i].album}</h3>
          `
          // jacob's code ^
          document.getElementById('song_list').append(song)
        }
        console.log('works')
      } else {
        for (let i = 0; i < songArray.length; i++) {
          let song = document.createElement('li')
          song.innerHTML = `
          <<h1>Artist: ${songArray[i].artist}</h1>
          <h2>Title: ${songArray[i].track}</h2>
          <h3>Album: ${songArray[i].album}</h3>
          `
          // jacob's code ^
          document.getElementById('song_list').append(song)
        }
        console.log('doesnt work')
      }
      console.log(songArray)
    

    })
    .catch(err => console.error(err))

})






