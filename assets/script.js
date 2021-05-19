axios.get(`https://api.happi.dev/v1/music?q=Leaving%20on%20a%20Jet%20Plane&limit=&apikey=504db5Pqpbv1duKbtaQ1arufJJtRaPdIyHo7fbhGHMt945gUmpy7KvON&type=&lyrics=1`)
.then(res => {
  let songData = res.data
  console.log(songData)
})
.catch(err => console.error(err))