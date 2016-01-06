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
        <aside>
            <br/><br/><br/><br/>Bite.
        </aside>
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
                        <div class="articles_article">
                            <h3 class="centrer">
                                Fin de la saison !
                            </h3>
                            <p>
                                L'&eacute;pisode de No&emacr;l a marqu&eacute; la fin de la saison 9. Qui sera 
                                la/le prochain compagnon? Reverra-t-on River Song? Beaucoup de questions se pose sur la saison 10 !
                            </p>
                                <a href="./accueil.php" class="bouton-centre articles_bouton">
                                    En savoir plus
                                </a>
                        </div>
                    </div>
                <?php
                }
                ?>
            </div>

            <?php
            require_once 'footer.php';
            ?>
    </body>
</html>