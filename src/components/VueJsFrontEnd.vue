<script>
export default {
  // component options
  data() {
    return {};
  },
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
    <h5>Title description, {{ new Date().toISOString().split('T')[0] }}</h5>
    <div class="fakeimg" style="height: 200px">Image</div>
    <p>Some text..</p>
    <p>Description</p>
    <br />
    <h2>HEADING</h2>
    <h5>Title description, {{ new Date().toISOString().split('T')[0] }}</h5>
    <div class="softcard">
      <div class="calendar-bar">
        <button class="prev soft-btn">
          <i class="fas fa-chevron-left"></i>
        </button>
        <div class="current-month"></div>
        <button class="next soft-btn">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
      <div class="calendar" style="200px">
        <div class="weekdays-name">
          <div class="days-name">Sa</div>
          <div class="days-name">Su</div>
          <div class="days-name">Mo</div>
          <div class="days-name">Tu</div>
          <div class="days-name">We</div>
          <div class="days-name">Th</div>
          <div class="days-name">Fr</div>
        </div>
        <div style="color: black;" class="calendar-days"></div>
      </div>
      <div class="goto-buttons">
        <button type="button" class="btn prev-year">Prev Year</button>
        <button type="button" class="btn today">Today</button>
        <button type="button" class="btn next-year">Next Year</button>
    </div>
</div>
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

.softcard {
  width: 316px;
  height: fit-content;
  background: -webkit-linear-gradient(
    to right,
    #f7b733,
    #fc4a1a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f7b733,
    #fc4a1a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border-radius: 20px;
  box-shadow: 0px 0px 10px #000;
}

.calendar-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  padding-bottom: 15px;
  border-bottom: 19px;
}

.calendar-bar > .current-month {
  font-size: 20px;
  font-weight: bold;
  color: #ddd;
  background: #000;
  padding: 5px;
  border-radius: 10px;
}

.calendar-bar > [class$='soft-btn'] {
  width: 40px;
  aspect-ratio: 1;
  text-align: center;
  line-height: 40px;
  font-size: 14px;
  color: #000;
  background: #ddd;
  border: none;
  border-radius: 50%;
}

.weekdays-name,
.calendar-days {
  display: flex;
  flex-wrap: wrap;
  padding-inline: 18px;
}
.weekdays-name {
  padding-top: 12px;
}

.calendar-days {
  padding-bottom: 12px;
  color: black;
}

.days-name,
[class$='-day'] {
  width: 40px;
  height: 40px;
  color: black;
  text-align: center;
  line-height: 40px;
  font-weight: 500;
  font-size: 1rem;
}

.days-name {
  color: black;
  font-weight: 700;
}

.current-day {
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  font-weight: 700;
  transition: 0.5s;
  cursor: pointer;
}

.padding-day {
  color: #a5a5a5;
  user-select: none;
}

.calendar-bar > [class$='soft-btn']:hover,
.month-day:hover,
.btn:hover {
  border-radius: 5px;
  background-color: #f8f7fa;
  color: #000;
  border-radius: 15px;
  transition: 0.1s;
  cursor: pointer;
}

.calendar-bar > [class$='soft-btn']:focus,
.month-day:focus,
.btn:focus {
  border-radius: 15px;
  background-color: #000;
  color: #ddd;
}

.goto-buttons {
  border-top: solid 2px yellow;
  padding-block: 18px;
  display: flex;
  justify-content: space-evenly;
}

.btn {
  background: #eee;
  border: none;
  border-radius: 10px;
  padding: 11px 13px;
  color: #000;
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 0.9rem;
  margin-right: 1px;
  box-shadow: 0px 0px 0px #000;
}
</style>