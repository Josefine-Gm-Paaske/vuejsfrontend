<script>
export default {
  // component options
};
</script>

<template>
  <div class="header">
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
      <div class="fakeimg" style="height: 200px">Image</div>
      <p>Description of the picture</p>
      <h3>Headline</h3>
      <p>Write here... Pictures can be added here</p>
      <div class="fakeimg" style="height: 60px">Image</div>
      <br />
      <div class="fakeimg" style="height: 60px">Image</div>
      <br />
      <div class="fakeimg" style="height: 60px">Image</div>
    </div>
  </div>
  <div class="main">
    <h2>HEADING</h2>
    <h5>Title description, {{new Date().toISOString().split('T')[0]}} </h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Description</p>
    <br>
    <h2>HEADING</h2>
    <h5>Title description, {{new Date().toISOString().split('T')[0]}}</h5>
    <div class="fakeimg" style="height:200px;">Image</div>
    <p>Some text..</p>
    <p>Description</p>
  </div>
</div>

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
