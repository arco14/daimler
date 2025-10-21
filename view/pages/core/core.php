<?php   
        include_once '../../includes/head-pages.php'
    ?>
    <body>
        <?php include_once './modales.php'?>
        
        <div class='w-100 px-4'>
            <div id='dataGridCoreCatalogos'></div>
        </div>

        <!-- Componentes mas usados y modulo js -->
        <script src='../../components/loadAPI.js'></script>
        <script src='../../components/dataGrid.js'></script>
        <script src='../../components/textBox.js'></script>
        <script src='../../components/button.js'></script>
        <script src='../../components/numberBox.js'></script>
        <script src='../../components/lookup.js'></script>
        <script src='../../components/textArea.js'></script>
        <script src='../../components/switch.js'></script>
        <script src='../../components/dateBox.js'></script>
        <script src='../../components/selectTextBox.js'></script>
        <script src="./arrayData.js"></script>
        <script src='./core.js'></script>
        <script>
            $(".modal-dialog").draggable({
                cursor: "move",
                handle: ".dragable_touch",
            })
        </script>
    </body>
</html>