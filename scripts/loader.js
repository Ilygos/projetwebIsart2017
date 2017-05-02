define(["jquery", "TitleCard"], function($, TitleCard){

      Loader.prototype.display = $(`    <h1>Scan folders and preload ajax :)</h1><p>ouvrir la console de debug, voir le console log, et surtout onglet network voir les fichiers loadés, et également cliquer sur scan-folders.php dans l'onglet network, puis onglet preview ou reponse pour voir ce qui est retourné par le script php appelé en Ajax, pratique pour debuger !</p>
          <p>Sachez que vous pouvez simuler le chargement à des vitesses basses en cliquant sur la flèche à côté de no thottling dans l'onglet network toujours.</p>
          <p id="number"></p>
          <p id="percent"></p>`)

      var numberOfFilesHTML = $('#number');
      var progressHTML = $('#percent');
      var nbFiles;
      var currentNbFile = 0;

      var assetsToLoad = [];

      function scanFolders(){
          var folderURL = {urlFromPhpFile:'../ressources', pathToSubstr:'../'};

          $.ajax({
             url : './Php/scan-folders.php', // url du script à interroger
              type : 'post',
              data : folderURL,
              success : function(data){
                  console.log(JSON.parse(data));
                  assetsToLoad = JSON.parse(data);
                  nbFiles = assetsToLoad.length;
                  load();
              }
          });
      }

      function displayNumberFiles(){
          numberOfFilesHTML.text(currentNbFile + " / " + nbFiles + ", soit " + currentNbFile / nbFiles * 100 + " %");
      }

      function loadFileFinish(){
          load();
      }

      function loadFileFailed(jqxhr, textStatus, error){
          console.log("doFailed :", jqxhr.status, textStatus, error);
      }

      function loadFileProgress(pEvent){
          if(pEvent.lengthComputable) {
              progressHTML.text("fichier en cours : " + (pEvent.loaded / pEvent.total * 100) + "%");
          }
      }

      function load(){
          if(assetsToLoad.length <= 0) {
              launchGame();
              return;
          }

          currentNbFile++;
          displayNumberFiles();

          var lFile = assetsToLoad.shift();

          $.ajax({
              url : lFile,
              success : loadFileFinish,
              error : loadFileFailed,
              xhrFields : {
                  onprogress : loadFileProgress
              }
          });
      }

      Loader.prototype.init = function()
      {
        $('#loader').append(that.display);
        $(scanFolders);

      }

      function launchGame(){
          var titleCard = new TitleCard();
          $('#loader').remove();
          titleCard.init();
      }
      function Loader()
      {
          that = this;
      }
      return Loader;
});
