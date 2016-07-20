<?php session_start(); ?>
<!DOCTYPE html>
<html lang="en" ng-app="aogApp">
<head>
  <base href="/">
  <meta name="author" content="Sentiurin V.">
  <meta charset="UTF-8">
  <title>Ассамблея Бога</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
  <link href='https://fonts.googleapis.com/css?family=Jura:400,600&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Poiret+One&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Comfortaa:400,700&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="bower_components/bootstrap-css/css/bootstrap.min.css">
  <link rel="stylesheet" href="public/css/style.css">
</head>
<body ng-controller="aogAppCtrl">
  <div class="container-fluid">
    <div class="row">
      <div class="col col-md-3">
        <aside>
          <a href="#" class="item">
            <span class="shadow"></span>
            <div class="img" style="background: url('public/img/posts-image/1 (1).jpg') no-repeat center; background-size: cover" alt="post-image"></div>
          </a>
          <a href="#" class="item">
            <span class="shadow"></span>
            <div class="img" style="background: url('public/img/posts-image/1 (2).jpg') no-repeat center; background-size: cover" alt="post-image"></div>
          </a>
          <a href="#" class="item">
            <span class="shadow"></span>
            <div class="img" style="background: url('public/img/posts-image/1 (3).jpg') no-repeat center; background-size: cover" alt="post-image"></div>
          </a>
          <a href="#" class="item">
            <span class="shadow"></span>
            <div class="img" style="background: url('public/img/posts-image/1 (4).jpg') no-repeat center; background-size: cover" alt="post-image"></div>
          </a>
          <a href="#" class="item">
            <span class="shadow"></span>
            <div class="img" style="background: url('public/img/posts-image/1 (4).jpg') no-repeat center; background-size: cover" alt="post-image"></div>
          </a>
          <a href="#" class="item">
            <span class="shadow"></span>
            <div class="img" style="background: url('public/img/posts-image/1 (4).jpg') no-repeat center; background-size: cover" alt="post-image"></div>
          </a>
        </aside>
        <div class="hide-scroll"></div>
      </div>
      <div class="col col-md-9">
        <div id="logo">
          <a href="/"><b>Ассамблея Бога Одесса</b></a>
        </div>
        <main>
          
          <div ng-view class="fade ng-viewha"></div>

        </main>
      </div>
    </div>
  </div>
  <footer>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3">
          
        </div>
        <div class="col-md-9">
          <nav class="pull-right">
            <ul>
              <li><a href="/">Главная</a></li>
              <li><a href="/blog">Блог</a></li>
              <li><a href="/ministry">Проповеди</a></li>
              <li><a href="/about-us">О Нас</a></li>
              <li><a href="/contact">Контакты</a></li>
              <li><a href="/player">Плеер</a></li>
              <?php if ($_SESSION['user']) { ?>
                <li><a class="moder" href="/moder.php">Moder</a></li>
              <?php } ?>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </footer>
  <script src="bower_components/angular/angular.min.js"></script>
  <script src="bower_components/angular-route/angular-route.min.js"></script>
  <script src="bower_components/angular-animate/angular-animate.js"></script>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="public/js/moder.js"></script>
  <script src="public/js/dist/angular-app.js"></script>
</body>
</html>