<footer class="main-footer">
    <div class="float-right d-none d-sm-block">
        <b>Version</b> <span class="text-bold" style="color: #0960AE">1.0</span>
    </div>
    <strong>Copyright <span id="dateCopyRight"></span> <a class="text-bold text-decoration-none" style="color: #0960AE">
            &copy; DAIMLER.</a></strong>
    </div>
    <!-- ./wrapper -->
    <!-- Bootstrap 5 -->
    <script src="./view/assets/bootstrap/js/bootstrap.bundle.min.js"></script>
    <!-- overlayScrollbars -->
    <script src="./view/assets/plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>
    <!-- AdminLTE App -->
    <script src="./view/assets/adminlt3/js/adminlte.min.js"></script>
    <script>
        const dateCopy = new Date()
        const formatDateCopy = moment(dateCopy).format('Y')
        $('#dateCopyRight').text(formatDateCopy)
    </script>
    <script>
        $(".modal-dialog").draggable({
            cursor: "move",
            handle: ".dragable_touch",
        })
    </script>
</footer>

</body>

</html>