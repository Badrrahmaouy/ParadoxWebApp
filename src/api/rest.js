class Rest {
  constructor() {
    this.url = 'http://localhost:8080'
  }

  async calculate(input) {
    try {
      const request = await fetch(`${this.url}/calculate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: input,
      })
      let response = await request.text()
      console.log(response)

      if(request.status !== 200) {
        alert(response)
      }

      return response
    } catch (e) {
      console.log('Error while connecting to api: ' + e)
      alert("Please make sure API is running correctly locally")
    }
  }
}
export default Rest
