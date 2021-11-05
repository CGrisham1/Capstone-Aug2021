export default (st) => `

<div class="container">
    <div style="text-align:center">
      <h1>Share Your Story</h1>
      <h3>Below is an optional form to share where you are at with your journey with sobriety, or anything else recovery or alcoholism related:</h3>
    </div>
    <div class="row">
      <div class="column">
        <img src="https://images.unsplash.com/photo-1534685785745-60a2cea0ec34?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZXhwbG9yZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" style="width:100%">
      </div>
      <div class="column">
        <form action="/">
          <label for="title">Post Title</label>
          <input type="text" id="title" placeholder="Post Title">
          <label for="story">Share Your Story!</label>
          <textarea id="subject" name="subject" placeholder="What would you like to say?" style="height:250px"></textarea>
          <input type="submit" value="Share To Stories">
        </form>
      </div>
    </div>
  </div>

`;