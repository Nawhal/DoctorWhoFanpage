<!DOCTYPE html>
<html lang="fr" id="csstyle">
    <head>
        <?php
        require_once 'header.php';
        ?>
    </head>
    <body>
        <?php
        require_once 'menu.php';
        ?>
</div>
    <div class="section --blue --first">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="illu center-block">
                        <h1 class="+handwritten text-center">
                            Doctor Who Fanpage
                        </h1>

                        <div class="ribbon">
                            <span>
                                Pour les fans français de Doctor Who.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8 col-md-offset-2">
                    <p class="claim text-center">D&eacute;couvrez les actualit&eacute;s Doctor Who les plus juteuses r&eacute;unies en un site !</p>
                </div>
            </div>
        </div>
    </div>
    <div class="section --dark --sm">
        <div class="container">
            <div class="row">
                <div class="infos">
                    <?php
                    for ($i = 1; $i <= 3; $i++) {
                    ?>
                    <div class="col-md-4 infos__item">
                        <div class="panel">
                            <div class="panel__heading --icon-cal">
                                <h2>Fin de la saison !</h2>
                            </div>
                            <div class="panel__body">
                                <p>L'&eacute;pisode de No&emacr;l a marqu&eacute; la fin de la saison 9. Qui sera 
                                    la/le prochain compagnon? Reverra-t-on River Song? Beaucoup de questions se pose sur la saison 10 !</p>
                                <a href="./accueil.php" class="button center-block">En savoir plus</a>
                            </div>
                        </div>
                    </div>
                    <?php
                    }
                    ?>
                </div>
            </div>
        </div>
    </div>
    <!-- END RED -->

    <?php
    require_once 'footer.php';
    ?>
    
    </body>
</html>