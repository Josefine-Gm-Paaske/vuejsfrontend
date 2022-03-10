<script>

export default {
    data() {
return {}
    }
}
</script>

<template>
  <div class="header" style="background:url('https://images.unsplash.com/photo-1641890533142-71727d69491d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80'); background-position: center bottom ; background-attachment: fixed;">
    <h1>website</h1>
    <p>A website template</p>
  </div>
  <div class="navbar">
    <a href="#">Home</a>
    <a href="#">Upload Memories</a>
    <a href="#">Camera reviews</a>
    <a href="#">Book a photo session</a>
    <a href="#" class="right">Contact Details</a>
  </div>
  <div class="row">
    <div class="side">
      <h2>Headline</h2>
      <div>
      <img src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80" style="height: auto; width: 100%;">
      </div>
      <p>Description of the picture</p>
      <h3>Headline</h3>
      <p>Write here... Pictures can be added here</p>
      <div>
      <img class="center" src="https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NTA4NDQyNnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60" style="height: 90px; width: 700px; object-fit: cover;">
      </div>
      <br />
      <div>
      <img src="https://images.unsplash.com/photo-1533759413974-9e15f3b745ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" style="height: 90px; width: 700px; object-fit: cover;">
      </div>
      <br />
      <div>
      <img class="center" src="https://images.unsplash.com/photo-1600607688066-890987f18a86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style="height: 90px; width: 700px; object-fit: cover;" >
      </div>
    </div>
  </div>
  <div class="main">
    <h2>HEADING</h2>
    <h5>Title description, {{ new Date().toISOString().split('T')[0] }}</h5>
    <div>
    <img class="responsive" src="https://images.unsplash.com/photo-1495521939206-a217db9df264?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  style="height: auto; width: 100%;">
    </div>
    <p>Some text..</p>
    <p>Description</p>
    <br />
    <h2>HEADING</h2>
    <h5>Title description, {{ new Date().toISOString().split('T')[0] }}</h5>
<br>
<br>
  <div class="footer">
    <h2>Footer</h2>
  </div>
</template>

<style scoped>
/* Header/logo Title */
.header {
  padding: 80px;
  text-align: center;
  background: #1abc9c;
  color: white;
}

/* Increase the font size of the heading */
.header h1 {
  font-size: 40px;
}

.navbar {
  overflow: hidden;
  background-color: #333;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
}

/* Style the navigation bar links */
.navbar a {
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 14px 20px;
  text-decoration: none;
}

/* Right-aligned link */
.navbar a.right {
  float: right;
}

/* Change color on hover */
.navbar a:hover {
  background-color: #ddd;
  color: black;
}

/* Active/current link */
.navbar a.active {
  background-color: #666;
  color: white;
}

/* Column container */
.row {
  display: -ms-flexbox; /* IE10 */
  display: flex;
  -ms-flex-wrap: wrap; /* IE10 */
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  -ms-flex: 30%; /* IE10 */
  flex: 30%;
  background-color: #f1f1f1;
  padding: 20px;
}

/* Main column */
.main {
  -ms-flex: 70%; /* IE10 */
  flex: 70%;
  background-color: white;
  padding: 20px;
}

/* Fake image, just for this example */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
}

@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}

@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
</style>