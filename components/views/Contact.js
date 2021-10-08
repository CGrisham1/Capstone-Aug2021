export default () => `
<footer>
<div class="container">
    <div style="text-align:center">
      <h2>Contact Us</h2>
      <p>Please leave your feedback, or tell me how I did:</p>
    </div>
    <div class="row">
      <div class="column">
        <img src="" style="width:100%">
      </div>
      <div class="column">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input type="text" id="fname" name="firstname" placeholder="Name">
          <label for="lname">Last Name</label>
          <input type="text" id="lname" name="lastname" placeholder="Last name">
          <label for="country">Country</label>
          <select id="country" name="country">
            <option value="usa">USA</option>
          </select>
          <label for="subject">Subject</label>
          <textarea id="subject" name="subject" placeholder="What are your thoughts" style="height:170px"></textarea>
          <input type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>`;




//Extra Contact Form!!!!!
{/* <fieldset id="fs-frm-inputs">
    <label for="full-name">Full Name</label>
    <input type="text" name="name" id="full-name" placeholder="First and Last" required="">
    <label for="email-address">Email Address</label>
    <input type="email" name="_replyto" id="email-address" placeholder="Enter your email here" required="">
    <label for="message">Message</label>
    <textarea rows="5" name="message" id="message" placeholder="Enter message here" required=""></textarea>
    <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission">
  </fieldset>
  <input type="submit" value="Submit">
</form>
</footer>`; */}
