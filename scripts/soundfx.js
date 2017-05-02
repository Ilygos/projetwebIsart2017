define(['howler'], function (Howler) {
    var path = './ressources/audio/'; // chemin vers le dossier contenant les sons
    /**
     * Constructeur
     */
    function SoundFX(){
        this.currentSound; // Stocke la musique actuellement en lecture
    }

    /**
     * Méthode à appeler pour créer les Howl contenant les musiques du jeu
     * Vous pouvez ajouter les assets nécessaires (ou supprimer ceux en trop)
     */
    SoundFX.prototype.initSound = function(){
        this.maintheme = new Howl({
            src: [path + 'main_theme.mp3'],
            loop: true,
            volume: 0.5
        });

        this.uiloop = new Howl({
            src: [path + 'ui_loop.mp3'],
            loop: true,
            volume: 0.8
        });
    }

    /**
     * Méthode permettant de jouer les musiques déclarées dans initSound
     * @param	pSoundName identifiant du son. String
     */
    SoundFX.prototype.playSound = function(pSoundName){
        if(this.currentSound!==undefined){this.currentSound.stop();}
        this[pSoundName].play();
        this.currentSound  = this[pSoundName];
    };

    /**
     * Méthode permettant de stopper la musique son en écoute
     */
    SoundFX.prototype.stopSound = function(){
        if(this.currentSound!==undefined){this.currentSound.stop();}
    };

    /**
     * Méthode permettant de jouer les bruitages
     * @param	pSoundName identifiant du son. String
     * @param	pSoundVolume volume du son. Number
     */
    SoundFX.prototype.playSFX = function(pSoundName, pSoundVolume){
        var params = {};
        params.src = [path + pSoundName + '.wav'];
        if(pSoundVolume) params.volume = Math.max(0, Math.min(1, pSoundVolume));
        new Howl(params).play();
    };

    // Attention, regardez return !!
    // Avec cette méthode return new SoundFX(), on renvoie l'objet et non la fonction constructeur.
    // Ainsi, on peut définir des propriétés de l'objet avec this. on peut également avoir accès au prototype
    // mais on ne pourrait pas avoir accès aux éventuelles propriétés et méthodes statiques définies dans SoundFX.methode ou SoundFX.propriete
    // Ainsi, d'une librairie à l'autre, si on a besoin d'une dépendance, comme le fichier ne sera chargé qu'une fois, il renverra cet objet et non un nouveau à chaque fois. Donc aucun souci de doublons.
    return new SoundFX();
});
