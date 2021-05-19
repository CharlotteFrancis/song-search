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
          <h4>Title: ${songArray[i].track}</h4>
          <h5>Artist: ${songArray[i].artist}</h5>
          <h5>Album: ${songArray[i].album}</h5>
          <div id = "lyrics"></div>
          <hr>
          `
          // axios.get(`https://api.happi.dev/v1/music/artists/${songArray[i].id_artist}/albums/${songArray[i].id_album}/tracks/${songArray[i].id_track}/lyrics?apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON`)
          axios.get(`https://api.happi.dev/v1/music/artists/7776/albums/217164/tracks/3419373/lyrics?apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON`) 
            .then(resp => {
              console.log('works')
              console.log(resp.data)
              let lyrics = resp.data.result.lyrics
              console.log(lyrics)
            })
            .catch(err => console.error(err))
          document.getElementById('song_list').append(song)
        }
        console.log('works')
      } else {
        for (let i = 0; i < songArray.length; i++) {
          let song = document.createElement('li')
          song.innerHTML = `
          <h4>Title: ${songArray[i].track}</h4>
          <h5>Artist: ${songArray[i].artist}</h5>
          <h5>Album: ${songArray[i].album}</h5>
          <div id = "lyrics"></div>
          <hr>
          `
          axios.get(`https://api.happi.dev/v1/music/artists/${songArray[i].id_artist}/albums/${songArray[i].id_album}/tracks/${songArray[i].id_track}/lyrics?apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON`)
          // axios.get(`https://api.happi.dev/v1/music/artists/7776/albums/217164/tracks/3419373/lyrics?apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON`) 
            .then(resp => {
              console.log('works')
              console.log(resp.data)
              let lyrics = resp.data.result[i].lyrics
              console.log(lyrics)
            })
            .catch(err => console.error(err))

          document.getElementById('song_list').append(song)
        }
        console.log('doesnt work')
      }
      console.log(songArray)
    
    })
    .catch(err => console.error(err))

})






