<html>
    <head>
        <?php
        require_once 'header.php';
        ?>
        <link rel="stylesheet" href="./actualites.css">
    </head>
    <body>
        <?php
        require_once 'menu.php';
        require_once 'asideAdmin.php';
        ?>
        
        <h2 class="centrer">
            Actualit&eacute;s
        </h2>
        
        <div class="element_Admin">
            <button type="button" value="addNews" class="bouton_Admin">
                <img src="./Images/Add.png">
                Ajouter une actualité
            </button>
        </div>
        
        <?php
        for ($j = 1; $j <=3; $j++) {
        ?>
        
        <article>
            <button type="button" value="modifNews" class="bouton_Admin">
                <img src="./Images/Edit.png">
            </button>
            <button type="button" value="suppNews" class="bouton_Admin">
                <img src="./Images/Delete.png">
            </button>
            <h3>
                Fin de la saison
            </h3>
            <p class="date">
                08/01/2016
            </p>
            <img src="./Images/hydroflax.jpg">
            <button type="button" value="addImage" class="bouton_Admin">
                <img src="./Images/Ad.png">
            </button>
            <button type="button" value="suppImage" class="bouton_Admin">
                <img src="./Images/Delete.png">
            </button>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam aliquet blandit tortor ac molestie. Aenean ultrices urna id nunc ornare varius. Mauris vel lectus ut dui consequat finibus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum faucibus lacus a augue molestie, in ultrices nibh elementum. Nam varius purus a ligula congue, at varius urna accumsan. In sed aliquam odio, sed vulputate diam. Ut ut odio porta, ornare lectus a, maximus dui. Integer at augue gravida, convallis orci nec, commodo lacus. Vivamus consectetur erat in tristique aliquet. Morbi accumsan interdum diam, eget tristique elit. Aenean nec ante arcu.
            </p><p>
            Proin ac tortor non diam sollicitudin tincidunt. Donec malesuada dignissim justo, sit amet gravida ante commodo id. Maecenas quis eleifend lorem. Etiam vitae turpis neque. Aliquam dapibus finibus pellentesque. Quisque vel nulla enim. Morbi aliquet sodales rutrum. Aenean dapibus, ligula sit amet scelerisque ornare, felis turpis auctor justo, et consequat nibh dolor sed eros. Donec tincidunt, neque nec finibus volutpat, lacus arcu blandit libero, et dictum leo sem vitae felis. Maecenas a ante libero.
            </p><p>
            Integer sit amet sagittis erat. Ut vel quam vel est condimentum sodales. Phasellus sed diam eget nisi tincidunt vulputate. In fermentum tincidunt dolor. Cras ultrices facilisis orci, nec maximus erat euismod aliquet. Pellentesque vel pellentesque velit, vitae pretium lectus. Nunc viverra, urna eu tempor elementum, est velit maximus arcu, et iaculis mi felis luctus diam. Duis ut eros bibendum, faucibus libero vitae, vehicula ipsum. Aliquam feugiat ligula a egestas rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p><p>
            Aenean ac sapien lectus. Mauris id ornare elit, sit amet venenatis leo. Maecenas pellentesque felis elit, dapibus molestie tortor consequat ut. Quisque fringilla justo dapibus, accumsan nulla sed, aliquet libero. Phasellus ac lorem eget tellus mattis gravida. Nulla venenatis sem lorem, sed egestas lorem vulputate viverra. Cras quis ligula vehicula ipsum rhoncus pretium ac sed dui. Donec interdum justo tellus, sed suscipit erat dapibus id.
            </p><p>
            Sed accumsan ante quis nisl ornare porttitor. Vestibulum viverra, sem eu volutpat molestie, massa justo cursus justo, vitae vehicula metus sapien at tellus. Nunc at tincidunt nibh. Vivamus sodales accumsan nisi, a vulputate sapien cursus a. Nam a tellus elementum sem congue porta sed ut diam. Aenean nisi elit, fermentum at aliquam vitae, pulvinar sit amet velit. Vestibulum et aliquam tellus. Nunc vel vehicula turpis, nec congue odio. Duis pulvinar posuere gravida. Vestibulum sodales tellus lacus, vitae dictum ligula auctor vitae. Ut eu massa malesuada nunc mattis tristique eu et lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed suscipit ultrices est vitae sodales. Aliquam vel dolor quis orci finibus dapibus.
            </p>
        </article>
        <a class="article_affich">
            Afficher les commentaires
        </a>
        <div class="commentaires">
            <?php
            for ($i = 1; $i <= 3; $i++) {
            ?>
            <div class="element">
                <button type="button" value="suppCommentaire" class="bouton_Admin">
                    <img src="./Images/Delete.png">
                </button>
                <h4>Nom utilisateur</h4>
                Sed accumsan ante quis nisl ornare porttitor. Vestibulum viverra, sem eu volutpat molestie, massa justo cursus justo, vitae vehicula metus sapien at tellus. Nunc at tincidunt nibh. Vivamus sodales accumsan nisi, a vulputate sapien cursus a. Nam a tellus elementum sem congue porta sed ut diam. Aenean nisi elit, fermentum at aliquam vitae, pulvinar sit amet velit. Vestibulum et aliquam tellus. Nunc vel vehicula turpis, nec congue odio. Duis pulvinar posuere gravida. Vestibulum sodales tellus lacus, vitae dictum ligula auctor vitae. Ut eu massa malesuada nunc mattis tristique eu et lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed suscipit ultrices est vitae sodales. Aliquam vel dolor quis orci finibus dapibus.
            </div>
            <?php
            }
            ?>
        </div>
        <div class="element">
            <h4>
                Ajouter un commentaire
            </h4>
            <input placeholder="Pseudo" name="pseudo" type="text">
            <br/>
            <textarea placeholder="Commentaire" name="commentaire" type="text"></textarea>
            <button type="submit" value="Valider">Valider</button>
        </div>
        <?php
        }
        ?>
        <?php
        require_once 'footer.php';
        ?>
    </body>
</html>
