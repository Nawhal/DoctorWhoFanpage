<!DOCTYPE html>
<html lang="fr">
    <head>
        <?php
        require_once 'header.php';
        ?>
    </head>
    <body>
        <?php
        require_once 'menu.php';
        ?>
        <div class="presentation">
            <div class="centrer">
                <h1>
                    Doctor Who Fanpage
                </h1>

                <p class="presentation_sous-titre">
                        Pour les fans français de Doctor Who.
                </p>
                <p class="presentation_sous-sous-titre">
                    D&eacute;couvrez les actualit&eacute;s Doctor Who les plus juteuses r&eacute;unies en un site !
                </p>
            </div>
        </div>

        <div class="section articles">
            <?php
            for ($i = 1; $i <= 3; $i++) {
            ?>
                <div class="articles_element">
                    <h3 class="centrer">
                        Fin de la saison !
                    </h3>
                    <p>
                        L'&eacute;pisode de No&emacr;l a marqu&eacute; la fin de la saison 9. Qui sera 
                        la/le prochain compagnon? Reverra-t-on River Song? Beaucoup de questions se pose sur la saison 10 !
                    </p>
                        <a href="./accueil.php" class="button center-block">En savoir plus</a>
                    </p>
                </div>
            <?php
            }
            ?>
        </div>
<!--
    <div class="section --dark --sm">
        <div class="container">
            <div class="row">
                <div class="infos">
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
                </div>
            </div>
        </div>
    </div>
-->

    <?php
    require_once 'footer.php';
    ?>
    
    </body>
</html>