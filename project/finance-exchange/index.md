---
layout: page
title:
description: Project - Finance Exchange
theme: green
---

<!-- App Information -->
<div class="row">
  <div class="col-md-6 col-sm-offset-1">
    <h1 class="header-title">Finance-Exchange</h1>
    <p class="lead">Finance-exchange makes it easy to connect and share investing information with traders/investors. It is a financial app that allows an investor or trader to search for any US publicly traded company. Upon entering a stock symbol (such as GOOG, AAPL, TSLA, etc.), the app will provide these important information:
      <ol class="lead">
        <li>Company's profile</li>
        <li>Headlines of the company</li>
        <li>Candlestick chart showing the historical price</li>
        <li>Stock price data table</li>
        <li>Chat Box to share information</li>
      </ol>
  </p>
    <p class="lead">See the source code at <a href="https://github.com/gVien/finance-exchange" target="_">Github!</a></p>
    <p class="lead">See the full deployment at <a href="http://finance-exchange.herokuapp.com" target="_">Heroku</a>!</p>
  </div>
  <div class="col-md-5">
    <img class="app-img-resize" src="images/finance-exchange.png">
  </div>
</div>
<hr>

<!-- Screenshot -->
<div class="row col-sm-offset-1">
  <h1 class="header-title">Screenshots</h1>
  <div class="col-md-4">The search engine for all US public companies: <img class="border resize" src="images/search-box.png"></div>
  <div class="col-md-4">Searching for a Google Inc... <img class="border resize" src="images/searching-goog.png"></div>
  <div class="col-md-4">The results of the search: <img class="border resize" src="images/finance-exchange-original.png"></div>
</div>
<hr>

<!-- Technology Used -->
<section id="services" class="add-padding bg-color-light-gray">
  <div class="container">
    <h1 class="section-title big-text">Tech Used</h1>
    <div class="row">
      <div class="col-sm-4 service-item color3 ">
        <div class="service-icon"><i class="fa fa-lightbulb-o"></i></div>
        <h3>Platform</h3>
        <p>Web browser and iOS 8</p>

      </div>
      <div class="col-sm-4 service-item color1">
        <div class="service-icon"><i class="fa fa-desktop "></i></div>
        <h3>Front End</h3>
        <p>Ionic, AngularJS, HTML5, CSS3, Javascript, jQuery </p>

      </div>
      <div class="col-sm-4 service-item color2">
        <div class="service-icon"><i class="fa fa-space-shuttle"></i></div>
        <h3>Back End</h3>
        <p>Ruby on Rails, PostgreSQL, Auth0, Google+ API, Venmo API</p>
      </div>
    </div>
  </div>
</section>

<br><br><br><br>
Comments:

<div id="disqus_thread"></div>
<script type="text/javascript">
  /* * * in case my cohort wants to know how to set up
  1. after getting a disqus account, you will be creating a "short name" (e.g. thisisyourshortname.disqus.com)
  2. put that name within the quote `...` below in the disqus_shortname variable
  3. Done! * * */
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


