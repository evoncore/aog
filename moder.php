<?php
  session_start();
  session_set_cookie_params(604800);

  $login = strip_tags(trim($_REQUEST['login']));
  $password = strip_tags(trim($_REQUEST['password']));

  $con = mysqli_connect('localhost', 'effesel', 'hbyu1945');
  $db = mysqli_select_db($con, 'aog');

  if (!$con || !$db) {
    mysqli_error();
  }

  $admins = mysqli_query($con, " SELECT * FROM admins ");


  mysqli_close($con);

  $row = mysqli_fetch_array($admins);

  if ($login == $row['login'] && $password == $row['password']) {
    $_SESSION['user'] = $login;
  }

  if ($_GET['sign-up']) {
    session_destroy();
    unset($_SESSION['user']);
    header('Location: /');
  }

?>
<!DOCTYPE html>
<html lang="en" ng-app="moderApp">
<head>
  <meta name="author" content="Sentiurin V.">
  <meta charset="UTF-8">
  <title>Ассамблея Бога | Moder</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css">
  <link href='https://fonts.googleapis.com/css?family=Jura:400,600&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Poiret+One&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <link href='https://fonts.googleapis.com/css?family=Comfortaa:400,700&amp;subset=latin,cyrillic' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" href="bower_components/bootstrap-css/css/bootstrap.min.css">
  <link rel="stylesheet" href="public/css/style.css">
<body ng-controller="moderCtrl">
  <?php if (!$_SESSION['user']) { ?>

  <div id="moder">
    <h1>Moder</h1>
    <form action="" method="post">
      <input type="text" name="login" placeholder="Login">
      <input type="password" name="password" placeholder="Password">
      <input type="submit" value="Sign In">
    </form>
  </div>
  

  <?php } else { ?>

  <div id="moder-panel">
    <div class="container-fluid">
      <div id="pages" class="row">
        <div class="col-md-12">
          <nav>
            <ul>
              <li><a href="#/">Главная</a></li>
              <li><a href="#/blog">Блог</a></li>
              <li><a href="#/ministry">Проповеди</a></li>
              <li><a href="#/about-us">О Нас</a></li>
              <li><a href="#/contact">Контакты</a></li>
              <li><a href="#/player">Плеер</a></li>
              <li><a href="/">Сайт</a></li>
              <li><a id="sign-up" href="?sign-up=true">Выход</a></li>
            </ul>
          </nav>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <main>
            
            <div ng-view class="fade"></div>

          </main>
        </div>
      </div>
    </div>
  </div>

  <?php } ?>
  <script src="bower_components/angular/angular.min.js"></script>
  <script src="bower_components/angular-route/angular-route.min.js"></script>
  <script src="bower_components/angular-animate/angular-animate.js"></script>
  <script src="bower_components/jquery/dist/jquery.min.js"></script>
  <script src="public/js/dist/angular-moder.js"></script>
  <script src="public/js/dist/main.js"></script>
</body>
</html>