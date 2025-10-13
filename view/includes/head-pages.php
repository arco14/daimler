<?php       
    session_start();
    $userActive = $_SESSION['userActive'];
    $userToken = $_SESSION['token'];
    if (!isset($userActive) || !isset($userToken)) {
        header("Location: /admin-jumaco");
        exit(); 
    }
    include_once '../../scripts/devExpress.php';
    include_once '../../includes/buttons.php';
?>
<input id="userToken" type="hidden" value="<?php echo $userToken ?>">
<input id="userActive" type="hidden" value="<?php echo $userActive ?>">
<script>
    $.widget.bridge('uibutton', $.ui.button)
</script>
