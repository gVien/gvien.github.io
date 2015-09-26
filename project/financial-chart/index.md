---
layout: page
title: PROJECT
description: Project - Financial Chart
theme: green
---

<!-- App Information -->
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h1 class="header-title">FINANCIAL CHART</h1>
      <p class="lead">Financial chart lets you create <a href="https://en.wikipedia.org/wiki/Candlestick_chart" target="_blank">candlestick stock charts</a> of any stocks such as Apple's (AAPL), Microsoft's (MSFT), or Facebook's (FB) stock charts. It is not limited to these symbols, you may search for any (US) stock symbols that you are interested in. The stock charts data are pulled from Yahoo Finance API and plotted using data-driven Javascript library, <a href="http://d3js.org/" target="_blank">D3.js</a>. The chart can help technical analysts estimate the future price of a stock.
      </p>
      <!-- <p class="lead">I learned <a href="http://d3js.org/" target="_blank">D3.js</a></p> -->
      <p class="lead">See the source code at <a href="https://github.com/gVien/financial-charts-with-d3js" target="_blank">Github!</a></p>
      <p class="lead">See the full deployment at <a href="http://financial-chart.herokuapp.com/" target="_blank">Heroku</a>!</p>
    </div>

    <div class="col-md-5">
      <img class="app-img-resize" src="images/financial-chart-mac.png">
    </div>
  </div>
</div>

<hr class="project-divider">

<!-- Video Demo and Accomplishment -->
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <h3 class="header-title">DEMO</h3>
      <video width="100%" height="100%" poster="../../assets/images/demo-video.png" autoplay loop>
        <source src="images/financial-chart-screen-cast.mp4" type="video/mp4">
        Your browser does not support HTML5 video.
      </video>
    </div>

    <div class="col-md-6">
      <h3 class="header-title">ACCOMPLISHMENT</h3>
      <p class="lead">I learned <a href="http://d3js.org/" target="_blank">D3.js</a> and used it to build a candlestick chart from the ground up and incorporated this technology with Rails, jQuery, Yahoo Finance API, and AJAX within 3 days.</p>
      <p>We can search for a company name and the auto complete will help us choose the company's stock symbol.</p>
      <p>The web app can plot the candle stick chart for any number of data specified in the period box.</p>
      <p>If we enter the wrong symbol, the app will give us a warning that it is not a valid stock symbol.</p>
    </div>
  </div>
</div>

<hr class="project-divider">

<!-- Screenshot -->
<div class="container">
  <div class="row">
    <h3 class="header-title">SCREENSHOTS (click to enlarge)</h3>
    <div class="col-md-4"><a href="images/candlesticks.png" data-lightbox="screenshot"><img class="border resize" src="images/candlesticks.png" alt="Candlestick charts"></a></div>

    <div class="col-md-4"><a href="images/search-box.png" data-lightbox="screenshot"><img class="border resize" src="images/search-box.png" alt="stock search engine"></a></div>
    <div class="col-md-4"><a href="images/search-technology.png" data-lightbox="screenshot"><img class="border resize" src="images/search-technology.png" alt="Search technology"></a></div>
    <div class="col-md-4"><a href="images/search-result-algn.png" data-lightbox="screenshot"><img class="border resize" src="images/search-result-algn.png" alt="Search results for Align Technology Inc."></a></div>
    <div class="col-md-4"><a href="images/search-2charts.png" data-lightbox="screenshot"><img class="border resize" src="images/search-2charts.png" alt="Two charts"></a></div>
  </div>
</div>

<hr class="project-divider">

<!-- Technology Used -->
<section id="services" class="add-padding bg-color-light-gray">
  <div class="container">
    <h3 class="header-title">TECH USED</h3>
    <div class="row">
      <div class="col-sm-4 service-item color3 ">
        <div class="service-icon"><i class="fa fa-lightbulb-o"></i></div>
        <h3>Platform</h3>
        <p>Web browser</p>

      </div>
      <div class="col-sm-4 service-item color1">
        <div class="service-icon"><i class="fa fa-desktop "></i></div>
        <h3>Front End</h3>
        <p>Javascript, D3.js, jQuery, AJAX, HTML/CSS</p>
      </div>
      <div class="col-sm-4 service-item color2">
        <div class="service-icon"><i class="fa fa-space-shuttle"></i></div>
        <h3>Back End</h3>
        <p>Rails, PostgreSQL, Yahoo Finance API</p>
      </div>
    </div>
  </div>
</section>

<br><br><br><br>
Comments:

<div id="disqus_thread"></div>
<script type="text/javascript">
  var disqus_shortname = '{{site.disqushandler}}';

  /* * * DON'T EDIT BELOW THIS LINE * * */
  (function() {
      var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
      dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
      (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
  })();
</script>
<noscript>Please enable JavaScript to view the <a href="http://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
<a href="http://disqus.com" class="dsq-brlink">comments powered by <span class="logo-disqus">Disqus</span></a>


