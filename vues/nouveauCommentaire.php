<?php
    if (!empty($erreur)) {
?>
<div class="row">
    <div class="col-md-8 col-md-offset-2">
        <ul class="errors">
                                            <li>Veuillez donner votre nom.</li>
                                            <li>Veuillez donner votre adresse mail.</li>
                                            <li>Le commentaire ne peut &ecirc;tre vide.</li>
                                    </ul>
    </div>
</div>
<?php
    }
?>

<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <form method="POST" action="" accept-charset="UTF-8" class="form">
        <input name="_token" type="hidden" value="">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" placeholder="Votre nom" name="nom" type="text">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <input class="form-control" placeholder="Votre adresse mail" name="email" type="text">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="form-group">
                        <textarea class="form-control" cols="30" rows="8" placeholder="Votre commentaire" name="commentaire"></textarea>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <input class="button --cream center-block" type="submit" value="Valider">
                </div>
            </div>
        </form>
    </div>
</div>
