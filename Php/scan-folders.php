<?php

$tab = array();

// oui, il y a bien un & devant $tab, il s'agit d'un passage par référence.
// Dans les fonctions php, on n'a pas accès directement au scope parent.

function mkmap($dir, $pathToSubtr, &$tab) {
    $folder = opendir ($dir);

    while ($file = readdir ($folder)) {
        if ($file != "." && $file != "..") {
            
            $pathfile = $dir.'/'.$file;
            
            if(filetype($pathfile) == 'dir'){
                mkmap($pathfile, $pathToSubtr, $tab);
            }
            
            else array_push($tab, str_replace($pathToSubtr,"",$pathfile));
        }
    }
    closedir ($folder);
}


// Du coup, ici on passe le tableau en paramètre, pour que la fonctione le récupère par référence
mkmap($_POST['urlFromPhpFile'], $_POST['pathToSubstr'], $tab);

// enfin on renvoie le tableau à la requête ajax.
echo json_encode($tab);
?>