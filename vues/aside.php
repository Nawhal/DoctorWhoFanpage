<aside class="section">
    <?php
    if (isset($erreurs))
        require_once 'erreurSaisie.php';
    ?>
    <h4>Connexion</h4>
    <form method="POST" action=''>
        <input placeholder="Identifiant" name="id" type="text">
        <input placeholder="Mot de passe" name="mdp" type="text">
        <button type="submit" value="Valider">Valider</button>
    </form>
    <br/><br/><br/><br/><br/>
    <h4>Liens externes</h4>
    <a href="http://www.bbc.co.uk/programmes/b006q2x0">
        Le site officiel BBC de Doctor Who
    </a>
    <a href="http://www.bbc.co.uk/programmes/articles/26Y2fJtHFZ2wWp397SHttGM/doctor-who-game-maker">
        Quelques jeux Doctor Who
    </a>
    <a href="http://tardis.wikia.com/wiki/Doctor_Who_Wiki">
        TARDIS Datacore, le Wikia anglais de Doctor Who
    </a>
    <a href="http://fr.doctorwho.wikia.com/wiki/Wiki_Doctor_Who">
        Le Wikia français de Doctor Who
    </a>
    <a href="./accueilAdmin.php">
        La partie admin du site
    </a>
</aside>